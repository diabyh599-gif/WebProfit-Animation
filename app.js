document.addEventListener("DOMContentLoaded", () => {

    alert("JS fonctionne");

    gsap.from(".register-card", {
        y: 80,
        opacity: 0,
        duration: 1.2
    });

});