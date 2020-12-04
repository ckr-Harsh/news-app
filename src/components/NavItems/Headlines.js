import React, { useContext} from 'react';
import './Headlines.css';
import Box from '../Box'
import {Data} from '../ContextPage'
import '../Box.css'

const Headlines = () => {
    const [state,setState] = useContext(Data);
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
                         url={arr.url}
                         />
                    ))
                }
            </div>
        </div>
    )
}

export default Headlines;
