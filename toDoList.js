//javaScript for toDoListProject

//create empty array to hold toDoList items
var toDoList = [];

//function to insert toDoList array items into HTML
function appendItem(item) {
	//create new li tag
	var newLine = document.createElement('li');
	//add toDoListItem text (and future removeButton) to new p tag
	newLine.innerHTML = item/* + ' ' + '<button id="removeButton">Remove</button>'*/;
	//append p tag with text to the list
	document.getElementById('list').appendChild(newLine);
};

//after window loads, run scripts
window.onload = function() {
	//prompt user for new toDoListItem
	document.getElementById('inputButton').onclick = function() {
		//save prompt answer to variable
		var toDoListItem = prompt('What do you want to add?');
		//add new toDoListItem to array
		toDoList.push(toDoListItem);
		//add new toDoListItem to HTML
		appendItem(toDoListItem);
	};
	//future - function to remove toDoList items
	//document.getElementById('removeButton').onclick = function(){};
	
};





