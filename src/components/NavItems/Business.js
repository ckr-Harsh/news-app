import React, { useContext } from 'react';
import { Category, RealData } from '../try';
import Box from '../Box'
import './Headlines.css'
import Spinner from '../Spinner'

const Business = () => {
    const [data,setData]=useContext(RealData);
    const [categ,setCateg] = useContext(Category);

    const Business =()=>{
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
       <h1 className="page__name">Business News</h1>
            <div className="news-outputs">
               {categ==='business'?<Business/>:<Spinner/>}
            </div>
       </>
    )
}

export default Business;
