


// let ul = document.querySelector(".todo__list-todos");
// let toDoList = document.querySelector(".todo__list");
let newToDo = document.querySelector(".todo__form-newtodo");
let addNew = document.querySelector("#addnew");

// console.log(newtodo.value)

var id = 0;

addNew.onclick = function addToDo() {
	if (newToDo.value == "") {
		alert('field is empty');
		return ;
	}
	let ul = document.querySelector(".todo__list-todos");
	let li = document.createElement("li");
	// var li = document.createElement("li");
	li.setAttribute('id', ++id);
	li.classList.add('todo__list-todos__item');
	li.appendChild(document.createTextNode(newToDo.value));
	ul.appendChild(li);
	// alert(ul.children.length);
	// alert(li.id);

}


