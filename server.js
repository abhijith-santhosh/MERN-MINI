const express = require("express");
const mongoose = require("mongoose");
const Product = require("./Models/productModel");
const app = express();
app.use(express.json());

app.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
    console.log(req.body);
  } catch (error) {
    console.log(error);
    // res.status(500).json({message:error.message})
  }
});

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get('/products/:id',async (req,res)=>{
    try {
        const {id}= req.params
        const product = await Product.findById(id);
        res.status(200).json(product);
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
















mongoose
  .connect(
    "mongodb+srv://abhijithsanthosh101:passwordsachu12345@nodeapi.z9la2qw.mongodb.net/test"
  )
  .then(() => console.log(" DB Connected!"))
  .catch((e) => {
    console.log("e");
  });

app.listen(3001, () => console.log("NODE API RUNNING "));
