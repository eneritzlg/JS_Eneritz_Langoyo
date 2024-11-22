// function multiplo(numero) {
//     if (numero % 7 === 0 && numero % 3 === 0) {
//         console.log("El número " + numero + " es múltiplo de tres y de siete.");
//     } else if (numero % 7 === 0) {
//         console.log("El número " + numero + " es múltiplo de siete.");
//     } else if (numero % 3 === 0) {
//         console.log("El número " + numero + " es múltiplo de tres.");
//     } else {
//         console.log("El número " + numero + " no es múltiplo ni de siete ni de tres.");
//     }
// }
//
// multiplo(2);
// multiplo(21);
// multiplo(14);
// multiplo(9);

//
//
// function rangoNumeros(numero) {
//     numero >= 10 && numero <= 50
//         ? console.log(numero + " está en el rango entre 10 y 50.")
//         : console.log(numero + " no está en el rango entre 10 y 50.");
// }
//
// rangoNumeros(12);
// rangoNumeros(9);
// rangoNumeros(10);

//

// function nota(nota) {
//     if (nota >= 0 && nota < 5) {
//         console.log("Has sacado un Suspenso con un " + nota);
//     } else if (nota >= 5 && nota <= 5.99) {
//         console.log("Has sacado un Aprobado con un " + nota);
//     } else if (nota >= 6 && nota < 6.99) {
//         console.log("Has sacado un Bien con un " + nota);
//     } else if (nota >= 7 && nota < 8.99) {
//         console.log("Has sacado un Notable con un " + nota);
//     } else if (nota >= 9 && nota <= 10) {
//         console.log("Has sacado un Excelente con un " + nota);
//     } else {
//         console.log("Nota no válida para el alumno!");
//     }
// }
//
// nota(12);
// nota(4.99);
// nota(3.99);
// nota(5);
// nota(7.8);
// nota(6.89);
// nota(-1);

//
// function multiploSwitch(numero) {
//     switch (true) {
//         case (numero % 7 === 0 && numero % 3 === 0):
//             console.log("El número " + numero + " es múltiplo de tres y de siete.");
//             break;
//         case (numero % 7 === 0):
//             console.log("El número " + numero + " es múltiplo de siete.");
//             break;
//         case (numero % 3 === 0):
//             console.log("El número " + numero + " es múltiplo de tres.");
//             break;
//         default:
//             console.log("El número " + numero + " no es múltiplo ni de siete ni de tres.");
//             break;
//     }
// }
//
// multiploSwitch(2);
// multiploSwitch(21);
// multiploSwitch(14);
// multiploSwitch(9);
//
//
//
// function numeroMaximo() {
//     let suma = 0;
//
//     for (let i = 1; suma <= i; i++) {
//         suma += i;
//         if (suma === i) {
//             console.log(
//                 "La suma de todos los números que preceden a " +
//                 i +
//                 " (incluido este) es el número que has introducido (" +
//                 i +
//                 ")."
//             );
//         }
//     }
// }
//
// numeroMaximo(15);
// numeroMaximo(28);
// numeroMaximo(10);
//
//
//
// let cadena1 = "H0L4 MunD0";
// let cadena2 = "H3110 W0r1d";
//
// function sumaNumerosString(c) {
//     let suma = 0;
//
//     for (let i = 0; i < c.length; i++) {
//         const caracter = parseInt(c[i]);
//         if (!isNaN(caracter)) {
//             suma += caracter;
//         }
//     }
//
//     return suma;
// }
//
// console.log(
//     "La cadena de texto \"" +
//     cadena1 +
//     "\" contiene una suma de números = " +
//     sumaNumerosString(cadena1)
// );
// console.log(
//     "La cadena de texto \"" +
//     cadena2 +
//     "\" contiene una suma de números = " +
//     sumaNumerosString(cadena2)
// );

//

// let numeros  = [];
//
// function ordenarMayorMenor(a = 0, b= 0, c = 0){
//     numeros[0] = a;
//     numeros[1] = b;
//     numeros[2] = c;
//
//     return numeros.sort(function (a,b){return a - b});
// }
//
// console.log(ordenarMayorMenor(2, 4,1,));
// console.log(ordenarMayorMenor(4, 1));
//
// //

// function parImpar(x) {
//     for (let i = 0; i <= x; i++){
//         if(i % 2 == 0){
//             console.log("El numero" + i + " es par");
//
//         } else{
//             console.log("El nimero " + i + " es impar");
//         }
//     }
// }
// parImpar(12)
//
// //
//
// let asterisco = "* ";
// for(let i = 1; i <= 5; i++){
//     console.log(asterisco.repeat(i));
// }
//
// //
//
// let numero = 0;
// let i = 0;
//
// do{
//     i++
//     if(i % 5 === 0 || i % 3 === 0){
//         numero = numero + i;
//         if(numero < 1000){
//             console.log("El numero " + i + " es multiple de 3 o de 5. Ha sido sumado" + numero);
//         }
//     }
// }while (numero < 1000)

//
//
let asterisco = "* ";

for (let i = 1; i <= 5; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(asterisco.repeat(i))
}
//
//
//


