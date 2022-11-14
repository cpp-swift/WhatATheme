// time is 24 hours format
let launchDate = new Date("Dec 3, 2022 11:00:00").getTime();
// set date ^

let now = new Date().getTime();
let t = launchDate - now;
// let liveText = "RvB is LIVE!";
let liveText = "Thanks for playing!";

if (t > 0) {
    let timer = setInterval(tick, 1000);
} else {
    document.querySelector('.countdown').innerText = liveText;
    document.getElementById('countdown').classList.add("pulsate")
}

function tick() {
    let now = new Date().getTime();
    let t = launchDate - now;

    if (t > 0) {

        let days = Math.floor(t / (1000 * 60 * 60 * 24));

        if (days < 10) { days = "0" + days; }

        let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        let secs = Math.floor((t % (1000 * 60)) / (1000));
        if (secs < 10) { secs = "0" + secs; }

        let time = `${days} : ${hours} : ${mins} : ${secs}`;

        document.querySelector('.countdown').innerText = time;
    }
    else {
        document.querySelector('.countdown').innerText = liveText;
        document.getElementById('countdown').classList.add("pulsate")
    }
}