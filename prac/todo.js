console.log("working");

const form = document.getElementById('form');
const text = document.getElementById('input');
const list = document.querySelector('.list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    createIteam(text.value);
})

function createIteam(item) {
    if (text.value.length > 0) {
        let html = `<li class="list-item">${item}<button class="btn delete">Delete</button></li>`
        list.insertAdjacentHTML('beforeend', html);
        text.value = "";
        text.focus();

    } else {
        alert("error has been occured");

    }
}