import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArticleIcon from '@mui/icons-material/Article';
// import Samples from './Samples';
// import { faOpencart } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../style/nav1.css'
import { Link } from 'react-router-dom';
function Nav1({count}) {
  return (
    <Navbar expand="lg" style={{backgroundColor:'#E5F9F4',marginBottom:'2.5%'}}>
      <Container fluid id='nav'>
        <Navbar.Brand href="#" style={{color:'#426259',fontSize:'30px',fontWeight:'bolder'}}><ArticleIcon style={{fontSize:'3rem',marginTop:'-7px',marginRight:'8px'}}/>CenZo</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse className='justify-content-end'>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Article"
              className="me-2"
              aria-label="Search"
              style={{border:'2px solid #426259'}}
            />
            <Button  style={{backgroundColor:'#426259',color:'#E5F9F4',border:'none'}} id='buu'>Search</Button>
          </Form>
          </Navbar.Collapse>
        <Navbar.Collapse id="navbarScroll" style={{marginLeft:'30%'}}>
       
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ width: '100%',float:'right'}}
            navbarScroll
            
          >
           <p style={{marginLeft:'30%',marginTop:'6px',fontWeight:'bold',cursor:'pointer'}}><LocalMallIcon/> <Link to='/myarticles' style={{textDecoration:'none',color:'#426259'}}> My Articles({count}) </Link></p>
           <p style={{marginLeft:'13%',marginTop:'7px',fontWeight:'bold'}}>
           <ShoppingCartIcon/>Cart</p>
          </Nav>
         
        </Navbar.Collapse>
       
      </Container>
      
    </Navbar>
    
  );
}

export default Nav1;