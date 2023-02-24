
/*window.addEventListener('click', function (e) {
    if (document.getElementById('btClick').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'block';
    }

    if (document.getElementById('btClose').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'none';
    }
})*/

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function () {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function () { };
}


function ShowFloatingDiv(name) {
    var gameInfo = document.getElementById("projectPageWindow");
    gameInfo.style.display = 'block';
    if (gameInfo.classList.contains('closeWindowAnimation'))
        gameInfo.classList.remove('closeWindowAnimation');

    var iframe = document.getElementById("projectPageiFrame");
    if (name.includes(".")) {
        iframe.src = "/projects/" + name;
    } else {
        iframe.src = "/projects/" + name + ".html";

    }
    disableScroll();
}

function CloseFloatingDiv() {
    var gameInfo = document.getElementById("projectPageWindow");

    //gameInfo.style.display = 'none';
    gameInfo.classList.add('closeWindowAnimation');
    enableScroll();

    const myTimeout = setTimeout(myGreeting, 800);

    function myGreeting() {
        gameInfo.style.display = 'none';

        var iframe = document.getElementById("projectPageiFrame");
        iframe.src = "";

    }
}