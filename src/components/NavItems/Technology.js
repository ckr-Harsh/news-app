import React, { useContext } from 'react';
import { Category, RealData } from '../try';
import Box from '../Box'
import './Headlines.css'
import Spinner from '../Spinner'

function Technology() {
    const [data,setData]=useContext(RealData);
    const [categ,setCateg] = useContext(Category);

    const Technology =()=>{
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
       <h1 className="page__name">Technology News</h1>
            <div className="news-outputs">
               {categ==='technology'?<Technology/>:<Spinner/>}
            </div>
       </>
    )
}

export default Technology
