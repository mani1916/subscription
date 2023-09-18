import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '../style/nav.css'
import ArticleIcon from '@mui/icons-material/Article';

const navItems = ['Home', 'About', 'Contact'];

function Nav(props) {
  const { window } = props;
  const count=0;
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className='navi'>
      <CssBaseline />
      <AppBar component="nav" id='navbar'>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          <ArticleIcon style={{fontSize:'2.5rem',marginTop:'-7px'}}/> <span style={{fontWeight:'bolder'}}>CenZo</span>
          </Typography>
          <div>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#426259'}} id='itt'>
                {item}
              </Button>
            ))}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Nav.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Nav;
