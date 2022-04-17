function listShop()  {
    const list = document.querySelector('.list');
    const addList = document.querySelector('.list-submit');
    const clearList = document.querySelector('.list-clear');
    const addText = document.querySelector('.list-add');

    function createList() {
        if(!addText.value) return;

        const elementList = document.createRange().createContextualFragment(
            `
                <li class="list-element">
                    <span class="list-element-text">${addText.value}</span>
                    <button class="list-delete">
                        <img class="list-img" src="img/delete.svg" alt="delete" width="30" height="40">
                    </button>
                </li>
            `);

        list.appendChild(elementList);
        addText.value = ''; 
    }

    function removeListItem(evt) {
        let element = evt.target.closest('.list-delete');
        
        if (!element) return;
        
        element.parentElement.remove();
    }

    function clearListSheet() {
        list.innerHTML = '';
    };

    addList.addEventListener('click', createList);
    list.addEventListener('click', removeListItem);
    clearList.addEventListener('click', clearListSheet);
}

document.addEventListener("DOMContentLoaded", listShop);