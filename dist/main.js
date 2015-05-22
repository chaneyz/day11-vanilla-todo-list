var saveButton = document.getElementById("save");
var messageInput = document.getElementById('todoInput');
var state = false;

saveButton.addEventListener("click", onButtonClick);

function onButtonClick() {
	state = !state;
	if(state) {
		saveButton.innerHTML = 'Save Item';
	}
	else {
		saveButton.innerHTML = 'Item Saved!';
	}

	messageInput.innerHTML = '<div>' + messageInput.value + '</div>';

}

///////////////////////////////////////////////////


var input = document.getElementById("todoInput");
var todoList = document.getElementById("todo-list");

input.addEventListener("keyup", appendMessage);

function appendMessage() {
	if(event.keyCode === 13) {
	todoList.innerHTML += "<div>" + input.value + "</div>";
	input.value = "";
	}
}


///////////////////////////////////////////////////


var todos = [];
var messageBox  = document.getElementById("todo-list");

function clearAndShow() {
	todoInput.value = "";
  	messageBox.innerHTML = "";
  	messageBox.innerHTML += "Todos: " + todos.join(", ") + "<br/>";
}





















