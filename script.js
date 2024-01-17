//var content = document.querySelector("#content");
//var img = document.querySelector("#orange-card img");
//
//
//content.addEventListener("mousemove", function(dets){
//    img.style.top = 1-dets.y*0.05 + "px"
//    img.style.left = 1- dets.x*0.05 + "px"
//})


function secImg(){
    var topLeft = document.querySelector("#top-left");
    var img = document.querySelector("#sec-img");

    img.style.color = "#000"

    topLeft.innerHTML = "Full financial visibility <br>    all in one place <br> Reliable & effective financial counting"

}

//ar tl = gsap.timeline();
//
//l.
//rom("#page3", {
//
//   scrollTrigger:{
//     trigger: "#page3",
//     scroller:"body",
//     start:"top 25%",
//     end:"top -200%",
//     markers:true,
//     scrub:1,
//     pin: true
//  }
//
//)
//
//   tl.
//     from("#woman", {
//       y: 0,
//       opacity: 1,
//         scrollTrigger:{
//           trigger: "#part-right",
//           scroller:"body",
//           start:"top 35%",
//           end:"top -100%",
//           markers:true,
//           scrub:1,
//        }
//   
//   })
//   tl.
//   from("#men", {
//     y: 0,
//     opacity: 1,
//       scrollTrigger:{
//         trigger: "#part-right",
//         scroller:"body",
//         start:"top 75%",
//         end:"top -150%",
//         markers:true,
//         scrub:1,
//      }
// 
// })

  var tl = gsap.timeline({ 
    scrollTrigger:{
                trigger:"#page-3",
                scroller:"body",
                start:"top -2%",
                end:"top -200%",
               // markers:true,
                scrub:1,
                pin:true
             }
    });
    
    tl.
        to("#man", {
          opacity: 0
      })
      .to(".num1", {
        y: 0,
        duration: 0.5,
        opacity: 0
    })
      .to(".num2", {
        y: 0,
        duration: 0.5,
        opacity: 1
    })
  
        .to("#woman", {
            y: 0,
            duration:0.5,
            opacity: 1
        })
        .to(".thumb", {
            y: 90,
            duration: 0.5,
            opacity: 1
        })
        .to(".num2", {
            y: 0,
            duration: 0.5,
            opacity: 0
        })
        .to(".num3", {
            y: 0,
            duration: 0.5,
            opacity: 1
        })
        
        .to("#woman", {
            y: 0,
            duration:0.5,
            opacity: 0
        })
        .to(".thumb", {
            y: 190,
            duration: 0.5,
            opacity: 1
        })
        .to("#men", {
          y: 0,
          duration: 0.5,
          opacity: 1
      })
     