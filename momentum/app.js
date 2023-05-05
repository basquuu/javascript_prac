const loginFrom = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event){
    event.preventDefault(); //기본 브라우저 동작 막아줌 
    console.log(loginInput.value);
}

loginFrom.addEventListener("submit",onLoginSubmit);
onLoginSubmit();