const botaoMenu = document.querySelector('.cabecalho__menu');//criação de uma variavel
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click',  () =>{//adicionando uma ação
        menu.classList.toggle('menu-lateral--ativo');
    })

    const myImage = document.getElementById('my-image');
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
  const position = window.scrollY;
  const opacity = 1 - (position / windowHeight);

  myImage.style.opacity = opacity;
});