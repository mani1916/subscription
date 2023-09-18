import React from 'react';
import SendCard from './SendCard';
import'../App.css'
import { useEffect } from 'react';

// import { useContext } from 'react';
// import DataContext, { DataProvider } from '../context/DataContext'
const Articles = () => {
  useEffect(() => {
    document.title = "Articles Page";  
  }, []);
  // const{myarticle,Setarticle,cards,setcards}=useContext(DataContext)
    return (
        <div>
            <SendCard />
        </div>
    );
}

export default Articles;
