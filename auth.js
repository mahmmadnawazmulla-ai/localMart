const API = "http://localhost:5000";


// REGISTER
async function register(){

    const user = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        password: document.getElementById("password").value
    };

    const res = await fetch(`${API}/register`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    });

    const data = await res.text();

    alert(data);
}


// LOGIN
async function login(){

    const user = {

        email: document.getElementById("email").value,

        password: document.getElementById("password").value
    };

    const res = await fetch(`${API}/login`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(user)
    });

    const data = await res.text();

    alert(data);

    if(data === "Login Successful"){
        window.location.href = "seller.html";
    }
}