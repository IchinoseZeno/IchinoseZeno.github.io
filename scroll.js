function　scrollFunction() {
    var this_y = window.pageYOffset;
    if (this_y > 240) {
        document.getElementById("send").classList.add("js-active");
    } else {
        document.getElementById("send").classList.remove("js-active");
    }
}
window.onload = function() {
    scrollFunction();
}
window.onscroll = function() {
    scrollFunction();
}
