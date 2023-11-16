import React, { useEffect, useState } from 'react'
import { Button, Grid, LinearProgress } from '@mui/material';
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import { useNavigate,useLocation } from "react-router-dom";

const TransactionList = () => {
    const [data, setData] = useState([
        {
            title: "Honney Coffee",
            progress: 0,
            maxScan: 2,
            currentScan: 0,
            claim: false,
        }

    ]);

    const {state} = useLocation();
    console.log(data);
    useEffect(() => {
        const scan = (parseInt(localStorage.getItem('scanCount'))) || 0;
        const currentData = [...data]
        currentData[0].currentScan = scan;
        if(currentData[0].maxScan == currentData[0].currentScan){
            currentData[0].claim = true
        }
        const percentScan = currentData[0].currentScan /  currentData[0].maxScan * 100;
        currentData[0].progress = percentScan
        setData(currentData)
    }, [])

    console.log(state?.imgurl);
    
    const progressValue = 100;

    const navigateClaim = useNavigate();
    const redirectClaim = () => {
        navigateClaim("/claimpage");
        localStorage.setItem('scanCount','0');
    };

    
    return (
        <div>
            <Navbar />
            <div className='afterscan-page'>
                <Grid container style={{ paddingLeft: '15px' }}>
                    <Grid item xs={12}>
                        <h1 className='title'>Transaction List</h1>
                    </Grid>
                    {data?.map((e, i) => 
                    <>
                        <Grid key={i} item xs={8}>
                        <h3>{e.title}</h3>
                        <LinearProgress variant="determinate" value={e.progress} sx={{ 
                            backgroundColor: '#E3E3E3', 
                            height: '10px', 
                            borderRadius: '5px',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#E8833A', // Warna garis (bar)
                              },
                            }} />
                        <p>You collected {e.currentScan} from {e.maxScan} NFT</p>
                        </Grid>
                        <Grid item xs={4} style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                            <Button className={`${e.claim ? 'button-transaction' : 'button-disable'}`} disabled={!e.claim} onClick={redirectClaim}>Claim</Button>
                        </Grid>
                        <Grid item xs={12} style={{ display:'flex', justifyContent:'center', alignItems:'center', paddingRight:'15px' }}>
                            <div style={{ width:'100%', height:'2px', borderBottom:'2px solid #E3E3E3' }}></div>
                        </Grid>
                    </>
                    )}
                </Grid>
            </div>
            <BottomBar />
        </div>
    )
}

export default TransactionList