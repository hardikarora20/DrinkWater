var incamount=100;
var max=1000;
setInterval(function () {
    console.log("hey");
},1000)

window.onload = function() {
    setwater();
    if(document.URL.includes("?"))
        recieve();
};

function watercolor(){
    const prog=document.getElementsByTagName("progress")[0].value;
    const root = document.querySelector(":root"); //grabbing the root element
    if(prog<20){
        root.style.setProperty("--fillcolor", 'rgb(170, 205, 234)');
    }
    else if(prog>=20&&prog<50){
        root.style.setProperty("--fillcolor", 'rgb(141, 188, 226)');
    }
    else if(prog>=50&&prog<80){
        root.style.setProperty("--fillcolor", 'rgb(91, 159, 215)');
    }
    else{
        root.style.setProperty("--fillcolor", 'rgb(26, 113, 184)');
    }
}

function waterup(){
    document.getElementsByTagName("progress")[0].value+=max/incamount;
    watercolor();
    localStorage.setItem("lastlevel",document.getElementsByTagName("progress")[0].value);
}

function setwater(){
    if(localStorage.getItem("lastlevel")!=null)
        {document.getElementsByTagName("progress")[0].value=parseInt(localStorage.getItem("lastlevel"));}
    watercolor();
}

function reset(){
    localStorage.clear();
}

function share(){
    document.getElementById("shareqr").style.background='url("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://hardikkk20.github.io/DrinkWater/index.html?'+localStorage.getItem("lastlevel")+'+'+max+'")';
}

function recieve(){
    let url=document.URL;
    const ray = url.split("?");
    const data=ray[1];
    const recieveddata = data.split("+");
    console.log(recieveddata);
    localStorage.setItem("lastlevel",recieveddata[0]);
    setwater();
    max=parseInt(recieveddata[1]);
}