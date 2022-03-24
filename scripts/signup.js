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