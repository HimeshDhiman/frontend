// js project 1 
// var center = document.querySelector("#center")

// center.addEventListener("mousemove", function(dets){
//      var centerloc= center.getBoundingClientRect();
//     var insidecenter = dets.clientX - centerloc.left;



//     if(insidecenter < centerloc.width/2){
//         var red = gsap.utils.mapRange(0,centerloc.width/2, 255, 0, insidecenter);
//         gsap.to(center, {
//             backgroundColor: `rgb(${red},0,0)`,
//             ease: Power4,
//         });
//     }
//     else{
        
//         var blueclr= gsap.utils.mapRange( centerloc.width/2, centerloc.width, 0, 255, insidecenter);
//         gsap.to( center, { 
//             backgroundColor: `rgb(0,0,${blueclr})`,
//             ease: Power4,
//         });


//     }
   
// })

// center.addEventListener("mouseleave", function(){
//     center.style.backgroundColor= "white"
//     gsap.to( center, {
//         backgroundColor : "white"
//     });
// })


















// js practise 2

// window.addEventListener("mousemove", function(dets){

//     var rect= this.document.querySelector("#rect");


//    var xval=  gsap.utils.mapRange(0, window.innerWidth, 100+rect.getBoundingClientRect().width/2 ,
//     window.innerWidth- (100 +rect.getBoundingClientRect().width/2) , dets.clientX )

//     gsap.to("#rect",{
//         left: xval+"px",
//         ease: Power3

//     })

// })





















// practice 3




const throttleFunction=(func, delay)=>{
    let prev= 0;
    return (...args)=>{
        let now = new Date().getTime();
        if(now- prev> delay){
            prev = now;
            return func(...args);

        }
    }
}

document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
    var div = document.createElement("div");
    div.classList.add('imgdiv')
    div.style.left = dets.clientX+"px";
    div.style.top = dets.clientY+"px";


    var img = document.createElement("img");
    img.setAttribute("src" , "https://images.unsplash.com/photo-1740021578918-692634d0d838?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNHx8fGVufDB8fHx8fA%3D%3D")
    div.appendChild(img);




    document.body.appendChild(div);

    gsap.to(img, {
        y:"0",
        ease: Power1,
        duration: .6
    });

    gsap.to(img, {
        y:"100",
        delay: .6
        ease : Power2,
    });




    setTimeout(function(){
        div.remove()

    },2000);



}, 400));
