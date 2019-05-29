import { setInterval } from "timers";

var compass = new Vue({
    el: '#compass',
    data: {
        alpha: null,
        heading: null,
    },
    methods: {
        
    },
    created: function(){
        self = this;
        setInterval(() => {self.heading = self.alpha}, 500);
    }
});

window.addEventListener("deviceorientation", function(e) {
    compass.alpha = Math.ceil(e.alpha);
    if (typeof e.webkitCompassHeading !== "undefined") {
        compass.alpha = Math.ceil(e.webkitCompassHeading); //iOS non-standard
    }
}, false);
