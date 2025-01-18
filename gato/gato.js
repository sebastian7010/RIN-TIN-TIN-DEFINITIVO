// Definir productos
const products = [
    { id: 1, name: "Rascador para Gatos", price: 60.0, category: "Accesorios para Gatos", description: "Rascador alto para afilar sus garras", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Juguete Interactivo", price: 35.0, category: "Juguetes para Gatos", description: "Juguete con plumas y luces para entretenimiento", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Arena para Gatos", price: 15.0, category: "Comida para Gatos", description: "Arena absorbente de olor para cajas de arena", image: "https://th.bing.com/th/id/OIP.Dzem0ifdb2dIQiL5RhwLagHaHa?rs=1&pid=ImgDetMain" },
    { id: 4, name: "Cama para Gatos", price: 45.0, category: "Accesorios para Gatos", description: "Cama suave y cómoda para gatos", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Comedero Inteligente", price: 80.0, category: "Accesorios para Gatos", description: "Comedero automático con temporizador", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Collar para Gatos", price: 20.0, category: "Accesorios para Gatos", description: "Collar con cascabel para gatos pequeños", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Cepillo de Pelo", price: 18.0, category: "Accesorios para Gatos", description: "Cepillo para eliminar el pelo muerto", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Puerta para Gatos", price: 50.0, category: "Accesorios para Gatos", description: "Puerta abatible para la libertad del gato", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Transportador", price: 75.0, category: "Accesorios para Gatos", description: "Transportador portátil y seguro", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Snacks para Gatos", price: 10.0, category: "Comida para Gatos", description: "Snacks ricos y saludables para consentir a tu gato", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Juguete de Peluche", price: 25.0, category: "Juguetes para Gatos", description: "Peluche suave para jugar", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Láser para Gatos", price: 15.0, category: "Juguetes para Gatos", description: "Láser interactivo para ejercicio y diversión", image: "https://via.placeholder.com/150" },
    { id: 13, name: "Comida Orgánica para Gatos", price: 25.0, category: "Comida Premium para Gatos", description: "Alimento orgánico de alta calidad", image: "https://via.placeholder.com/150" },
    { id: 14, name: "Snacks de Salmón", price: 20.0, category: "Comida Premium para Gatos", description: "Snacks ricos en omega-3", image: "https://via.placeholder.com/150" },
    { id: 15, name: "Juguete con Plumas", price: 12.0, category: "Juguetes para Gatos", description: "Juguete con plumas para estimulación", image: "https://via.placeholder.com/150" }
];

// Función para mostrar productos
function displayProducts(productsToDisplay) {
    const productContainer = document.getElementById('product-container');

    if (!productContainer) {
        console.error("No se encontró el contenedor de productos.");
        return;
    }

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

// Función para manejar clic en "Comprar"
function handleBuyClick(productName, productPrice) {
    const message = `Hola, estoy interesado en comprar el producto "${productName}" por un valor de $${productPrice.toFixed(2)}.`;
    const whatsappURL = `https://wa.me/3108853158?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
}

// Función para filtrar productos por categoría
function filterCategory(category) {
    const filteredProducts = products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

// Mostrar todos los productos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);

    // Implementar búsqueda
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', () => {
        const query = searchBar.value.toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts);
    });
});