var submit = document.querySelector("form");
submit.addEventListener("submit", checkSubmit)

function checkSubmit() {
    event.preventDefault();
    var otp = document.querySelector("#otp").value;
    if (otp == "1234") {
        localStorage.setItem("cart", JSON.stringify([]));
        localStorage.setItem("coupon", JSON.stringify(0));
        alert("Payment Successful");
        window.location.href = "./cart.html";
    }
    else {
        alert("Wrong OTP entered");
        document.querySelector("#otp").value = "";
    }
}