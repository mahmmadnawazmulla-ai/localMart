const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/localmarket")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    stock: Number
});
const OrderSchema = new mongoose.Schema({

    customerName: String,

    address: String,

    phone: String,

    payment: String,

    products: Array,

    status: String
});

const Order = mongoose.model("Order", OrderSchema);
const Product = mongoose.model("Product", ProductSchema);
const UserSchema = new mongoose.Schema({

    name: String,

    email: String,

    password: String
});

const User = mongoose.model("User", UserSchema);


app.post("/add-product", async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.send("Product Added");
});
// REGISTER
app.post("/register", async (req,res)=>{

    const existingUser = await User.findOne({
        email: req.body.email
    });

    if(existingUser){
        return res.send("User Already Exists");
    }

    const user = new User(req.body);

    await user.save();

    res.send("Registration Successful");
});

// LOGIN
app.post("/login", async (req,res)=>{

    const user = await User.findOne({

        email: req.body.email,

        password: req.body.password
    });

    if(user){
        res.send("Login Successful");
    }
    else{
        res.send("Invalid Credentials");
    }
});
// PLACE ORDER
app.post("/place-order", async (req,res)=>{

    const order = new Order(req.body);

    await order.save();

    res.send("Order Placed Successfully");
});
// GET ORDERS
app.get("/orders", async (req,res)=>{

    const orders = await Order.find();

    res.json(orders);
});

app.get("/products", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});



app.put("/update-product/:id", async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.send("Product Updated");
});



app.delete("/delete-product/:id", async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.send("Product Deleted");
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});