const fs= require('fs');

const textoNuevo='\nEsto es un texto de prueba'

fs.appendFile('personajes.txt', textoNuevo,'utf8',(err)=>{
    if(err){
        console.error('Hubo un error al añadir el texto al archivo:', err);
        return
    }
    console.log('El contenido se añadio correctamente');
})