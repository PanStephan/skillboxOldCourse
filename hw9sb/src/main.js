'use strict'; 

loadSelectors();
// load every event in the page 
function loadSelectors() {
   document.querySelector('form').addEventListener('submit',submit);
   document.querySelector('ul').addEventListener('click',deleteOrFold);
}

var list = document.querySelector('ul');

var save__button = document.querySelector('.list-save__button');

list.addEventListener('click', function(ev) {

   var text = document.querySelectorAll('.list-item__text');
   var subtitle = document.querySelectorAll('.list-item__subtitle');

   if (ev.target.className == 'list-item__edit') {
      ev.target.classList.add('list-item__edit__unactive');
      save__button.removeAttribute('disabled');    
      for (var i = 0; i < subtitle.length; i++) {
         subtitle[i].setAttribute("contenteditable", "true" );
         text[i].setAttribute("contenteditable", "true" );
      }
   }

   if (ev.target.className == 'list-save__button') {
      for(var i = 0; i < subtitle.length; i++) {
         localStorage.setItem('ee'+[i], text[i].value);
      }
   }
});

// subit data function
function submit(e) {
   e.preventDefault();
   var input = document.querySelector('textarea');
   if(input.value != '') {
      addTask(input.value);
      input.value = '';
   }
   else 
      alert('Заполните Название!');
}

// add tasks
function addTask() {
   var ul = document.querySelector('ul');
   var li = document.createElement('li');
   li.classList.add("class", "list-item" );
   var new_task = document.getElementById('name').value;
   var new_task1 = document.getElementById('discription').value; 
   li.innerHTML = `<span class="list-item__subtitle">${new_task}</span><a class="list-item__delete">&times;</a><hr><div class="list-item__block"><span class="list-item__text">${new_task1}</span></div`;
   ul.appendChild(li);
   var emptyNote = document.querySelector('.list-item__empty');
   ul.removeChild(emptyNote);
}

function deleteOrFold(e) {
   if (e.target.className == 'list-item__delete') {
      deleteTask(e);
   }
   var delete_button = document.querySelectorAll('.list-item__delete');
   if (delete_button.length === 0) {
      var ul = document.querySelector('ul');
      var li = document.createElement('li');
      li.setAttribute("class", "list-item__empty" );
      li.innerHTML = `Список пуст`;
      ul.appendChild(li);
   }
}

// delete task
function deleteTask(e) {
   var remove = e.target.parentNode;
   var parentNode = remove.parentNode;
   parentNode.removeChild(remove);
}

