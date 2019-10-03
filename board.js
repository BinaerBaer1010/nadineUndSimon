//Close-Icon hinter jedem List-Item
var todoList = document.getElementsByTagName("li");
var i;
for (i = 0; i < todoList.length; i++) {
    var span = document.createElement("SPAN");
    //u007D7 macht ein x hinter das Listenelement, um diesen zu löschen/ schließen
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    todoList[i].appendChild(span);
}

// Beim Klicken auf das Close-Icon wird das List-Item versteckt
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function newItem() {
    var li = document.createElement("li");
    var inputWert = document.getElementById("input_ToDo").value;
    var t = document.createTextNode(inputWert);
    li.appendChild(t);
    if (inputWert === '') {
        alert("Ungültige Eingabe! Bitte ToDo eingeben!");
    } else {
        document.getElementById("meineListe").appendChild(li);
    }
    document.getElementById("input_ToDo").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}