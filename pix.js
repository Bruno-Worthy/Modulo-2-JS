
const prompt = require("prompt-sync")();

let saldo = Number(prompt("Qual o seu saldo? "));
let valor = Number(prompt("Qual valor do Pix? "));
let hora = Number(prompt("Que horas são (0 a 23)? "));

if (valor <= 0 || !Number.isFinite(valor)) {
  console.log("Valor inválido");
} else if (saldo < valor) {
  console.log("Saldo insuficiente");
} else if (hora >= 20 && hora <= 23 && valor > 1000) {
  console.log("Bloqueado: limite noturno");
} else if (hora >= 0 && hora <= 6 && valor > 1000) {
  console.log("Bloqueado: limite noturno");
} else {
  saldo = saldo - valor;
  console.log("Pix enviado. Saldo: R$ " + saldo.toFixed(2));
}
