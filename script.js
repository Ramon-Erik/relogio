const ponteiroHoras = document.querySelector('.horas')
const ponteiroMinutos = document.querySelector('.minutos')
const ponteiroSegundos = document.querySelector('.segundos')

function definirRegiao() {
    let local = document.querySelector('#regiao')
    let regiao = local.options[local.selectedIndex].value
    switch (regiao) {
        case 'brasil':
            console.log('br')
            break
            case 'canada':
            console.log('ca')
            break
            case 'eua':
            console.log('eu')
            break
    }
}

function atualizarHora() {
    const horaAtual = new Date()
    const hora = horaAtual.getHours()
    const min = horaAtual.getMinutes()
    const sec = horaAtual.getSeconds()

    const anguloHora = hora / 12 *360
    const anguloMin = min / 60 * 360
    const anguloSec = sec / 60 * 360

    ponteiroHoras.style.transform = `rotate(${anguloHora}deg)`
    ponteiroMinutos.style.transform = `rotate(${anguloMin}deg)`
    ponteiroSegundos.style.transform = `rotate(${anguloSec}deg)`
}

setInterval(atualizarHora, 1000)
