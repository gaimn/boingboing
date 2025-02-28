console.log("Hi")

let fps = 60
let bouncers = 0
let clicks = 0
let x = []; let y = []
let xv = []; let yv = []
let bounce_time = []
let bouncer = []
let total_bounces = 0
let elements = []

class Bouncer {
    constructor(cfg) {
        var id = bouncers
        document.body.innerHTML += "<button id='"+id+"' style='position:absolute;font-size:3em;width:200px;height:200px' onclick='increment()'>boing boing</button>"
        elements.push(document.getElementById(id))

        if (cfg == ["default"]) {
            x.push(0); y.push(0); xv.push(12); yv.push(12); bounce_time.push(0); bouncer.push(false);
        } else {
            x.push(cfg[0]); y.push(cfg[1]); xv.push(cfg[2]); yv.push(cfg[3]); bounce_time.push(cfg[4]); bouncer.push(cfg[5]);
        }
        
        bouncers++
        setInterval(move, 1e3/fps, id)
    }
}

function move(id) {
    var txv = xv[id] + clicks / 100; var tyv = yv[id] + clicks / 100
    x[id] += txv; y[id] += tyv

    var xa = x[id] > innerWidth - 200; var xb = x[id] < 0
    var ya = y[id] > innerHeight - 200; var yb = y[id] < 0

    if (xa || xb) {
        xv[id] *= -1; bounce_time[id] = 0; bouncer[id]++; total_bounces++
        document.getElementById("count").innerHTML = total_bounces + " Boing(s)"
        if (Math.random() > 0.95) {
            new Bouncer(x[id], y[id], -xv[id], yv[id], bounce_time[id], bouncer[id])
        }
    }
    if (ya || yb) {
        yv[id] *= -1; bounce_time[id] = 0; bouncer[id]++; total_bounces++
        document.getElementById("count").innerHTML = total_bounces + " Boing(s)"
        if (Math.random() > 0.95) {
            new Bouncer(x[id], y[id], xv[id], -yv[id], bounce_time[id], bouncer[id])
        }
    }

    // a variable wouldn't work for whatever damn reason
    document.getElementById(id).style.left = x[id] + "px"
    document.getElementById(id).style.top = y[id] + "px"

    if (bounce_time[id] < 3 && bouncer[id] > 2) {
        x[id] = 0; y[id] = 0; xv[id] = 12; yv[id] = 12; bounce_time[id] = 0; bouncer[id] = 0
        total_bounces -= 4
        document.getElementById("count").innerHTML = total_bounces + " Boing(s)"
        document.getElementById("why").hidden = false
        setTimeout(() => {
            document.getElementById("why").hidden = true
        }, 3000)
    }// else if (bounce_time[id] < 3 && bouncer[id] > 1) {
    //    xv[id] += txv * 2; yv[id] += tyv * 2
    //}
    // bounces = bounces >= 0.5 ? bounces - 0.5 : bounces
    bounce_time[id]++; bouncer[id] = bouncer[id] > 0 ? bouncer[id] - 0.5 : bouncer[id]
}


function increment() {
    clicks++
    document.getElementById("click_count").innerHTML = clicks + " Click(s)"
}

// setInterval(move, 1e3 / fps)

new Bouncer(["default"]) // Spawn in!
// UPDATE WEB
// 42
