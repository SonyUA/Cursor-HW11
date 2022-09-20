const audioQ = document.querySelector("[data-audioQ]");
const audioW = document.querySelector("[data-audioW]");
const audioE = document.querySelector("[data-audioE]");
const audioR = document.querySelector("[data-audioR]");
const audioT = document.querySelector("[data-audioT]");
const audioY = document.querySelector("[data-audioY]");
const audioMusic = document.querySelector("[data-audioMusic]");
const audioCoca = document.querySelector("[data-audioCoca]");
const btn = document.getElementsByTagName("button");

document.addEventListener("keydown", keyboard);
document.addEventListener("click", keyboard);

function keyboard(e) {
    removeClass();

    if (e.key === "q" || e.target === document.body.querySelector("[data-btnQ]")) {
        audioQ.paused ? audioQ.play() : audioQ.pause();
        document.body.querySelector("[data-btnQ]").classList.toggle("active");
    } else if (e.key === "w" || e.target === document.body.querySelector("[data-btnW]")) {
        audioW.paused ? audioW.play() : audioW.pause();
        document.body.querySelector("[data-btnW]").classList.toggle("active");
    } else if (e.key === "e" || e.target === document.querySelector("[data-btnE]")) {
        audioE.paused ? audioE.play() : audioE.pause();
        document.querySelector("[data-btnE]").classList.toggle("active");
    } else if (e.key === "r" || e.target === document.querySelector("[data-btnR]")) {
        audioR.paused ? audioR.play() : audioR.pause();
        document.querySelector("[data-btnR]").classList.toggle("active");
    } else if (e.key === "t" || e.target === document.querySelector("[data-btnT]")) {
        audioT.paused ? audioT.play() : audioT.pause();
        document.querySelector("[data-btnT]").classList.toggle("active");
    } else if (e.key === "y" || e.target === document.querySelector("[data-btnY]")) {
        audioY.paused ? audioY.play() : audioY.pause();
        document.querySelector("[data-btnY]").classList.toggle("active");
    } else if (e.key === "a" || e.target === document.querySelector("[data-btnMusic]")) {
        audioMusic.paused ? audioMusic.play() : audioMusic.pause();
        document.querySelector("[data-btnMusic]").classList.toggle("active");
    } else if (e.key === "s" || e.target === document.querySelector("[data-btnCoca]")) {
        audioCoca.paused ? audioCoca.play() : audioCoca.pause();
        document.querySelector("[data-btnCoca]").classList.toggle("active");
    }
}
function removeClass() {
    for (let i = 0; i < btn.length; i++) {
        if (btn[i].classList.contains("active")) {
            btn[i].classList.remove("active");
        }
    }
}
