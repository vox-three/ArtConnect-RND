import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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

    const navigate = useNavigate();
    const redirectScan = () => {
        navigate("/scan");
    };

    const navigateHome = useNavigate();
    const redirectHome = () => {
        navigateHome("/");
    };


    const navigateCollection = useNavigate();
    const redirectCollection = () => {
        navigateCollection("/customerdashboard");
    };
  
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
          <Typography variant="h6">Your Logo</Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            className='hamburger-icon'
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={redirectHome}>Home</MenuItem>
            <MenuItem onClick={redirectScan}>Scan</MenuItem>
            <MenuItem onClick={redirectCollection}>Collection</MenuItem>
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;