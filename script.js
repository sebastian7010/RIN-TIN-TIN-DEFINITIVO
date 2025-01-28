let cart = {}; // Variable global para gestionar el carrito



// Función para agregar producto al carrito
function addToCart(productId, productName, productPrice, quantity) {
    if (quantity <= 0) {
        delete cart[productId];
    } else {
        cart[productId] = { name: productName, price: productPrice, quantity };
    }
    updateCartCount();
}

function updateCartCount() {
    const cartCount = document.getElementById('cart-count'); // Asegúrate de que este elemento exista
    const totalCount = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalCount; // Actualiza el conteo en el elemento del carrito
        cartCount.style.display = totalCount > 0 ? 'flex' : 'none'; // Muestra/oculta el contador según el total
    } else {}
}

function openWhatsApp() {
    const phoneNumber = "573108853158"; // Número de WhatsApp en formato internacional (+57 para Colombia)
    const message = "Hola"; // Mensaje predeterminado
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank"); // Abre WhatsApp en una nueva pestaña
}


function scrollToCarousels() {
    const carouselsContainer = document.getElementById('carousels-container'); // Selecciona el contenedor de carruseles
    if (carouselsContainer) {
        carouselsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Desplazamiento suave hacia el contenedor
    } else {
        console.error('No se encontró el contenedor de carruseles.');
    }
}



import { categories } from './categories.js';

let products = [];
let fuse;

const searchBar = document.getElementById('search-bar'); // Barra de búsqueda
const carouselsContainer = document.getElementById('carousels-container'); // Contenedor de carruseles

// Función para cargar productos
async function loadProducts() {
    try {
        const response = await fetch('./products.json');
        if (!response.ok) {
            throw new Error(`Error al cargar los productos: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error al cargar los productos:', error);
        return [];
    }
}

// Función para animación "fly to cart"
function flyToCart(element, isAdding) {
    // Aquí puedes implementar la animación visual "fly to cart" según tus necesidades
    console.log(`Animación ${isAdding ? 'to' : 'from'} cart para:`, element);
}

// Función para renderizar productos en carruseles
function renderProducts(productsToRender) {
    carouselsContainer.innerHTML = ''; // Limpiar el contenedor principal

    // Agrupar productos por categoría
    const groupedProducts = productsToRender.reduce((acc, product) => {
        const category = categories.find(cat => cat.id === product.categoryId);
        if (!category) return acc;
        if (!acc[category.title]) acc[category.title] = [];
        acc[category.title].push(product);
        return acc;
    }, {});

    // Crear carrusel para cada categoría
    Object.entries(groupedProducts).forEach(([categoryTitle, products]) => {
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'carousel-container';

        // Título de la categoría
        const titleElement = document.createElement('h2');
        titleElement.className = 'carousel-title';
        titleElement.textContent = categoryTitle;
        carouselContainer.appendChild(titleElement);

        // Track del carrusel
        const carouselTrack = document.createElement('div');
        carouselTrack.className = 'carousel-track';

        // Dividir productos en páginas de 16
        const totalPages = Math.ceil(products.length / 16);
        for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
            const page = document.createElement('div');
            page.className = 'carousel-slide';
            page.style.display = pageIndex === 0 ? 'grid' : 'none'; // Mostrar solo la primera página

            // Agregar 16 productos por página
            const productsPage = products.slice(pageIndex * 16, (pageIndex + 1) * 16);
            productsPage.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-details">
                        <h3>${product.name}</h3>
                        <p>$${product.price.toFixed(2)}</p>
                        <div class="quantity-controls">
                            <button class="quantity-btn minus">-</button>
                            <span class="quantity">0</span>
                            <button class="quantity-btn plus">+</button>
                        </div>
                        <button class="buy-btn">Comprar</button>
                    </div>
                `;

                const minusBtn = productCard.querySelector('.minus');
                const plusBtn = productCard.querySelector('.plus');
                const quantitySpan = productCard.querySelector('.quantity');
                const buyBtn = productCard.querySelector('.buy-btn');

                // Evento para aumentar cantidad
                plusBtn.addEventListener('click', () => {
                    let quantity = parseInt(quantitySpan.textContent);
                    quantity++;
                    quantitySpan.textContent = quantity;
                    addToCart(product.id, product.name, product.price, quantity);
                    flyToCart(productCard, true); // Animación "fly to cart"
                });

                // Evento para disminuir cantidad
                minusBtn.addEventListener('click', () => {
                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantity > 0) {
                        quantity--;
                        quantitySpan.textContent = quantity;
                        addToCart(product.id, product.name, product.price, quantity);
                        flyToCart(productCard, false); // Animación inversa
                    }
                });

                // Evento para comprar
                buyBtn.addEventListener('click', () => {
                    const message = `Hola, estoy interesado en comprar el producto "${product.name}" por un valor de $${product.price.toFixed(2)}`;
                    const whatsappURL = `https://wa.me/+573108853158?text=${encodeURIComponent(message)}`;
                    window.open(whatsappURL, '_blank');
                });

                page.appendChild(productCard);
            });

            carouselTrack.appendChild(page);
        }

        const prevButton = document.createElement('button');
        prevButton.className = 'carousel-prev';
        prevButton.textContent = '<';

        const nextButton = document.createElement('button');
        nextButton.className = 'carousel-next';
        nextButton.textContent = '>';

        let currentPage = 0;

        prevButton.addEventListener('click', () => {
            if (currentPage > 0) {
                carouselTrack.children[currentPage].style.display = 'none';
                currentPage--;
                carouselTrack.children[currentPage].style.display = 'grid';
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentPage < totalPages - 1) {
                carouselTrack.children[currentPage].style.display = 'none';
                currentPage++;
                carouselTrack.children[currentPage].style.display = 'grid';
            }
        });

        carouselContainer.appendChild(prevButton);
        carouselContainer.appendChild(carouselTrack);
        carouselContainer.appendChild(nextButton);
        carouselsContainer.appendChild(carouselContainer);
    });
}

// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', async() => {
    products = await loadProducts();

    if (products.length === 0) {
        console.error('No se pudieron cargar los productos.');
        return;
    }

    console.log('Productos cargados:', products);

    fuse = new Fuse(products, {
        keys: ['name', 'description'],
        threshold: 0.3,
    });

    renderProducts(products);

    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.trim();
        if (query === '') {
            renderProducts(products);
            return;
        }

        const results = fuse.search(query);
        const filteredProducts = results.map(result => result.item);
        renderProducts(filteredProducts);
    });
});


// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', async() => {
    products = await loadProducts();

    if (products.length === 0) {
        console.error('No se pudieron cargar los productos.');
        return;
    }

    console.log('Productos cargados:', products);

    fuse = new Fuse(products, {
        keys: ['name', 'description'],
        threshold: 0.3,
    });

    renderProducts(products);

    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const query = e.target.value.trim();
            if (query === '') {
                renderProducts(products);
                return;
            }

            const results = fuse.search(query);
            const filteredProducts = results.map(result => result.item);
            renderProducts(filteredProducts);
        });
    } else {
        console.error('El elemento search-bar no existe en el DOM.');
    }
});







// Inicialización al cargar el DOM
document.addEventListener('DOMContentLoaded', async() => {
    // Cargar productos desde products.json
    products = await loadProducts();

    // Verificar si los productos se cargaron correctamente
    if (products.length === 0) {
        console.error('No se pudieron cargar los productos.');
        return;
    }

    console.log('Productos cargados:', products);

    // Inicializar Fuse.js después de cargar los productos
    fuse = new Fuse(products, {
        keys: ['name', 'description'], // Campos para buscar
        threshold: 0.3, // Ajustar tolerancia
    });

    // Renderizar los productos
    renderProducts(products);

    // Configurar eventos para la barra de búsqueda
    const searchBar = document.getElementById('search-bar');
    if (searchBar) {
        searchBar.addEventListener('input', (e) => {
            const query = e.target.value.trim(); // Elimina espacios en blanco
            if (query === '') {
                renderProducts(products); // Si no hay búsqueda, mostrar todos los productos
                return;
            }

            // Realizar búsqueda con Fuse.js
            const results = fuse.search(query);

            // Obtener solo los elementos del resultado
            const filteredProducts = results.map(result => result.item);

            // Renderizar los productos filtrados
            renderProducts(filteredProducts);
        });
    } else {
        console.error('El elemento search-bar no existe en el DOM.');
    }
});




