var incamount=100;
var max=1000;
var waterconsumed=0;
setInterval(function () {
    console.log("hey");
},1000)

window.onload = function() {
    setwater();
    if(document.URL.includes("?")){
        recieve();}
    container(parseInt(localStorage.getItem("lastcontainer")));
    setconsumed();
};

setTimeout(function(){
    document.getElementsByClassName("load")[0].classList.add("hidefade");
    setTimeout(function(){
        document.getElementsByClassName("load")[0].style.display="none";
    },1000)
},2000)

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
    waterconsumed+=incamount;
    document.getElementsByTagName("progress")[0].value+=(incamount/max)*100;
    watercolor();
    localStorage.setItem("lastlevel",document.getElementsByTagName("progress")[0].value);
    consumed();
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
    document.getElementById("shareqr").style.background='url("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://hardikkk20.github.io/DrinkWater/index.html?'+localStorage.getItem("lastlevel")+'Q'+max+'Q'+localStorage.getItem("lastcontainer")+'")';
}

function recieve(){
    let url=document.URL;
    const ray = url.split("?");
    const data=ray[1];
    const recieveddata = data.split("Q");
    console.log(recieveddata);
    localStorage.setItem("lastlevel",recieveddata[0]);
    setwater();
    max=parseInt(recieveddata[1]);
    container(parseInt(recieveddata[2]));
}

function container(c){
    document.getElementById("cup").style.fontSize="0rem";
    document.getElementById("glas").style.fontSize="0rem";
    document.getElementById("largeglass").style.fontSize="0rem";
    document.getElementById("bottle").style.fontSize="0rem";
    switch(c){
        case 1:
            incamount=50;
            console.log("case 1");
            document.getElementById("cup").style.fontSize="1rem";
            break;
        case 2:
            console.log("case 2");
            document.getElementById("glas").style.fontSize="1rem";
            incamount=100;
            break;
                
        case 3:
            console.log("case 3");
            document.getElementById("largeglass").style.fontSize="1rem";
            incamount=200;
            break;
            
        case 4:
            console.log("case 4");
            document.getElementById("bottle").style.fontSize="1rem";
            incamount=500;
            break;
    }
    localStorage.setItem("lastcontainer",c);
}

function consumed(){
    if(waterconsumed<1000){
        document.getElementById("gamount").innerText=waterconsumed;
        document.getElementById("gunit").innerText=" mL"
    }
    else{
        document.getElementById("gamount").innerText=waterconsumed/1000;
        document.getElementById("gunit").innerText=" L"
    }
    localStorage.setItem("waterconsumed",waterconsumed);
}

function setconsumed(){
    if(localStorage.getItem("waterconsumed")!=null)
        {
            waterconsumed=parseInt(localStorage.getItem("waterconsumed"));
            consumed();
        }
    }

