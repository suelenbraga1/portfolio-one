/* TOGGLE ICON NAVBAR */

let menuIcone = document.querySelector('#menu-icone');
let navbar = document.querySelector('.navbar');

menuIcone.onclick = () => {
    menuIcone.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

/* SCROLL SECTION ACTIVE LINK */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


/* SCROLL REVEAL */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
 });

ScrollReveal().reveal('.home-content, cabeçalho', { origin: 'top' });
ScrollReveal().reveal('.home-img, .experiencias-container, .projetos-box, contato form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contato h1, .sobre-img', { origin: 'left'});
ScrollReveal().reveal('.home-contato p, .sobre-content', { origin: 'right'});

/* TYPED JAVASCRIPT */

const type = new Typed('.multiple-text', {
    strings: ['Desenvolvedora Frontend'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});

/* MAIN */

document.querySelectorAll('a[href^="#"').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    })
})

const projetosLayerParagrafo = document.querySelectorAll(".projetos-layer-paragrafo"); 


function formatText() {
    projetosLayerParagrafo.forEach((Element) => {
        const text = Element.textContent
       if (text.length > 105){
        Element.innerText = text.slice(0, 103) + "..."
       }
         }) 
}; 
formatText();
