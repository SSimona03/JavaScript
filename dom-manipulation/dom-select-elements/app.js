//GetElementById
const titleExample = document.getElementById('main-title');

//GetElementByClassName
let listItemExample = document.getElementsByClassName("list-items");

//GetElementByTagName
const listItemssExample = document.getElementsByTagName('li'); //shows in order that appears

//querySelector
let firstItemThatFoundsExample = document.querySelector('li');

//querySelectorAll
let allElementsFoundExample = document.querySelectorAll('li');

///*************************************************************************     STYLE ELEMENTS */
let title = document.querySelector('#main-title');
title.style.color = "#FF8DC7";

let items = document.querySelectorAll('li');

items.forEach((x)=>{
    x.style.color = "#432C7A";
})

///*************************************************************************    SHOW Text */
let text = document.querySelector('ul'); 
//console.log(text.innerText);
// Magic Harry Potter
// Matrix
// Fast and Furious
// Minions
// Despicable me

//console.log(text.textContent);
            // Magic 
                //Harry Potter
            // Matrix
            // Fast and Furious
            // Minions
            // Despicable me
        
//console.log(text.innerHTML);
{/* <li class="list-items" style="color: rgb(67, 44, 122);"><span>Magic </span>Harry Potter</li>
<li class="list-items" style="color: rgb(67, 44, 122);">Matrix</li>
<li class="list-items" style="color: rgb(67, 44, 122);">Fast and Furious</li>
<li class="list-items" style="color: rgb(67, 44, 122);">Minions</li>
<li class="list-items" style="color: rgb(67, 44, 122);">Despicable me</li>
<li></li> */}


///*************************************************************************    CREATE ELEMENTS */

let newItem = document.querySelector('ul');
let item = document.createElement('li');

newItem.append(item);
item.innerText = "X-Men";

///*************************************************************************    SET REMOVE  ATTRIBUTE + CLASSES */
//item.setAttribute('id','list-items');
//item.removeAttribute('id');
//item.remove();

item.classList.add('list-items');
item.classList.remove('list-items');
//console.log(item.classList.contains("testClass")) //output: false
item.remove();


///*************************************************************************    TRAVERSING THE DOM */

//Parent Node
let parent = document.querySelector('ul'); 
// console.log(parent.parentNode.parentNode) . going upwards will count indentations!
// console.log(parent.parentElement.parentElement)

const html = document.documentElement;

//Child Node
let child = document.querySelector('ul'); 
//child.childNodes[1].style.color = 'red';
child.firstElementChild.style.color = 'red';

//console.log(child.firstElementChild) //going downwards

//Sibling Node
let siblingNode = document.querySelector('ul'); 
const div = document.querySelector('div');


console.log(div.childNodes)
console.log(siblingNode.previousElementSibling)
console.log(siblingNode.nextElementSibling) 