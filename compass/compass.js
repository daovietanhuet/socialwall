var compass = new Vue({
    el: '#compass',
    data: {
        alpha: 0,
    }
});

window.addEventListener("deviceorientation", function(e) {
    compass.alpha = Math.ceil(e.alpha);
    if (typeof e.webkitCompassHeading !== "undefined") {
        compass.alpha = Math.abs(Math.ceil(e.webkitCompassHeading) - compass.alpha) <= 1 ? compass.alpha : Math.ceil(e.webkitCompassHeading); //iOS non-standard
    }
}, false);