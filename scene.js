const tl = gsap.timeline({
    defaults: {
        ease: "power2.out"
    }
});

tl

.from("#character", {
    x: -500,
    duration: 2
})

.from("#briefcase", {
    opacity: 0,
    scale: 0.4,
    duration: 0.8
}, "-=1.2")

.to("#briefcase", {
    y: 45,
    duration: 0.5
})

.to(".briefcase-top", {
    rotateX: -140,
    duration: 0.8,
    transformOrigin: "bottom center"
})

.fromTo("#register-container",

{
    y:0,
    scale:.15,
    opacity:0
},

{
    y:-180,
    scale:1,
    opacity:1,
    duration:1.2,
    ease:"power4.out"
});