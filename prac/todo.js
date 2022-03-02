console.log("working");

const form = document.getElementById('form');
const text = document.getElementById('input');
const list = document.querySelector('.list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let val = text.value.trim();
    if (val.length) {
        createIteam(text.value)
    }
})

function createIteam(item) {
    if (text.value.length > 0) {
        let html = `<li class="list-item">${item}<button id="${index}" click="deleteIt(this.id)" class="btn delete">Delete</button></li>`
        list.insertAdjacentHTML('beforeend', html);
        text.value = "";
        text.focus();
    }
}

list.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});