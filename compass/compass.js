var compass = new Vue({
    el: '#compass',
    data: {
        alpha: null,
        beta: null,
        gamma: null,
        test: false,
        e:null
    }
});

window.addEventListener("deviceorientation", function(e) {
    compass.alpha = e.alpha;
    if (typeof e.webkitCompassHeading !== "undefined") {
        compass.alpha = e.webkitCompassHeading; //iOS non-standard
    }
    compass.beta = e.beta;
    compass.gamma = e.gamma;
    compass.test = true;
    compass.e = e;
}, false);
