var cartData = JSON.parse(localStorage.getItem("cart")) || [];
// console.log(cartData);

var promoApplied = JSON.parse(localStorage.getItem("coupon")) || 0;

var goToPay = document.querySelector("#pay");
goToPay.addEventListener("click", paymentPage)


var total = totalPrice(cartData);
updatedValue(total);
function updatedValue(total){
    document.querySelector(
    "p"
).innerText = `Your cart has a total of ${cartData.length} items and total price is $${total}.`;
document.querySelector("#promo").value = "";
if (promoApplied == 1) {
    total = (total * 7) / 10;
    document.querySelector(
        "p"
    ).innerText = `Your cart has a total of ${cartData.length} items and total price is $${total}. [Coupon Applied]`;
}
}


function paymentPage() {
    total = totalPrice(cartData);
    if(total != 0){
        if(promoApplied == 1){
                total = (total * 7)/10;
        }
        localStorage.setItem("amountPayable", JSON.stringify(total));
        window.location.href = "./payment.html";
    }
    else{
        alert("You haven't added anything cart.");
    }
    
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
    total = totalPrice(cartData);
    updatedValue(total);
}

function applyPromo() {
    event.preventDefault();
    var couponCode = document.querySelector("#promo").value;
    if (couponCode == "masai30" && promoApplied == 0) {
        promoApplied++;
        localStorage.setItem("coupon", JSON.stringify(promoApplied));
        alert("Coupon Applied!!");
        total = totalPrice(cartData);
        updatedValue(total);
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

displayData(cartData);
function displayData(cartData) {
    document.querySelector("#container").innerHTML = "";

    cartData.map(function (elem, i) {
        var box = document.createElement("div");

        var span1 = document.createElement("div");
        var span2 = document.createElement("div");
        var img = document.createElement("img");
        img.src = elem.url;

        var name = document.createElement("p");
        name.textContent = elem.name;

        var price = document.createElement("p");
        price.innerText = "$" + elem.price;

        var removeCart = document.createElement("button");
        removeCart.innerText = "Remove From Cart";
        removeCart.addEventListener("click", function () {
            removeFromCart(i);
        });

        span1.append(img, name);
        span2.append(price, removeCart);

        box.append(span1, span2);

        document.querySelector("#container").append(box);
    });
}

function removeFromCart(i) {
    cartData.splice(i, 1);
    localStorage.setItem("cart", JSON.stringify(cartData));
    alert("Item removed from cart");
    displayData(cartData);
    total = totalPrice(cartData);
    updatedValue(total);
}

var toggle = document.querySelector("#hamburger");
var nav = document.querySelector("#navigation");
toggle.addEventListener("click", function () {
    nav.classList.toggle("show")
});