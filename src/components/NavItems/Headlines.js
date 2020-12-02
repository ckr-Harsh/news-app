import React, { useContext} from 'react';
import './Headlines.css';
import Box from '../Box'
import {Data} from '../try'

const Headlines = () => {
    const [state,setState] = useContext(Data);
    console.log(state);
    return (
        <div className="main-page">
            <h1 className="page__name">Top-Headlines</h1>
            <div className="news-outputs">
                {
                    state.map(arr=>(
                        <Box key={arr.title}
                         title={arr.title}
                         urlToImage={arr.urlToImage} 
                         author={arr.author} 
                         description={arr.description}
                         />
                    ))
                }
            </div>
        </div>
    )
}

export default Headlines;
