const hero = document.querySelector('.hero');

const imagenes = [
    '/img/banners/banner1.jpeg',
    '/img/banners/banner2.jpeg',
    '/img/banners/banner3.jpeg'
];

let actual = 0;

setInterval(() => {

    actual++;

    if (actual >= imagenes.length) {
        actual = 0;
    }

    hero.style.backgroundImage =
        `url('${imagenes[actual]}')`;

}, 5000);

/* =========================
   SCROLL SUAVE
========================= */
function smoothScrollTo(target, duration = 1200) {
    const start = window.scrollY;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime = null;

    function animation(currentTime) {
        if (!startTime) startTime = currentTime;

        const timeElapsed = currentTime - startTime;

        const run = ease(timeElapsed, start, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

/* =========================
   LINKS CON #
========================= */
document.querySelectorAll('a[href*="#"]').forEach(link => {
    link.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            smoothScrollTo(target, 1200); // 👈 velocidad correcta
        }
    });
});