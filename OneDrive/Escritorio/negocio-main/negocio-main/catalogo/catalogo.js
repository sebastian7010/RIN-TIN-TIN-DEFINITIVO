document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },


        { id: 1, categoryId: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 2, categoryId: 2, name: "Comida Premium", price: 80.0, description: "Comida para perros adultos", image: "https://via.placeholder.com/150" },
        { id: 2, categoryId: 2, name: "Comida Premium1", price: 80.0, description: "Comida para perros adultos", image: "https://via.placeholder.com/150" },
        { id: 3, categoryId: 3, name: "Juguete Interactivo", price: 30.0, description: "Juguete para mantener a tu perro activo", image: "https://via.placeholder.com/150" },
        // Agrega más productos aquí...
    ];

    let currentPage = 1;
    const itemsPerPage = 9;
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
    const whatsappURL = `https://wa.me/+573123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}