import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";


function Article() {

    const { articleId } = useParams();
    const [article, setArticle] = useState({});
    useEffect(() => {
        axios.get('http://localhost:3001/article/'+articleId)
            .then(result => setArticle(result.data))
            .catch(error => console.log(error))
    }, [])


    return (<div className="article_container">
        <div className="article_post">
        
            <h2>{article.title}</h2>
            <p>{article.description}</p>
        </div>
    </div>);
}

export default Article;