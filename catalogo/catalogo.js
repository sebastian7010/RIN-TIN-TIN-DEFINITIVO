document.addEventListener('DOMContentLoaded', function() {


    const products = [
        { "id": 1, "categoryId": 1, "name": "Collar para Perro", "price": 45000, "description": "Collar ajustable para perros pequeños y medianos", "image": "https://ae01.alicdn.com/kf/Hb74e6b70d11841379b0673bbacfbbf69P/Collar-ajustable-para-perro-y-gato-Collar-duradero-de-alta-calidad-a-la-moda-peque-os.jpg" },
        { "id": 2, "categoryId": 1, "name": "Correa para Perro", "price": 25000, "description": "Correa resistente de nylon", "image": "https://th.bing.com/th/id/R.d8d9acae7b5e907b3d617507fc89188c?rik=E9nJq3VYJdC4UA&pid=ImgRaw&r=0" },
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
        { "id": 51, "categoryId": 2, "name": "Bolsa Familiar de Comida", "price": 105000, "description": "Rendimiento para toda la familia canina", "image": "https://via.placeholder.com/150?text=Familiar" },

        { "id": 28, "categoryId": 3, "name": "Comida Premium para Perros", "price": 85000, "description": "Alimento de alta calidad para perros exigentes", "image": "https://via.placeholder.com/150?text=Comida+Premium" },
        { "id": 29, "categoryId": 3, "name": "Snacks Saludables", "price": 45000, "description": "Bocadillos ricos y nutritivos para perros", "image": "https://via.placeholder.com/150?text=Snacks" },
        { "id": 30, "categoryId": 3, "name": "Croquetas Húmedas", "price": 75000, "description": "Comida húmeda de calidad premium", "image": "https://via.placeholder.com/150?text=Croquetas" },
        { "id": 31, "categoryId": 3, "name": "Barritas Masticables", "price": 55000, "description": "Barritas deliciosas para perros activos", "image": "https://via.placeholder.com/150?text=Barritas" },
        { "id": 32, "categoryId": 3, "name": "Comida Especial para Cachorros", "price": 80000, "description": "Nutrición completa para los más pequeños", "image": "https://via.placeholder.com/150?text=Cachorros" },
        { "id": 33, "categoryId": 3, "name": "Alimento Hipoalergénico", "price": 95000, "description": "Ideal para perros con sensibilidad alimentaria", "image": "https://via.placeholder.com/150?text=Hipoalergénico" },
        { "id": 34, "categoryId": 3, "name": "Comida Baja en Grasa", "price": 70000, "description": "Para perros que necesitan controlar su peso", "image": "https://via.placeholder.com/150?text=Baja+Grasa" },
        { "id": 35, "categoryId": 3, "name": "Comida Gourmet para Perros", "price": 100000, "description": "Una experiencia de sabor premium", "image": "https://via.placeholder.com/150?text=Gourmet" },
        { "id": 36, "categoryId": 3, "name": "Croquetas Orgánicas", "price": 87000, "description": "Ingredientes 100% orgánicos y frescos", "image": "https://via.placeholder.com/150?text=Orgánicas" },
        { "id": 37, "categoryId": 3, "name": "Comida para Perros Senior", "price": 89000, "description": "Nutrición adaptada para perros mayores", "image": "https://via.placeholder.com/150?text=Senior" },
        { "id": 38, "categoryId": 3, "name": "Comida Deshidratada", "price": 78000, "description": "Sabor y frescura en cada porción", "image": "https://via.placeholder.com/150?text=Deshidratada" },
        { "id": 39, "categoryId": 3, "name": "Croquetas de Salmón", "price": 91000, "description": "Ricas en omega-3 para un pelaje brillante", "image": "https://via.placeholder.com/150?text=Salmón" },
        { "id": 40, "categoryId": 3, "name": "Alimento para Perros Activos", "price": 83000, "description": "Energía para perros que se mueven mucho", "image": "https://via.placeholder.com/150?text=Activos" },
        { "id": 41, "categoryId": 3, "name": "Comida Económica para Perros", "price": 45000, "description": "Calidad al mejor precio", "image": "https://via.placeholder.com/150?text=Económica" },
        { "id": 42, "categoryId": 3, "name": "Snacks con Vitaminas", "price": 30000, "description": "Snacks enriquecidos para perros saludables", "image": "https://via.placeholder.com/150?text=Vitaminas" },
        { "id": 43, "categoryId": 3, "name": "Alimento en Lata", "price": 56000, "description": "Comida húmeda de sabor irresistible", "image": "https://via.placeholder.com/150?text=Lata" },
        { "id": 44, "categoryId": 3, "name": "Comida para Perros Grandes", "price": 85000, "description": "Raciones para razas grandes", "image": "https://via.placeholder.com/150?text=Grandes" },
        { "id": 45, "categoryId": 3, "name": "Alimento para Razas Pequeñas", "price": 72000, "description": "Ideal para perros pequeños", "image": "https://via.placeholder.com/150?text=Pequeñas" },
        { "id": 46, "categoryId": 3, "name": "Comida Balanceada", "price": 88000, "description": "Equilibrio perfecto de nutrientes", "image": "https://via.placeholder.com/150?text=Balanceada" },
        { "id": 47, "categoryId": 3, "name": "Croquetas de Pollo", "price": 81000, "description": "El sabor favorito de todos los perros", "image": "https://via.placeholder.com/150?text=Pollo" },
        { "id": 48, "categoryId": 3, "name": "Snack Masticable", "price": 27000, "description": "Entretenimiento y sabor", "image": "https://via.placeholder.com/150?text=Masticable" },
        { "id": 49, "categoryId": 3, "name": "Comida Vegana", "price": 90000, "description": "Ideal para dueños y perros veganos", "image": "https://via.placeholder.com/150?text=Vegana" },
        { "id": 50, "categoryId": 3, "name": "Barritas Orgánicas", "price": 39000, "description": "Barras saludables y deliciosas", "image": "https://via.placeholder.com/150?text=Orgánicas" },
        { "id": 51, "categoryId": 3, "name": "Bolsa Familiar de Comida", "price": 105000, "description": "Rendimiento para toda la familia canina", "image": "https://via.placeholder.com/150?text=Familiar" },

        { "id": 28, "categoryId": 4, "name": "Comida Premium para Perros", "price": 85000, "description": "Alimento de alta calidad para perros exigentes", "image": "https://via.placeholder.com/150?text=Comida+Premium" },
        { "id": 29, "categoryId": 4, "name": "Snacks Saludables", "price": 45000, "description": "Bocadillos ricos y nutritivos para perros", "image": "https://via.placeholder.com/150?text=Snacks" },
        { "id": 30, "categoryId": 4, "name": "Croquetas Húmedas", "price": 75000, "description": "Comida húmeda de calidad premium", "image": "https://via.placeholder.com/150?text=Croquetas" },
        { "id": 31, "categoryId": 4, "name": "Barritas Masticables", "price": 55000, "description": "Barritas deliciosas para perros activos", "image": "https://via.placeholder.com/150?text=Barritas" },
        { "id": 32, "categoryId": 4, "name": "Comida Especial para Cachorros", "price": 80000, "description": "Nutrición completa para los más pequeños", "image": "https://via.placeholder.com/150?text=Cachorros" },
        { "id": 33, "categoryId": 4, "name": "Alimento Hipoalergénico", "price": 95000, "description": "Ideal para perros con sensibilidad alimentaria", "image": "https://via.placeholder.com/150?text=Hipoalergénico" },
        { "id": 34, "categoryId": 4, "name": "Comida Baja en Grasa", "price": 70000, "description": "Para perros que necesitan controlar su peso", "image": "https://via.placeholder.com/150?text=Baja+Grasa" },
        { "id": 35, "categoryId": 4, "name": "Comida Gourmet para Perros", "price": 100000, "description": "Una experiencia de sabor premium", "image": "https://via.placeholder.com/150?text=Gourmet" },
        { "id": 36, "categoryId": 4, "name": "Croquetas Orgánicas", "price": 87000, "description": "Ingredientes 100% orgánicos y frescos", "image": "https://via.placeholder.com/150?text=Orgánicas" },
        { "id": 37, "categoryId": 4, "name": "Comida para Perros Senior", "price": 89000, "description": "Nutrición adaptada para perros mayores", "image": "https://via.placeholder.com/150?text=Senior" },
        { "id": 38, "categoryId": 4, "name": "Comida Deshidratada", "price": 78000, "description": "Sabor y frescura en cada porción", "image": "https://via.placeholder.com/150?text=Deshidratada" },
        { "id": 39, "categoryId": 4, "name": "Croquetas de Salmón", "price": 91000, "description": "Ricas en omega-3 para un pelaje brillante", "image": "https://via.placeholder.com/150?text=Salmón" },
        { "id": 40, "categoryId": 4, "name": "Alimento para Perros Activos", "price": 83000, "description": "Energía para perros que se mueven mucho", "image": "https://via.placeholder.com/150?text=Activos" },
        { "id": 41, "categoryId": 4, "name": "Comida Económica para Perros", "price": 45000, "description": "Calidad al mejor precio", "image": "https://via.placeholder.com/150?text=Económica" },
        { "id": 42, "categoryId": 4, "name": "Snacks con Vitaminas", "price": 30000, "description": "Snacks enriquecidos para perros saludables", "image": "https://via.placeholder.com/150?text=Vitaminas" },
        { "id": 43, "categoryId": 4, "name": "Alimento en Lata", "price": 56000, "description": "Comida húmeda de sabor irresistible", "image": "https://via.placeholder.com/150?text=Lata" },
        { "id": 44, "categoryId": 4, "name": "Comida para Perros Grandes", "price": 85000, "description": "Raciones para razas grandes", "image": "https://via.placeholder.com/150?text=Grandes" },
        { "id": 45, "categoryId": 4, "name": "Alimento para Razas Pequeñas", "price": 72000, "description": "Ideal para perros pequeños", "image": "https://via.placeholder.com/150?text=Pequeñas" },
        { "id": 46, "categoryId": 4, "name": "Comida Balanceada", "price": 88000, "description": "Equilibrio perfecto de nutrientes", "image": "https://via.placeholder.com/150?text=Balanceada" },
        { "id": 47, "categoryId": 4, "name": "Croquetas de Pollo", "price": 81000, "description": "El sabor favorito de todos los perros", "image": "https://via.placeholder.com/150?text=Pollo" },
        { "id": 48, "categoryId": 4, "name": "Snack Masticable", "price": 27000, "description": "Entretenimiento y sabor", "image": "https://via.placeholder.com/150?text=Masticable" },
        { "id": 49, "categoryId": 4, "name": "Comida Vegana", "price": 90000, "description": "Ideal para dueños y perros veganos", "image": "https://via.placeholder.com/150?text=Vegana" },
        { "id": 50, "categoryId": 4, "name": "Barritas Orgánicas", "price": 39000, "description": "Barras saludables y deliciosas", "image": "https://via.placeholder.com/150?text=Orgánicas" },
        { "id": 51, "categoryId": 4, "name": "Bolsa Familiar de Comida", "price": 105000, "description": "Rendimiento para toda la familia canina", "image": "https://via.placeholder.com/150?text=Familiar" }
    ];



    const productGrid = document.getElementById('product-grid');
    const searchInput = document.getElementById('search-input');
    const categorySelect = document.getElementById('category-select');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const currentPageDisplay = document.getElementById('current-page');

    if (!productGrid || !searchInput || !categorySelect || !prevButton || !nextButton) {
        console.error("Faltan elementos necesarios en el DOM.");
        return;
    }

    let filteredProducts = [...products];
    let currentPage = 1;
    const itemsPerPage = 12;

    // Configuración de Fuse.js
    const fuseOptions = {
        keys: ["name", "description"],
        threshold: 0.3
    };
    const fuse = new Fuse(products, fuseOptions);

    // Renderizar productos en la cuadrícula
    function renderProducts(page = 1) {
        productGrid.innerHTML = ''; // Limpiar la cuadrícula

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
                    <div class="quantity-controls">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity">0</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <button class="buy-btn" onclick="handleSingleBuyClick(${product.id}, '${product.name}', ${product.price})">Comprar</button>
                </div>
            `;

            const minusBtn = productCard.querySelector('.minus');
            const plusBtn = productCard.querySelector('.plus');
            const quantitySpan = productCard.querySelector('.quantity');

            // Evento para aumentar cantidad
            plusBtn.addEventListener('click', () => {
                let quantity = parseInt(quantitySpan.textContent);
                quantity++;
                quantitySpan.textContent = quantity;
                addToCart(product.id, product.name, product.price, quantity);

                flyToCart(productCard, true);
            });

            // Evento para disminuir cantidad
            minusBtn.addEventListener('click', () => {
                let quantity = parseInt(quantitySpan.textContent);
                if (quantity > 0) {
                    quantity--;
                    quantitySpan.textContent = quantity;
                    addToCart(product.id, product.name, product.price, quantity);

                    flyToCart(productCard, false);
                }
            });

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

    // Buscar productos
    function searchProducts(query) {
        const lowerQuery = query.toLowerCase();
        filteredProducts = query ?
            fuse.search(lowerQuery).map(result => result.item) : [...products];
        currentPage = 1;
        renderProducts(currentPage);
    }

    // Paginación
    function handlePagination(direction) {
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

        if (direction === 'prev' && currentPage > 1) {
            currentPage--;
        } else if (direction === 'next' && currentPage < totalPages) {
            currentPage++;
        }

        prevButton.disabled = currentPage === 1;
        nextButton.disabled = currentPage === totalPages;

        renderProducts(currentPage);
    }

    // Función para agregar al carrito
    function addToCart(productId, productName, productPrice, quantity) {
        console.log(`Producto agregado: ${productName}, Cantidad: ${quantity}`);
    }

    function flyToCart(cardElement, isAdding) {
        // Clonar el elemento de la tarjeta
        const clonedCard = cardElement.cloneNode(true);
        const cart = document.getElementById('floating-cart'); // Contenedor del carrito flotante

        if (!cart) {
            console.error('No se encontró el carrito flotante');
            return;
        }

        const cardRect = cardElement.getBoundingClientRect(); // Posición de la tarjeta original
        const cartRect = cart.getBoundingClientRect(); // Posición del carrito

        // Configuración inicial del elemento clonado
        clonedCard.style.position = 'fixed';
        clonedCard.style.top = `${isAdding ? cardRect.top : cartRect.top}px`;
        clonedCard.style.left = `${isAdding ? cardRect.left : cartRect.left}px`;
        clonedCard.style.width = `${cardRect.width}px`;
        clonedCard.style.height = `${cardRect.height}px`;
        clonedCard.style.transition = 'transform 0.8s ease, opacity 0.8s ease';
        clonedCard.style.zIndex = '1000';
        clonedCard.style.opacity = isAdding ? '1' : '-9'; // Más transparente al devolver

        setTimeout(() => {
            clonedCard.style.transform = `translate(${translateX}px, ${translateY}px) scale(${isAdding ? 0.5 : 1})`;
            clonedCard.style.opacity = isAdding ? '0' : '0.99'; // Casi invisible al llegar de vuelta a la tarjeta
        }, 10);

        // Eliminar el elemento clonado después de la animación
        setTimeout(() => {
            document.body.removeChild(clonedCard);
        }, 900); // Ajusta el tiempo si la animación es más larga







        // Agregar el elemento clonado al DOM
        document.body.appendChild(clonedCard);

        // Calcular la distancia a volar
        const translateX = isAdding ?
            cartRect.left + cartRect.width / 9.3 - (cardRect.left + cardRect.width / 2) :
            cardRect.left + cardRect.width / 9.3 - (cartRect.left + cartRect.width / 2);
        const translateY = isAdding ?
            cartRect.top + cartRect.height / 9.3 - (cardRect.top + cardRect.height / 2) :
            cardRect.top + cardRect.height / 9.3 - (cartRect.top + cartRect.height / 2);

        // Aplicar la transformación para animar
        setTimeout(() => {
            clonedCard.style.transform = `translate(${translateX}px, ${translateY}px) scale(${isAdding ? 0.5 : 1})`;
            clonedCard.style.opacity = isAdding ? '0' : '1';
        }, 10); // Delay pequeño para asegurar que el DOM actualice el estilo inicial

        // Eliminar el elemento clonado después de la animación
        setTimeout(() => {
            document.body.removeChild(clonedCard);
        }, 800); // Duración de la animación
    }

    // Declarar la variable global para el carrito
    let cart = {};

    // Función para agregar productos al carrito
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

    // Función para actualizar el contador del carrito
    function updateCartCount() {
        const cartCount = document.getElementById('cart-count'); // Asegúrate de que este elemento exista en tu HTML
        const totalCount = Object.values(cart).reduce((acc, item) => acc + item.quantity, 0);

        if (cartCount) {
            cartCount.textContent = totalCount; // Actualiza el conteo en el elemento del carrito
            cartCount.style.display = totalCount > 0 ? 'flex' : 'none'; // Muestra/oculta el contador según el total
        }
    }


    function sendCartToWhatsApp() {
        if (Object.keys(cart).length === 0) {
            alert('Tu carrito está vacío. Agrega productos antes de proceder.');
            return;
        }

        let message = "Hola, estoy interesado en comprar:\n";
        let totalPrice = 0;

        Object.values(cart).forEach(item => {
            message += `- ${item.name}: ${item.quantity} unidades, Precio unitario: $${item.price.toFixed(2)}\n`;
            totalPrice += item.quantity * item.price;
        });

        message += `\nTotal a pagar: $${totalPrice.toFixed(2)}`;
        const whatsappURL = `https://wa.me/573108853158?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank'); // Abre WhatsApp en una nueva pestaña
    }

    window.sendCartToWhatsApp = sendCartToWhatsApp;




    function handleSingleBuyClick(productId, productName, productPrice, quantity) {
        if (quantity <= 0) {
            alert('Por favor, selecciona una cantidad válida.');
            return;
        }

        const totalPrice = productPrice * quantity;
        const message = `Hola, estoy interesado en comprar ${quantity} unidades del producto "${productName}" por un valor unitario de $${productPrice.toFixed(2)} y un valor total de $${totalPrice.toFixed(2)}.`;
        const whatsappURL = `https://wa.me/573108853158?text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, '_blank');
    }

    window.handleSingleBuyClick = handleSingleBuyClick;


    document.addEventListener('DOMContentLoaded', function() {
        // Tu código existente
    });

    // Eventos
    searchInput.addEventListener('input', (e) => searchProducts(e.target.value));
    categorySelect.addEventListener('change', (e) => filterByCategory(e.target.value));
    prevButton.addEventListener('click', () => handlePagination('prev'));
    nextButton.addEventListener('click', () => handlePagination('next'));

    // Inicializar
    renderProducts(currentPage);
});