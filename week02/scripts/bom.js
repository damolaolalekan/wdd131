const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
list.append(li);

<button aria-label="Close" id="close-button">❌</button>

button.addEventListener('click', function() {

});

document.addEventListener("DOMContentLoaded", function() {
});

if (input.value.trim() !== '') { ... }

deleteButton.addEventListener('click', function () {
  list.removeChild(li);
  input.focus();
});

input.value = '';

input.focus();




button.addEventListener('click', function () {
  if (input.value.trim() !== '') {
    // Create list item
    const li = document.createElement('li');
    li.textContent = input.value;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    // Append delete button to list item
    li.appendChild(deleteButton);

    // Append list item to list
    list.appendChild(li);

    // Clear input and refocus
    input.value = '';
    input.focus();
  } else {
    // If input is empty, return focus
    input.focus();
  }
});
