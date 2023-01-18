
/*window.addEventListener('click', function (e) {
    if (document.getElementById('btClick').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'block';
    }

    if (document.getElementById('btClose').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'none';
    }
})*/

let lastDivShown;
function ShowFloatingDiv(name) {
    var gameInfo = document.getElementById(name);
    gameInfo.style.display = 'block';
    lastDivShown = name;
}

function CloseFloatingDiv() {
    var gameInfo = document.getElementById(lastDivShown);
    gameInfo.style.display = 'none';
}