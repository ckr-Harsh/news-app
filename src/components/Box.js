import React from 'react';
import './Box.css';

const Box = ({title, urlToImage, author, description}) => {
    return (
        <div>
            <div className="news-box">
                <p>{title}</p>
                <div className="image">
                    <img src={urlToImage} alt={title}/>
                </div>
                <p>{author}</p>
                <p>{description}</p>
               
            </div>
        </div>
    )
}

export default Box;