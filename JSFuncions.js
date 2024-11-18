function showName(nom, cognom) {
    console.log(nom + " " + cognom)
}

showName("Eneritz", "Langoyo")

function showValorType(valor){
    console.log(typeof valor)
}

showValorType(4)
showValorType("hola")
showValorType(true)

function showDate(){
    let timeStamp = Date.now()

    let date = new Date(timeStamp)


    return date.toLocaleDateString()
}

console.log(showDate())


function ex4(){
    let name = "Eneritz"
}

function getVocal(word){

    let counter = 0

    word.toLowerCase()

    for (let i = 0; i < word.length; i++){
        let char = word.charAt(i)
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            counter++
        }
    }

    return counter
}

let palabra =  "Pedo"

console.log("La palabra " + palabra + " tiene: " + getVocal(palabra) + " vocales")

function sumInt(a, b, c = 12){
    console.log(a + b + c)
}

sumInt(3, 7)
sumInt(3, 7, 9)


function sumDate() {
    let date = showDate()

    let slash = date.indexOf("/")
    let firstNumber = Number(date.substring(0, slash))
    date = date.substring(slash + 1)
    slash = date.indexOf("/")
    let secondNumber = Number(date.substring(0, slash))
    let thirdNumber = Number(date.substring(slash + 1))

    sumInt(firstNumber, secondNumber, thirdNumber)
}

sumDate()


function isThirty(d, z) {
    return d === 30 || z === 30 || (d + z === 30);
}

console.log(isThirty(30, 5))
console.log(isThirty(15, 10))
//

const esTrenta = function(a, b) {
    return a === 30 || b === 30 || (a + b === 30)
}

console.log(esTrenta(10, 20))

//

const mateixValorTipus = (a, b) => a === b

console.log(mateixValorTipus(5, 5))
console.log(mateixValorTipus(5, "5"))
console.log(mateixValorTipus(true, false))
console.log(mateixValorTipus("hola", "hola"))

//

const arrelQuadradaDosDecimals = (valor) => Math.sqrt(valor).toFixed(2)

console.log(arrelQuadradaDosDecimals(9))
console.log(arrelQuadradaDosDecimals(2))
console.log(arrelQuadradaDosDecimals(25))

//

const convertirMinuscules = (text) => text.toLowerCase()

console.log(convertirMinuscules("HELLO WORLD"))
console.log(convertirMinuscules("JavaScript"))
console.log(convertirMinuscules("AdÉu!"))

//

const retornaNoNull = (a, b) => a !== null ? a : b

console.log(retornaNoNull(null, 5))
console.log(retornaNoNull(10, null))
console.log(retornaNoNull(null, null))
console.log(retornaNoNull("Hola", 42))


