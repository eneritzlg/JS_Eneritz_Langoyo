let number = 1234
let bigInt = 5678

let resultadoSuma = number + bigInt
let resultadoResta = number - bigInt
let resultadoMulti = number * bigInt
let resultadoDiv = number / bigInt

console.log(resultadoDiv.toFixed(1))
console.log(resultadoSuma.toFixed(1))
console.log(resultadoResta.toFixed(1))
console.log(resultadoMulti.toFixed(1))

let catetos = 4
let potencia = Math.pow(catetos, 2)
let resultado = (potencia + potencia) / 2
console.log(resultado)

let nombre = "Eneritz"
let numero = 18
console.log(nombre/numero)

let nombreApellidos = "Eneritz Langoyo Gonzalez"
let posApellido = nombreApellidos.indexOf(" ")+1
let apellidos = nombreApellidos.substring(posApellido)
let posFinalApellido = apellidos.indexOf(" ")
let apellido = apellidos.substring(0, posFinalApellido)
console.log(apellido)

let pose6Del = nombreApellidos.substring(0, 5)
let restString = nombreApellidos.substring(6)
console.log(pose6Del + restString)

let indefinida = undefined
let nada = null
console.log(indefinida + nada)

let booleanTrue = true
console.log(String(booleanTrue))
console.log(booleanTrue + "")

let stringTrue = "Hola"
let booleana = stringTrue=== "Hola"
console.log(booleana)
console.log(Boolean(stringTrue))

let numBool = true
console.log(Number(numBool))
console.log(numBool | 0)