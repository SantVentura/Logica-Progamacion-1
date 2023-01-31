'use strict';

let num1 = parseInt(prompt("ingrese el primer numero"));
let num2 = parseInt(prompt("ingrese el segundo numero"));
let num3 = parseInt(prompt("ingrese el tercer numero"));

let resultado = [num1,num2,num3];

if (resultado[0] === resultado[1] || resultado[1] === resultado[2] ||resultado[2] === resultado[0]) {
    console.log('Si existen numeros iguales');
} else {
    console.log('No existen numeros iguales')
}
    

console.log(resultado.sort( (a,b) => a - b));
console.log(resultado.reverse())



/*  en funcion normal
function comparar(a,b) {
return a-b
} */ 