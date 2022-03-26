document.querySelector("form").addEventListener("submit", loginFun);
var regdUsers = JSON.parse(localStorage.getItem("userCreds"));
//console.log(regdUsers);

function loginFun() {
    event.preventDefault();
    var enteredEmail = document.querySelector("#email").value;
    var enteredPass = document.querySelector("#pass").value;
    //console.log(email, pass);

    for (var i = 0; i < regdUsers.length; i++) {
        console.log(regdUsers[i]);
        if (
            regdUsers[i].email == enteredEmail &&
            regdUsers[i].password == enteredPass
        ) {
            alert("login success");
            window.location.href = "./cart.html";
            break;
        } else if (i == regdUsers.length - 1) {
            alert("login failed");
        }
    }
}

var toggle = document.querySelector("#hamburger");
var nav = document.querySelector("#navigation");
toggle.addEventListener("click", function () {
    nav.classList.toggle("show")
});