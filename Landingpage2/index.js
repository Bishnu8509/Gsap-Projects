// initial position
// final position
// 1--gsap to----
// gsap.to("#box", {
//   x: 900,
//   duration:2,
//   delay:1,
//   backgroundColor:"blue",
//   rotate:360,
//   scale:0.5
// });

// gsap.to("#box", {
//   x: 900,
//   y: 300,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   scale: 0.5,
// });

// 2---gsap from----
// initial position
// final position
//initial position
// gsap.from("#box", {
//   x: 900,
//   y: 300,
//   duration: 2,
//   delay: 1,
//   backgroundColor: "blue",
//   rotate: 360,
//   scale: 0.5,
// });

// gsap.to("h1", {
//   x: 300,
//   color: "yellow",
//   duration: 2,
//   delay: 1,
//   rotate: 360,

// });
// gsap.to("h2", {
//   x: 300,
//   color: "orange",
//   duration: 2,
//   delay: 3,
//   rotate: 360,

// });
// gsap.to("h3", {
//   x: 300,
//   color: "orange",
//   duration: 2,
//   delay: 6,
//   rotate: 360,

// });

//  gsap.to("h1", {
// x: 600,
// color: "yellow",
// duration: 1,
// delay: 0.5,
// textAlign:"center",
// stagger:1
// repeat:-1,
// yoyo:true
//  })

// var tl = gsap.timeline();
// tl.to("h1", {
//   x: 600,
//   duration:1
// });
// tl.to("h2", {
//   x: 700,
//   duration:1
// });
// tl.to("h3", {
//   x: 800,
//   duration:1
// });

var tl = gsap.timeline();

tl.from("#nav img,#nav h3,#nav h4,#nav button", {
  y: -100,
  duration: 1,
  delay: 0.5,
  opacity: 0,
  stagger: 0.2,
});

tl.from("#main h1", {
  y: 100,
  opacity: 0,
  stagger: 0.3,
});

tl.from("#main>img",{
  scale:0,
  opacity:0,
  stagger:0.3,
  rotate:360
})
tl.from("h5",{
  scale:0,
  opacity:0
})
tl.to("h5",{
  y:30,
  repeat:-1,
  duration:0.7,
  yoyo:true
})
// tl.from("#left-img", {
//   rotate:360
// });
// tl.from("#right-img", {
//   rotate:360
// });
