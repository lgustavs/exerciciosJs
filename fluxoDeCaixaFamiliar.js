/*
* Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
*
* receitas: [] 
* despesas: [] 
*
* Agora, crie uma função que irá calcular o total de receitas e 
* despesas e irá mostrar uma mensagem se a família está com 
* saldo positivo ou negativo, seguido do valor do saldo. 
*/

let receitas = [];
let despesas = [];

let contas = {
    receitas: [2500, 3200, 250.43, 360.45],
    despesas: [320.34, 128.45, 176.87, 1450.00]
}
    
function somar(array) {
    let total = 0;

    for(let value of array){
        total += value
    }
    return total;
}

function calcularContas (){
    const calcularReceitas = somar(contas.receitas);
    const calcularDespesas = somar(contas.despesas);

    const total = calcularReceitas - calcularDespesas;

    const saldoPositivo = total >= 0;

    if(saldoPositivo) {
        console.log("Saldo Positivo: R$" + total.toFixed(2)  + " :)")
    }else{
        console.log("Saldo negativo: R$" + total.toFixed(2) + " :(");
    }
}

calcularContas();