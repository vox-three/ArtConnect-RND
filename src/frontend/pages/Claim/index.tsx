import React from 'react'
import { Grid, Button } from '@mui/material';
import { Typography } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YourIconLogo from '../../assets/rose.jpg';
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";


const ClaimPage = () => {
    
    return (
        <>
            <Navbar/>
            <div className='afterscan-page'>
                <Grid container>
                    <Grid item xs={12}>
                        <h1 className='title'>Honney Coffee</h1>
                        <div className='title-map'>
                            <LocationOnIcon style={{ fontSize: 16 }} />
                            <Typography fontSize="16px" component={'center'}>
                                Hanoman, Ubud
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <h3 className='title'>You're collected 1 NFT</h3>
                        <Typography fontSize="15px" component={'center'} style={{ paddingLeft: '20px', paddingRight: '20px' }}>
                            Purchase any product in the store to get an NFT and get a surprise
                        </Typography>
                    </Grid>
                    <Grid container spacing={2} style={{ padding: '20px' }}>
                        <Grid item xs={4} sm={6} md={4} lg={3}>
                            <div className="wrap-image-claim">
                                <img src={YourIconLogo} alt="Image 1" width="100%" />
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={6} md={4} lg={3}>
                            <div className="wrap-image-claim">
                                <img src={YourIconLogo} alt="Image 1" width="100%" />
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={6} md={4} lg={3}>
                            <div className="wrap-image-claim">
                                <img src={YourIconLogo} alt="Image 1" width="100%" />
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={6} md={4} lg={3}>
                            <div className="wrap-image-claim">
                                <img src={YourIconLogo} alt="Image 1" width="100%" />
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop:'20px', paddingBottom:'20px' }}>
                        <Button
                            variant="contained"
                            className='button-explore'
                            onClick={() => {
                                // Add your share functionality here
                            }}
                        >
                           Claim Your Reward
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <BottomBar/>
        </>
    )
}

export default ClaimPage