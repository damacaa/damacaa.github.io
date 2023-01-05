
window.addEventListener('click', function (e) {
    if (document.getElementById('btClick').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'block';
    }

    if (document.getElementById('btClose').contains(e.target)) {
        document.getElementById('centerDIV').style.display = 'none';
    }
})    