const btnReportarErro = document.querySelector('#btn-reportar-erro')
btnReportarErro.addEventListener('click', () => {
    const erro = prompt('Dê detalhes sobre o que está acontecendo:')
    alert(`O erro reportado foi:\n"${erro}"`)
})