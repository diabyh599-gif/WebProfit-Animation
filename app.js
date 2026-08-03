document.addEventListener("DOMContentLoaded", () => {

    const tl = gsap.timeline();

    tl

    .from("#character", {
        x: -400,
        duration: 2,
        ease: "power3.out"
    })

    .from("#briefcase", {
        scale: 0,
        opacity: 0,
        duration: 0.8
    })

    .to("#briefcase", {
        y: 40,
        duration: 0.6
    })

    .to("#register-container", {
        opacity: 1,
        scale: 1,
        duration: 0.7
    });

});