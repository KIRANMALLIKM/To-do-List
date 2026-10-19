var ul = document.getElementById("list-container");
var input = document.getElementById("input");

function add() {
    if (input.value.trim() === "") return; // Prevents adding empty tasks
    var listitem = document.createElement("li");
    listitem.innerHTML = input.value + "<button onclick='deleteitem(event)'>delete</button>";
    ul.append(listitem);
    input.value = ""; // Clear input field after adding
}  

function deleteitem(event) {
    event.target.parentElement.remove();
}