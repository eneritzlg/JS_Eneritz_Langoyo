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


function getKeys(firstLetters, secondLetters, firstNumbers, secondNumbers) {
    let letters = "ABCDEFGHIJKLMNOPQRST"
    let numbers = "0123456789"

    let allPossibleCodes = []


    for (let i = 0; i < numbers.length; i++){
        let number = numbers.charAt(i)
        for (let j = 0; j < letters.length; j++){
            let letter = letters.charAt(j)
            let finalCode = firstLetters + letter + secondLetters + "-" + firstNumbers + number + secondNumbers
            allPossibleCodes.push(finalCode)
        }
    }

    return allPossibleCodes
}

const firstLetters = "AHF"
const secondLetters = "INL"
const firstNumber = "595"
const secondNumbers = "962"


console.log(getKeys(firstLetters, secondLetters, firstNumber, secondNumbers))


function getKeys2(letters, firstNumbers, secondNumbers) {
    let numbers = "0123456789"

    let allPossibleCodes = []


    for (let i = 0; i < numbers.length; i++){
        let number = numbers.charAt(i)
        for (let j = 0; j < numbers.length; j++){
            let numberTwo = numbers.charAt(j)
            let finalCode = letters + "-" + firstNumbers + number + numberTwo + secondNumbers
            allPossibleCodes.push(finalCode)
        }
    }

    return allPossibleCodes
}

const letters = "FHWDRGD"
const secondFirstNumbers = "866"
const secondSecondNumbers = "89"

console.log(getKeys2(letters, secondFirstNumbers, secondSecondNumbers))