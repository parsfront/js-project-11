const container = document.querySelector("#container");
console.log(container);

window.onmousemove = function (e) {
    let x = e.clientX / 5;
    let y = e.clientY / 5;

    container.style.backgroundPositionX = x + "px";
    container.style.backgroundPositionY = y + "px";
};
