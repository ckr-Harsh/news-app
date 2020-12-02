import React, { useContext } from 'react';
import { Category, RealData } from '../try';
import Box from '../Box'
import './Headlines.css'
import Spinner from '../Spinner'

function Entertainment() {
    const [data,setData]=useContext(RealData);
    const [categ,setCateg] = useContext(Category);

    const Entertainment =()=>{
        return(
                data.map(arr=>(
                    <Box key={arr.publishedAt}
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
       <h1 className="page__name">Entertainment News</h1>
            <div className="news-outputs">
               {categ==='entertainment'?<Entertainment/>:<Spinner/>}
            </div>
       </>
    )
}

export default Entertainment
