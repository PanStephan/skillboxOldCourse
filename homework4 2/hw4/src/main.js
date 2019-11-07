loadSelectors();
// load every event in the page 
function loadEvents() {
   document.querySelector('form').addEventListener('submit',submit);
   document.querySelector('ul').addEventListener('click',deleteOrFold);
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
   if (ev.target.className == 'list-item__text' || ev.target.className == 'list-item__text cross') {
      ev.target.classList.toggle('cross');
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
   li.innerHTML = `<span class="list-item__subtitle">${new_task}</span><a class="list-item__delete">&times;</a><hr><span class="list-item__text">${new_task1}</span>`;
   ul.appendChild(li);
}

function deleteOrFold(e) {
   if (e.target.className == 'list-item__delete') {
      deleteTask(e);
      var rr = document.querySelectorAll('.list-item__delete');
      if (rr.length === 0) {
         var ul = document.querySelector('ul');
         var li = document.createElement('li');
         li.setAttribute("class", "list-item__empty" );
         li.innerHTML = `Список пуст`;
         ul.appendChild(li);
      }
   }

}

// delete task
function deleteTask(e) {
   var remove = e.target.parentNode;
   var parentNode = remove.parentNode;
   parentNode.removeChild(remove);
}

