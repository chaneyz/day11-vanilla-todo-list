var myButton = document.getElementById("click-me");
var messageInput = document.getElementById('message');
var state = false;

myButton.addEventListener("click", onButtonCLick);

function onButtonCLick(eventObj) {
	state = !state;
	if(state) {
		myButton.innerHTML = 'click my button';
	}
	else {
		myButton.innerHTML = 'thanks for clicking';
	}

	messageInput.innerHTML = '<div>' + messageInput.value + '</div>';	

}

///////////////////////////////////////////////////


var input = document.getElementById("message");
var messageList = document.getElementById("message-list");

input.addEventListener("keyup", appendMessage);

function appendMessage(event) {
	console.log(event);
	if(event.keyCode === 13) {
	messageList.innerHTML = "<div>" + input.value + "</div>";
	input.value = "";
	}
}


console.log('');


document.getElementById("click-me").innerHTML = 'changed text';


var todoList = [];




















