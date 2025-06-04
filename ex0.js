// os lados do triângulo
let a = 3;
let b = 4;
let c = 5;

// se o triângulo é válido
if (a + b > c && a + c > b && b + c > a) {
  //  tipo de triângulo
 } if (a === b && b === c) {
    console.log("Equilátero");
  } else if (a === b || a === c || b === c) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
}


// Equilátero : Todos os lados iguais
// Isóceles : Dois lados iguais
// Escaleno : Todos os lados iguais
