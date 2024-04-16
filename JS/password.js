const passwordBox = document.getElementById("password");
const length=8;
const upperCase=Array.from({length:26},(_,i)=>String.fromCharCode(65+i));
const lowerCase=Array.from({length:26},(_,i)=>String.fromCharCode(97+i));
const number=Array.from({length:10},(_,i)=>String.fromCharCode(48+i))
const dbl="!@#$%^&*(){}[]<>/|_-+=~`.,:;'?";
const singl='"';
const bcksls='\\';
const symbol=`${dbl}${singl}${bcksls}`;
const allChars= upperCase.join('') + lowerCase.join('') + number.join('') + symbol;

function createPassword()
{
    let password="";
    password +=upperCase[Math.floor(Math.random() * upperCase.length)];
    password +=lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password +=number[Math.floor(Math.random() * number.length)];
    password +=symbol[Math.floor(Math.random() * symbol.length)];

    while(length>password.length)
    {
        password +=allChars[Math.floor(Math.random()* allChars.length)];
    }
    passwordBox.value=password;
}

function copyPassword()
{
    passwordBox.select();
        navigator.clipboard.writeText(passwordBox.value);
        alert('Password copied!');
        passwordBox.blur();
}