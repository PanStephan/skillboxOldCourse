'use strict'; 

var textEl = document.querySelector('.textzone-js');
var saveButtonEl = document.querySelector('.save-button-js');
var cancelButtonEl = document.querySelector('.cancel-button-js');
var editButtonEl = document.querySelector('.edit-button-js');

document.querySelector('.wrapper').addEventListener('click', function(ev) {

   if (ev.target.classList.contains('edit-button-js')) {
      localStorage.setItem('text', textEl.innerHTML);     
      setEditedState();
      removeEditedState();   
   }

   if (ev.target.classList.contains('save-button-js')) {
      localStorage.setItem('text', textEl.innerHTML); 
      setSaveCancelState();
      removeSaveCancelState();
   }

   if (ev.target.classList.contains('cancel-button-js')) {
      var oldText = localStorage.getItem('text');
      textEl.innerHTML = oldText;
      setSaveCancelState();
      removeSaveCancelState();
   }
   
});

function setSaveCancelState () {
   saveButtonEl.setAttribute('disabled', 'true');
   cancelButtonEl.setAttribute('disabled', 'true');
   
}
function removeSaveCancelState () {
   textEl.removeAttribute("contenteditable");
   editButtonEl.removeAttribute('disabled');

}

function setEditedState() {
   textEl.setAttribute("contenteditable", "true" );
   editButtonEl.setAttribute('disabled', 'true');
}

function removeEditedState() {
   saveButtonEl.removeAttribute('disabled');
   cancelButtonEl.removeAttribute('disabled');
}

if (localStorage.getItem("text") != null) {
   var storageText = localStorage.getItem('text');
   textEl.innerHTML = storageText;
}
