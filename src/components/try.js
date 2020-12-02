import React, { createContext, useState,useEffect } from 'react'
import Axios from 'axios'


export const Data = createContext();
function Context(props) {
    const [state,setState] = useState([]);
    const apiKey = 'f1b742bf82a24eb384ca2d0ef1fca373';
    const [categ,setCateg] = useState('business');

    useEffect( ()=>{
        Fetching();
    },[]);
     
    const Fetching = async ()=>{
             await Axios
             .get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`)
             .then(res=>{
                  // console.log(res.data.articles);
                   setState(res.data.articles);
             })
             .catch(err=>console.log(err));   
    } 
    const Fetching2 = async ()=>{
         await Axios
         .get(`https://newsapi.org/v2/top-headlines?country=in&category=${categ}&apiKey=${apiKey}`)
         .then(res=>{
             console.log(res.data.articles);
         })
         .then(err=>console.log(err));
    }
   
    return (
        <>
        <Data.Provider value={[state,setState]}>
            {props.children}
        </Data.Provider>
        </>
    )
}

export default Context
