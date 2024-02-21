// Solicitar a distância total em KM percorrida
var distanciaTotal = parseFloat(prompt("Digite a distância total em quilômetros percorrida:"));

// Solicitar o gasto de combustível em litros
var gastoCombustivel = parseFloat(prompt("Digite o gasto de combustível em litros:"));

// Calcular a média de gasto do automóvel
var mediaGasto = distanciaTotal / gastoCombustivel;

// Exibir o resultado na tela
console.log("A média de gasto do automóvel é: " + mediaGasto.toFixed(2) + " km/L");
