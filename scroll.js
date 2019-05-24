function　scrollFunction() {
    var this_y = window.pageYOffset;
    if (this_y > 240) {
        document.getElementById("send-header").classList.add("js-active");
        document.getElementById("send-header-net").classList.add("js-active");
    } else {
        document.getElementById("send-header").classList.remove("js-active");
        document.getElementById("send-header-net").classList.remove("js-active");
      }
}
window.onload = function() {
    scrollFunction();
}
window.onscroll = function() {
    scrollFunction();
}
