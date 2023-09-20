import './App.css';
import Home from "./component/Home";
import { Routes,Route } from 'react-router-dom';
import Articles from './component/Articles';
import '../src/index.css'
import Myarticles from './component/Myarticles';
import User from './component/User';
import { DataProvider } from './context/DataContext';
function App() {
 
  
  ;
  return (

    <DataProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles' element={<Articles />}/>
        <Route path='/myarticles' element={<Myarticles/>}/>
        <Route path='/user' element={<User/>}/>r

        </Routes>
        </DataProvider>

  );
}

export default App;
