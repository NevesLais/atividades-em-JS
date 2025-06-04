// Defina os três lados do triângulo
let a = 3;
let b = 4;
let c = 5;

// Verifica se os lados formam um triângulo válido
if (a + b > c && a + c > b && b + c > a) {
  // Classifica o tipo de triângulo
  if (a === b && b === c) {
    console.log("Equilátero");
  } else if (a === b || a === c || b === c) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }
} else {
  console.log("Não é um triângulo válido");
}
