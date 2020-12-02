import React, { useContext } from 'react';
import { Category, RealData } from '../try';
import Box from '../Box'
import './Headlines.css'
import Spinner from '../Spinner'

function Sports() {
    const [data,setData]=useContext(RealData);
    const [categ,setCateg] = useContext(Category);

    const Sports =()=>{
        return(
                data.map(arr=>(
                    <Box key={arr.title}
                     title={arr.title}
                     urlToImage={arr.urlToImage} 
                     author={arr.author} 
                     description={arr.description}
                     />
                ))
        )
    }
    return (
       <> 
       <h1 className="page__name">Sports News</h1>
            <div className="news-outputs">
               {categ==='sports'?<Sports/>:<Spinner/>}
            </div>
       </>
    )
}

export default Sports
