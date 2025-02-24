const fs = require('fs');

// Configuración: define las categorías y la cantidad de productos a generar para cada una
const categories = [{
        categoryId: 1,
        count: 100, // Genera 50 productos para categoría 1
        name: "Collar para Perro",
        price: 45000,
        description: "Collar ajustable para perros pequeños y medianos",
        image: "https://ae01.alicdn.com/kf/Hb74e6b70d11841379b0673bbacfbbf69P/Collar-ajustable-para-perro-y-gato-Collar-duradero-de-alta-calidad-a-la-moda-peque-os.jpg",
        gallery: [
            "https://ae01.alicdn.com/kf/Hb74e6b70d11841379b0673bbacfbbf69P/Collar-ajustable-para-perro-y-gato-Collar-duradero-de-alta-calidad-a-la-moda-peque-os.jpg",
            "https://sebastian7010.github.io/RIN-TIN-TIN-DEFINITIVO/imagenesAccesoriosperro/Captura%20de%20pantalla%202025-01-21%20083506%20(1).png",
            "https://ae01.alicdn.com/kf/Hb74e6b70d11841379b0673bbacfbbf69P/Collar-ajustable-para-perro-y-gato-Collar-duradero-de-alta-calidad-a-la-moda-peque-os.jpg"
        ]
    },
    {
        categoryId: 2,
        count: 100, // Genera 100 productos para categoría 2
        name: "Correa para Perro",
        price: 25000,
        description: "Correa resistente de nylon",
        image: "https://th.bing.com/th/id/R.d8d9acae7b5e907b3d617507fc89188c?rik=E9nJq3VYJdC4UA&pid=ImgRaw&r=0",
        gallery: [] // Puedes dejarlo vacío o agregar URLs si las tienes
    },
    // Puedes agregar más categorías aquí
    {
        categoryId: 3,
        count: 100, // Genera 100 productos para categoría 2
        name: "Correa para Perro",
        price: 25000,
        description: "Correa resistente de nylon",
        image: "https://th.bing.com/th/id/R.d8d9acae7b5e907b3d617507fc89188c?rik=E9nJq3VYJdC4UA&pid=ImgRaw&r=0",
        gallery: [] // Puedes dejarlo vacío o agregar URLs si las tienes
    },
    {
        categoryId: 4,
        count: 100, // Genera 100 productos para categoría 2
        name: "Correa para Perro",
        price: 25000,
        description: "Correa resistente de nylon",
        image: "https://th.bing.com/th/id/R.d8d9acae7b5e907b3d617507fc89188c?rik=E9nJq3VYJdC4UA&pid=ImgRaw&r=0",
        gallery: [] // Puedes dejarlo vacío o agregar URLs si las tienes
    },
    {
        categoryId: 5,
        count: 100, // Genera 100 productos para categoría 2
        name: "Correa para Perro",
        price: 25000,
        description: "Correa resistente de nylon",
        image: "https://th.bing.com/th/id/R.d8d9acae7b5e907b3d617507fc89188c?rik=E9nJq3VYJdC4UA&pid=ImgRaw&r=0",
        gallery: [] // Puedes dejarlo vacío o agregar URLs si las tienes
    },
    {
        categoryId: 6,
        count: 100, // Genera 100 productos para categoría 2
        name: "Correa para Perro",
        price: 25000,
        description: "Correa resistente de nylon",
        image: "https://th.bing.com/th/id/R.d8d9acae7b5e907b3d617507fc89188c?rik=E9nJq3VYJdC4UA&pid=ImgRaw&r=0",
        gallery: [] // Puedes dejarlo vacío o agregar URLs si las tienes
    },
    {
        categoryId: 7,
        count: 100, // Genera 100 productos para categoría 2
        name: "Correa para Perro",
        price: 25000,
        description: "Correa resistente de nylon",
        image: "https://th.bing.com/th/id/R.d8d9acae7b5e907b3d617507fc89188c?rik=E9nJq3VYJdC4UA&pid=ImgRaw&r=0",
        gallery: [] // Puedes dejarlo vacío o agregar URLs si las tienes
    },
    {
        categoryId: 8,
        count: 100, // Genera 100 productos para categoría 2
        name: "Correa para Perro",
        price: 25000,
        description: "Correa resistente de nylon",
        image: "https://th.bing.com/th/id/R.d8d9acae7b5e907b3d617507fc89188c?rik=E9nJq3VYJdC4UA&pid=ImgRaw&r=0",
        gallery: [] // Puedes dejarlo vacío o agregar URLs si las tienes
    },

];

// Array para almacenar todos los productos generados
const productos = [];
let currentId = 1; // ID inicial para los productos

// Recorre cada categoría y genera los productos correspondientes
categories.forEach(category => {
    for (let i = 0; i < category.count; i++) {
        productos.push({
            id: currentId,
            categoryId: category.categoryId,
            name: category.name,
            price: category.price,
            description: category.description,
            image: category.image,
            gallery: category.gallery
        });
        currentId++; // Incrementa el ID para el siguiente producto
    }
});

// Archivo de salida (se creará en la raíz del proyecto)
const outputFile = 'productos.json';


// Escribe el JSON en el archivo con indentación de 2 espacios para mayor legibilidad
fs.writeFileSync(outputFile, JSON.stringify(productos, null, 2));

console.log(`Se han generado ${productos.length} productos en el archivo ${outputFile}`);