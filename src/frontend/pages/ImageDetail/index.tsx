import React from 'react'
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { right } from '@popperjs/core';
import { Button } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import YourIconLogo from '../../assets/rose.jpg'

const ImageDetailPage = () => {
    return (
        <>
            <div className='imagedetail-page'>
                <Grid container>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                        <h2 className='title'>Po Party</h2>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <div className='wrap-image-scan'>
                            <img src={YourIconLogo} alt="" />
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
                            onClick={() => {
                                // Add your share functionality here
                            }}
                        >
                            Share
                        </Button>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', marginTop:'20px', paddingBottom:'20px' }}>
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
        </>
    )
}

export default ImageDetailPage