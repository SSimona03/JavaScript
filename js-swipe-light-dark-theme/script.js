
let iconRotate = document.querySelector('.icon')

document.querySelector(".main-button").addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let currentRotation = parseInt(getComputedStyle(iconRotate).getPropertyValue('--rotation'));
    iconRotate.style.setProperty('--rotation', currentRotation + 180)
    
})

