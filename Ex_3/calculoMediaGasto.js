// Solicitar a dist�ncia total em KM percorrida
var distanciaTotal = parseFloat(prompt("Digite a dist�ncia total em quil�metros percorrida:"));

// Solicitar o gasto de combust�vel em litros
var gastoCombustivel = parseFloat(prompt("Digite o gasto de combust�vel em litros:"));

// Calcular a m�dia de gasto do autom�vel
var mediaGasto = distanciaTotal / gastoCombustivel;

// Exibir o resultado na tela
console.log("A m�dia de gasto do autom�vel �: " + mediaGasto.toFixed(2) + " km/L");
