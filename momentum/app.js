const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event){
    event.preventDefault(); //기본 브라우저 동작 막아줌 
    console.log(loginInput.value);
}
function handleLinkClick(event){
    event.preventDefault();
    //alert("clicked!");// 경고창 때문에 페이지 이동 막아줌 -> ok 누르면 이동
}
loginFrom.addEventListener("submit",onLoginSubmit);
