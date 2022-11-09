window.addEventListener("click" ,()=>{ //the 3rd parameter event capture or event bubeling 
    console.log('Window')
}, false)

document.addEventListener("click" ,()=>{
    console.log('Document')
}, false)


document.querySelector('.div2').addEventListener("click" ,()=>{
    //e.stopPropagation();
    console.log('Div 2')
}, {once: true})


document.querySelector('.div1').addEventListener("click" ,()=>{
    console.log('Div 1')
}, false)


document.querySelector('a').addEventListener("click" ,(eventClick)=>{
    eventClick.preventDefault();
    console.log(eventClick.target.innerText = "Clicked")
}, false)


//true from out to in from when you click the button Window > Document > Div2 > Div1 > Button
//false from in to out from when you click the button Button > Div1 > Div2 > Document > Window
// (e) => { e.stopPropagation} stop there!
// {once, true} - only one time!
//eventClick.preventDefault(); prevent to 