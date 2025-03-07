// gsap.from("#page1 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360
// })

// gsap.from("#page2 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",
//         markers:true,
//     }
// })

// gsap.from("#page3 #box", {
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:"#page3 #box"

// })









// gsap.to("#page2 h1",{
//     transform:"translateX(-150%)",
//     scrollTrigger:{
//         trigger:"#page2",
//         scroller:"body",
//         markers:true,
//         start:"top 0%",
//         end:"top -150%",
//         pin:true,
//         scrub:2
//     }

// })















var path = `M 0 100 Q 550 100 990 100`;

var finalPath = `M 0 100 Q 550 100 990 100`;

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){
    path = `M 0 100 Q ${dets.x} ${dets.y} 990 100`

    gsap.to("svg path", {
        attr:{d:path},
        duration:0.2,
        ease:"power3.out"
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:0.5,
        ease:"elastic.out(1,0.2)"
    })
})

