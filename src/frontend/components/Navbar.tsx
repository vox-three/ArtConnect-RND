import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";

import YourIconLogo from '../assets/Logo_ArtConnect.png';

const Navbar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    // const navigate = useNavigate();
    // const redirectScan = () => {
    //     navigate("/scan");
    // };

    // const navigateHome = useNavigate();
    // const redirectHome = () => {
    //     navigateHome("/");
    // };


    // const navigateCollection = useNavigate();
    // const redirectCollection = () => {
    //     navigateCollection("/customerdashboard");
    // };
  
    return (
      <AppBar position="static" className='navbar'>
        <Toolbar className='toolbar'>
          {/* <Avatar alt="Logo" src={YourIconLogo} /> Use Avatar for your logo */}
          <img
          src={YourIconLogo} // Replace with the actual path to your logo image
          alt="Logo"
          style={{
            height: '30px', // Set the height of the logo
            marginRight: '20px', // Add spacing between the logo and other elements
          }}
        />
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            className='account-icon'
          >
            <AccountCircleIcon fontSize='large' />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem>Log Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;