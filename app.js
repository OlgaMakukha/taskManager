const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');
const colHeaders = document.querySelectorAll('.col-header');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide');
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.target.classList.add('hovered');
    let placeholder = event.target.closest('.placeholder');
    let placeholderId = placeholder.dataset.id;
    if (placeholderId) {
        let colHeader = document.querySelector(`.${placeholderId}`);
        colHeader.classList.add('scale');
    }

}

function dragleave(event) {
    event.target.classList.remove('hovered');
    colHeaders.forEach(colHeader => colHeader.classList.remove('scale'));
}

function dragdrop(event) {
    event.target.append(item);
    event.target.classList.remove('hovered');
    colHeaders.forEach(colHeader => colHeader.classList.remove('scale'));
}