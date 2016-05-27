var taskInput = document.getElementById("new-task")               
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTaskHolder = document.getElementById("completed-tasks");

// newtask list item
var createNewTaskElement = function(taskString){
	var listItem = document.createElement("li");
	
	var checkBox = document.createElement("input");
	
	var label = document.createElement("label");
	
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");
	
	checkBox.type = "checkBox";
	editInput.type = "text";
	
	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";
	
	label.innerText = taskString;
	
	
	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	
	return listItem;
}
var addTask = function() {
	console.log("Add task...");
	var listItem = createNewTaskElement(taskInput.value);
	
	incompleteTaskHolder,appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	
	taskInput.value = "";
}
	

}

var editTask = function() {
	console.log("Edit task...");
	var listItem = this.parentNode;
	var editInput = listItem.querySelector("input[type=text]");
	var label =listItem,querySelector("label");
	var containsClass = listItem.classList.contains("editMode");
	if(containsClass) {
		label.innerText = editInput.value;
		
	} else {
		editInput.value = label.innerText;
	}
	listItem.classList.toggle("editMode");
}

var deleteTask = function() {
	console.log("Delete task...");
	var listItem = this.parentNode;
	var ul = listItem.parentNode;
	ul.removeChild(listItem);
}

var taskCompleted = function() {
	console.log("Task complete...");
	var listItem = this.parentNode;
	completedTaskHolder.appendChild(listItem);
}

var taskIncomplete = function() {
	console.log("Task incomplete...");
	var listItem = this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskIncomplete);
}
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
	console.log("Bind list item events");
	var checkBox = taskListItem.querysSelector("input[type=checkbox]");
	var editButton = taskListItem.querysSelector("button.edit");
	var deleteButton = taskListItem.querysSelector("button.delete");

	editButton.onclick = editTask;
	
	deleteButton.onclick = deleteTask;
	
	checkBox.onchange = checkBoxEventHandler;
	
	
}
var ajaxRequest = function() {
	console.log("Ajax request");
}



//set the click handler to the addtask function

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//var ajaxRequest = function() {
	//console.log("Ajax request");
//}
//addButton.onclick = ajaxRequest;

// cycle over the incomplete task holder
for(var 1 = 0; i < incompleteTaskHolder.children.length; i++) {
	
	//bind event to list item's children (taskCompleted)
	bindTaskEvents(incompleteTaskHolder.children[i], taskCompleted);
}

		
		
// cycle over the completedTask holder
for(var 1 = 0; i < completedTaskHolder.children.length; i++) {
	
		//bind event to list item's children (taskIncomplete)
		bindTaskEvents(completedTaskHolder.children[i], taskIncomplete);
}
		
		