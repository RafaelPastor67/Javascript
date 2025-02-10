// Data Futura
const dataFutura = new Date('2025-12-25T00:00:00').getTime();


function  calcularTempoRestante(dataFutura){
    const data = new Date().getTime();
    const diferenca = dataFutura - data;
    const dia = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const hora = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minuto = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundo = Math.floor((diferenca % (1000 * 60)) / 1000);
    document.getElementById('dias').textContent = dia;
    document.getElementById('horas').textContent = hora;
    document.getElementById('min').textContent = minuto;
    document.getElementById('seg').textContent = segundo;
}

// Atualiza a cada segundo
function atualizaTemporizador(){
    setInterval(()=> calcularTempoRestante(dataFutura), 1000);
}
atualizaTemporizador();
