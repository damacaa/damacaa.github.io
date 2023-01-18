
/*window.addEventListener('click', function (e) {
    if (document.getElementById('btClick').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'block';
    }

    if (document.getElementById('btClose').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'none';
    }
})*/

function OpenGameInfo(name) {
    var gameInfo = document.getElementById(name + 'Info');
    gameInfo.style.display = 'block';
}

function CloseGameInfo(name) {
    var gameInfo = document.getElementById(name + 'Info');
    gameInfo.style.display = 'none';
}