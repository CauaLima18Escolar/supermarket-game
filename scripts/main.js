const menuActions = document.querySelector('.menu-actions')
const computerMenu_BTN = document.getElementById('computer-btn');
const storageMenu_BTN = document.getElementById('storage-btn');
const computerWindow = document.querySelector('.computer-window');
const storageWindow = document.querySelector('.storage-window');

computerMenu_BTN.addEventListener('click', () => {
    computerWindow.classList.toggle('window_AltShow');
});

storageMenu_BTN.addEventListener('click', () => {
    storageWindow.classList.toggle('window_AltShow');
});

function closeWindow({ target }){
    const targetParent = target.parentElement.parentElement
    targetParent.classList.toggle('window_AltShow')
};

let currentMovingWindow
let isDragging = false;
let offsetX, offsetY;

function moveWindow({ clientX, clientY, target}){
    isDragging = true

    if (currentMovingWindow){
        currentMovingWindow.classList.remove('window_AboveAll')
    }

    currentMovingWindow = target.parentElement
    currentMovingWindow.classList.add('window_AboveAll')
    offsetX = clientX - currentMovingWindow.getBoundingClientRect().left;
    offsetY = clientY - currentMovingWindow.getBoundingClientRect().top;
};

document.addEventListener('mousemove', ({ clientX, clientY }) => {
    if (isDragging) {
        const x = clientX - offsetX;
        const y = clientY - offsetY;

        if (x <= menuActions.clientWidth){
            currentMovingWindow.style.left = `${menuActions.clientWidth}px`;

        } else if (y <= 0) {
            currentMovingWindow.style.top = '0px';

        } else {
            currentMovingWindow.style.left = `${x}px`
            currentMovingWindow.style.top = `${y}px`;
        }
        
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});