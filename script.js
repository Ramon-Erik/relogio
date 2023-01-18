const ponteiroHoras = document.querySelector('.horas')
const ponteiroMinutos = document.querySelector('.minutos')
const ponteiroSegundos = document.querySelector('.segundos')
const textHoras = document.querySelector('.texto-horas')

function definirRegiao() {
    let local = document.querySelector('#regiao')
    let regiao = local.options[local.selectedIndex].value
    let fuso = 0
    let base = 0
    switch (regiao) {
        case 'brasil':
            fuso = -3
            base = 'Brasília, DF'
            break
        case 'mexico':
            fuso = -6
            base = 'Distrito Federal, México'
            break
        case 'eua':
            fuso = -5
            base = 'Washington, D.C'
            break
        case 'china':
            fuso = 8
            base = 'China'
            break
    }
    let valores = [regiao, fuso, base]
    return valores
}

function atualizarHora() {
    const horaAtual = new Date()
    let hora = horaAtual.getHours()
    let min = horaAtual.getMinutes()
    const sec = horaAtual.getSeconds()
    
    let diferencaHorario = definirRegiao()[1] - (horaAtual.getTimezoneOffset()/-60)

    if (horaAtual.getTimezoneOffset()/-60 < 0) {
        hora += diferencaHorario
    } else {
        hora -= diferencaHorario
    }
    
    const anguloHora = hora / 12 *360
    const anguloMin = min / 60 * 360
    const anguloSec = sec / 60 * 360
    
    ponteiroHoras.style.transform = `rotate(${anguloHora}deg)`
    ponteiroMinutos.style.transform = `rotate(${anguloMin}deg)`
    ponteiroSegundos.style.transform = `rotate(${anguloSec}deg)`
    let day = horaAtual.getDate()
    
    if (hora >= 24) {
        hora = '0' + hora-24
        day = horaAtual.getDate()+1
    }
    if (min < 10) {
        min = `0${min}`
    }
    textHoras.innerText = `São ${hora}:${min} (dia: ${day}) Horário em ${definirRegiao()[2]} (GMT ${definirRegiao()[1]})`
    // console.log(horaAtual)
}

setInterval(atualizarHora, 1000)