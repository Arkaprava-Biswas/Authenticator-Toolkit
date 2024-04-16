let imgBox=document.getElementById("imgBox");
let qrImage=document.getElementById("qrImage");
let qrText=document.getElementById("qrText");
let h1 = document.querySelector("h1");

function GenerateQR()
{
    if(qrText.value.length>0)
    {
        qrImage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
        imgBox.classList.add("show-img");
        h1.style.top = "calc(50% - 330px)";
    }
    else
    {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}