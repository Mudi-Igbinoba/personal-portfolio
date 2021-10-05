function openNav() {
    document.getElementById("sidebar").style.width = "100%"
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0px"
}

function closeBar() {
    if(window.matchMedia("(min-width: 600px)").matches) {
    document.getElementById("sidebar").style.width = "100%"
} else {
    return closeNav()
}
}