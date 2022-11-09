
//it allows users to append a SINGLE event listener to a parent element that adds it to all of its presend and Future descendants that matched a selector

document.querySelector('#sports').addEventListener("click", (e)=>{
    console.log(e.target.getAttribute('id')+ ' is clicked');
    e.target.style.backgroundColor = "#905E96";
    console.log(e)
})