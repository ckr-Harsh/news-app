import React from 'react';
import './Box.css';

const Box = (props) => {
    return (
        <div>
            <div className="news-box">
                <p>{props.title}</p>
                <div className="image">
                    <img src={props.urlToImage} alt={props.title}/>
                </div>
                <p>{props.author}</p>
                <p>{props.description}</p>
               
            </div>
        </div>
    )
}

export default Box;