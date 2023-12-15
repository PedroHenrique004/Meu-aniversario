AOS.init();


const dataAlvo = new Date ("Dec 13 2024 00:00:00");
const timeStampDoEvento = dataAlvo.getTime();

const contaHoras = setInterval(function(){
    const tempoAtual = new Date();
    const timeStampAtual = tempoAtual.getTime();

    const distanciaDoEvento = timeStampDoEvento - timeStampAtual;

    const inicio = timeStampDoEvento;

    const finalDia13 = new Date ("Dec 13 2024 23:00:00");
    const fim = finalDia13.getTime();

    if (distanciaDoEvento > 0 && timeStampDoEvento < inicio && timeStampDoEvento > fim) {
        const dias = 1000*60*60*24;
        const horas = 1000*60*60;
        const minutos = 1000*60;
        const segundos = 1000;
    
        const diasAteOEvento = Math.floor(distanciaDoEvento / dias);
        const horasAteOEvento = Math.floor((distanciaDoEvento % dias) / horas);
        const minutosAteOEvento = Math.floor((distanciaDoEvento % horas) / minutos);
        const segundosAteOEvento = Math.floor((distanciaDoEvento % minutos) / segundos);
    
    
        document.getElementById('timer').innerHTML = `${diasAteOEvento} dias ${horasAteOEvento} horas ${minutosAteOEvento} minutos ${segundosAteOEvento} segundos`;
    }
    else if (timeStampDoEvento >= inicio && timeStampDoEvento <= fim){
        let emojis = "";
        // Usa um laço for para repetir o emoji 1 vez
        for (let i = 0; i < 1; i++) {
            // Adiciona o emoji à variável usando o código decimal
            emojis += "&#129395;";
        }
        // Exibe a frase com os emojis de cada lado
        document.getElementById('timer').innerHTML = `<br> ${emojis} Hoje é meu aniversário ${emojis}`;
    }
    else {
        document.getElementById('timer').innerHTML = `<br> Já passou, quem sabe um dia eu atualize esse site`;
    }

    
    
}, 1000);