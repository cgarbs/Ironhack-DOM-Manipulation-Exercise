console.log('script.js connected');

// How to get attributes
const paragraphNode = document.querySelector('#paragraph');
console.log(paragraphNode.id);

const parId = paragraphNode.getAttribute('id');
console.log('--->', parId);

// Update attribute (or add attribute if doesn't previously exist)
paragraphNode.setAttribute('id', 'info-paragraph');
paragraphNode.setAttribute('class', 'paragraph');

// Remove attribute
paragraphNode.removeAttribute('id');

// Adding, updating and removing DOM elements

const mainTitle = document.createElement('h1');
mainTitle.innerHTML = 'This is the main title';

const parent = document.querySelector('body');
parent.appendChild(mainTitle);

// Inserting BEFORE (using SIBLINGS)

const sibling = document.querySelector('p');
parent.insertBefore(mainTitle, sibling);

// Updating existing elements

const link = document.getElementById('google-link');
link.innerHTML = 'Go to Google';

// Removing elements (removing the child)

parent.removeChild(paragraphNode);

// Assigning events to DOM elements

const addCommentButton = document.querySelector('#add-comment-button');
addCommentButton.addEventListener('click', () => {
    console.log('clicked on the comment button');
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'This is some very funny comment. HAHAHA.'
    parent.appendChild(newParagraph);
    });

// Handling inputs (and forms)
const newItemInput = document.getElementById('item-input');
const addItemButton = document.getElementById('add-item-button');
const deleteButtons = document.querySelectorAll('.delete-item-button')

addItemButton.addEventListener('click', () => {
    const listParent = document.getElementById('item-list');
    const newListItem = document.createElement('li');
    newListItem.innerHTML = `${newItemInput.value} <button class='delete-item-button'>🗑</button>`;
    listParent.appendChild(newListItem);
    newItemInput.value = '';
})

function deleteListItem(buttonUserClickedOn) {
    buttonUserClickedOn.addEventListener('click', () => {
        const parentLiTag = buttonUserClickedOn.parentElement;
        parentLiTag.remove();
    })
}

deleteButtons.forEach(deleteListItem);