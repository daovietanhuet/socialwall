var compass = new Vue({
    el: '#compass',
    data: {
        alpha: 0,
        dir: ""
    }
});

var direction = ['N', 'E', 'S', 'W'];

window.addEventListener("deviceorientation", function(e) {
    compass.alpha = Math.abs(Math.ceil(e.alpha) - compass.alpha) <= 1 ? compass.alpha : Math.ceil(e.alpha);
    if (typeof e.webkitCompassHeading !== "undefined") {
        compass.alpha = Math.abs(Math.ceil(e.webkitCompassHeading) - compass.alpha) <= 1 ? compass.alpha : Math.ceil(e.webkitCompassHeading); //iOS non-standard
    }
    let heading = 360 - compass.alpha; 
    compass.dir = direction[((heading - heading % 90) / 90) % 4] + 
        (heading % 90 !== 0 ? direction[((heading - heading % 90) / 90 +1) % 4] : '')
}, false);