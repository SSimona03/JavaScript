
let rotate = document.querySelector('.icon')

document.querySelector(".main-button").addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    rotate.style.setProperty(0, 180);
    
})