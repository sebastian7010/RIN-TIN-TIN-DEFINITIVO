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






document.addEventListener('DOMContentLoaded', function() {
    const categories = [
        { id: 1, title: "Accesorios para Perros" },
        { id: 2, title: "Comida premium para perros" },
        { id: 3, title: "Comida para perros" },
        { id: 4, title: "Juguetes para Perros" },
        { id: 5, title: "Alimentos para Gatos" },
        { id: 6, title: "Juguetes para Gatos" },
        { id: 7, title: "Accesorios para Aves" },
        { id: 8, title: "Accesorios para Peces" }
    ];

    const products = [
        { "id": 1, "categoryId": 1, "name": "Collar para Perro", "price": 45000, "description": "Collar ajustable para perros pequeños y medianos", "image": "https://ae01.alicdn.com/kf/Hb74e6b70d11841379b0673bbacfbbf69P/Collar-ajustable-para-perro-y-gato-Collar-duradero-de-alta-calidad-a-la-moda-peque-os.jpg" },
        { "id": 2, "categoryId": 1, "name": "Correa para Perro", "price": 25000, "description": "Correa resistente de nylon", "image": "https://via.placeholder.com/150?text=Correa" },
        { "id": 3, "categoryId": 1, "name": "Abrigo para Perro", "price": 80000, "description": "Abrigo impermeable para clima frío", "image": "https://via.placeholder.com/150?text=Abrigo" },
        { "id": 4, "categoryId": 1, "name": "Zapatos para Perro", "price": 50000, "description": "Zapatos antideslizantes para perros", "image": "https://via.placeholder.com/150?text=Zapatos" },
        { "id": 5, "categoryId": 1, "name": "Sombrero para Perro", "price": 30000, "description": "Sombrero divertido para perros", "image": "https://via.placeholder.com/150?text=Sombrero" },
        { "id": 6, "categoryId": 1, "name": "Cama para Perro", "price": 150000, "description": "Cama cómoda y resistente", "image": "https://via.placeholder.com/150?text=Cama" },
        { "id": 7, "categoryId": 1, "name": "Mochila para Perro", "price": 70000, "description": "Mochila ligera para perros", "image": "https://via.placeholder.com/150?text=Mochila" },
        { "id": 8, "categoryId": 1, "name": "Pañuelo para Perro", "price": 20000, "description": "Pañuelo decorativo", "image": "https://via.placeholder.com/150?text=Pañuelo" },
        { "id": 9, "categoryId": 1, "name": "Gafas para Perro", "price": 40000, "description": "Gafas de sol protectoras", "image": "https://via.placeholder.com/150?text=Gafas" },
        { "id": 10, "categoryId": 1, "name": "Cepillo para Perro", "price": 25000, "description": "Cepillo para el pelo", "image": "https://via.placeholder.com/150?text=Cepillo" },
        { "id": 11, "categoryId": 1, "name": "Bolsa de Transporte", "price": 80000, "description": "Bolsa para transportar perros pequeños", "image": "https://via.placeholder.com/150?text=Bolsa" },
        { "id": 12, "categoryId": 1, "name": "Plato para Perro", "price": 20000, "description": "Plato resistente de acero inoxidable", "image": "https://via.placeholder.com/150?text=Plato" },
        { "id": 13, "categoryId": 1, "name": "Juguete Mordedor", "price": 35000, "description": "Juguete resistente para morder", "image": "https://via.placeholder.com/150?text=Juguete" },
        { "id": 14, "categoryId": 1, "name": "Arnés para Perro", "price": 60000, "description": "Arnés ajustable para perros", "image": "https://via.placeholder.com/150?text=Arnés" },
        { "id": 15, "categoryId": 1, "name": "Botella de Agua Portátil", "price": 30000, "description": "Botella para hidratar a tu perro en paseos", "image": "https://via.placeholder.com/150?text=Botella" },
        { "id": 16, "categoryId": 1, "name": "Bolsas para Desechos", "price": 10000, "description": "Bolsas biodegradables para desechos", "image": "https://via.placeholder.com/150?text=Bolsas" },
        { "id": 17, "categoryId": 1, "name": "Chaleco Salvavidas", "price": 90000, "description": "Chaleco salvavidas para perros", "image": "https://via.placeholder.com/150?text=Chaleco" },
        { "id": 18, "categoryId": 1, "name": "Rascador para Perro", "price": 55000, "description": "Rascador para aliviar picazón", "image": "https://via.placeholder.com/150?text=Rascador" },
        { "id": 19, "categoryId": 1, "name": "Tazón Antideslizante", "price": 25000, "description": "Tazón que no se desliza mientras come", "image": "https://via.placeholder.com/150?text=Tazón" },
        { "id": 20, "categoryId": 1, "name": "Snacks Saludables", "price": 20000, "description": "Snacks ricos y nutritivos", "image": "https://via.placeholder.com/150?text=Snacks" },
        { "id": 21, "categoryId": 1, "name": "Kit de Limpieza", "price": 75000, "description": "Set completo para limpieza de perros", "image": "https://via.placeholder.com/150?text=Kit" },
        { "id": 22, "categoryId": 1, "name": "Camisa para Perro", "price": 40000, "description": "Camisa cómoda y moderna", "image": "https://via.placeholder.com/150?text=Camisa" },
        { "id": 23, "categoryId": 1, "name": "Cuerda para Perros", "price": 18000, "description": "Cuerda para juegos de tirón", "image": "https://via.placeholder.com/150?text=Cuerda" },
        { "id": 24, "categoryId": 1, "name": "Tienda para Perros", "price": 120000, "description": "Casa portátil para perros", "image": "https://via.placeholder.com/150?text=Tienda" },
        { "id": 25, "categoryId": 1, "name": "Juguete Interactivo", "price": 50000, "description": "Juguete para estimular la mente", "image": "https://via.placeholder.com/150?text=Interactivo" },
        { "id": 26, "categoryId": 1, "name": "Disco Volador", "price": 30000, "description": "Juguete para lanzar y recoger", "image": "https://via.placeholder.com/150?text=Disco" },
        { "id": 27, "categoryId": 1, "name": "Collar Antipulgas", "price": 55000, "description": "Collar que protege contra pulgas", "image": "https://via.placeholder.com/150?text=Antipulgas" },



        { "id": 28, "categoryId": 2, "name": "Comida Premium para Perros", "price": 85000, "description": "Alimento de alta calidad para perros exigentes", "image": "https://via.placeholder.com/150?text=Comida+Premium" },
        { "id": 29, "categoryId": 2, "name": "Snacks Saludables", "price": 45000, "description": "Bocadillos ricos y nutritivos para perros", "image": "https://via.placeholder.com/150?text=Snacks" },
        { "id": 30, "categoryId": 2, "name": "Croquetas Húmedas", "price": 75000, "description": "Comida húmeda de calidad premium", "image": "https://via.placeholder.com/150?text=Croquetas" },
        { "id": 31, "categoryId": 2, "name": "Barritas Masticables", "price": 55000, "description": "Barritas deliciosas para perros activos", "image": "https://via.placeholder.com/150?text=Barritas" },
        { "id": 32, "categoryId": 2, "name": "Comida Especial para Cachorros", "price": 80000, "description": "Nutrición completa para los más pequeños", "image": "https://via.placeholder.com/150?text=Cachorros" },
        { "id": 33, "categoryId": 2, "name": "Alimento Hipoalergénico", "price": 95000, "description": "Ideal para perros con sensibilidad alimentaria", "image": "https://via.placeholder.com/150?text=Hipoalergénico" },
        { "id": 34, "categoryId": 2, "name": "Comida Baja en Grasa", "price": 70000, "description": "Para perros que necesitan controlar su peso", "image": "https://via.placeholder.com/150?text=Baja+Grasa" },
        { "id": 35, "categoryId": 2, "name": "Comida Gourmet para Perros", "price": 100000, "description": "Una experiencia de sabor premium", "image": "https://via.placeholder.com/150?text=Gourmet" },
        { "id": 36, "categoryId": 2, "name": "Croquetas Orgánicas", "price": 87000, "description": "Ingredientes 100% orgánicos y frescos", "image": "https://via.placeholder.com/150?text=Orgánicas" },
        { "id": 37, "categoryId": 2, "name": "Comida para Perros Senior", "price": 89000, "description": "Nutrición adaptada para perros mayores", "image": "https://via.placeholder.com/150?text=Senior" },
        { "id": 38, "categoryId": 2, "name": "Comida Deshidratada", "price": 78000, "description": "Sabor y frescura en cada porción", "image": "https://via.placeholder.com/150?text=Deshidratada" },
        { "id": 39, "categoryId": 2, "name": "Croquetas de Salmón", "price": 91000, "description": "Ricas en omega-3 para un pelaje brillante", "image": "https://via.placeholder.com/150?text=Salmón" },
        { "id": 40, "categoryId": 2, "name": "Alimento para Perros Activos", "price": 83000, "description": "Energía para perros que se mueven mucho", "image": "https://via.placeholder.com/150?text=Activos" },
        { "id": 41, "categoryId": 2, "name": "Comida Económica para Perros", "price": 45000, "description": "Calidad al mejor precio", "image": "https://via.placeholder.com/150?text=Económica" },
        { "id": 42, "categoryId": 2, "name": "Snacks con Vitaminas", "price": 30000, "description": "Snacks enriquecidos para perros saludables", "image": "https://via.placeholder.com/150?text=Vitaminas" },
        { "id": 43, "categoryId": 2, "name": "Alimento en Lata", "price": 56000, "description": "Comida húmeda de sabor irresistible", "image": "https://via.placeholder.com/150?text=Lata" },
        { "id": 44, "categoryId": 2, "name": "Comida para Perros Grandes", "price": 85000, "description": "Raciones para razas grandes", "image": "https://via.placeholder.com/150?text=Grandes" },
        { "id": 45, "categoryId": 2, "name": "Alimento para Razas Pequeñas", "price": 72000, "description": "Ideal para perros pequeños", "image": "https://via.placeholder.com/150?text=Pequeñas" },
        { "id": 46, "categoryId": 2, "name": "Comida Balanceada", "price": 88000, "description": "Equilibrio perfecto de nutrientes", "image": "https://via.placeholder.com/150?text=Balanceada" },
        { "id": 47, "categoryId": 2, "name": "Croquetas de Pollo", "price": 81000, "description": "El sabor favorito de todos los perros", "image": "https://via.placeholder.com/150?text=Pollo" },
        { "id": 48, "categoryId": 2, "name": "Snack Masticable", "price": 27000, "description": "Entretenimiento y sabor", "image": "https://via.placeholder.com/150?text=Masticable" },
        { "id": 49, "categoryId": 2, "name": "Comida Vegana", "price": 90000, "description": "Ideal para dueños y perros veganos", "image": "https://via.placeholder.com/150?text=Vegana" },
        { "id": 50, "categoryId": 2, "name": "Barritas Orgánicas", "price": 39000, "description": "Barras saludables y deliciosas", "image": "https://via.placeholder.com/150?text=Orgánicas" },
        { "id": 51, "categoryId": 2, "name": "Bolsa Familiar de Comida", "price": 105000, "description": "Rendimiento para toda la familia canina", "image": "https://via.placeholder.com/150?text=Familiar" }
    ];







    const searchBar = document.getElementById('search-bar');
    const carouselsContainer = document.getElementById('carousels-container');

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

            // Dividir productos en páginas de 12
            const totalPages = Math.ceil(products.length / 16);
            for (let pageIndex = 0; pageIndex < totalPages; pageIndex++) {
                const page = document.createElement('div');
                page.className = 'carousel-slide';
                page.style.display = pageIndex === 0 ? 'grid' : 'none'; // Solo mostrar la primera página

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

                    // Botones de cantidad
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

                        // Animación "fly to cart"
                        flyToCart(productCard, true);
                    });

                    // Evento para disminuir cantidad
                    minusBtn.addEventListener('click', () => {
                        let quantity = parseInt(quantitySpan.textContent);
                        if (quantity > 0) {
                            quantity--;
                            quantitySpan.textContent = quantity;
                            addToCart(product.id, product.name, product.price, quantity);

                            // Animación inversa "fly from cart"
                            flyToCart(productCard, false);
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

            // Botones de navegación
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

    // Evento para la barra de búsqueda
    searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filteredProducts = products.filter(
            (product) =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
        renderProducts(filteredProducts);
    });

    // Renderizar productos al cargar
    renderProducts(products);













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
})