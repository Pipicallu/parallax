let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline.to('.birbs', 3, {x:-100})
.fromTo('.fuji', 3, {y:20},{y:-150}, '-=3')
.fromTo('.bgPrime', 3, {y:-70}, {y:0},'-=3')
.to('.content', 3, {top:'0%'}, '-=3');

let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller);