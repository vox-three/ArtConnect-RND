import React from 'react';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image'; // Ikon gambar dari MUI
import BarcodeIcon from '@mui/icons-material/QRCode'; // Ikon barcode dari MUI
import RewardIcon from '@mui/icons-material/Redeem'; // Ikon reward dari MUI
import { useNavigate, Link, useLocation } from "react-router-dom";


const BottomBar = () => {
  const [value, setValue] = React.useState(0);

  // const navigate = useNavigate();
  //   const redirectCollection = () => {
  //       navigate("/customerdashboard");
  //   };
  
  // const navigateScan = useNavigate();
  //   const redirectScan = () => {
  //     navigateScan("/scan");
  //   };
  
  // const navigateReward = useNavigate();
  //   const redirectReward = () => {
  //     navigateReward("/claimpage");
  //   };
    
    const location = useLocation();
  return (
    <BottomNavigation
      showLabels
      className='bottom-navigation'
      value={location.pathname}
      onChange={(event, newValue)=>{
        setValue(newValue);
      }}
    >
      <BottomNavigationAction className='hover-bottom-navigation' label="Collection" icon={<ImageIcon style={{ color: 'orange' }} />}
      component={Link} to="/customerdashboard" value="/customerdashboard" />
      <BottomNavigationAction className='hover-bottom-navigation' label="Scan" icon={<BarcodeIcon style={{ color: 'orange', fontSize: 32 }} />}
      component={Link} to="/scan" value="/scan" />
      <BottomNavigationAction className='hover-bottom-navigation'  label="Reward" icon={<RewardIcon style={{ color: 'orange' }} />}
      component={Link} to="/claimpage" value="/claimpage"/>
    </BottomNavigation>
  );
}

export default BottomBar