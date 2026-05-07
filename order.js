const API = "http://localhost:5000";

async function placeOrder(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Cart is Empty");
        return;
    }

    const order = {

        customerName:
        document.getElementById("customerName").value,

        address:
        document.getElementById("address").value,

        phone:
        document.getElementById("phone").value,

        payment:
        document.getElementById("payment").value,

        products: cart,

        status: "Ordered"
    };

    const res = await fetch(`${API}/place-order`, {

        method:"POST",

        headers:{
            "Content-Type":"application/json"
        },

        body:JSON.stringify(order)
    });

    const data = await res.text();

    alert(data);

    localStorage.removeItem("cart");

    window.location.href = "cart.html";
}