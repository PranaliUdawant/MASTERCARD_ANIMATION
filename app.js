gsap.from(".main", {
    opacity: 0,
    duration: 4,
    yoyo: true
})
gsap.to(".main", {
    y: 10,
    rotation: 10,
    duration: 2,
    repeat: -1,
    delay: 1,
    yoyo: true
})
gsap.to(".main", {
    y: 10,
    rotation: -10,
    duration: 2,
    delay: 2,
    repeat: -1,
    yoyo: true
})