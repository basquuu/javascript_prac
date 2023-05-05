const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    const currentColor = h1.style.color ; //변경 x
    let newColor; //변경 o 
    if (currentColor === "blue"){
        newColor = "tomato";
    }else{
        newColor = "blue";
    }h1.style.color = newColor;
}
h1.addEventListener("click",handleTitleClick);
