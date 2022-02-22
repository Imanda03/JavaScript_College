const form = document.getElementById('form');
const field = document.getElementById('field');
const list = document.querySelector('.list');

form.addEventListener('submit', function(e){
    e.preventDefault();
    createItem(field.value);
 
})

function createItem(item){
    let html =`<li class="list-item">${item} <button class="btn delete" >Delete</button></li>`
    list.insertAdjacentHTML("beforeend",html);
    field.value = '';
    field.focus();
}

function deleteItem(){
    
}