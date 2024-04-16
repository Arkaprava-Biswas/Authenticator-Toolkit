const PINBox = document.getElementById("PIN");
const PINLengthSelect = document.getElementById("PINLength");
// const length=6;
const number=Array.from({length:10},(_,i)=>String.fromCharCode(48+i))

function createPIN()
{
    let length = parseInt(PINLengthSelect.value);
    let PIN="";
    while(length>PIN.length)
    {
        PIN +=number[Math.floor(Math.random()* number.length)];
    }
    PINBox.value=PIN;
}

function copyPIN()
{
    PINBox.select();
        navigator.clipboard.writeText(PINBox.value);
        alert('PIN copied!');
        PINBox.blur();
}