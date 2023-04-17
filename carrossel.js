
const carrosseis = document.querySelectorAll('.carrossel');
const showItems = 3;

/* Removível */

const accessKey = 'minha_key';

function getImages(listaImgs) {
    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=5&query="nature"`)
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.regular;
                listaImgs.appendChild(img);
            });
        })
        .catch(error => {
            console.log(error);
        });
}

/* Removível */

function changeItemRight(listaImgs, active) {
    let totalImgs = listaImgs.querySelectorAll('img').length;
    const gap = parseFloat(getComputedStyle(listaImgs).gap);
    const itemWidth = listaImgs.querySelector('img').offsetWidth + gap;
    const moveAmt = (active - 1) * itemWidth;

    if (active < totalImgs - showItems + 1) {
        listaImgs.style.transform = `translateX(-${moveAmt}px)`;
        active++;
    } else {
        listaImgs.style.transform = `translateX(0)`;
        active = 1;
    }

    return active;
}

function changeItemLeft(listaImgs, active) {
    let totalImgs = listaImgs.querySelectorAll('img').length;
    const gap = parseFloat(getComputedStyle(listaImgs).gap);
    const itemWidth = listaImgs.querySelector('img').offsetWidth + gap;

    if (active > 1) {
        active--;
        const moveAmt = (active - 2) * itemWidth;
        listaImgs.style.transform = `translateX(-${moveAmt}px)`;
    } else {
        active = totalImgs - showItems + 1;
        const moveAmt = (active - 1) * itemWidth;
        listaImgs.style.transform = `translateX(-${moveAmt}px)`;
    }

    return active;
}

carrosseis.forEach(carrossel => {
    const listaImgs = carrossel.querySelector('.imagens');
    let active = 1;

    // getImages(listaImgs); // Removível

    carrossel.querySelector('.btn-right').addEventListener('click', () => {
        active = changeItemRight(listaImgs, active);
    });

    carrossel.querySelector('.btn-left').addEventListener('click', () => {
        active = changeItemLeft(listaImgs, active);
    });
});
