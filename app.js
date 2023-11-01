// Locomotive 
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// video button animation......................
function videoconAnimation() {
  let videocon = document.querySelector("#video-container");
  let playbtn = document.querySelector("#play");

  // Play Button animaton
  videocon.addEventListener("mouseenter", function () {
    // alert("You Bot");
    gsap.to(playbtn, {
      scale: 1,
      opacity: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    // alert("You Bot");
    gsap.to(playbtn, {
      scale: 0,
      opacity: 0,
    });
  });
  videocon.addEventListener("mousemove", function (event) {
    gsap.to(playbtn, {
      left: event.x - 50,
      top: event.y - 50,
    });
  });
}
videoconAnimation();

// H1 loading animation.......................
function loadingAnimationH1() {
  gsap.from("#page1 h1", {
    y: 100,
    duration: 0.9,
    stagger: 0.3,
    opacity: 0,
    delay: 0.5,
  })
  gsap.from("#page1 #video-container", {
    scale : 0.9,
    duration: 0.5,
    opacity: 0,
    delay: 1.3,
  });
}
loadingAnimationH1();

document.addEventListener("mousemove", function(val){
  gsap.to("#cursor", {
    left : val.x,
    top : val.y
  })
})

// document.querySelector("#child1").addEventListener("mouseenter", function(){
//   gsap.to("#cursor", {
//     transform: 'translate(-50%,-50%) scale(1)'
//   })
// })

// document.querySelector("#child1").addEventListener("mouseleave", function(){
//   gsap.to("#cursor", {
//     transform: 'translate(-50%,-50%) scale(1)'
//   })
// })

// let a = document.querySelectorAll(".child");

// a.forEach(function(elem){
//   elem.addEventListener("mouseenter", function(){
//     gsap.to("#cursor", {
//       transform: 'translate(-50%,-50%) scale(1)'
//     })
//   })

//   elem.addEventListener("mouseleave", function(){
//     gsap.to("#cursor", {
//       transform: 'translate(-50%,-50%) scale(0)'
//     })
//   })
// })


