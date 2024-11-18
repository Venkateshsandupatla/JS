// array for the todo list
const todoArray = [];

renderTodoList();
function renderTodoList(){

  let todoListHtml ='';

  for(let i =0;i<todoArray.length;i++){
    const todo = todoArray[i];
    // generating html tag through javascript
    const html = `<p>${todo}</p>`;
    todoListHtml += html;
  }
  console.log(todoListHtml);
  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
};


// when we click the buton this function will run and save the element into th earray

function addTodo(){
  const inputELement =  document.querySelector('.js-input-name');

 // console.log(inputELement);
  const name = inputELement.value;

  //console.log(name);

  // now we have to add the name to our array
  todoArray.push(name);
  console.log(todoArray);

  // after writing in input box it should clear and come to reular place holder
 
  inputELement.value = '';  

  renderTodoList();
}

