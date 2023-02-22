const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    bubble.style.left = `${x}px`;

    wrapper.appendChild(bubble);

    setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX);

let mouseX = 0;

/*window.onmousemove = e => mouseX = e.clientX;


var intervalId = window.setInterval(function () {
    animateBubble(mouseX);
}, 10);*/

//clearInterval(intervalId) 