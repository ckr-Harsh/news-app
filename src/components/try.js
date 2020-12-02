import React, { createContext, useState,useEffect } from 'react'
import Axios from 'axios'

export const RealData = createContext();
export const Category = createContext();
export const Data = createContext();

function Context(props) {
    const [state,setState] = useState([]);
    const apiKey = 'f1b742bf82a24eb384ca2d0ef1fca373';
    const [categ,setCateg] = useState('');
    const [data,setData] = useState([]);

    useEffect( ()=>{
        Fetching();
        Fetching2();
    },[categ]);

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
             setData(res.data.articles);
         })
         .catch(err=>console.log(err));
    }
   
    return (
        <>
        <RealData.Provider value={[data,setData]}>
        <Category.Provider value={[categ,setCateg]}>
        <Data.Provider value={[state,setState]}>
                 {props.children}
        </Data.Provider>
        </Category.Provider>
        </RealData.Provider>
        </>
    )
}

export default Context
