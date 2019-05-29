var compass = new Vue({
    el: '#compass',
    data: {
        alpha: 0,
        heading: 0
    }
});

window.addEventListener("deviceorientation", function(e) {
    compass.alpha = Math.ceil(e.alpha);
    if (typeof e.webkitCompassHeading !== "undefined") {
        compass.alpha = Math.ceil(e.webkitCompassHeading); //iOS non-standard
    }
}, false);

function smoothHeading() {
    setInterval(() => {compass.heading = compass.alpha;}, 50)
}

smoothHeading();