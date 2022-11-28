var incamount=100;
var max=1000;
setInterval(function () {
    console.log("hey");
},1000)
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
}
