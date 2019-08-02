let eye = document.getElementsByClassName('eye')[0];
let irises = document.getElementsByClassName('iris');
let styles = window.getComputedStyle(eye);

window.onload = function(){
    document.onmousemove = function(e) {
        let x = e.pageX;
        let y = e.pageY;
        tilt(x, y);    
    }
}

if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", function (event) {
        let x = (event.gamma * (10))/90;
        let y = (event.beta * (10))/90;
        tilt([x, y]);
    }, true);
} else if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', function (event) {
        let accX = Math.round(event.accelerationIncludingGravity.x*10) / 10;  
        let accY = Math.round(event.accelerationIncludingGravity.y*10) / 10;
        let x = (styles.width) - (accX*movement);
        let y = (styles.height) - (accY*movement);    
        // let x = 10/2 - event.acceleration.x * 5;
        // let y = 10/2 - event.acceleration.y * 5;
        tilt([x, y]);
    }, true);
} else {
    window.addEventListener("MozOrientation", function (event) {
        let x = 10 - event.orientation.x * 50;
        let y = styles.width - event.orientation.y * 50;
        tilt([x, y]);
    }, true);
}

function tilt(x, y) {
    let moveX = parseInt(x * 0.007) - 1;
    let moveY = parseInt(y * 0.006);

    irises[0].style.left = `${moveX}px`;
    irises[1].style.left = `${moveX}px`;

    if (y < window.innerHeight - 100) {
        // on the bottom half of the screen
        irises[0].style.top = `${moveY}px`;
        irises[1].style.top = `${moveY}px`;
    } else {
        // on the top half of the screen
        irises[0].style.bottom = `${moveY}px`;        
        irises[1].style.bottom = `${moveY}px`;        
    }
}
