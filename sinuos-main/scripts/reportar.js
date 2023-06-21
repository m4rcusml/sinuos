const btnReportarErro = document.querySelector('#btn-reportar-erro')
btnReportarErro.addEventListener('click', () => {
    const erro = prompt('Dê detalhes sobre o que está acontecendo:')
    if(erro) {
        const enderecoEmail = prompt('Informe o seu endereço de email:')
        if(enderecoEmail) {
            setTimeout(() => alert('O erro foi reportado com sucesso!'), 800)
        }
    }
})