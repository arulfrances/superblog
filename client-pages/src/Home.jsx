import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Home() {

    const [articles, setArticles] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:3001/allarticles')
            //.then(articles => console.log(articles))
            .then(articles => {
                setArticles(articles.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        // <div> Home</div>
        <div className='article_container'>
          
                {
                    articles.map(article => (
                            <Link to={`/article/${article._id}`} className="article">
                           <div className='article_text'> 
                           <h3> {article.title} </h3>
                            <p> {article.description} </p>
                            </div>
                        </Link>
                        
                    ))
                }
            
        </div>
    )
}

export default Home;