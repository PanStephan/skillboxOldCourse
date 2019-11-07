"use strict";

import './index.css';

function Counter() {
   document.querySelector('.button-js').addEventListener('click', () => {
      console.log('click');
   });
}

function AddBtn() {
   const btn = document.createElement('button');
   btn.classList.add("class", "button-js" );
   btn.innerHTML = `Click me`;
   document.body.appendChild(btn);
}

window.onload = function() {

   // add btn to page
   AddBtn();

   // count click
   Counter();

}

