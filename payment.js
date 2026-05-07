let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {
    total += item.price * item.quantity;
});

document.getElementById("totalAmount")
.innerText = `Total: ₹${total}`;


// PAYMENT FUNCTION
function payNow(){

    const cardName =
    document.getElementById("cardName").value;

    const cardNumber =
    document.getElementById("cardNumber").value;

    const expiry =
    document.getElementById("expiry").value;

    const cvv =
    document.getElementById("cvv").value;


    if(
        !cardName ||
        !cardNumber ||
        !expiry ||
        !cvv
    ){
        alert("Please Fill All Fields");
        return;
    }

    if(cardNumber.length < 16){
        alert("Invalid Card Number");
        return;
    }

    alert("Payment Successful");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {
    total += item.price * item.quantity;
});

document.getElementById("totalAmount")
.innerText = `Total: ₹${total}`;


// PAYMENT FUNCTION
function payNow(){

    const cardName =
    document.getElementById("cardName").value;

    const cardNumber =
    document.getElementById("cardNumber").value;

    const expiry =
    document.getElementById("expiry").value;

    const cvv =
    document.getElementById("cvv").value;


    if(
        !cardName ||
        !cardNumber ||
        !expiry ||
        !cvv
    ){
        alert("Please Fill All Fields");
        return;
    }

    if(cardNumber.length < 16){
        alert("Invalid Card Number");
        return;
    }

    alert("Payment Successful");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach(item => {
    total += item.price * item.quantity;
});

document.getElementById("totalAmount")
.innerText = `Total: ₹${total}`;


// PAYMENT FUNCTION
function payNow(){

    const cardName =
    document.getElementById("cardName").value;

    const cardNumber =
    document.getElementById("cardNumber").value;

    const expiry =
    document.getElementById("expiry").value;

    const cvv =
    document.getElementById("cvv").value;


    if(
        !cardName ||
        !cardNumber ||
        !expiry ||
        !cvv
    ){
        alert("Please Fill All Fields");
        return;
    }

    if(cardNumber.length < 16){
        alert("Invalid Card Number");
        return;
    }

    alert("Payment Successful");

    localStorage.removeItem("cart");

    window.location.href = "index.html";
}