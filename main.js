const botoes = document.querySelectorAll(".botao");
const textos = docment.querySelectorAll(".aba-conteudo");
for (let i=0; i<botoes.length; i++) {
    botoes[i].onclick = function() {
        
        for (let j=0; j<botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo")
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo")
    }
}

const contadores = document.querySelectorAll(".contador");

const tempoObjetivo1 = new Date("2026-01-05T00:00:00");
const tempoObjetivo2 = new Date("2024-07-05T00:00:00");
const tempoObjetivo3 = new Date("2025-03-05T00:00:00");
const tempoObjetivo4 = new Date("2025-12-05T00:00:00");

contadores[0].textContent = cauculaTempo(tempoObjetivo1);

function cauculaTempo (tempoObjetivo){
    const tempoAtual = Date();
    let tempofinal = tempoObjetivo - tempoAtual;
    let segundos = Math.floor(tempofinal/1000);
    let minutos = Math.floor(segundos/60);
    let horas = Math.floor(minutos/60);
    let dias = Math.floor(horas/24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

if (tempofinal>0){
    return dias + " dias " + horas + " horas " + minutos
    + " minutos " + segundos + " segundos "; 
} else {
    return "Praso finalizado!"
}
}


function atualizacronometro(){
    for( let i=0; i<contadores.length; i++){
        contadores[i].textContent = cauculaTempo[tempos[i]];
    }
}function comecaCronometro(){
atualizacronometro();
setInterval(atualizacronometro,1000);
}