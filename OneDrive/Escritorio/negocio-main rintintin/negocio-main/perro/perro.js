document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/132635690_01/w=800,h=800,fit=pad" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "jugete", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "jugete perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Collar para Perro", price: 45.0, description: "Collar ajustable para perros pequeños y medianos", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Correa para Perro", price: 24.99, description: "Correa resistente de nylon", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Juguete de Cuerda", price: 15.0, description: "Juguete resistente ideal para masticar", image: "https://via.placeholder.com/150" }
    ];

    const productContainer = document.getElementById('product-container');
    const searchBar = document.getElementById('search-bar');

    // Función para mostrar productos
    function displayProducts(productsToDisplay) {
        productContainer.innerHTML = ''; // Limpia el contenedor
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-details">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="buy-btn" onclick="handleBuyClick('${product.name}', ${product.price})">Comprar</button>
                </div>
            `;
            productContainer.appendChild(productCard);
        });
    }

    // Mostrar todos los productos al cargar la página
    displayProducts(products);

    // Evento de búsqueda
    searchBar.addEventListener('input', function() {
        const searchText = searchBar.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchText) ||
            product.description.toLowerCase().includes(searchText)
        );
        displayProducts(filteredProducts);
    });
});

// Función para manejar el clic en "Comprar"
function handleBuyClick(productName, productPrice) {
    const message = `Hola, estoy interesado en comprar el producto "${productName}" por un valor de $${productPrice.toFixed(2)}.`;
    const whatsappURL = `https://wa.me/3108853158?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

function filterCategory(category) {
    const filteredProducts = products.filter(product =>
        product.description.toLowerCase().includes(category.toLowerCase())
    );
    displayProducts(filteredProducts);
}