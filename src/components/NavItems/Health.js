import React, { useContext } from 'react';
import { Category, RealData } from '../try';
import Box from '../Box'
import './Headlines.css'
import Spinner from '../Spinner'

function Health() {
    const [data,setData]=useContext(RealData);
    const [categ,setCateg] = useContext(Category);

    const Health =()=>{
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
       <h1 className="page__name">Health News</h1>
            <div className="news-outputs">
               {categ==='health'?<Health/>:<Spinner/>}
            </div>
       </>
    )
}

export default Health
