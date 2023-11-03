const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const RegisterModel = require('./models/Register');


const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/blogdb')



app.post('/register', (req, res) => {
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

//mongodb+srv://admin:<password>@devcluster.fzijmc0.mongodb.net/?retryWrites=true&w=majority



app.listen(3001, () => {
    console.log("Server is Up and running!");
})