document.querySelector("form").addEventListener("submit", signUpFun);

var userData = JSON.parse(localStorage.getItem("userCreds")) || [];
function signUpFun() {
    event.preventDefault();

    var userObj = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#pass").value,
        mobile: document.querySelector("#mobile").value,
    };
    //console.log(userObj);
    userData.push(userObj);
    //console.log(userData)
    localStorage.setItem("userCreds", JSON.stringify(userData));

    window.location.href = "./login.html";
}

var toggle = document.querySelector("#hamburger");
var nav = document.querySelector("#navigation");
toggle.addEventListener("click", function () {
    nav.classList.toggle("show")
});