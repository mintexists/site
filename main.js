let discordButton = document.getElementById("discord-button")

let clicked = false;

discordButton.addEventListener("click", e => {
    if (!clicked) {
        clicked = true;
    } else {
        navigator.permissions.query({name: "clipboard-write"}).then(result => {
            if (result.state == "granted" || result.state == "prompt") {
                navigator.clipboard.writeText("mintexists#8883").then(function() {
                    console.log("Copied!");
                }, function() {
                    console.log("Not copied!");
                });
            }
        });
    }
})

let mapRange = (value, low1, high1, low2, high2) => low2 + (high2 - low2) * (value - low1) / (high1 - low1);

let inter = (x, a) => (x ** a) / ((x ** a) + ((1 - x) ** a));

let bar = document.getElementById("bar")

document.addEventListener("mousemove", e => {
    let centerX = bar.offsetLeft - bar.offsetWidth;
    let centerY = bar.offsetTop//  + bar.offsetHeight / 2;

    let xOffset = e.clientX - centerX;
    let yOffset = e.clientY - centerY;

    let mappedX = 0;

    mappedX = mapRange(e.clientX - (.20 * document.body.offsetWidth), 0, document.body.offsetWidth, 0, 1);

    let smoothed = inter(Math.abs(mappedX), 1.2) * Math.sign(mappedX);

    bar.style.setProperty('--offset', `${smoothed * 50}px`);
})
