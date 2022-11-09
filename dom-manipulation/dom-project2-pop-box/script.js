let btnStart = document.querySelector('.btn');
let banner = document.querySelector('.popBox');
let close = document.getElementById('close');
let container = document.querySelector('.container');

btnStart.addEventListener("click", ()=> {
    banner.classList.add("animate");
    container.style.background = ('linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(forest.jpeg) center no-repeat');
    container.style.backgroundSize = ('cover');
   
    
})


close.addEventListener("click", () => {
    banner.style.transition = "opacity 0.5s ease-in";
    banner.style.opacity = "0";


    let removeClass = () => {
        banner.classList.remove("animate")
        banner.style.opacity = "1";
        
        container.style.background = ('url(forest.jpeg) center no-repeat');
        container.style.backgroundSize = ('cover');}
    setTimeout(removeClass, 503);
})

