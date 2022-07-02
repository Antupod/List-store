function listShop()  {
    const addListItem = document.querySelector('.list-submit');
    const clearList = document.querySelector('.list-clear');
    const deleteListItem = document.querySelector('.list-delete');
    document.querySelector('.list-add-container').e.preventDefault()

    addListItem.addEventListener('click', createList);
    deleteListItem.addEventListener('click', removeListItem);
    clearList.addEventListener('click', clearListSheet);
}

function createList() {
    const list = document.querySelector('.list');
    const textFromListInput = document.querySelector('.list-add');

    const elementList = document.createRange().createContextualFragment(
        `
                <li class="list-element">
                    <span class="list-element-text">${textFromListInput.value}</span>
                    <button class="list-delete">
                        <img class="list-img" src="img/delete.svg" alt="delete" width="30" height="40">
                    </button>
                </li>
            `);

    list.appendChild(elementList);
    textFromListInput.value = '';
}

function removeListItem(deleteListItem) {
    deleteListItem.parentElement.remove();
}

function clearListSheet(list) {
    list.innerHTML = '';
}

listShop();