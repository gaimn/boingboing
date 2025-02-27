console.log("Hi")

let fps = 60
let x = 0; let y = 0
let xv = 12; let yv = 12
let bounce_time = 0; let bouncer = false; let total_bounces = 0
let clicks = 0

function move() {
    var txv = xv + clicks / 100; var tyv = yv + clicks / 100
    x += txv; y += tyv

    var xa = x > innerWidth - 200; var xb = x < 0
    var ya = y > innerHeight - 200; var yb = y < 0

    if (xa || xb) {
        xv *= -1; bounce_time = 0; bouncer++; total_bounces++
        document.getElementById("count").innerHTML = total_bounces + " Boing(s)"
    }
    if (ya || yb) {
        yv *= -1; bounce_time = 0; bouncer++; total_bounces++
        document.getElementById("count").innerHTML = total_bounces + " Boing(s)"
    }

    // a variable wouldn't work for whatever damn reason
    document.getElementById("boing").style.left = x + "px"
    document.getElementById("boing").style.top = y + "px"

    if (bounce_time < 3 && bouncer > 2) {
        x = 0; y = 0; xv = 12; yv = 12; bounce_time = 0; bouncer = 0
        total_bounces -= 4
        document.getElementById("count").innerHTML = total_bounces + " Boing(s)"
        document.getElementById("why").hidden = false
        setTimeout(() => {
            document.getElementById("why").hidden = true
        }, 3000)
    } else if (bounce_time < 3 && bouncer > 1) {
        xv += txv * 2; yv += tyv * 2
    }
    //bounces = bounces >= 0.5 ? bounces - 0.5 : bounces
    bounce_time++; bouncer = bouncer > 0 ? bouncer - 0.5 : bouncer
}

function increment() {
    clicks++
    document.getElementById("click_count").innerHTML = clicks + " Click(s)"
}

setInterval(move, 1e3 / fps)
// UPDATE WEB
// 42
