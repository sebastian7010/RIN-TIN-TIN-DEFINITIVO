document.addEventListener('DOMContentLoaded', function() {
    const categories = [
        { id: 1, title: "Accesorios para Perros" },
        { id: 2, title: "comida premiun para perros" },
        { id: 3, title: "comida para perros" },
        { id: 4, title: "Juguetes para Perros" },
        { id: 5, title: "Alimentos para Gatos" },
        { id: 6, title: "Juguetes para Gatos" },
        { id: 7, title: "Accesorios para Aves" },
        { id: 8, title: "Accesorios para Peces" }
    ];

    const products = [
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.000, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 2, categoryId: 1, name: "Correa para Perro", price: 24.99, description: "Correa resistente de nylon", image: "https://via.placeholder.com/150" },
        { id: 3, categoryId: 1, name: "Arnés Reflectante", price: 45.0, description: "Arnés con bandas reflectantes para mayor seguridad", image: "https://via.placeholder.com/150" },
        { id: 4, categoryId: 1, name: "Juguete de Cuerda", price: 15.0, description: "Juguete resistente ideal para masticar", image: "https://via.placeholder.com/150" },
        { id: 5, categoryId: 1, name: "JUGETE PARA PERRO", price: 60.0, description: "OSITO", image: "https://m.media-amazon.com/images/I/61IdFLlHa9L._AC_SL1500_.jpg" },
        { id: 6, categoryId: 1, name: "Comedero Antideslizante", price: 20.0, description: "Comedero con base antideslizante", image: "https://via.placeholder.com/150" },
        { id: 7, categoryId: 1, name: "Bebedero Portátil", price: 18.0, description: "Botella portátil para agua", image: "https://via.placeholder.com/150" },
        { id: 8, categoryId: 1, name: "Cepillo para Pelo", price: 12.0, description: "Cepillo para desenredar el pelo", image: "https://via.placeholder.com/150" },
        { id: 9, categoryId: 1, name: "Ropa para Perro", price: 40.0, description: "Jersey cálido para invierno", image: "https://via.placeholder.com/150" },
        { id: 10, categoryId: 1, name: "Pelota para Masticar", price: 10.0, description: "Pelota resistente para masticar", image: "https://via.placeholder.com/150" },
        { id: 11, categoryId: 1, name: "Collar Antipulgas", price: 30.0, description: "Collar antipulgas con protección de 6 meses", image: "https://via.placeholder.com/150" },
        { id: 12, categoryId: 1, name: "Dispensador de Bolsas", price: 8.0, description: "Dispensador de bolsas para desechos", image: "https://via.placeholder.com/150" },
        { id: 13, categoryId: 1, name: "Cortauñas", price: 15.0, description: "Cortauñas seguro y fácil de usar", image: "https://via.placeholder.com/150" },
        { id: 14, categoryId: 1, name: "Mochila para Perros", price: 50.0, description: "Mochila ajustable para perros", image: "https://via.placeholder.com/150" },
        { id: 15, categoryId: 1, name: "Protector de Asientos", price: 70.0, description: "Protector impermeable para asientos de coche", image: "https://via.placeholder.com/150" },
        { id: 16, categoryId: 1, name: "Puerta para Mascotas", price: 90.0, description: "Puerta abatible para perros pequeños", image: "https://via.placeholder.com/150" },
        { id: 17, categoryId: 1, name: "Plato Elevado", price: 35.0, description: "Plato elevado para mayor comodidad", image: "https://via.placeholder.com/150" },
        { id: 18, categoryId: 1, name: "Chaleco Salvavidas", price: 55.0, description: "Chaleco salvavidas para actividades acuáticas", image: "https://via.placeholder.com/150" },
        { id: 19, categoryId: 1, name: "Mordedor de Caucho", price: 20.0, description: "Mordedor de caucho duradero", image: "https://via.placeholder.com/150" },
        { id: 20, categoryId: 1, name: "Bandana para Perro", price: 10.0, description: "Bandana de tela para perros", image: "https://via.placeholder.com/150" },
        { id: 21, categoryId: 1, name: "Juego de Pelotas", price: 25.0, description: "Set de pelotas para jugar", image: "https://via.placeholder.com/150" },
        { id: 22, categoryId: 1, name: "Guantes de Limpieza", price: 15.0, description: "Guantes para eliminar el pelo suelto", image: "https://via.placeholder.com/150" },
        { id: 23, categoryId: 1, name: "Kit de Higiene Dental", price: 18.0, description: "Cepillo y pasta dental para perros", image: "https://via.placeholder.com/150" },
        { id: 24, categoryId: 1, name: "Bolsa de Transporte", price: 80.0, description: "Bolsa transpirable para transporte", image: "https://via.placeholder.com/150" },
        { id: 25, categoryId: 1, name: "Cama Ortopédica", price: 120.0, description: "Cama ortopédica para perros mayores", image: "https://via.placeholder.com/150" },
        { id: 26, categoryId: 1, name: "Arnés para Autos", price: 40.0, description: "Arnés seguro para autos", image: "https://via.placeholder.com/150" },
        { id: 27, categoryId: 1, name: "Túnel de Juego", price: 60.0, description: "Túnel de juego para perros activos", image: "https://via.placeholder.com/150" },
        { id: 28, categoryId: 1, name: "Juguete Interactivo", price: 35.0, description: "Juguete interactivo para entrenamiento", image: "https://via.placeholder.com/150" },
        { id: 29, categoryId: 1, name: "Collar de Cuero", price: 50.0, description: "Collar de cuero genuino", image: "https://via.placeholder.com/150" },
        { id: 30, categoryId: 1, name: "Bolso de Mano para Mascotas", price: 65.0, description: "Bolso elegante para transportar perros", image: "https://via.placeholder.com/150" },



        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 2, categoryId: 2, name: "COMIDSA PERRO PLUS", price: 2499, description: "COMIDA DE LA MEJOR CALIDAD", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBBtl75bWxJgtdeqDBPVgpVQ_veCdjEsLXlYYUAtZcGPRNpDoe95s8CqoTlTaygqIr1ZE" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 2, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },

        { id: 3, categoryId: 2, name: "Arnés Reflectante", price: 45.0, description: "Arnés con bandas reflectantes para mayor seguridad", image: "https://via.placeholder.com/150" },


        { id: 1, categoryId: 3, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },

        { id: 1, categoryId: 4, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },

        { id: 1, categoryId: 5, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },

        { id: 1, categoryId: 6, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },

        { id: 1, categoryId: 7, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },

        { id: 1, categoryId: 8, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },

        { id: 1, categoryId: 9, name: "Comida perro", price: 80000, description: "Comida basbbsdbsbds y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
    ];



    let cart = {}; // Carrito

    // Actualizar la cantidad en el ícono del carrito
    function updateCartCount() {
        const cartCount = document.getElementById('cart-count');
        const totalCount = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);
        if (totalCount > 0) {
            cartCount.textContent = totalCount;
            cartCount.style.display = 'flex';
        } else {
            cartCount.style.display = 'none';
        }
    }

    // Agregar producto al carrito
    function addToCart(productId, productName, productPrice, quantity) {
        if (quantity <= 0) {
            delete cart[productId];
        } else {
            cart[productId] = { name: productName, price: productPrice, quantity };
        }
        updateCartCount();
    }

    // Enviar carrito completo a WhatsApp
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
        const whatsappURL = `https://wa.me/+573123456789?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    }

    // Función para manejar el clic en el botón "Comprar" de una tarjeta
    function handleSingleBuyClick(productId, productName, productPrice) {
        const message = `Hola, estoy interesado en comprar el producto "${productName}" por un valor de $${productPrice.toFixed(2)}`;
        const whatsappURL = `https://wa.me/+573123456789?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    }

    // Crear carrusel dinámico
    function createCarousel(category) {
        const carouselsContainer = document.getElementById('carousels-container');
        const carouselContainer = document.createElement('div');
        carouselContainer.className = 'carousel-container';
        carouselContainer.innerHTML = `
            <h2 class="carousel-title">${category.title}</h2>
            <div class="product-grid" id="productGrid-${category.id}"></div>
            <button class="nav-btn prev-btn" id="prevBtn-${category.id}">&lt;</button>
            <button class="nav-btn next-btn" id="nextBtn-${category.id}">&gt;</button>
        `;
        carouselsContainer.appendChild(carouselContainer);

        const productGrid = carouselContainer.querySelector(`#productGrid-${category.id}`);
        const prevBtn = carouselContainer.querySelector(`#prevBtn-${category.id}`);
        const nextBtn = carouselContainer.querySelector(`#nextBtn-${category.id}`);
        const categoryProducts = products.filter(product => product.categoryId === category.id);

        let currentStartIndex = 0;
        const itemsPerPage = 12;

        function renderProducts() {
            productGrid.innerHTML = '';
            const productsToShow = categoryProducts.slice(currentStartIndex, currentStartIndex + itemsPerPage);
            productsToShow.forEach(product => {
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

                minusBtn.addEventListener('click', () => {
                    let quantity = parseInt(quantitySpan.textContent);
                    if (quantity > 0) {
                        quantity -= 1;
                        quantitySpan.textContent = quantity;
                        addToCart(product.id, product.name, product.price, quantity);

                        // Animación inversa con opacidad difuminada
                        flyToCartAnimation(productCard, false);
                    }
                });

                plusBtn.addEventListener('click', () => {
                    let quantity = parseInt(quantitySpan.textContent);
                    quantity += 1;
                    quantitySpan.textContent = quantity;
                    addToCart(product.id, product.name, product.price, quantity);

                    // Animación Fly-to-Cart
                    flyToCartAnimation(productCard, true);
                });







                buyBtn.addEventListener('click', () => {
                    handleSingleBuyClick(product.id, product.name, product.price);
                });

                productGrid.appendChild(productCard);


                productGrid.appendChild(productCard);
            });
        }

        prevBtn.addEventListener('click', () => {
            currentStartIndex = Math.max(0, currentStartIndex - itemsPerPage);
            renderProducts();
        });

        nextBtn.addEventListener('click', () => {
            currentStartIndex = Math.min(currentStartIndex + itemsPerPage, categoryProducts.length - itemsPerPage);
            renderProducts();
        });

        renderProducts();
    }

    // Crear carruseles dinámicamente
    categories.forEach(createCarousel);

    // Agregar evento de clic al carrito flotante
    const floatingCart = document.getElementById('floating-cart');
    if (floatingCart) {
        floatingCart.addEventListener('click', sendCartToWhatsApp);
    } else {
        console.error('El elemento con ID "floating-cart" no existe en el DOM.');
    }
});

