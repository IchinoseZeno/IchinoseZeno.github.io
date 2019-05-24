function　scrollFunction() {
    var this_y = window.pageYOffset;
    if (this_y > 240) {
        document.getElementsByClassName(".leftToCenter-header, .net-image").classList.add("js-active");
    } else {
        document.getElementsByClassName(".leftToCenter-header, .net-image").classList.remove("js-active");
    }
}
window.onload = function() {
    scrollFunction();
}
window.onscroll = function() {
    scrollFunction();
}
