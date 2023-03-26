var tl = gsap.timeline()

tl.from("#nav h4",{
    y:-70,
    duration:0.8,
    delay:0.3,
    stagger:0.4,
    opacity:0.1,
    rotate:360
})
.from(".circle",{
    duration:0.6,
    delay:0.2,
    rotate:360,
    scale:0

})
.from("h1",{
    opacity:0,
    duration:1.4,
    rotate:360
})
.from("img",{
    opacity:0,
    y:200,
    duration:0.9
})