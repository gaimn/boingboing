let fps = 60
let x = 0; let y = 0
let xv = 12; let yv = 12
let bounces = 0

function move() {
    x += xv; y += yv

    var xa = x > innerWidth - 200; var xb = x < 0
    var ya = y > innerHeight - 200; var yb = y < 0

    if (xa || xb) {
        xv *= -1; bounces++
    }
    if (ya || yb) {
        yv *= -1; bounces++
    }

    // a variable wouldn't work for whatever damn reason
    document.getElementById("boing").style.left = x + "px"
    document.getElementById("boing").style.top = y + "px"

    if (bounces > 10) {
        x = 0; y = 0; xv = 12; yv = 12; bounces = 0
    }
    bounces -= 0.5
}

setInterval(move, 1e3 / fps)
// UPDATE WEB
