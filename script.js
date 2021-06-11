let input = document.querySelector("input");
let ul = document.querySelector("ul");
input.onkeypress = function (event) {
    if (event.keyCode === 13) {
        if (input.value != "") {
            add();
        } else {
            alert("Вы не вписали задачу!")
        }
    }
}
ul.onclick = function (event) {
    let target = event.target;
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
    } else if (target.tagName === "IMG") {
        target.parentElement.remove();
    }
}
document.querySelector(".finish").onclick = function () {
    let els = ul.querySelectorAll("li");
    for (let i = 0; i < els.length; i++) {
        els[i].classList.add("checked");
    }
}
document.querySelector(".clear").onclick = function () {
    ul.innerHTML = "";
}
document.querySelector(".add").onclick = function () {
    if (input.value != "") {
        add();
    } else {
        alert("Вы не вписали задачу!")
    }
}

function add() {
    let img = document.createElement("img");
    let span = document.createElement("span");
    let li = document.createElement("li");
    span.innerHTML = input.value;
    img.setAttribute("src", "garbage.svg");
    li.appendChild(img);
    li.appendChild(span);
    ul.appendChild(li);
    input.value = "";
}
