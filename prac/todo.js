console.log("working");

const form = document.getElementById('form');
const text = document.getElementById('input');
const list = document.querySelector('.list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let val = text.value.trim();
    if(val.length){
        createIteam(text.value)
    }
})

function createIteam(item) {
<<<<<<< HEAD
    if (text.value.length > 0) {
        let html = `<li class="list-item">${item}<button id="${index}" click="deleteIt(this.id)" class="btn delete">Delete</button></li>`
=======
        let html = `<li class="list-item">${item}<button  class="btn delete">Delete</button></li>`
>>>>>>> 7c3100dfa632626127976917603c820845e43166
        list.insertAdjacentHTML('beforeend', html);
        text.value = "";
        text.focus();

}

list.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
<<<<<<< HEAD
}

//function to delete item
function deleteIt(index) {
    console.log("deleting", index);
}
=======
})
>>>>>>> 7c3100dfa632626127976917603c820845e43166
