var clock = new Vue({
    el: '#clock',
    data: {
        time: '',
        date: ''
    }
});

var week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
var timerID = setInterval(updateTime, 1000);
updateTime();
function updateTime() {
    var cd = new Date();
    clock.time = zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
    clock.date = zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];
};

function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}

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

var news = Vue.component('news', {
    props: ['post'],
    template: 
        `<a href="post.link">
            <h5>{{post.title}}</h5>
            `+ this.props.post.description +`
        </a>`
})