import React from 'react'
import { Grid, Button } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";


const ClaimPage = () => {
    
    return (
        <>
            <Navbar/>
            <div className='afterscan-page'>
                <Grid container>
                    <Grid item xs={12}>
                        <h1 className='title'>Congratulation! <br /> Reward Claimed!</h1>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <StarsIcon data-aos="zoom-in" style={{ color:'#E8833A', fontSize:'200px' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <p className='sub-title'>You've claimed 5 NFT from <b>Honney Coffee</b></p>
                    </Grid>
                </Grid>
            </div>
            <BottomBar/>
        </>
    )
}

export default ClaimPage