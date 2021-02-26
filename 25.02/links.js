const links = document.getElementsByClassName('links');
const nums = document.getElementsByClassName('num');
const paint = document.getElementsByClassName('paint');
const inputs = document.getElementsByClassName('input');
const test = document.getElementById('test');
const add = document.getElementById('add');
const ul = document.getElementById('ul');

for (let el of links) {
    el.addEventListener('mouseover', () => {
        document.title = el.innerText;
    })

    el.addEventListener('mouseover', () => {
        el.innerText += `(${el.href})`;
    }, {once: true})
}

for (let el of nums) {
    el.addEventListener('click', () => {
        el.innerText *= el.innerText;
    })
}

for (let el of paint) {
    el.addEventListener('click', green);
    el.addEventListener('click', red);
}

for (let el of inputs) {
    el.addEventListener('blur', () => {
        test.innerText = el.value;
        if (el.value.length == el.dataset.length) {
            el.style.borderColor = 'green';
        }
        else {
            el.style.borderColor = 'red';
        }
    })

    el.addEventListener('click', () => {
        alert(el.value);
    }, {once: true})
}

ul.addEventListener('click', (event) => {
    event.target.innerText += '!';
})

add.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = 'пункт';

    ul.insertAdjacentElement('beforeend', li);
})

function red() {
    this.style.backgroundColor = 'red';
    this.removeEventListener('click', red);
    this.addEventListener('click', green);
}

function green() {
    this.style.backgroundColor = 'green';
    this.removeEventListener('click', green);
    this.addEventListener('click', red);
}