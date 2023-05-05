const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    h1.style.color = "blue";
}
function handleMouseEnter(){
    h1.innerText = "Mouse is here!";
}
function handleMouseLeave(){
    h1.innerText ="Don't go mouse!";
}
function handleWindowResize(){
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy(){
    alert("copier!");
}
function handleWindowOnline(){
    alert("ALL GOOODDD");
}
function handleWindowOffline(){
    alert("No wifi!");
}
h1.onclick =  handleTitleClick;
h1.addEventListener("mouseenter",handleMouseEnter);
h1.addEventListener("mouseleave",handleMouseLeave);
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy",handleWindowCopy);
window.addEventListener("online",handleWindowOnline);
window.addEventListener("offline",handleWindowOffline);