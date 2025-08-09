
const express = require("express");
const app = express();
const port = 3000;
const { userModel } = require("./model.js");
const { jwt } = require("jsonwebtoken");
const { Keypair } = require("@solana/web3.js");
const JWT_SECRET = "123456"
app.use(express.json())
app.use(cors()) 

app.post("api/v1/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const KeyPair = new Keypair();

    await userModel.create({
        username: username,
        password: password,
        publicKey: KeyPair.publicKey.toString(),
        privateKey: KeyPair.secretKey.toString()
    })
    res.status(200).json({
        message: Keypair.publicKey.toString() + "User created successfully"
    })
})

app.post("api/v1/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    
    const existingUser = userModel.findFirst({
        username: username,
        password: password
    })

    if (existingUser){
        const token = jwt.sign({
            _id: existingUser
        }, JWT_SECRET);
        res.json({
            token
        })
    }
})

app.listen(port)
