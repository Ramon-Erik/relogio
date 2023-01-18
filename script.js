const ponteiroHoras = document.querySelector('.horas')
const ponteiroMinutos = document.querySelector('.minutos')
const ponteiroSegundos = document.querySelector('.segundos')

function definirRegiao() {
    let local = document.querySelector('#regiao')
    let regiao = local.options[local.selectedIndex].value
    let fuso = 0
    switch (regiao) {
        case 'brasil':
            fuso = -3
            break
        default:
            fuso = -5
            break
    }
    let valores = [regiao, fuso]
    return valores
}

function atualizarHora() {
    const horaAtual = new Date()
    let hora = horaAtual.getHours()
    const min = horaAtual.getMinutes()
    const sec = horaAtual.getSeconds()
    
    let diferencaHorario = definirRegiao()[1] - (horaAtual.getTimezoneOffset()/-60)
    console.log(diferencaHorario)

    if (horaAtual.getTimezoneOffset()/-60 < 0) {
        hora += diferencaHorario
    } else {
        hora -= diferencaHorario
    }

    console.log(hora)

    const anguloHora = hora / 12 *360
    const anguloMin = min / 60 * 360
    const anguloSec = sec / 60 * 360

    ponteiroHoras.style.transform = `rotate(${anguloHora}deg)`
    ponteiroMinutos.style.transform = `rotate(${anguloMin}deg)`
    ponteiroSegundos.style.transform = `rotate(${anguloSec}deg)`
}

setInterval(atualizarHora, 1000)