// Evento para la barra de búsqueda con Fuse.js
searchBar.addEventListener('input', (e) => {
    const query = e.target.value.trim(); // Elimina espacios en blanco
    if (query === '') {
        renderProducts(products); // Si no hay búsqueda, mostrar todos los productos
        return;
    }

    // Realizar búsqueda difusa con Fuse.js
    const results = fuse.search(query);

    // Obtener solo los elementos del resultado
    const filteredProducts = results.map(result => result.item);

















    function flyToCart(cardElement, isAdding) {
        const clonedCard = cardElement.cloneNode(true);

        const body = document.body;


        const rect = cardElement.getBoundingClientRect();
        const cart = document.getElementById('floating-cart');
        const cartRect = cart.getBoundingClientRect();

        clonedCard.style.position = 'fixed';
        clonedCard.style.top = `${isAdding ? rect.top : cartRect.top}px`;

        clonedCard.style.left = `${isAdding ? rect.left : cartRect.left}px`;
        clonedCard.style.width = `${rect.width}px`;
        clonedCard.style.height = `${rect.height}px`;
        clonedCard.style.transition = 'transform 0.8s ease, opacity 0.8s ease';


        clonedCard.style.opacity = '1';
        clonedCard.style.zIndex = '1000';
        clonedCard.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.4)';
        body.appendChild(clonedCard);
        const translateX = isAdding ?
            (cartRect.left + cartRect.width / 2) - (rect.left + rect.width / 2) :
            rect.left - (cartRect.left + cartRect.width / 2);

        const translateY = isAdding ?
            (cartRect.top + cartRect.height / 2) - (rect.top + rect.height / 2) :
            rect.top - (cartRect.top + cartRect.height / 2);
        requestAnimationFrame(() => {
            clonedCard.style.transform = `translate(${translateX}px, ${translateY}px) scale(${isAdding ? 0.2 : 1.0})`;
            clonedCard.style.opacity = isAdding ? '-95' : '-5';

        });

        setTimeout(() => {
            if (!isAdding) {

                clonedCard.style.transform = `translate(0, 0) scale(1.0)`;
                clonedCard.style.opacity = '0';
            }

            setTimeout(() => {
                body.removeChild(clonedCard);
            }, 400)
        }, 800)
    }


    const floatingCart = document.getElementById('floating-cart');
    if (floatingCart) {
        floatingCart.addEventListener('click', sendCartToWhatsApp);
    } else {}

    function openWhatsApp() {
        const message = "Hola, estoy interesado en comprar sus productos.";
        const whatsappURL = `https://wa.me/+573108853158?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, '_blank');
    }

    function addToCart(productId, productName, productPrice, quantity) {
        if (quantity <= 0) {
            delete cart[productId];
        } else {
            cart[productId] = { name: productName, price: productPrice, quantity };
        }

        updateCartCount();

        const floatingCart = document.getElementById('floating-cart');
        if (floatingCart) {
            floatingCart.classList.add('pulse');
            setTimeout(() => {
                floatingCart.classList.remove('pulse');
            }, 1500);
        }
    }


    function sendCartToWhatsApp() {
        if (Object.keys(cart).length === 0) {
            alert('Tu carrito está vacío. Agrega productos antes de proceder.');
            return;
        }

        let message = "Hola, estoy interesado en:\n";
        let totalPrice = 0;

        Object.values(cart).forEach(item => {
            message += `- ${item.name}: ${item.quantity} unidades, Precio unitario: $${item.price.toFixed(2)}\n`;
            totalPrice += item.quantity * item.price;
        });

        message += `\nTotal a pagar: $${totalPrice.toFixed(2)}`;
        const whatsappURL = `https://wa.me/+573108853158?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, '_blank');
    }
    document.addEventListener('DOMContentLoaded', () => {});


    document.addEventListener('DOMContentLoaded', function() {
        const mainFab = document.getElementById('main-fab');
        const fabSocialLinks = document.getElementById('fab-social-links');

        mainFab.addEventListener('click', function() {
            // Agregar animación de giro
            mainFab.classList.add('rotate');

            // Quitar la clase después de la animación para que pueda repetirse
            setTimeout(() => {
                mainFab.classList.remove('rotate');
            }, 500); // Duración de la animación en ms

            // Mostrar u ocultar las redes sociales
            fabSocialLinks.classList.toggle('active');
        });
    });
})