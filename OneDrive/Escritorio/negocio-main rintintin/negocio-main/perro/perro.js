// Define products de forma global
const products = [
    { id: 1, name: "Collar para Perro", price: 45.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Correa para Perro", price: 24.99, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Cama para Perro", price: 60.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Arnés Ajustable", price: 35.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Abrigo Impermeable", price: 70.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 6, name: "Plato Antideslizante", price: 15.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 7, name: "Botella de Agua Portátil", price: 25.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 8, name: "Cepillo para Pelo", price: 18.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 9, name: "Bolsa de Transporte", price: 80.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 10, name: "Cortaúñas para Perros", price: 12.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 11, name: "Juguete Mordedor", price: 20.0, category: "Juguetes para Perros", image: "https://via.placeholder.com/150" },
    { id: 12, name: "Pelota de Goma", price: 10.0, category: "Juguetes para Perros", image: "https://via.placeholder.com/150" },
    { id: 13, name: "Disco Volador", price: 15.0, category: "Juguetes para Perros", image: "https://via.placeholder.com/150" },
    { id: 14, name: "Cuerda para Morder", price: 12.0, category: "Juguetes para Perros", image: "https://via.placeholder.com/150" },
    { id: 15, name: "Juguete de Peluche", price: 18.0, category: "Juguetes para Perros", image: "https://via.placeholder.com/150" },
    { id: 16, name: "Comida Premium para Perros", price: 85.0, category: "Comida Premium para Perros", image: "https://via.placeholder.com/150" },
    { id: 17, name: "Croquetas Orgánicas", price: 90.0, category: "Comida Premium para Perros", image: "https://via.placeholder.com/150" },
    { id: 18, name: "Alimento Hipoalergénico", price: 95.0, category: "Comida Premium para Perros", image: "https://via.placeholder.com/150" },
    { id: 19, name: "Snacks Saludables", price: 25.0, category: "Comida Premium para Perros", image: "https://via.placeholder.com/150" },
    { id: 20, name: "Alimento Bajo en Grasa", price: 70.0, category: "Comida Premium para Perros", image: "https://via.placeholder.com/150" },
    { id: 21, name: "Croquetas Regulares", price: 50.0, category: "Comida para Perros", image: "https://via.placeholder.com/150" },
    { id: 22, name: "Lata de Comida", price: 40.0, category: "Comida para Perros", image: "https://via.placeholder.com/150" },
    { id: 23, name: "Alimento Económico", price: 30.0, category: "Comida para Perros", image: "https://via.placeholder.com/150" },
    { id: 24, name: "Alimento Balanceado", price: 60.0, category: "Comida para Perros", image: "https://via.placeholder.com/150" },
    { id: 25, name: "Snacks Masticables", price: 20.0, category: "Comida para Perros", image: "https://via.placeholder.com/150" },
    { id: 26, name: "Cama Ortopédica", price: 100.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 27, name: "Rascador para Perros", price: 45.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" },
    { id: 28, name: "Juguete Interactivo", price: 55.0, category: "Juguetes para Perros", image: "https://via.placeholder.com/150" },
    { id: 29, name: "Snacks Orgánicos", price: 35.0, category: "Comida Premium para Perros", image: "https://via.placeholder.com/150" },
    { id: 30, name: "Botas para Perros", price: 40.0, category: "Accesorios para Perros", image: "https://via.placeholder.com/150" }
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
                <p>${product.category}</p>
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
            product.category.toLowerCase().includes(query)
        );
        displayProducts(filteredProducts);
    });
});