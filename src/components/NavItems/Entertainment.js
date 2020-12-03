import React, { useContext } from 'react';
import { RealData } from '../try';
import Box from '../Box'
import './Headlines.css'
import '../Box.css'

function Entertainment() {
    const [data,setData]=useContext(RealData);
    return (
       <> 
       <h1 className="page__name">Entertainment News</h1>
            <div className="news-outputs">
            { data.map(arr=>{
                   return(
                    <Box key={arr.title}
                     title={arr.title}
                     urlToImage={arr.urlToImage} 
                     author={arr.author} 
                     description={arr.description}
                     url={arr.url}
                     />
                );
            })
        }
            </div>
       </>
    )
}

export default Entertainment
