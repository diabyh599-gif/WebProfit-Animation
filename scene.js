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

.from("#character",{
    x:-700,
    duration:2.3,
    ease:"power2.out"
})

.to("#briefcase",{
    x:0,
    y:0,
    duration:0
},"<")

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
    y:-260,
    scale:1,
    opacity:1,
    duration:1.2,
    ease:"power4.out"
});