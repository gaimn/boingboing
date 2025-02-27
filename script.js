console.log("Hi")

let fps = 60
let x = 0; let y = 0
let xv = 12; let yv = 12
let bounce_time = 0; let total_bounces = 0

function move() {
    x += xv; y += yv

    var xa = x > innerWidth - 200; var xb = x < 0
    var ya = y > innerHeight - 200; var yb = y < 0

    if (xa || xb) {
        xv *= -1; bounce_time = 0; total_bounces++
        document.getElementById("count").innerHTML = total_bounces + " Boing(s)"
    }
    if (ya || yb) {
        yv *= -1; bounce_time = 0; total_bounces++
        document.getElementById("count").innerHTML = total_bounces + " Boing(s)"
    }

    // a variable wouldn't work for whatever damn reason
    document.getElementById("boing").style.left = x + "px"
    document.getElementById("boing").style.top = y + "px"

    if (bounce_time < 3) {
        x = 0; y = 0; xv = 12; yv = 12; bounce_time = 0
    }
    //bounces = bounces >= 0.5 ? bounces - 0.5 : bounces
    bounce_time++
}

setInterval(move, 1e3 / fps)
// UPDATE WEB
