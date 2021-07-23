// carne - 400 gr por pessoa   + de 5 horas - 500 gr
// Cerveja - 1200ml por Pessoa + 5 horas - 1800 ml
// Refrigerante - 800 ml por pessoa + 5 horas - 1000 ml

// crianças valem por 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let inputnBcerveja = document.getElementById("nBcerveja");

let resultado = document.getElementById("resultado");

function calcular (){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let nBcerveja = inputnBcerveja.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + ( carnePP(duracao)/2 * criancas);

    let qtdTotalCerveja = cervejaPP(duracao) * (adultos - nBcerveja);

    let qtdTotalBebidas = bebidasPP(duracao) * adultos + ( bebidasPP(duracao)/2 * criancas);

    

    resultado.innerHTML = ` <p>${qtdTotalCarne/1000} kg de Carne</p>`;
    resultado.innerHTML += ` <p>${Math.ceil(qtdTotalCerveja/355)} latas de Cerveja</p>`;
    resultado.innerHTML += ` <p>${Math.ceil(qtdTotalBebidas/1000)} l. de Refrigerante</p>`;


}

function carnePP (duracao){
    
    if ( duracao >= 5){
        return 500;
    }else{
        return 400;
    }
}

function cervejaPP (duracao){
    
    if ( duracao >= 5){
        return 1800;
    }else{
        return 1200;
    }
}

function bebidasPP (duracao){
    
    if ( duracao >= 5){
        return 1000;
    }else{
        return 800;
    }
}

function limpar(){
    window.location.reload();
}