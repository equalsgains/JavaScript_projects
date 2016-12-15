var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

function listTodos() {
  console.log("********************");
  todos.forEach(function(todo, i){
  console.log(i + ": " + todo);
  })
  console.log("********************");

}

function addTodo() {
  //ask for new todo
  var newTodo = prompt("Enter new todo");
  //add todos array
  todos.push(newTodo);
  console.log("Added " + newTodo + " to the list");
}

function deleteTodo() {
  //ask for index of todo to be delted
  var index = prompt("Enter index of todo to delete");
  //delete that todo
  //1 represents how many items in the array should be delted
  todos.splice(index,1);
  console.log("delted to do");
}
while (input !== "quit") {

  //handle input
  if(input === "list") {
    listTodos();
  } else if(input === "new") {
    addTodo();
  } else if (input === "delete") {
    deleteTodo();
  }
  //ask again for ndw input
  input = prompt("What would you like to do?");
}
console.log("ok, you quit the app");
