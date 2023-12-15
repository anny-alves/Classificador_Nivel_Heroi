const prompt = require("prompt-sync")();
let nickname = prompt("Insira o nome do Jogador: ");
let experiencia = prompt(nickname + " qual seu nível de experiência? ");
var nivel;
if (experiencia <= 1000){
  nivel = "Ferro";
}else if (experiencia <= 2000){
  nivel = "Bronze";
}else if (experiencia <= 5000){
  nivel = "Prata";
}else if (experiencia <= 7000){
  nivel = "Ouro";
}else if (experiencia <= 8000){
  nivel = "Platina";
}else if (experiencia <= 9000){
  nivel = "Ascendente";
}else if (experiencia <= 10000){
  nivel = "Imortal";
}else{
  nivel = "Raridade"
}

console.log("o Herói " + nickname + " está no nível " + nivel +"!")