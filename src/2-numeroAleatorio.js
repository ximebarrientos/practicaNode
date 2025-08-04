/*
Crear un programa que reciba 2 numeros de argumentos y que me devuelva el aleatroio de ellos, si no me pasan los argumentos o son invalidos los valores por defecto seran 1 y 100
*/

const argumentos=process.argv;
const args=argumentos.slice(2)

//console.log(argumentos);
console.log(args);

//inicializar los valores por defecto
let min=1;
let max=100;

//verificar si tengo valores en args
if(args.length===0){
    // pasar de string a number
    const minParseado=parseInt(args[0]);
    const maxParseado=parseInt(args[1]);

    console.log(minParseado, maxParseado);
    // preguntar si minParseado y maxParseado no es isNaN y ademas quiero saber si el minParseado es menor que el maxParseado
    if(!isNaN(minParseado) && !isNaN(maxParseado) && minParseado<maxParseado){
        min=minParseado;
        max=maxParseado;
    }else{
        console.log("Los valores ingresados no son validos, se usaran los valores por defecto 1 al 100 😅");
    }
}

//generar un numero aleatorio entre min y max
const aleatorio=Math.floor(Math.random() * (max - min) + min)
//mostrar por consola el numero aleatorio
console.log(`El numero aleatorio entre ${min} y ${max} es: ${aleatorio}`);