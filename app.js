let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.fromTo('.moon', 3, {y:-10},{y:350}, '-=3')
.fromTo('.moon2', 3, {y:30},{y:-250}, '-=3')
.fromTo('.bgPrime', 3, {y:-150}, {y:-50},'-=3')
.to('.content', 3, {top:'0%'}, '-=3')
.fromTo('.boat', 3, {x:200}, {x:-150}, '-=3')
.fromTo('.main-title', {opacity:1}, {opacity:0, duration:1.5}, '-=3');


let scene = new ScrollMagic.Scene({
    triggerElement: "section",
    duration: "100%",
    triggerHook: 0,
})
.setTween(timeline)
.setPin("section")
.addTo(controller);

const boat = document.querySelector('.boat');

if(boat.style.transform >= "translate(100px, 0px)"){
    boat = boat.style.overflow-x == "visible";
    boat.style.clip == "rect(100px,330px,100px,100px)";
}

