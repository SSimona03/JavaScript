let btn = document.querySelector('.btn');
let qoute = document.querySelector('.qoute');
let author = document.querySelector(".author");



let qoutes = 
[{
    qoute: "'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.'",
    person:'Helen Keller'
}, {
    qoute: "'It is during our darkest moments that we must focus to see the light.'",
    person: 'Aristotle'
}, {
    qoute:"'Whenever you find yourself on the side of the majority, it is time to pause and reflect.'" ,
    person: 'Mark Twain'
}, {
    qoute:"'The greatest glory in living lies not in never falling, but in rising every time we fall'",
    person:'Nelson Mandela'
}, {
    qoute:"'The journey of a thousand miles begins with one step.'",
    person:'Lao Tzu'
}]

btn.addEventListener("click", () => {
    let newQoute = Math.floor(Math.random() * qoutes.length);
    qoute.childNodes[0].textContent= qoutes[newQoute].qoute;
    author.innerText = qoutes[newQoute].person;
    
    
})
