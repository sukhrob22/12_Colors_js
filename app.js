const arounds = document.getElementById("around")
const stars = document.querySelector(".star")
const stops = document.querySelector(".stop")
// console.log(stop)

let inColors;
function color(){
    if(!inColors){
        inColors = setInterval(chengColor, 1000)
    }
}
function chengColor(){
if(arounds.className === "blue"){
    arounds.className = "red"
}else if(arounds.className === "red"){
    arounds.className = "yellow"
}else if(arounds.className === "yellow"){
    arounds.className = "black"
}else if(arounds.className === "black"){
    arounds.className = "brown"
} else if(arounds.className === "brown"){
    arounds.className = "green"
}else if(arounds.className === "green"){
    arounds.className = "white"}
else if(arounds.className === "white"){
    arounds.className = "egg"
}else if(arounds.className === "egg"){
    arounds.className = "ega"
}else{
    arounds.className = "blue"
}}

function stopColor (){
    clearInterval(inColors)
inColors = null
}

stars.addEventListener("click", color);
stops.addEventListener("click", stopColor)

