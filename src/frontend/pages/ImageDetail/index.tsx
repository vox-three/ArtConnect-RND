import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { right } from '@popperjs/core';
import { Button, Dialog, DialogTitle } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
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
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <h2 className='title'>Po Party</h2>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <div className='wrap-image-scan'>
                            <img src={state.imgurl} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={6} style={{ paddingRight: '20px', marginTop: '20px' }}>
                        <p style={{ textAlign: right }}><span style={{ fontWeight: 'bold' }}>Artist</span> : Poppy Lessart</p>
                    </Grid>
                    <Grid item xs={6} style={{ paddingLeft: '20px', marginTop: '20px' }}>
                        <div style={{ display: 'flex' }}>
                            <LocationOnIcon style={{ marginTop: '10px' }} />
                            <p>Denpasar, Bali</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                        <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, quos magni soluta nam dolorum praesentium a rem error molestiae eos voluptatum obcaecati iure nobis labore saepe? Voluptate ea explicabo non, quia doloremque consequuntur. Maxime eos fugit ipsam earum? Quae atque officia totam at quod amet quam accusamus, similique voluptatibus error iusto et aut? Excepturi perferendis fugit sequi fugiat veritatis perspiciatis! Quisquam repellendus nam ipsa odit natus blanditiis obcaecati accusamus doloremque. Iure nam ab repellendus autem ipsum molestias dolor molestiae non?</p>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Button
                            variant="contained"
                            className='button-share'
                            startIcon={<ShareIcon />}
                            onClick={handleOpen}
                        >
                            Share
                        </Button>

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
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', paddingBottom: '100px' }}>
                        <Button
                            variant="contained"
                            className='button-explore'
                            onClick={() => {
                                // Add your share functionality here
                            }}
                        >
                            Explore Poppy's Art & Collaborations
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <BottomBar />
        </>
    )
}

export default ImageDetailPage