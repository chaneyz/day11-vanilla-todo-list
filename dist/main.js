var saveButton = document.getElementById("save");
var messageInput = document.getElementById('todo-input');
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


var todoList = document.getElementById("todo-list");

messageInput.addEventListener("keyup", appendMessage);

function appendMessage() {
	if(event.keyCode === 13) {
		todoList.innerHTML += "<div>" + messageInput.value + "</div>";
		messageInput.value = "";
	}
}


///////////////////////////////////////////////////


var todos = [];
var messageBox  = document.getElementById("todo-list");

function clearAndShow() {
	messageInput.value = "";
  	messageBox.innerHTML = "";
  	messageBox.innerHTML += "Todos: " + todos.join(", ") + "<br/>";
}





















