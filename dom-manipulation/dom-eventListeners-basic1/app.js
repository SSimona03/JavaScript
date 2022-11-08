//EVENT LISTENERS

//element.addEventListener("click", function)

//const TEST = document.getElementsByClassName("btn-2");
const buttonTwo = document.querySelector('.btn-2');



buttonTwo.addEventListener("click", ()=>{
    alert("I Love Minions!")
});


//MouseOver

const buttonThree = document.querySelector('.btn-3')

let changeColor = () => {
    buttonThree.style.backgroundColor = "red";
}

buttonThree.addEventListener("mouseover", changeColor);


buttonThree.addEventListener("mouseout",()=>{
    buttonThree.style.backgroundColor = "#47354c";
})
