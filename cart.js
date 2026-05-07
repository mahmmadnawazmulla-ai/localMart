let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");


// LOAD CART
function loadCart(){

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="cart-card">

            <h3>${item.name}</h3>

            <p>Price: ₹${item.price}</p>

            <p>Quantity: ${item.quantity}</p>

            <p>Subtotal: ₹${item.price * item.quantity}</p>

            <div class="buttons">

                <button class="add"
                onclick="increaseQuantity(${index})">
                    +
                </button>

                <button class="remove"
                onclick="decreaseQuantity(${index})">
                    -
                </button>

                <button class="delete"
                onclick="deleteItem(${index})">
                    Delete
                </button>

            </div>

        </div>
        `;
    });

    document.getElementById("totalPrice").innerText =
        `Total: ₹${total}`;

    localStorage.setItem("cart", JSON.stringify(cart));
}


// INCREASE QUANTITY
function increaseQuantity(index){

    cart[index].quantity++;

    loadCart();
}


// DECREASE QUANTITY
function decreaseQuantity(index){

    if(cart[index].quantity > 1){
        cart[index].quantity--;
    }

    loadCart();
}


// DELETE ITEM
function deleteItem(index){

    cart.splice(index,1);

    loadCart();
}


// CHECKOUT
function checkout(){

    if(cart.length === 0){
        alert("Cart is Empty");
        return;
    }

    window.location.href = "orders.html";

    cart = [];

    loadCart();
}


loadCart();