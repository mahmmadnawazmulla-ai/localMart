const API = "http://localhost:5000";


// ADD PRODUCT
async function addProduct(){

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

    alert("Product Added");

    loadProducts();
}


// LOAD PRODUCTS
async function loadProducts(){

    const res = await fetch(`${API}/products`);

    const products = await res.json();

    document.getElementById("totalProducts").innerText =
        products.length;

    const container = document.getElementById("products");

    container.innerHTML = "";

    products.forEach(product => {

        container.innerHTML += `
        
        <div class="product-card">

            <h3>${product.name}</h3>

            <p>Price: ₹${product.price}</p>

            <p>Category: ${product.category}</p>

            <p>Stock: ${product.stock}</p>

            <div class="buttons">

                <button class="edit"
                onclick="editProduct('${product._id}')">
                    Edit
                </button>

                <button class="delete"
                onclick="deleteProduct('${product._id}')">
                    Delete
                </button>

            </div>

        </div>
        `;
    });
}


// DELETE PRODUCT
async function deleteProduct(id){

    await fetch(`${API}/delete-product/${id}`, {
        method: "DELETE"
    });

    alert("Product Deleted");

    loadProducts();
}


// EDIT PRODUCT
async function editProduct(id){

    const newName = prompt("Enter New Product Name");

    if(!newName) return;

    await fetch(`${API}/update-product/${id}`, {

        method: "PUT",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            name: newName
        })
    });

    alert("Product Updated");

    loadProducts();
}


loadProducts();