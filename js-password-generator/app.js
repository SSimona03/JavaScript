const button = document.querySelector('#generate');


function generatePassword(passwordLength, validStrings) {
    const valid = validStrings.join('')

    let password ='';

    for( let i = 0; i < passwordLength ; i++){
        password += valid.charAt(Math.floor(Math.random() * valid.length))
    }
    return password;
}

button.addEventListener("click", ()=>{
    const LETTERS ='opqrstuvwxyzabcdefghijklmn';
    const NUMBERS = "5678901234";
    const CAPSLETTERS = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
    const SYMBOLS = '.,?!@#*+-.,?!@#*+-'

    const passwordDisplay = document.querySelector(".password");

   
    const numberOfCharacters = Math.max(document.getElementById('number').value ?? 4, 4)
    document.getElementById('number').value = numberOfCharacters


    const isNumbersChecked = document.getElementById("numbers").checked;
    const isUppercaseChecked = document.getElementById("uppercase").checked;
    const isSymbolsChecked = document.getElementById("symbols").checked;

    const valid = [
        LETTERS,
        ...(isNumbersChecked ? [NUMBERS] : [] ),
        ...(isUppercaseChecked ? [CAPSLETTERS] : [] ),
        ...(isSymbolsChecked ? [SYMBOLS] : [] )
    
    ];

    // if(isNumbersChecked)
    //     valid.push(NUMBERS)

    // if(isUppercaseChecked)
    //     valid.push(CAPSLETTERS)

    // if(isSymbolsChecked)
    //     valid.push(SYMBOLS)


    passwordDisplay.innerText= generatePassword(numberOfCharacters, valid);

})

