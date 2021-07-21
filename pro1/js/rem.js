// 最大字体为42
const MAX_FONT_SIZE = 42;
document.addEventListener("DOMContentLoaded", setFon);
function setFon () {
    const html = document.querySelector("html");
    let width = window.innerWidth
    let fontSize = width / 10;
    fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;
    html.style.fontSize = fontSize + "px";
};
setFon()
window.onresize = function () {
    setFon();
};