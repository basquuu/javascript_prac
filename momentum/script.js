const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
    const clickedClass = "clicked";
    /*if(h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass) = "";
    } else{
        h1.classList.add(clickedClass);
    }*/ 
    h1.classList.toggle("clicked");// toggle라는 함수가 위 코드랑 동일한 기능을 함 
}
h1.addEventListener("click",handleTitleClick);
