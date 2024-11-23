var elementosDuvida = document.querySelectorAll('.duvida')

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa')
    })
})

/* Smooth Scroll */
document.querySelectorAll('a[href^="#"]').forEach(ancora => {
    ancora.addEventListener('click', function(e) {
        e.preventDefault();
        const alvo = document.querySelector(this.getAttribute('href'));
        alvo.scrollIntoView({
            behavior: 'smooth'
        });
    });
});