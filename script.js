const API = "http://localhost:5000";

async function addProduct() {

    const product = {
        name: document.getElementById("name").value,
        price: document.getElementById("price").value,
        category: document.getElementById("category").value,
        stock: document.getElementById("stock").value
    };

    await fetch(`${API}/add-product`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    loadProducts();
}

function addToCart(name,price){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.name === name);

    if(existingProduct){

        existingProduct.quantity++;
    }
    else{

        cart.push({
            name,
            price,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added To Cart");
}
function displayProducts(products){

    const container =
    document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `

        <div class="card">

            <h3>${product.name}</h3>

            <p>Price: ₹${product.price}</p>

            <p>Category: ${product.category}</p>

            <p>Stock: ${product.stock}</p>

            <button onclick='addToCart(
            "${product.name}",
            ${product.price}
            )'>
                Add To Cart
            </button>

        </div>
        `;
    });
}

async function loadProducts(){

    const res = await fetch(`${API}/products`);

    const products = await res.json();

    displayProducts(products);
}
async function deleteProduct(id){

    await fetch(`${API}/delete-product/${id}`, {
        method: "DELETE"
    });

    loadProducts();
}

loadProducts();
// SEARCH PRODUCTS
async function searchProducts(){

    const keyword =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

    const res = await fetch(`${API}/products`);

    const products = await res.json();

    const filteredProducts = products.filter(product =>

        product.name.toLowerCase().includes(keyword)

        ||

        product.category.toLowerCase().includes(keyword)
    );

    displayProducts(filteredProducts);
}