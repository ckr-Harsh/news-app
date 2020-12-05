import React, { useContext } from 'react';
import { RealData } from '../ContextPage';
import Box from '../Box'

function Entertainment() {
    const [data]=useContext(RealData);
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
