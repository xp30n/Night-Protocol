// event listener for space bar event
window.addEventListener("keydown", spaceHandler);

function spaceHandler(e) {
    if (e.key === " ") {
        // document.getElementById("title").style.opacity = 0;
        // document.getElementById("start-text").style.opacity = 0;

        window.location.href = "/html/second.html";
    }
}