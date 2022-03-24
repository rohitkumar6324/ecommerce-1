var cartData = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartData);

var promoApplied = JSON.parse(localStorage.getItem("coupon")) || 0;

var goToPay = document.querySelector("#pay");
goToPay.addEventListener("click", paymentPage)


var total = totalPrice(cartData);


document.querySelector(
    "p"
).innerText = `Your cart has a total of ${cartData.length} items and total price is $${total}.`;
if (promoApplied == 1) {
    total = (total * 7) / 10;
    document.querySelector(
        "p"
    ).innerText = `Your cart has a total of ${cartData.length} items and total price is $${total}. [Coupon Applied]`;
}

function paymentPage() {
    window.location.href = "./payment.html";
}
var coupon = document.querySelector("#apply");
coupon.addEventListener("click", applyPromo);

var couponRemove = document.querySelector("#remove");
couponRemove.addEventListener("click", removePromo);

function removePromo() {
    event.preventDefault();
    promoApplied = 0;
    localStorage.setItem("coupon", JSON.stringify(promoApplied));
    alert("Discount Removed")
    window.location.reload();
}

function applyPromo() {
    event.preventDefault();
    var couponCode = document.querySelector("#promo").value;
    if (couponCode == "masai30" && promoApplied == 0) {
        promoApplied++;
        localStorage.setItem("coupon", JSON.stringify(promoApplied));
        alert("Coupon Applied!!");
        window.location.reload();
    } else if (couponCode != "masai30") {
        alert("Invalid Coupon Code");
        document.querySelector("#promo").value = "";
    } else {
        alert("Coupon has already been used once");
        document.querySelector("#promo").value = "";
    }
}

function totalPrice(arr) {
    var total = arr.reduce(function (sum, a) {
        return sum + a.price;
    }, 0);
    return total;
}
cartData.map(function (elem, i) {
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = elem.url;

    var name = document.createElement("p");
    name.textContent = elem.name;
    name.style.height = "40px";

    var price = document.createElement("p");
    price.innerText = "$" + elem.price;

    var removeCart = document.createElement("button");
    removeCart.innerText = "Remove From Cart";
    removeCart.addEventListener("click", function () {
        removeFromCart(i);
    });

    box.append(img, name, price, removeCart);

    document.querySelector("#container").append(box);
});
function removeFromCart(i) {
    cartData.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("Item removed from cart");
    window.location.reload();
}

localStorage.setItem("amountPayable", JSON.stringify(total));