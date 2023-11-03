import { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import axios from 'axios';

function App() {

    const [name, setName] =useState();
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();


const handleSubmit = (e) => {
    e.preventDefault();

  //  alert(name1 & email1 & password1);
    try{
    axios.post('http://localhost:3001/register', {name, email,password})
    .then(
        result => console.log(result)
    )
    .catch(
        error => console.log(error)
    )
    }
    catch (err){
        console.error('Error Occurred',err);
    }
}

    return (

        <>
            <div className="loginRegisterPage">

                <h2>Register</h2>
                <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="card">

                        <div className="row align-items-center">
                        <div className="mb-3">
                            <div className="col-auto">
                                <label for="nameField" className="col-sm-12 col-form-label"><b>Name</b></label>
                            </div>
                            <div className="col-auto">
                                <input type="text" className="form-control" id="nameField" autoComplete='false' placeholder="Full name" 
                                    onChange={(e) => {setName(e.target.value)}}
                                />
                            </div>
                        </div>
                        </div>
                    

                        <div className="mb-3">
                            <div className="col-auto">
                                <label for="emailField" className="col-sm-12 col-form-label"><b>Email</b></label>
                            </div>
                            <div className="col-auto">
                                {/* <input type="text" class="form-control-plaintext" id="staticEmail" value="email@example.com"/> */}
                                <input className="form-control" type="text" id="emailField" autoComplete='false' placeholder="email@example.com" aria-label="default input example"
                                onChange={(e) => {setEmail(e.target.value)}}></input>
                            </div>

                        </div>

                        <div className="mb-3">
                            <div className="col-auto">
                                <label for="passwordField" className="col-sm-12 col-form-label"><b>Password</b></label>
                            </div>
                            <div className="col-auto">
                                <input type="password" placeholder="Enter your Password" autoComplete='false' className="form-control" id="inputPassword"
                                onChange={(e) => {setPassword(e.target.value)}} />
                            </div>
                        </div>
<br/>
<br/>
                        
                            <button type="submit" className="btn btn-primary mb-3">Click to Register</button>
                        
                        <p>If Already registered, please click on Login Button</p>

                        <button className="btn btn-primary mb-3">Click to Login</button>
</div>

                    </div>
                    
                </form>

                



            </div>

        </>

    )

}

export default App
