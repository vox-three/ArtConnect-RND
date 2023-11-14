import React from 'react'
import { Grid, LinearProgress } from '@mui/material';
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";

const TransactionList = () => {
    const progressValue = 100;
    const progressValue2 = 80;

    const navigateClaim = useNavigate();
    const redirectClaim = () => {
        navigateClaim("/claimpage");
    };
    return (
        <div>
            <Navbar />
            <div className='afterscan-page'>
                <Grid container style={{ paddingLeft:'15px' }}>
                    <Grid item xs={12}>
                        <h1 className='title'>Transaction List</h1>
                    </Grid>
                    <Grid item xs={8}>
                        <h3>Honney Coffee</h3>
                        <LinearProgress variant="determinate" value={progressValue} sx={{ 
                            backgroundColor: '#E3E3E3', 
                            height: '10px', 
                            borderRadius: '5px',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#E8833A', // Warna garis (bar)
                              },
                            }} />
                        <p>You collected 5 from 5 NFT</p>
                    </Grid>
                    <Grid item xs={4} style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <div style={{ width:'80px', height:'40px', backgroundColor:'#E8833A', borderRadius:'5px',
                        color:'white', fontWeight:'bold', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer' }} onClick={redirectClaim}>
                            Claim
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ display:'flex', justifyContent:'center', alignItems:'center', paddingRight:'15px' }}>
                        <div style={{ width:'100%', height:'2px', borderBottom:'2px solid #E3E3E3' }}></div>
                    </Grid>

                    {/* list ke-2 */}
                    <Grid item xs={8}>
                        <h3>Fashion Style</h3>
                        <LinearProgress variant="determinate" value={progressValue2} sx={{ 
                            backgroundColor: '#E3E3E3', 
                            height: '10px', 
                            borderRadius: '5px',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#E8833A', // Warna garis (bar)
                              },
                            }} />
                        <p>You collected 4 from 5 NFT</p>
                    </Grid>
                    <Grid item xs={4} style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                        <div style={{ width:'80px', height:'40px', backgroundColor:'#E8833A', borderRadius:'5px',
                        color:'white', fontWeight:'bold', display:'flex', justifyContent:'center', alignItems:'center', cursor:'pointer' }}>
                            Claim
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ display:'flex', justifyContent:'center', alignItems:'center', paddingRight:'15px' }}>
                        <div style={{ width:'100%', height:'2px', borderBottom:'2px solid #E3E3E3' }}></div>
                    </Grid>
                </Grid>
            </div>
            <BottomBar />
        </div>
    )
}

export default TransactionList