const letters ='opqrstuvwxyzabcdefghijklmn';
const numbers = "5678901234";
const capsLetters = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
const symbols = '.,?!@#*+-.,?!@#*+-'


let newString = letters;


const button = document.querySelector('#generate');
const passwordDisplay = document.querySelector(".password");



function newPassword(passwordLength) {
    let password ='';

         for( let i = 0; i < passwordLength ; i++){
            password += newString.charAt(Math.floor(Math.random() * newString.length))
        }
    return password;
}


button.addEventListener("click", ()=>{
   
    let numberPasswordChar = document.getElementById('number').value;
    if(numberPasswordChar== '' || numberPasswordChar < 4 ) {
        document.getElementById('number').value = "4"
        numberPasswordChar = "4";
    }

    if(document.getElementById("numbers").checked)
        newString = newString.concat(numbers);

    if (document.getElementById("uppercase").checked )
        newString = newString.concat(capsLetters);
    
    if(document.getElementById("symbols").checked)
        newString = newString.concat(symbols);

        passwordDisplay.innerText= newPassword(numberPasswordChar);
       console.log(newString)

       newString = letters;
})

