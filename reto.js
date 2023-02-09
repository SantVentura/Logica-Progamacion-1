'use strict';

let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
let num3 = parseInt(prompt("ingrese el tercer numero"));

let resultado = [num1,num2,num3];

if (resultado[0] === resultado[1] || resultado[1] === resultado[2] ||resultado[2] === resultado[0]) {
    console.log('Si existen numeros iguales');
} else {
    console.log('No existen numeros iguales');
}

//mayor de los tres numeros 

if (resultado[0] > resultado[1] && resultado[0] > resultado[2]) {
    console.log(`el valor ${resultado[0]} es el mayor de los tres numeros`);
} else {
    
}if (resultado[1] > resultado[0] && resultado[1] > resultado[2]) {
    console.log(`el valor ${resultado[1]} es el mayor de los tres numeros`);
} else {
    
}if (resultado[2] > resultado[0] && resultado[2] > resultado[1]) {
    console.log(`el valor ${resultado[2]} es el mayor de los tres numeros`);
} else {
    
}

//menor de los tres numeros
if (resultado[0] < resultado[1] && resultado[0] < resultado[2]) {
    console.log(`el valor ${resultado[0]} es el menor de los tres numeros`);
} else {
    
}if (resultado[1] < resultado[0] && resultado[1] < resultado[2]) {
    console.log(`el valor ${resultado[1]} es el menor de los tres numeros`)
} else {
    
}if (resultado[2] < resultado[0] && resultado[2] < resultado[1]) {
    console.log(`el valor ${resultado[2]} es el menor de los tres numeros`)
} else {
    
}

//numero del medio 
if (resultado[0]<resultado[1] && resultado[2]>resultado[1]) {
    console.log(`el valor ${resultado[1]} es el numero del medio`)
} else
    
console.log(resultado.sort( (a,b) => a - b));





/*  en funcion normal
function comparar(a,b) {
return a-b
} */ 