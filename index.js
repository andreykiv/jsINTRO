const patas = 4
let altura = 22.5
const unidades = 'centimetros'
const esNueva = false

const test = 5;
{
    const patas = 'roble'
    // console.log(patas);
} // en este caso si que podemos reasignar el valor de patas ya que esta dentro de otro bloque.

const calcDiametro = function(perimetro){
    
    return perimetro/Math.PI;
}

const sumaFunc = function(a, b){
    return a + b;
}

const restaFunc = function(a, b){
    return a - b;
}

const multiplyFunc = function(a, b){
    return a * b
}

const divisionFunc = function(a, b){
    return a / b;
}

let resultado = divisionFunc(5, 4);

console.log(resultado);
// con la const no se puede reasignar el valor;
// con la let sí que se puede
// let var const - saber diferencias.


const concatenateFunc = function(text1, text2){
    return text1 + text2;
}

const resultadoConcat = concatenateFunc("hello there! ", "this is a test!");
console.log(resultadoConcat);

function thisisAfunction(){
    return "hello mate!"
}


const testfunction = thisisAfunction;

console.log(typeof testfunction);


const describirMueble = function(material, autor){
    let resultado = `Este mueble es de ${material} y el autor es el ${autor}`
    return resultado;
}


// tests:
function myFunction(){
    let random = Math.floor(Math.random() * 11);
    let myNumber = 8;
    if(myNumber > random){
        console.log(`${myNumber} is a greater number than ${random}`)
    } else if(myNumber < random) {
        console.log(`${random} is higher than ${myNumber}`)
    } else {
        console.log("numbers are equal")
    }

}
myFunction();
