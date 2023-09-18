import React from 'react';
import SendCard from './SendCard';
import'../App.css'

// import { useContext } from 'react';
// import DataContext, { DataProvider } from '../context/DataContext'
const Articles = () => {
  
  // const{myarticle,Setarticle,cards,setcards}=useContext(DataContext)
    return (
        <div>
            <SendCard />
            <br/>
            <br/>
            <br/>          
            <hr/>
        </div>
    );
}

export default Articles;
