const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User');
const ArticleModel = require('./models/Article');
const PostModel = require('./models/Post');



const app = express();

app.use(cors());

app.use(express.json());

mongoose.connect('mongodb+srv://admin:$123456$@devcluster.fzijmc0.mongodb.net/blog');

//mongodb+srv://<username>:<password>@devcluster.fzijmc0.mongodb.net/


app.post('/register', (req, res) => {
    console.log("Connected");
    const { name, email, password } = req.body;
    UserModel.findOne({ email: email }).then(
        user => {
            if (user) {
                res.json("Account already exists, please sign in!");
            }
            else {
                UserModel.create({ name: name, email: email, password: password })
                    .then(result => res.json("Account Creation Successful"))
                    .catch(error => res.json(error))
            }
        }
    )
});


app.post('/login', (req,res) => {

    console.log("Login Connected");
    const {email, password } = req.body;
    UserModel.findOne({email:email})
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
    else
    {
        res.json("User Account is not available! Please register!");
        console.log("User Account is not available! Please register!");
    }
  }) 
})


app.get('/allarticles', (req,res) => {

    ArticleModel.find()
    .then(articles => res.json(articles))
    .catch(error => res.json(error));

})

//mongodb+srv://admin:<password>@devcluster.fzijmc0.mongodb.net/?retryWrites=true&w=majority


app.post('/createpost', (req,res) =>{
const {title, description, createdAt, author} = req.body;


PostModel.create({title: title, description: description, createdAt: createdAt, author: author})
.then(result => res.json("Success"))
.catch(error => res.json(error));

});


app.put('/editarticle/:id', (req, res)=>{
    const id = req.params.id;

    PostModel.findByIdAndUpdate(
        {_id:id},
        {
            title: req.body.title,
            description: req.body.description
        }.then(result => res.json("Success"))
        .catch(err => res.json(err))
    );

})

app.delete('/deletearticle/:id', (req, res)=>{
    const id = req.params.id;

    PostModel.findByIdAndUpdate(
        {_id:id},
        {
            title: req.body.title,
            description: req.body.description
        }.then(result => res.json("Success"))
        .catch(err => res.json(err))
    );

})



app.listen(3001, () => {
    console.log("Server is Up and running!");
})