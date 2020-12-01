import React, {useState, useEffect} from 'react';
import './Headlines.css';
import Box from './Box';
require('dotenv').config();

const Headlines = () => {

    const [item, setItem] = useState([]);
    const api = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}`;

    const fetching = async () => {
        const result = await fetch(api);
        const data = await result.json();
        console.log(data.articles);
        setItem(data.articles);
    }
 
    useEffect(()=>{
        fetching();
    }, []);

    return (
        <div className="main-page">
            <h1 className="page__name">Top-Headlines</h1>
            <div className="news-outputs">
                {
                    item.map(arr=>(
                        <Box key={arr.publishedAt} title={arr.title} urlToImage={arr.urlToImage} author={arr.author} description={arr.description}/>
                    ))
                }
            </div>
            
           

        </div>
    )
}

export default Headlines;
