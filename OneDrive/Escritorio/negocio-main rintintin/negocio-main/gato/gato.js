document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 1, name: "Rascador para Gatos", price: 60.0, description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
        { id: 2, name: "Juguete Interactivo", price: 35.0, description: "Juguete con plumas y luces para entretenimiento", image: "https://via.placeholder.com/150" },
        { id: 3, name: "Arena para Gatos", price: 15.0, description: "Arena absorbente de olor para cajas de arena", image: "https://via.placeholder.com/150" },
        { id: 4, name: "Cama para Gato", price: 45.0, description: "Cama suave y cómoda para gatos", image: "https://via.placeholder.com/150" },
        { id: 5, name: "Comedero Inteligente", price: 80.0, description: "Comedero automático con temporizador", image: "https://via.placeholder.com/150" },
        { id: 6, name: "Collar para Gato", price: 20.0, description: "Collar con cascabel para gatos pequeños", image: "https://via.placeholder.com/150" },
        { id: 7, name: "Cepillo de Pelo", price: 18.0, description: "Cepillo para eliminar el pelo muerto", image: "https://via.placeholder.com/150" },
        { id: 8, name: "Puerta para Gatos", price: 50.0, description: "Puerta abatible para la libertad del gato", image: "https://via.placeholder.com/150" },
        { id: 9, name: "Transportador", price: 75.0, description: "Transportador portátil y seguro", image: "https://via.placeholder.com/150" },
        { id: 10, name: "Snacks para Gatos", price: 10.0, description: "Snacks ricos y saludables para consentir a tu gato", image: "https://via.placeholder.com/150" }
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