const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register');
const LoginModel = require('./models/Login');


const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://admin:$123456$@devcluster.fzijmc0.mongodb.net/blog');

//mongodb+srv://<username>:<password>@devcluster.fzijmc0.mongodb.net/


app.post('/register', (req, res) => {
    console.log("Connected");
    const { name, email, password } = req.body;
    RegisterModel.findOne({ email: email }).then(
        user => {
            if (user) {
                res.json("Account already exists, please sign in!");
            }
            else {
                RegisterModel.create({ name: name, email: email, password: password })
                    .then(result => res.json("Account Creation Successful"))
                    .catch(error => res.json(error))
            }
        }
    )
});


app.post('/login', (req,res) => {
    const {email, password} = req.body;
  LoginModel.findOne({email:email})
  .then(user => {
    if(user){
        if(user.password === password){
            res.json("Success");
            console.log("Login successful");
        }
        else {
            res.json("Login Failed! Please check your password!");
            console.log("Login Failed! Please check your password!");
        }

    }
    // else
    // {
    //     res.json("User Account is not available! Please register!");
    //     console.log("User Account is not available! Please register!");
    // }
  })  
})

//mongodb+srv://admin:<password>@devcluster.fzijmc0.mongodb.net/?retryWrites=true&w=majority



app.listen(3001, () => {
    console.log("Server is Up and running!");
})