const computerMenu_BTN = document.getElementById('computer-btn');
const storageMenu_BTN = document.getElementById('storage-btn');
const computerWindow = document.querySelector('.computer-window');
const storageWindow = document.querySelector('.storage-window');

computerMenu_BTN.addEventListener('click', () => {
    computerWindow.classList.toggle('altShow_Window');
});

storageMenu_BTN.addEventListener('click', () => {
    storageWindow.classList.toggle('altShow_Window');
});

function closeWindow({ target }){
    const targetParent = target.parentElement.parentElement
    targetParent.classList.toggle('altShow_Window')
};

let currentMovingWindow
let isDragging = false;
let offsetX, offsetY;

function moveWindow({ clientX, clientY, target}){
    isDragging = true
    currentMovingWindow = target.parentElement
    offsetX = clientX - currentMovingWindow.getBoundingClientRect().left;
    offsetY = clientY - currentMovingWindow.getBoundingClientRect().top;
};

document.addEventListener('mousemove', ({ clientX, clientY }) => {
    if (isDragging) {
        const x = clientX - offsetX;
        const y = clientY - offsetY;
        currentMovingWindow.style.left = `${x}px`;
        currentMovingWindow.style.top = `${y}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});