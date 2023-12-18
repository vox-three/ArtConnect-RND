import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { right } from '@popperjs/core';
import { Button, Dialog, DialogTitle } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useLocation } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const ImageDetailPage = () => {

    const { state } = useLocation();
    console.log(state.imgurl);

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const shareUrl = state.imgurl;
    const title = 'Check out this amazing artwork I received, ';

    return (
        <>
            <Navbar />
            <div className='imagedetail-page'>
                <Grid container>
                    <Grid item xs={4} style={{ paddingTop: '40px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', paddingLeft: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <ArrowBackIosIcon style={{ color: 'gray', fontSize: '10px', marginTop: '2px' }} />
                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: 'gray' }}>Back</span>
                        </div>
                    </Grid>
                    <Grid item xs={4} style={{ paddingTop: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <span style={{ fontWeight: 'bold', color: 'black', fontSize: '24px' }}>#213</span>
                    </Grid>
                    <Grid item xs={4} style={{ paddingTop: '40px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                            <ShareIcon style={{ color: '#E8833A', fontSize: '10px', marginTop: '2px' }} />
                            <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#E8833A' }} onClick={handleOpen}>Share</span>
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='wrap-image-scan'>
                            <img src={state.imgurl} alt="" />
                        </div>
                        <span style={{ color: 'black', marginLeft: '-140px', marginTop: '10px', fontSize: '16px', fontWeight: 'bold' }}>Po Party</span>
                        <span style={{ color: 'black', marginLeft: '-95px', marginTop: '10px', fontSize: '12px', fontWeight: 'bold' }}>Owner :
                            <span style={{ fontWeight: 'bold', color: 'orange', fontSize: '12px', marginLeft: '5px' }}>23147723</span>
                        </span>
                        <div style={{
                            width: '90%', height: '50px', borderRadius: '5px', marginTop: '20px', backgroundColor: '#E8833A', color: 'white',
                            display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '20px'
                        }}>
                            Sell
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ width: '90%', height: '2px', marginTop: '20px', backgroundColor: '#e3e3e3' }}></div>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <div style={{ width: '80%', height: 'auto', border: '2px solid #e3e3e3', padding: '20px' }}>
                            <Grid item xs={12}>
                                <span style={{ fontWeight: 'bold', fontSize: '20px', color: 'black' }}>Description</span>
                            </Grid>
                            <Grid item xs={12}>
                                <p style={{ textAlign: 'justify' }}>
                                    Explore a realm of digital art exclusivity with the Poparty Collection—crafted by promising NFT artists in an exclusive collaboration with ICP and ArtConnect. Limited edition, limitless innovation. Own a piece of the future where art meets blockchain.
                                </p>
                            </Grid>
                            <Grid item xs={12}>
                                <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                    <div style={{ width: '50%', height: 'auto', display: 'flex', justifyContent: 'flex-start' }}>
                                        <p style={{ textAlign: right }}><span style={{ fontWeight: 'bold' }}>Artist</span> : Poppy Lessart</p>
                                    </div>
                                    <div style={{ width: '50%', height: 'auto', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                                        <LocationOnIcon />
                                        <span>Denpasar, Bali</span>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} style={{ display:'flex', justifyContent:'center', alignItems:'center' }}>
                                <div style={{
                                    width: '80%', height: '40px', borderRadius: '5px', marginTop: '20px', backgroundColor: '#E8833A', color: 'white',
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', fontSize: '15px'
                                }}>
                                    Explore Poppy's Collection
                                </div>
                            </Grid>
                        </div>
                    </Grid>
                    <Dialog open={open} onClose={handleClose}>
                        <Grid container style={{ padding:'20px'}}>
                            <Grid item xs={12}>
                                <p style={{ fontWeight:'bold', fontSize:'24px', textAlign:'center' }}>Share</p>
                            </Grid>
                            <Grid item xs={12} style={{ display:'flex', justifyContent:'center' }}>
                                <FacebookShareButton url={shareUrl} quote={title}>
                                    <FacebookIcon style={{ width:'50px', height:'50px' }} round={true}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton url={shareUrl} title={title}>
                                    <TwitterIcon round={true} style={{ width:'50px', height:'50px', marginLeft:'5px' }}></TwitterIcon>
                                </TwitterShareButton>
                                <WhatsappShareButton url={shareUrl} title={title}>
                                    <WhatsappIcon round={true} style={{ width:'50px', height:'50px', marginLeft:'5px' }}></WhatsappIcon>
                                </WhatsappShareButton>
                            </Grid>
                        </Grid>
                    </Dialog>
                </Grid>
            </div>
            <BottomBar />
        </>
    )
}

export default ImageDetailPage