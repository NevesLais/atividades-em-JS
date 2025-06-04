let salario = 2000;
let cargo = "gerente";
let bonus = 0;

if (cargo === "Atendente") {
  bonus = salario * 0.15;  
} else if (cargo === "Gerente") {
  bonus = salario * 0.20;  
} else {
  bonus =  salario * 0.05;
}

console.log(`O bônus do salário ${cargo} é de ${bonus}`);


