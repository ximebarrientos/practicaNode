const fs=require('fs');

fs.readFile('./personajes.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error('Hubo un error al leer el archivo:', err);
        return;
    }
    const personajes = data.split('\n').map(line => line.trim()).filter(line => line);
    console.log('Contenido del archivo');
    console.log(data);
});

console.log('Este mensaje va después de leer el archivo');