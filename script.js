
//список
let ul = document.querySelector(".todo__list-todos");
// let toDoList = document.querySelector(".todo__list");

//input нового ToDo
let newToDo = document.querySelector(".todo__form-newtodo"); 

//кнопки:
let addNew = document.querySelector("#addnew");
let del = document.querySelector("#delete");
let delAll = document.querySelector("#delete_all");
let edit = document.querySelector("#edit");
let complete = document.querySelector("#complete");


var id = 0; 	//идентификатор

let todos = {  	//объект содержащий объекты li
	"todo0" : document.querySelector("#todo0"),
};

var selectedToDo = null; //выделенный todo в данный момент


//добавление todo
addNew.onclick = function addToDo(e) {
	if (newToDo.value == "") {
		alert('Field is empty');
		return ;
	}
	// let ul = document.querySelector(".todo__list-todos");
	let li = document.createElement("li");

	let newId = 'todo' + String(++id);  //id
	li.setAttribute('id', newId);		//аттрибуты
	li.setAttribute('onclick', 'selectToDo(this)');

	todos[newId] = li; //записываем новый элемент в объект todos

	li.classList.add('todo__list-todos__item');
	li.appendChild(document.createTextNode(newToDo.value));
	ul.appendChild(li);


	for( let it in todos){
		console.log(it + " - " + todos[it]);
	}
	// console.log("li.id = " + li.id);
}


//выделение todo
function selectToDo(todo) {

	let color = 'green';
	if (todo.style.background == color) { //если элемент уже выделен, то снимаем выделение
		todo.style.backgroundColor = '#fff';
		selectedToDo = null;
		console.log('selectedToDo = ' + selectedToDo);
		return ;
	}
	for(let i in todos) {  //снимаем выделение (если есть) со всех значений
		console.log(todos[i]);
		todos[i].style.backgroundColor = '#fff';
	}
	selectedToDo = todo.id;
	todo.style.background = color;
	console.log('ID = ' + todo.id);
	document.addEventListener("click", () => {
	})
} 


//удаление выделенного todo
del.addEventListener("click", () => {
	if (selectedToDo != null)
	{
		document.getElementById(selectedToDo).remove();
		delete todos[selectedToDo];
		console.log("!!!!! = " + selectedToDo)
		selectedToDo = null;
	} else if (selectedToDo == null) {
		alert("ToDo is not selected");
		return ;
	}
});


//удаление всех todo
delAll.addEventListener("click", () => {

	if(confirm("Are you shure?"))
	{
		for(let it in todos) {
			// console.log(todos[it].textContent);
			document.getElementById(todos[it].id).remove();
			delete todos[it];

		}
		selectedToDo = null;
	}
	// ul.innerHTML = ''; //более короткий способ
});


//редактирование todo
edit.addEventListener("click", () => {

	if(selectedToDo == null) {
		alert("ToDo is not selected");
		return ;
	}
	let edited = prompt("You can edit your ToDo: ", todos[selectedToDo].textContent); //innerHTML
	if (edited === null)
		return ;
	todos[selectedToDo].textContent = edited;
	
});


//добавление класса готовности
complete.addEventListener("click", () => {

	if(selectedToDo == null) {
		alert("ToDo is not selected");
		return ;
	}
	todos[selectedToDo].classList.add('todo-complete');
});