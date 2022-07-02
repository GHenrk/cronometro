//Elementos; 
const elementoSpan = document.getElementById('cronometro')
const btnStop = document.getElementById('btnStop');
const btnStart = document.getElementById('btnStart');
const btnReset = document.getElementById('btnReset');

//Variáveis Manipuladas;
let segundo = 50;
let minuto = 58;
let hora = 0;


//Utilização em outros escopos;
let contagem;
let elementoHora = `0${hora}` ;
let elementoMinuto = `0${hora}` ;
let elementoSegundo;


const mostraCronometro = (elementoHora, elementoMinuto, elementoSegundo) => {
        elementoSpan.innerText = `${elementoHora}:${elementoMinuto}:${elementoSegundo}`;
}


const incrementaMinuto = () => {
    minuto++;
    elementoMinuto = `0${minuto}`
    if (minuto>59){
        minuto = 0;
        hora++;
        elementoHora= `0${hora}`;
    }
}

const verificaSePassouUmMinuto = () => {
    if (segundo <= 59) {
        return true;
    } else {
        segundo = 0;
        elementoSegundo= `0${segundo}`
    }
}

const calculaSegundo = () => {
    segundo++
    elementoSegundo= `0${segundo}`
    if (verificaSePassouUmMinuto()) {
        if (segundo >= 10) {
            elementoSegundo = `${segundo}`
            mostraCronometro(elementoHora, elementoMinuto, elementoSegundo);
        }
        else {
            mostraCronometro(elementoHora, elementoMinuto, elementoSegundo);
        }
    } else {
        segundo = 0;
        incrementaMinuto();
        mostraCronometro (elementoHora, elementoMinuto, elementoSegundo);
    }

}


    function iniciaContagem() {
        contagem = setInterval(calculaSegundo, 1000)
    }

    const resetaCronometro = () => {
        clearInterval(contagem);
        segundo = 0;
        minuto = 0;
        hora = 0;
        elementoHora = `0${hora}` ;
        elementoMinuto = `0${hora}` ;
        elementoSpan.innerText = `0${hora}:0${minuto}:0${segundo}`;
    }

    btnStop.onclick = () => {
        clearInterval(contagem);
    };

    btnStart.onclick = () => {
        iniciaContagem();
    }

    btnReset.onclick = () => {
        resetaCronometro();
    }