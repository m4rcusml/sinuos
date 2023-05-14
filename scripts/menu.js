function getResolucao() {
    const resolucao = window.screen.width
    return resolucao
}

const itensMenu = document.querySelectorAll('#menu-lista .item')
const menuBar = document.querySelector('#menu')
const menuButton = document.querySelector('#menu-button')

menuButton.addEventListener('click', () => {
    menuBar.classList.toggle('aberto')
    if (menuBar.classList.contains('aberto')) {
        if(getResolucao() > 768) {
            document.body.style.gridTemplateColumns = '20vw 1fr'
        }
    } else {
        if(getResolucao() > 768) {
            document.body.style.gridTemplateColumns = '0 1fr'
        }
    }
})

itensMenu.forEach(i => {
    i.addEventListener('click', () => {
        itensMenu.forEach(j => {
            j.classList.remove('selecionado')
        })
        i.classList.add('selecionado')
    })
});