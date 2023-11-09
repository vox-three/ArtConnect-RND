import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";

const CustomerDashboard = () => {

    const navigateClaim = useNavigate();
    const redirectClaim = () => {
        navigateClaim("/claimpage");
    };
    return (
        <>
            <Navbar/>
            <div className='customerdashboard-page'>
                <Grid container>
                    <Grid item xs={12}>
                        <h1 className='title'>My Collection</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <h3 className='title'>You're collected 1 NFT</h3>
                        <Typography fontSize="15px" component={'center'} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                            Purchase any product in the store to get an NFT and get a surprise
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                            <div className='item-collection'>
                            </div>
                    </Grid> */}
                    <Grid container spacing={2} style={{ padding:'20px', marginTop:'20px' }} >
                        <Grid item xs={6} sm={6} md={6}>
                            <Paper elevation={3} onClick={redirectClaim}>
                                {/* Kotak 1 */}
                                <div style={{ padding: '20px' }}>
                                    <h2>Honney Coffee</h2>
                                    <p>5 NFTs</p>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <BottomBar/>
        </>
    )
}

export default CustomerDashboard