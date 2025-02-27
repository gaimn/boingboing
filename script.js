let fps = 60
let x = 0; let y = 0
let xv = 12; let yv = 12

function move() {
    x += xv; y += yv
    xv = x > innerWidth - 200 ? -xv : xv; yv = y > innerHeight - 200 ? -yv : yv
    xv = x < 0 ? -xv : xv; yv = y < 0 ? -yv : yv

    // a variable wouldn't work for whatever damn reason
    document.getElementById("boing").style.left = x + "px"
    document.getElementById("boing").style.top = y + "px"
}

setInterval(move, 1e3 / fps)
// UPDATE WEB
