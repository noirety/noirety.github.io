var box=my$("box");
var screen=box.children[0];
var imgWidth=1000;
var ulObj=screen.children[0];
var list=ulObj.children;
var olObj=box.children[1].children[0];
var liObj=olObj.children;
var pic=0;
for (var i = 0; i < 4; i++) {
    liObj[i].onclick = function () {
        for (var j = 0; j < 4; j++)
            olObj.children[j].removeAttribute("class");
        this.className = "current";
        pic = this.getAttribute("index");
        animate(ulObj, -pic * imgWidth);
    };
}
ulObj.appendChild(ulObj.children[0].cloneNode(true));
var timeId = setInterval(clickHandle, 4000);
function clickHandle() {
    if (pic == list.length - 1) {
        pic = 0;
        ulObj.style.left = 0 + "px";
    }
    pic++;
    animate(ulObj, -pic * imgWidth);
    if (pic == list.length - 1) {
        olObj.children[olObj.children.length - 1].className = "";
        olObj.children[0].className = "current";
    } else {
        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        olObj.children[pic].className = "current";
    }
};
function animate(element, target) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var current = element.offsetLeft;
        var step = 10;
        step = current < target ? step : -step;
        current += step;
        if (Math.abs(current - target) > Math.abs(step)) {
            element.style.left = current + "px";
        } else {
            clearInterval(element.timeId);
            element.style.left = target + "px";
        }
    }, 8);
}
var inSide=my$("box");
inSide.onmouseover = function () {
    clearInterval(timeId);
};
inSide.onmouseout = function () {
    timeId = setInterval(clickHandle, 4000);
};