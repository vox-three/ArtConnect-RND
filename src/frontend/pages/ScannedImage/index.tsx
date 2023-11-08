import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography, Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import YourIconLogo from '../../assets/rose.jpg'
import { useNavigate } from "react-router-dom";

const ImageAfterScan = () => {
    const navigateDetailPage = useNavigate();
    const redirectDetailPage = () => {
        navigateDetailPage("/imagedetailpage");
    };
    return (
        <>    
            <div className='afterscan-page'>
               <Grid container>
                    <Grid item xs={12}>
                        <h1 className='title'>Honney Coffee</h1>
                        <div className='title-map'>
                        <LocationOnIcon style={{ fontSize:16 }}/>
                        <Typography fontSize="16px" component={'center'}>
                            Hanoman, Ubud
                        </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <h3 className='title'>You've collected 1 NFT</h3>
                        <Typography fontSize="15px" component={'center'} style={{ paddingLeft:'20px', paddingRight:'20px' }}>
                            Purchase any product in the store to get an NFT and get a surprise
                        </Typography>
                    </Grid>
                    <Grid item xs={12} style={{ display:'flex', justifyContent:'center', marginTop:'20px' }}>
                        <div className='wrap-image-scan' onClick={redirectDetailPage}>
                            <img src={YourIconLogo} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ display:'flex', justifyContent:'center', marginTop:'20px' }}>
                        <Button className="button-collection" onClick={() => {
                            redirectDetailPage();
                        }}
                        >
                            See Details
                        </Button>
                    </Grid>
               </Grid>
            </div>
        </>
    )
}

export default ImageAfterScan