// Función para abrir WhatsApp con mensaje predeterminado
function openWhatsApp() {
    const message = "Hola, estoy interesado en comprar sus productos.";
    const whatsappURL = `https://wa.me/+573123456789?text=${encodeURIComponent(message)}`; // Reemplaza con tu número de WhatsApp
    window.open(whatsappURL, '_blank');
}

// Función para hacer scroll hacia el carrusel
function scrollToCarousels() {
    const carouselsContainer = document.getElementById('carousels-container');
    if (carouselsContainer) {
        carouselsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.error('El contenedor de carruseles no existe.');
    }
}

function addToCart(productId, productName, productPrice, quantity) {
    if (quantity <= 0) {
        delete cart[productId];
    } else {
        cart[productId] = { name: productName, price: productPrice, quantity };
    }

    updateCartCount();

    // Añadir la animación de pulso al carrito
    const floatingCart = document.getElementById('floating-cart');
    if (floatingCart) {
        floatingCart.classList.add('pulse');
        setTimeout(() => {
            floatingCart.classList.remove('pulse');
        }, 1500); // Duración de la animación
    }
}


function flyToCartAnimation(cardElement, isAdding) {
    const clonedCard = cardElement.cloneNode(true);
    const body = document.body;

    // Obtener las dimensiones y posiciones del elemento y el carrito
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
    clonedCard.style.borderRadius = '8px';
    clonedCard.style.boxShadow = '0px 4px 10px rgba(0, 0, 0, 0.2)';

    body.appendChild(clonedCard);

    // Calcular la dirección de la animación
    const translateX = isAdding ?
        cartRect.left + cartRect.width / 2 - (rect.left + rect.width / 2) :
        rect.left - (cartRect.left + cartRect.width / 2);
    const translateY = isAdding ?
        cartRect.top + cartRect.height / 2 - (rect.top + rect.height / 2) :
        rect.top - (cartRect.top + cartRect.height / 2);

    // Animar el clon
    requestAnimationFrame(() => {
        clonedCard.style.transform = `translate(${translateX}px, ${translateY}px) scale(${isAdding ? 0.2 : 1.0})`;
        clonedCard.style.opacity = isAdding ? '0.5' : '0'; // Opacidad más baja en ambos casos
    });

    // Ajustar la eliminación del clon
    setTimeout(() => {
        if (!isAdding) {
            // Si regresa, asegura que coincida con la posición original antes de desaparecer
            clonedCard.style.transform = `translate(0, 0) scale(1.0)`;
            clonedCard.style.opacity = '0';
        }
        setTimeout(() => {
            body.removeChild(clonedCard);
        }, 400); // Tiempo para desaparecer
    }, 800);
}




document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');
    const newsletterForm = document.getElementById('newsletter-form');

    // Mostrar/ocultar el botón "Volver arriba"
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    // Funcionalidad del botón "Volver arriba"
    backToTopButton.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Manejar la suscripción al newsletter
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        // Aquí puedes agregar la lógica para manejar la suscripción
        // Por ejemplo, enviar el email a tu servidor
        console.log('Email suscrito:', email);
        alert('¡Gracias por suscribirte a nuestro newsletter!');
        this.reset();
    });
});