// var main = document.querySelector("#main")
// var cursor = document.querySelector("#cursor")
// var imgdiv = document.querySelector("#img")

// main.addEventListener("mousemove", function(dets){
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         duration:0.5,
//         scrub:2,
//         ease:"back.out",
        
//     })
// })


// imgdiv.addEventListener("mouseenter", function(){
//     cursor.innerHTML = "view more"
//     gsap.to(cursor,{
//         scale:2,
//         backgroundColor:"#ffffff44"
//     })
// })
// imgdiv.addEventListener("mouseleave", function(){
//     cursor.innerHTML = ""

//     gsap.to(cursor,{
//         scale:1,
//         backgroundColor:"#fff"

//     })
// })









// por 2


// var menu= document.querySelector("#nav")
// var cross= document.querySelector("#full i")

// var tl = gsap.timeline()

// tl.to("#full", {
//     right:0,
//     duration:0.3
// })

// tl.from("#full h4",{
//     x:150,
//     duration:0.3,
//     stagger:0.25,
//     opacity:0
// })

// tl.from("#full i",{
//     opacity:0
// })

// tl.pause()


// menu.addEventListener("click",function(){
//     tl.play()
// })

// cross.addEventListener("click",function(){
//     tl.reverse()
// })

























// pro3

// function breaktext(){
//     var h1 = document.querySelector("h1")

// var h1text = h1.textContent

// var splitted = h1text.split("")

// var clutter = ""

// var halfvalue = Math.floor(splitted.length/2)

// console.log(halfvalue)

// splitted.forEach(function(elem,idx){
//     if(idx<halfvalue){
//         clutter +=`<span class="a">${elem}</span>`
//     }else{
//         clutter +=`<span class="b">${elem}</span>`

//     }

//     // clutter+=`<span class="a">${elem}</span>`
// })

// h1.innerHTML = clutter
// }
// breaktext()

// // gsap.from("h1 span", {
// //     y:60,
// //     duration:1,
// //     delay:0.5,
// //     opacity:0,
// //     stagger:0.15

// // })




// gsap.from("h1 .a",{
//     y:60,
//     duration:0.6,
//     delay:0.5,
//     stagger:0.3,
//     opacity:0
// })

// gsap.from("h1 .b",{
//     y:60,
//     duration:0.6,
//     delay:0.5,
//     stagger:-0.3,
//     opacity:0
// })




















// pro4



function marqueAnimation(){
    window.addEventListener("wheel",function(dets){

        if(dets.deltaY>0){
            gsap.to(".marque",{
                transform:'translateX(-200%)',
                duration:4,
                repeat:-1,
                ease:"none"
            })
            gsap.to(".marque img",{
                rotate:180
            })
        }else{
            gsap.to(".marque",{
                transform:'translateX(0%)',
                duration:2,
                repeat:-1,
                ease:"none"
            })
            gsap.to(".marque img",{
                rotate:-180
            })
        }
    
    })
    
}

marqueAnimation()


