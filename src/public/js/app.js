const hero = document.querySelector('.hero');

const imagenes = [
    '/img/banners/banner1.jpeg',
    '/img/banners/banner2.jpeg',
    '/img/banners/banner3.jpeg'
];

let actual = 0;

setInterval(() => {

    actual++;

    if(actual >= imagenes.length){
        actual = 0;
    }

    hero.style.backgroundImage =
        `url('${imagenes[actual]}')`;

}, 5000);