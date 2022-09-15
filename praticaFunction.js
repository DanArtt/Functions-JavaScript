
var altura = Number(prompt("me diga sua altura: "))
var peso = Number(prompt("me diga seu peso: "))
 document.write(`<strong>Seu imc é:</strong> ${imc(peso, altura)}`)

 function imc(peso, altura){
    let imc = peso/(altura**2)
    return imc.toFixed(2)
 }








/*function imc(peso, altura){
    return peso/(altura**2);
}
console.log(imc(50,1.65)) */