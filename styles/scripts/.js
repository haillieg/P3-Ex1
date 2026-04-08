// test //

console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
 gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
      }
    })
    .to("img", {
      scale: 2,
      z: 250,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".section.hero",
      {
        scale: 1.4,
        transformOrigin: "center center",
        ease: "power1.inOut"
      },
      "<"
    );
});


//darken bg on scroll - jQuery

// $(document).ready(function() {
//    $.fn.darkenScroll = function() {
//     var elem = $( this );
//     self = this;

//     $(window).on('scroll', function(){
//       scroll = $(document).scrollTop();
//       offsetTop = elem.offset().top + elem.outerHeight();
//       opacity = 1 / offsetTop * scroll;
//       if (opacity > 0 && opacity < 1) {
//         elem.css({'box-shadow': '10000px 0 0 0 rgba(0,0,0,' + opacity + ') inset'});
//       }
//     })
//   }
//   $('.section.hero').darkenScroll();
// })








//mine//

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// console.clear();



// const scroller = ScrollSmoother.create ({
//     wrapper: "wrapper",
//     content: "content", 
//     smooth: 1.5,
//     effects: true, 
//     normalizeScroll: true
// })

// gsap.to(".leaf-frame", {
//     scrollTrigger: {
//         trigger: ".leaf-frame",
//         start: "top center",
//         end: "bottom center",
//         scrub: true
//     },
// })

// // controls the entire animation
// this.timeline = gsap.timeline ({
// scrollTrigger: {
//     trigger: this.dom,
//     start: "top top",
//     end: "bottom top",
//     scrub: true,
//     pin: true
// }
// })

// this.timeline.to(this.leaf-frame, {
//     z: "100vh",
//     duration: 1,
//     ease: "power1.inOut",
//     stagger: {
//         amount: 0.2,
//         from: "center"
//     }
// })








// codepen information 

// console.clear();

// gsap.registerPlugin(ScrollTrigger);

// window.addEventListener("load", () => {
//   gsap
//     .timeline({
//       scrollTrigger: {
//         trigger: ".wrapper",
//         start: "top top",
//         end: "+=150%",
//         pin: true,
//         scrub: true,
//         markers: false
//       }
//     })
//     .to("img", {
//       scale: 2,
//       z: 250,
//       transformOrigin: "center center",
//       ease: "power1.inOut"
//     })
//     .to(
//       ".section.hero",
//       {
//         scale: 1.4,
//         transformOrigin: "center center",
//         ease: "power1.inOut"
//       },
//       "<"
//     );
// });

// $(document).ready(function() {
//    $.fn.darkenScroll = function() {
//     let elem = $( this );
//     self = this;

//     $(window).on('scroll', function(){
//       scroll = $(document).scrollTop();
//       offsetTop = elem.offset().top + elem.outerHeight();
//       opacity = 1 / offsetTop * scroll;
//       if (opacity > 0 && opacity < 1) {
//         elem.css({'box-shadow': '10000px 0 0 0 rgba(0,0,0,' + opacity + ') inset'});
//       }
//     })
//   }
//   $('.section.hero').darkenScroll();
// })