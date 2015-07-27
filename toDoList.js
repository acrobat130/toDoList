//javaScript for toDoListProject

// VERSION 1 ------------ DOESN'T APPEND HTML

//create empty array to hold toDoList items
var toDoList = [];

//function to insert toDoList array into HTML
function appendItem() {
	for(var i = 0; i < toDoListLength; i++) {
		var toDoListLength = toDoList.length;
		//create new li tag
		var newLine = document.createElement('li');
		//add toDoListItem text to new p tag
		newLine.innerHTML = toDoList[i];
		//append p tag with text to the list
		document.getElementById('list').appendChild(newLine);
	};
};

//after window loads, run scripts
window.onload = function() {
	//prompt user for new toDoListItem
	document.getElementById('inputButton').onclick = function() {
		var toDoListItem = prompt('What do you want to add?');
		//add new toDoListItem to array
		toDoList.push(toDoListItem);
		appendItem();
	};
	
};

/* VERSION 2 ----------- ALSO DOESN'T APPEND HTML

var itemPlusHTML = "";

//function to insert toDoList array into HTML
function appendItem() {
	for(i = 0; i < toDoListLength; i++) {
		//variable for each toDoList item
		var newLine = toDoList[i];
		//add html to new toDoList item
		itemPlusHTML += '<li>' + newLine + '<li>';
	};
	document.getElementById('list').innerHTML = itemPlusHTML;
};

//after window loads, run scripts
window.onload = function() {
	//prompt user for new toDoListItem
	document.getElementById('inputButton').onclick = function() {
		var toDoListItem = prompt('What do you want to add?');
		//add new toDoListItem to array
		toDoList.push(toDoListItem);
		appendItem();
	};
};

*/






