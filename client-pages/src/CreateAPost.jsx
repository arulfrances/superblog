import React from "react";
import { useState } from "react";


function CreateAPost() {

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();

    const handleNewPost = (e) => {
        e.preventDefault();
        console.log(title & " " & description);


    }

    return (<>
        <div className="article_container">
            <form onSubmit={ handleNewPost }>
                <h2>Create a new article</h2>
                <input type="text" placeholder="Mention a title" onChange={(e) => setTitle(e.target.value)} 

                />
                <br />
                <br />
                <textarea name="description" cols="80" rows="20" placeholder="Write something awesome ..." onChange={(e) => setDescription(e.target.value)}></textarea>
                <br />
                <input type="submit" />
            </form>
        </div>



    </>);

}

export default CreateAPost;