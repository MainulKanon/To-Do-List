
const input = document.getElementById("input-box");
const btn = document.getElementById("btn");
const listCon = document.getElementById("list-con");


btn.addEventListener('click', function () {

    if (input.value === "") {
        alert(" You Must Add Something")
    } else {

        let li = document.createElement("li");
        li.innerHTML = input.value;
        listCon.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    input.value = "";
    saveData();

});

listCon.addEventListener('click', function (e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "SPAN") {

        e.target.parentElement.remove();
        saveData();

    }
});

function saveData() {

    localStorage.setItem("data", listCon.innerHTML);
}

function showList() {
    listCon.innerHTML = localStorage.getItem("data");
}

showList();