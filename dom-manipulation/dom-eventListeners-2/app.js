let revealBtn = document.querySelector('.reveal-btn');

let hiddenContent = document.querySelector('.hidden');

console.log(hiddenContent.styles)

const showText = () => {
    hiddenContent.style.visibility = "visible";
    revealBtn.style.visibility = "hidden";
}

const hideText = () => {
    hiddenContent.style.visibility = "hidden";
    revealBtn.style.visibility = "visible";
}

revealBtn.addEventListener("click", showText)
hiddenContent.addEventListener("mouseout", hideText)



let revealBtn2 = document.querySelector('.reveal-btn2');
let hiddenContent2 = document.querySelector('.hidden2');

revealBtn2.addEventListener("click",()=>{
    if(hiddenContent2.classList.contains('hidden')){
        hiddenContent2.classList.remove('hidden')
        revealBtn2.style.position = ('relative');
        revealBtn2.innerText = ("Hide");
    }else{
        hiddenContent2.classList.add('hidden');
        revealBtn2.style.position = ('absolute');
        revealBtn2.innerText = ("Reveal More...");
    }

})