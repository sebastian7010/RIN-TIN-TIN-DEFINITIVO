// generarURLs.js
const fs = require('fs');
const path = require('path');

// Configuración: ajusta estos valores según tu usuario y repositorio en GitHub Pages
const USUARIO = 'sebastian7010';
const REPOSITORIO = 'RIN-TIN-TIN-DEFINITIVO';
const carpetaImagenes = 'imagenesAccesoriosperro';

// URL base para GitHub Pages
const baseURL = `https://${USUARIO}.github.io/${REPOSITORIO}/${carpetaImagenes}/`;

// Dado que este script está en "negocio-main" y la carpeta está en la raíz,
// usamos ".." para subir un nivel:
const rutaCarpeta = path.join(__dirname, '.', carpetaImagenes);

console.log("Directorio actual (__dirname):", __dirname);
console.log("Ruta de la carpeta de imágenes:", rutaCarpeta);

// Extensiones permitidas
const allowedExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

// Verificar que la carpeta exista
if (!fs.existsSync(rutaCarpeta)) {
    console.error(`La carpeta "${rutaCarpeta}" no existe. Por favor, verifica la ruta.`);
    process.exit(1);
}

// Leer los archivos y filtrar imágenes
const files = fs.readdirSync(rutaCarpeta);
const imageFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return allowedExtensions.includes(ext);
});

// Generar las URLs usando encodeURIComponent para manejar espacios y caracteres especiales
const urls = imageFiles.map(file => baseURL + encodeURIComponent(file));

// Escribir las URLs en un archivo "urls.txt"
const outputFile = path.join(__dirname, 'urls.txt');
fs.writeFileSync(outputFile, urls.join('\n'));

console.log(`Se han generado ${urls.length} URLs en el archivo: ${outputFile}`);