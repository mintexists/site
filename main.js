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
