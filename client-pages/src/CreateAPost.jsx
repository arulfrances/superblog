import React from "react";
import { useState } from "react";
import axios from "axios";

import './styles.css';


function CreateAPost() {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleNewPost = (e) => {
        e.preventDefault();
      //  console.log(title & " " & description);
        const currentDate = new Date();

      const author ="User3";
     const  createdAt = currentDate.toISOString();

axios.post('http://localhost:3001/createpost' ,{title, description, createdAt, author})
.then(res=>{
    if(res.data === "Success"){
        console.log("Posting successful");
        alert("Post added successfully")
    }
})
.catch(err=> console.log(err));

    }

    return (<>
        <div className="article_container">
        <div className="article_form">
            <form onSubmit={ handleNewPost }>
                <h2>Create a new article</h2>
                <input type="text" placeholder="Mention a title" onChange={(e) => setTitle(e.target.value)} 

                />
               
                <textarea name="description" cols="80" rows="20" placeholder="Write something awesome ..." onChange={(e) => setDescription(e.target.value)}></textarea>
                <br />
                <input type="submit" />
            </form>
            </div>
        </div>



    </>);

}

export default CreateAPost;