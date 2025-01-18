document.addEventListener('DOMContentLoaded', function() {
    const products = [
        // CategoryId: 1 - Accesorios para Perros
        { id: 1, categoryId: 1, name: "Collar Reflectante", price: 30.0, description: "Collar para mayor visibilidad en la noche", image: "https://via.placeholder.com/150" },
        { id: 2, categoryId: 1, name: "Arnés Ajustable", price: 40.0, description: "Arnés cómodo y seguro", image: "https://via.placeholder.com/150" },
        { id: 3, categoryId: 1, name: "Correa Extensible", price: 25.0, description: "Correa con sistema extensible para mayor alcance", image: "https://via.placeholder.com/150" },
        { id: 4, categoryId: 1, name: "Cama Ortopédica", price: 70.0, description: "Cama cómoda para el descanso del perro", image: "https://via.placeholder.com/150" },
        { id: 5, categoryId: 1, name: "Plato Antideslizante", price: 15.0, description: "Plato que evita derrames de comida", image: "https://via.placeholder.com/150" },
        { id: 6, categoryId: 1, name: "Botella de Agua Portátil", price: 20.0, description: "Botella portátil para hidratar a tu perro", image: "https://via.placeholder.com/150" },
        { id: 7, categoryId: 1, name: "Cortaúñas", price: 10.0, description: "Herramienta para mantener las uñas del perro cortas", image: "https://via.placeholder.com/150" },
        { id: 8, categoryId: 1, name: "Bolsa de Transporte", price: 50.0, description: "Bolsa cómoda para transportar perros pequeños", image: "https://via.placeholder.com/150" },
        { id: 9, categoryId: 1, name: "Abrigo Impermeable", price: 35.0, description: "Abrigo para proteger del frío y la lluvia", image: "https://via.placeholder.com/150" },
        { id: 10, categoryId: 1, name: "Cepillo para Pelo", price: 12.0, description: "Cepillo para eliminar el pelo suelto", image: "https://via.placeholder.com/150" },

        // CategoryId: 2 - Comida Premium para Perros
        { id: 11, categoryId: 2, name: "Croquetas de Salmón", price: 45.0, description: "Alimento rico en omega 3 para un pelaje brillante", image: "https://via.placeholder.com/150" },
        { id: 12, categoryId: 2, name: "Alimento Hipoalergénico", price: 60.0, description: "Ideal para perros con alergias alimentarias", image: "https://via.placeholder.com/150" },
        { id: 13, categoryId: 2, name: "Comida Orgánica", price: 55.0, description: "Alimento orgánico sin aditivos", image: "https://via.placeholder.com/150" },
        { id: 14, categoryId: 2, name: "Snacks Naturales", price: 20.0, description: "Snacks saludables y ricos en nutrientes", image: "https://via.placeholder.com/150" },
        { id: 15, categoryId: 2, name: "Comida para Cachorros", price: 50.0, description: "Alimento especializado para cachorros en crecimiento", image: "https://via.placeholder.com/150" },
        { id: 16, categoryId: 2, name: "Comida para Perros Senior", price: 45.0, description: "Nutrición balanceada para perros mayores", image: "https://via.placeholder.com/150" },
        { id: 17, categoryId: 2, name: "Croquetas de Pollo", price: 40.0, description: "Croquetas con sabor a pollo", image: "https://via.placeholder.com/150" },
        { id: 18, categoryId: 2, name: "Croquetas sin Grano", price: 65.0, description: "Alimento ideal para perros sensibles", image: "https://via.placeholder.com/150" },
        { id: 19, categoryId: 2, name: "Barritas Masticables", price: 15.0, description: "Barritas enriquecidas con vitaminas", image: "https://via.placeholder.com/150" },
        { id: 20, categoryId: 2, name: "Comida Económica", price: 30.0, description: "Alimento de calidad al mejor precio", image: "https://via.placeholder.com/150" },

        // CategoryId: 3 - Juguetes para Perros
        { id: 21, categoryId: 3, name: "Pelota de Goma", price: 10.0, description: "Pelota resistente ideal para juegos de lanzar", image: "https://via.placeholder.com/150" },
        { id: 22, categoryId: 3, name: "Juguete Mordedor", price: 12.0, description: "Juguete ideal para la dentición", image: "https://via.placeholder.com/150" },
        { id: 23, categoryId: 3, name: "Disco Volador", price: 15.0, description: "Disco para juegos al aire libre", image: "https://via.placeholder.com/150" },
        { id: 24, categoryId: 3, name: "Juguete de Peluche", price: 18.0, description: "Peluche suave para juegos y compañía", image: "https://via.placeholder.com/150" },
        { id: 25, categoryId: 3, name: "Juguete de Cuerda", price: 8.0, description: "Cuerda ideal para juegos de tirar y masticar", image: "https://via.placeholder.com/150" },
        { id: 26, categoryId: 3, name: "Ratón de Juguete", price: 5.0, description: "Juguete pequeño con sonido para juegos", image: "https://via.placeholder.com/150" },
        { id: 27, categoryId: 3, name: "Juguete Interactivo con Luces", price: 25.0, description: "Juguete que estimula la actividad física", image: "https://via.placeholder.com/150" },
        { id: 28, categoryId: 3, name: "Láser para Perros", price: 20.0, description: "Láser para juegos y ejercicio", image: "https://via.placeholder.com/150" },
        { id: 29, categoryId: 3, name: "Hueso de Goma", price: 12.0, description: "Hueso resistente ideal para masticar", image: "https://via.placeholder.com/150" },
        { id: 30, categoryId: 3, name: "Juguete Kong", price: 35.0, description: "Juguete rellenable para mantener a tu perro ocupado", image: "https://via.placeholder.com/150" }
    ];


    let currentPage = 1;
    const itemsPerPage = 16;
    let filteredProducts = [...products];

    // Elementos del DOM
    const productGrid = document.querySelector('.product-grid');
    const searchInput = document.getElementById('search-input');
    const categorySelect = document.getElementById('category-select');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const currentPageDisplay = document.getElementById('current-page');

    // Renderizar productos
    function renderProducts(page = 1) {
        productGrid.innerHTML = '';
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const productsToShow = filteredProducts.slice(start, end);

        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <p>${product.description}</p>
                    <button class="buy-btn" onclick="handleSingleBuyClick(${product.id}, '${product.name}', ${product.price})">Comprar</button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        currentPageDisplay.textContent = page;
    }

    // Filtrar productos por categoría
    function filterByCategory(categoryId) {
        if (categoryId === 'all') {
            filteredProducts = [...products];
        } else {
            filteredProducts = products.filter(product => product.categoryId === parseInt(categoryId));
        }
        currentPage = 1;
        renderProducts(currentPage);
    }

    // Buscar productos por nombre o descripción
    function searchProducts(query) {
        const lowerQuery = query.toLowerCase();
        filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(lowerQuery) || product.description.toLowerCase().includes(lowerQuery)
        );
        currentPage = 1;
        renderProducts(currentPage);
    }

    // Manejar la paginación
    function handlePagination(direction) {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

        if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        } else if (direction === 'next' && currentPage < totalPages) {
            currentPage++;
        }

        // Actualizar el estado de los botones de paginación
        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;

        renderProducts(currentPage);
    }

    // Eventos
    categorySelect.addEventListener('change', e => filterByCategory(e.target.value));
    searchInput.addEventListener('input', e => searchProducts(e.target.value));
    prevButton.addEventListener('click', () => handlePagination('prev'));
    nextButton.addEventListener('click', () => handlePagination('next'));

    // Inicialización
    renderProducts(currentPage);
});

// Función para manejar clic en el botón de comprar
function handleSingleBuyClick(productId, productName, productPrice) {
    const message = `Hola, estoy interesado en comprar el producto "${productName}" por un valor de $${productPrice.toFixed(2)}`;
    const whatsappURL = `https://wa.me/+573108853158?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}