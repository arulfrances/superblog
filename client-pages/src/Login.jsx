
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { BlogsPage } from BlogsPage;

function LoginPage() {


    const [email, setUserEmail] = useState();
    const [password, setUserPassword] = useState();
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();

       // alert("Test"&useremail & userpassword);
        try {
            axios.post('http://localhost:3001/login', { email, password })
                .then(
                    result => 
                    {
                        console.log(result);

                         if (result.data === "Success") {
                            console.log("LOGIN SUCCESSFUL");
                          navigate('/allposts');
                        }
                    
                    }
                )
                .catch(
                    error => console.log(error)
                )
        }
        catch (err) {
            console.error('Error Occurred', err);
        }
    }




    return (
        <>
            <div className="loginPage">

                <h2>Login</h2>
                <form onSubmit={ handleSubmit } autoComplete="off">
                    <div className="container">
                        <div className="card">


                            <div className="mb-3">
                                <div className="col-auto">
                                    <label for="emailField" className="col-sm-12 col-form-label"><b>Email</b></label>
                                </div>
                                <div className="col-auto">
                                    {/* <input type="text" class="form-control-plaintext" id="staticEmail" value="email@example.com"/> */}
                                    <input className="form-control" type="text" id="emailField" autoComplete="off" placeholder="email@example.com" aria-label="default input example"
                                        onChange={e =>  setUserEmail(e.target.value) }></input>
                                </div>

                            </div>

                            <div className="mb-3">
                                <div className="col-auto">
                                    <label for="passwordField" className="col-sm-12 col-form-label"><b>Password</b></label>
                                </div>
                                <div className="col-auto">
                                    <input type="password" placeholder="Enter your Password" autoComplete="off" className="form-control" id="inputPassword"
                                        onChange={e =>  setUserPassword(e.target.value) } />
                                </div>
                            </div>
                            <br />
                            <br />

                            <button className="btn btn-primary mb-3">Click to Login</button>

                            <p>New User, please click on Login Button</p>

                            <button className="btn btn-primary mb-3">Click to Register</button>
                        </div>

                    </div>

                </form>





            </div>

        </>
    )

}

export default LoginPage;