if (window.matchMedia('(prefers-reduced-motion)').matches) {
    window.removeEventListener('scroll', throttle(parallax, 13));
} else {
    window.addEventListener('scroll', throttle(parallax, 13));
}

function throttle(fn, wait) {
    let time = Date.now();
    return function () {
        if ((time + wait - Date.now()) < 0) {
            fn();
            time = Date.now();
        }
    }
};

function parallax() {
    let scrolled = window.scrollY;

    let parallax1 = document.querySelector("#level1");
    parallax1.style.transform = 'translateY(' + (scrolled * 0.33) + 'px' + ')';

    let parallax2 = document.querySelector("#level2");
    parallax2.style.transform = 'translateY(' + (scrolled * 0.25) + 'px' + ')';

    let parallax3 = document.querySelector("#level3");
    parallax3.style.transform = 'translateY(' + (scrolled * 0.17) + 'px' + ')';

    let parallax4 = document.querySelector("#level4");
    parallax4.style.transform = 'translateY(' + (scrolled * 0.09) + 'px' + ')';

    let parallax5 = document.querySelector("#level5");
    parallax5.style.transform = 'translateY(' + (scrolled * 0.1) + 'px' + ')';

};