var tododb = [];

const renderTodo = (todoArray = []) => {
  var ul = document.querySelector(".todo-list");
   ul.innerHTML = "";

  todoArray.forEach((todo) => {
    var li = document.createElement("li");
    ul.appendChild(li);

    const notChecked = todo.checked ? "done" : " ";
    li.setAttribute("class", `todo-item ${notChecked}`);
    li.setAttribute("data-key", todo.id)

    const right = li.innerHTML = `<input id="${todo.id}" type="checkbox" ${todo.checked ? "checked" : "" } />

      <label for=${todo.id} class="" tick js-tick"/>
      <span>${todo.task}</span>
      <button class="delete-todo js-delete-todo delete-button" id=${todo.id}>
          <svg><use href="#delete-icon"</use></svg>
      </button>
      `
  });

  //delete button 
  document.querySelectorAll(".delete-button").forEach((todo) =>
    todo.addEventListener("click", (element) => {
      console.log(deleteTask(element?.target));
    })
  );



  //toggle button 
  document.querySelectorAll("input[type=checkbox]").forEach((todo) =>
    todo.addEventListener("click", (element) => {
      console.log(toggleDown(element?.target));
    })
  );
};

//implement the link to get to google

const schemaTask = (task) => {
  const date = new Date();
  const todoSchema = {
    task,
    checked: false,
    id: Date.now(),
    dateFormate: `DATE: ${date.getDay()}| ${date.getMonth()} | ${date.getFullYear()}  TIME: ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`,
  };


  tododb.push(todoSchema);
  renderTodo(tododb);

  saveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const selectArray = tododb.map((todo, index) => {
        
    })

    console.log(selectArray)
    saveData(tododb, "todo.txt");
  });
};


var input = document.querySelector(".input");
const button = document.getElementById("buttonEnter");
const error = document.getElementById("error");

button.addEventListener("click", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (text == "") {
    error.innerHTML = "Empty Field!";
    input.value = "";
    input.focus();

  } else {
    
    schemaTask(text);
    input.value = "";
    input.focus();
  }
});


const deleteAll = document.querySelector(".clearall");
deleteAll.addEventListener("click", (event) => {
  event.preventDefault();
  tododb = []
  renderTodo(tododb); 
});


//delete function 
const deleteTask = (element) => {
  let key = element?.id;
  tododb = tododb.filter((value) => value.id != Number(key));
  renderTodo(tododb);
};

//toggle function 
const toggleDown = (element) => {
  let key = element?.id; //targeting the id's of the task
  tododb = tododb.map((todo) => {
    if(todo.id == key) {
      todo.checked = !todo.checked;

    }

    return todo;
  });

  renderTodo(tododb);
};



module.exports = {
  renderTodo,
  schemaTask,
  toggleDown,
  deleteTask,
  join, 
};









