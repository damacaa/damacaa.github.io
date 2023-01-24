
/*window.addEventListener('click', function (e) {
    if (document.getElementById('btClick').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'block';
    }

    if (document.getElementById('btClose').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'none';
    }
})*/


function ShowFloatingDiv(name) {
    var gameInfo = document.getElementById("projectPageWindow");
    gameInfo.style.display = 'block';

    var iframe = document.getElementById("projectPageiFrame");
    if (name.includes(".")) {
        iframe.src = "/projects/" + name;
    } else {
        iframe.src = "/projects/" + name + ".html";

    }
}

function CloseFloatingDiv() {
    var gameInfo = document.getElementById("projectPageWindow");
    gameInfo.style.display = 'none';

    var iframe = document.getElementById("projectPageiFrame");
    iframe.src = "";
}