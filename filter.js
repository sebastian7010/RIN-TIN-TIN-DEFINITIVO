const fs = require('fs');


const rawData = fs.readFileSync('allProducts.json', 'utf8');
const productos = JSON.parse(rawData);

const productosFiltrados = productos.filter(producto => producto.categoryId === 1 || producto.categoryId === 2 || producto.categoryId === 3  || producto.categoryId === 4 );

// Guardar en un nuevo archivo JSON
fs.writeFileSync('perros.json', JSON.stringify(productosFiltrados, null, 2), 'utf8');

console.log('Archivo productos-filtrados.json creado con éxito.');
