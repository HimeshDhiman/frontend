// project 3

// var main = document.querySelector("#main")
// var crsr = document.querySelector(".cursor")

// main.addEventListener("mousemove" , function(dets){
//     crsr.style.left = dets.x+"px"
//     crsr.style.top = dets.y+"px"

// })




















// project 4



// var elem = document.querySelectorAll(".elem")
// // var elemImage= document.querySelector("#elem1 img")

// // elem1.addEventListener("mousemove",function(dets){
// //     elemImage.style.left = dets.x+"px"
// //     elemImage.style.top = dets.y+"px"
// // })

// // elem1.addEventListener("mouseenter",function(dets){
// //     elemImage.style.opacity = 1
// // })
// // elem1.addEventListener("mouseleave",function(dets){
// //     elemImage.style.opacity = 0
// // })



// elem.forEach(function(val){

//     val.addEventListener("mouseenter", function(){
//         val.childNodes[3].style.opacity = 1
//     })
//     val.addEventListener("mouseleave", function(){
//         val.childNodes[3].style.opacity = 0
//     })

//     val.addEventListener("mousemove", function(dets){
//         val.childNodes[3].style.left = dets.x+"px"
//         val.childNodes[3].style.top = dets.y+"px"

//     })
// })




























// project 5

var arr= [
    {dp: "hks.jpg", 
        story: "https://images.unsplash.com/photo-1595471286080-e181a1227856?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fGthd2FzYWtpfGVufDB8fDB8fHww"},
    {dp: "https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lcmNlZGVzfGVufDB8fDB8fHww", 
        story: "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXN8ZW58MHx8MHx8fDA%3D"},
    {dp: "https://images.unsplash.com/photo-1609386463693-caf39be25c6d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9kZ2V8ZW58MHx8MHx8fDA%3D", 
        story: "https://images.unsplash.com/photo-1613255681982-72db70380979?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGRvZGdlfGVufDB8fDB8fHww"},
    {dp: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF1ZGl8ZW58MHx8MHx8fDA%3D", 
        story: "https://images.unsplash.com/photo-1627508795178-e852bd067a72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fGF1ZGl8ZW58MHx8MHx8fDA%3D"},
                


]



var storiyan= document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem, idx){
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`

})
storiyan.innerHTML = clutter


storiyan.addEventListener("click", function(dets){
    document.querySelector("#fullscrn").style.display = "block"
    document.querySelector("#fullscrn").style.backgroundImage = `url(${arr[dets.target.id].story})`


    setTimeout(function(){
    document.querySelector("#fullscrn").style.display = "none"

    },3000)

 
});



