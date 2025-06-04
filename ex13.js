let mes = 4;
switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Mês inválido");
}

/*Explicação do código:
A variável mes tem o valor 4, o que significa que o programa vai verificar qual case corresponde ao número 4.

O switch vai comparar o valor de mes (4) com cada case:

Quando o valor de mes for igual a 1, ele imprime "Janeiro".

Quando for igual a 2, imprime "Fevereiro", e assim por diante.

O break no final de cada case interrompe a execução do switch, garantindo que o código não continue executando após o primeiro case que encontrar.*/