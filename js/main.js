var todos = ["Code"];

var input = prompt("What would you like to do?");

while(input !== "quit") {

	if(input === "list") {
		listTodos();
	} else if(input === "new") {
		newTodo();
	} else if ( input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?");
} 
alert("Okay, you quit.");


function listTodos() {
	//use a forEach loop to print everything on its own line from the array aka items in this scenario
	console.log("**********");
	todos.forEach(function (items, i) {
		console.log(i + ": " + items);
	})
	console.log("**********");
};

function newTodo() {
	//prompt for new todos
	var newTodos = prompt("Enter new todos");
	//add to the todos array
	todos.push(newTodos);
	console.log("Added new todos to your list.")
};

function deleteTodo() {
	//ask for index of todos to be removed
	var index = prompt("Enter index number of todo to delete from your list");
	//delete that specific todo in todos array
	//splice() method
	todos.splice(index, 1);
	alert("Yeleted the item from your list");
};

