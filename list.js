var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");

while (input !== "quit") {

  //handle input
  if(input === "list") {
    todos.forEach(function(todo){
      console.log(todo);
    })
    // console.log(todos);
  } else if(input === "new") {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add todos array
     todos.push(newTodo);
  }
  //ask again for ndw input
  input = prompt("What would you like to do?");
}
console.log("ok, you quit the app");
