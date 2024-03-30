var enterButton = document.getElementById('enter');
var input = document.getElementById('userInput');
var ul = document.getElementById('ul');
var item = document.getElementsByTagName('li');

const inputLength = () => {
    return input.value.length;
}

const creatListElement = () => {
    var li = document.createElement('li');

    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = '';

    function crossOut() {
        li.classList.toggle('done');
    }

    li.addEventListener('click', crossOut);

    var deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('X'));
    li.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', deleteListItem);

    function deleteListItem() {
        li.classList.add('delete');
    }
}

enterButton.addEventListener('click', addListerAfterClick);
input.addEventListener('keypress', addListAfterKeyPress);

function addListerAfterClick() {
    if (inputLength() > 0) {
        creatListElement();
    }

}

function addListAfterKeyPress() {
    if (inputLength() > 0 && event.which === 13) {
        creatListElement();
    }
}