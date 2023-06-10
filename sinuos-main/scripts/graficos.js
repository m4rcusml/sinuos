const sitesGraficos = ['ph', 'temperatura', 'alcalinidade']
const iframe = document.querySelector('#graficos-container iframe')
const btnAnterior = document.querySelector('#btn-left')
const btnProximo = document.querySelector('#btn-right')
let atual = 0

btnAnterior.addEventListener('click', () => {
    if (atual === 0) {
        atual = sitesGraficos.length - 1;
    } else {
        atual--;
    }
    atualizarIframe();
})
btnProximo.addEventListener('click', () => {
    if (atual === sitesGraficos.length - 1) {
        atual = 0;
    } else {
        atual++;
    }
    atualizarIframe();
})

function atualizarIframe() {
    iframe.src = `graficos/${sitesGraficos[atual]}.html`;
}