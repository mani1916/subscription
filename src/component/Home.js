import React ,{useEffect}from 'react';
import home from '../images/home.jpg';
import '../style/home.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import SchoolIcon from '@mui/icons-material/School';
import Nav from './Nav';
import '../style/home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    useEffect(() => {
        document.title = "CenZo's Articles";  
      }, []);
    return (
        <div>
            <Nav
            />
            {/* <h1>hoiiii</h1> */}
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='conter' style={{display:'flex',marginTop:'60px'}
            }>
                <div className='description' style={{width:'80%',marginLeft:'5%',marginTop:'2%',color:'#426259'}}>

                    <h1>Welcome to <span>CenZo</span><br/><SchoolIcon style={{fontSize:'2.5rem',marginTop:'-7px',backgroundColor:'#E5F9F4',color:'#426259',padding:'3px',borderRadius:'5px'}}/> Crafting Excellence in Every Detail !</h1>
                    <h5>
                    "Stay informed about our latest journal releases, articles, and exclusive content. Subscribe to Cenzo and join our pursuit of knowledge"
                    </h5>
                    <button ><Link to="/article" id='y'> JOIN<FontAwesomeIcon icon={faRightToBracket} fade size="lg" id='mk'/></Link></button>
                    <h2><i class="fa-solid fa-right-to-bracket fa-flip"></i></h2>
                    {/* <h1><FontAwesomeIcon icon="fa-solid fa-right-to-bracket"/>
                     */}

                    {/* <FontAwesomeIcon icon={faRightToBracket} /> */}
                    
                    
                </div>
                <div className='image'>
                <img src={home} alt="" width={'55%'} style={{float:'left',marginLeft:'28%',boxShadow:'none'}}/>
                </div>
            </div>
            
        </div>
    );
}

export default Home;
