import './App.css';
import Home from "./component/Home";
import { Routes,Route } from 'react-router-dom';
import Articles from './component/Articles';
import '../src/index.css'
import Myarticles from './component/Myarticles';
import { DataProvider } from './context/DataContext';
function App() {
 
  
  ;
  return (

    <DataProvider>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles' element={<Articles />}/>
        <Route path='/myarticles' element={<Myarticles/>}/>

        </Routes>
        </DataProvider>

  );
}

export default App;
