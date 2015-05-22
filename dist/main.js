var myButton = document.getElementById("Save");
var messageInput = document.getElementById('message');
var state = false;

myButton.addEventListener("click", onButtonClick);

function onButtonClick(eventObj) {
	state = !state;
	if(state) {
		myButton.innerHTML = 'Save Item';
	}
	else {
		myButton.innerHTML = 'Item Saved!';
	}

	messageInput.innerHTML = '<div>' + messageInput.value + '</div>';	

}

///////////////////////////////////////////////////


var input = document.getElementById("todoInput");
var todoList = document.getElementById("todo-list");

input.addEventListener("keyup", appendMessage);

function appendMessage(event) {
	console.log(event);
	if(event.keyCode === 13) {
	todoList.innerHTML += "<div>" + input.value + "</div>";
	input.value = "";
	}
}


console.log('');


// var todoList = [];




















