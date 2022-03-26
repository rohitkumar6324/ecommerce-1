var bill = JSON.parse(localStorage.getItem("amountPayable"))
var proceedToPay = document.querySelector("#submit");
proceedToPay.value = `Proceed to Pay $${bill}`;
proceedToPay.addEventListener("click", payNow);

function payNow() {
    event.preventDefault();
    var name1 = document.querySelector("#name").value;
    var card = document.querySelector("#card").value;
    var cvv = document.querySelector("#cvv").value;
    var exp = document.querySelector("#exp").value;

    if (card == "123456789000" && cvv == "123" && exp == "2024-06") {
        alert("We have sent you an OTP. Please check your mobile.");
        window.location.href = "./OTP.html";
    }
    else {
        alert("Error! Please type valid card details only.");
        document.querySelector("#name").value = "";
        document.querySelector("#card").value = "";
        document.querySelector("#cvv").value = "";
        document.querySelector("#exp").value = "";
    }
}

