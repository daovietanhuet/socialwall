var compass = new Vue({
    el: '#compass',
    data: {
        alpha: null,
    }
});

window.addEventListener("deviceorientation", function(e) {
    compass.alpha = Math.ceil(e.alpha);
    if (typeof e.webkitCompassHeading !== "undefined") {
        compass.alpha = Math.ceil(e.webkitCompassHeading); //iOS non-standard
    }
}, false);
