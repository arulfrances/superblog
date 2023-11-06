import React from "react";
import { Link } from "react-router-dom";
import './styles.css';



function NavBar() {


    return (
        <>
            <div className="navbar-header">
                <div><h3>Super Blog</h3></div>
                <div>
                    <a href="" className="link-item">Home</a>
                    <a href="" className="link-item">Create a new Post</a>
                    <a href="/allposts" className="link-item">View All Posts</a>
                </div>
                <div><h5><Link to='/register'>Register / Login</Link></h5></div>
            </div>
        </>
    )
}


export default NavBar;