/*=========================================
        INICIAR AOS
=========================================*/
AOS.init({
    duration: 1200,
    once: true
});

/*=========================================
        CONTADORES
=========================================*/

const numeros = document.querySelectorAll(".numero");

const animarContadores = () => {

    numeros.forEach(numero => {

        const objetivo = +numero.dataset.numero;
        let contador = 0;

        const velocidad = objetivo / 100;

        const actualizar = () => {

            contador += velocidad;

            if (contador < objetivo) {

                numero.innerText = Math.floor(contador);

                requestAnimationFrame(actualizar);

            } else {

                numero.innerText = objetivo;

            }

        }

        actualizar();

    });

}

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach(entrada => {

        if (entrada.isIntersecting) {

            animarContadores();

            observador.disconnect();

        }

    });

});

observador.observe(document.querySelector("#estadisticas"));

/*=========================================
        CUENTA REGRESIVA
=========================================*/

// Cambia la fecha cuando quieras
const fecha = new Date("July 19, 2026 15:00:00").getTime();

setInterval(() => {

    const ahora = new Date().getTime();

    const diferencia = fecha - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        (diferencia % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutos = Math.floor(
        (diferencia % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const segundos = Math.floor(
        (diferencia % (1000 * 60)) / 1000
    );

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

}, 1000);

/*=========================================
        BOTON SUBIR
=========================================*/

const boton = document.getElementById("top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        boton.style.display = "block";

    } else {

        boton.style.display = "none";

    }

});

boton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}

/*=========================================
        NAVBAR
=========================================*/

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.style.background = "#02101f";

        header.style.boxShadow = "0px 5px 20px rgba(0,0,0,.5)";

    }

    else {

        header.style.background = "rgba(0,0,0,.35)";

        header.style.boxShadow = "none";

    }

});

/*=========================================
        TEXTO MAQUINA
=========================================*/

const titulo = document.querySelector(".titulo");

const texto = "FIFA WORLD CUP 2026";

titulo.innerHTML = "";

let i = 0;

function escribir() {

    if (i < texto.length) {

        titulo.innerHTML += texto.charAt(i);

        i++;

        setTimeout(escribir, 120);

    }

}

setTimeout(escribir, 500);

/*=========================================
        EFECTO HOVER TARJETAS
=========================================*/

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;

        const y = e.offsetY;

        card.style.background =
            `radial-gradient(circle at ${x}px ${y}px,
rgba(255,215,0,.35),
rgba(255,255,255,.08))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.08)";

    });

});

/*=========================================
        PARTICLES
=========================================*/

particlesJS("particles-js", {

    particles: {

        number: { value: 70 },

        color: { value: "#FFD700" },

        shape: { type: "circle" },

        opacity: { value: 0.5 },

        size: { value: 3 },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#FFD700",

            opacity: 0.3

        },

        move: {

            enable: true,

            speed: 2

        }

    }

});

/*=========================================
        EFECTO PARALLAX HERO
=========================================*/

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    hero.style.backgroundPositionY =
        window.pageYOffset * 0.5 + "px";

});

/*=========================================
        MENSAJE BIENVENIDA
=========================================*/

setTimeout(() => {

    console.log("Bienvenido al Mundial FIFA 2026");

}, 1500);