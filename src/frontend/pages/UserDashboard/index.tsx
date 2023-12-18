import React from 'react'
import { Grid, LinearProgress, Card, CardContent, CardMedia, Typography } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import BottomBar from "../../components/BottomBar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../../assets/rose.jpg'
import image2 from '../../assets/rose.jpg'
import { Flare, Height } from '@mui/icons-material';

const UserDashboard = () => {

    const progressValue = 50;
    const responsive = {
        desktop: {
            breakpoint: { max: 1920, min: 800 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const nftSuggestionData = [
        {
            id: 1,
            imgurl: 'https://images.unsplash.com/photo-1644361566696-3d442b5b482a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nameBusiness: 'Business 1',
            nameNFT: 'Sleepy Sloth',
            nameArtist: 'John Doe',
        },
        {
            id: 2,
            imgurl: 'https://images.unsplash.com/photo-1644361566696-3d442b5b482a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nameBusiness: 'Business 2',
            nameNFT: 'Pikachu',
            nameArtist: 'Satoshi',
        },
        {
            id: 3,
            imgurl: 'https://images.unsplash.com/photo-1644361566696-3d442b5b482a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nameBusiness: 'Business 3',
            nameNFT: 'Gear 5',
            nameArtist: 'Luffy',
        },
        {
            id: 4,
            imgurl: 'https://images.unsplash.com/photo-1644361566696-3d442b5b482a?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            nameBusiness: 'Business 4',
            nameNFT: 'Getsuga Tenshou',
            nameArtist: 'Ichigo',
        }
    ]

    const collectionData = [
        {
            id: 1,
            nameBusiness: 'Name NFT 1',
            collection: '4 from 6 NFT',
            lineProgress: 50
        },
        {
            id: 2,
            nameBusiness: 'Name NFT 2',
            collection: '4 from 6 NFT',
            lineProgress: 30
        },
        {
            id: 3,
            nameBusiness: 'Name NFT 3',
            collection: '4 from 6 NFT',
            lineProgress: 80
        },
        {
            id: 4,
            nameBusiness: 'Name NFT 4',
            collection: '4 from 6 NFT',
            lineProgress: 100
        }
    ]
    return (
        <>
            <div className='afterscan-page'>
                <Grid container>
                    <Grid item xs={6} style={{ paddingTop: '20px', display: 'flex', justifyContent: 'flex-start' }}>
                        <AccountCircleIcon style={{ paddingLeft: '20px', fontSize: '40px' }} className="account-icon" />
                        <p style={{ fontWeight: 'bold', position: 'absolute', marginTop: '-1px', marginLeft: '60px', fontSize: '15px' }}>Gesha Ary</p>
                        <p style={{ fontWeight: 'bold', position: 'absolute', paddingTop: '4px', marginLeft: '60px', fontSize: '15px', color: '#E8833A', cursor: 'pointer' }}>Edit Profile</p>
                    </Grid>
                    <Grid item xs={6} style={{ paddingLeft: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                        <p style={{ fontWeight: 'bold' }}>Level 2</p>
                        <LinearProgress variant="determinate" value={progressValue} sx={{
                            backgroundColor: '#E3E3E3',
                            height: '5px',
                            width: '50%',
                            borderRadius: '5px',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: '#E8833A', // Warna garis (bar)
                            },
                        }} />
                    </Grid>
                    <div style={{ width: '100%', height: '2px', backgroundColor: '#e3e3e3', marginTop: '10px' }}></div>
                    <Grid item xs={12} style={{ marginTop: '10px', padding: '20px' }}>
                        <table style={{ width:'100%', textAlign:'center', backgroundColor:'#F9E7D9', border:'2px #E8833A solid', borderCollapse:'collapse',color:'black' }}>
                            <tr>
                                <td rowSpan={2} style={{ border:'2px #E8833A solid', borderCollapse:'collapse' }}>
                                    <p style={{ fontSize:'18px', fontWeight:'bold' }}>1</p>
                                    <p>Reward Claimed</p>
                                </td>
                                <td style={{ border:'2px #E8833A solid', borderCollapse:'collapse' }}>
                                    <p style={{ fontSize:'18px', fontWeight:'bold' }}>18</p>
                                    <p>Total NFT</p>
                                </td>
                                <td style={{ border:'2px #E8833A solid', borderCollapse:'collapse' }}>
                                    <p style={{ fontSize:'18px', fontWeight:'bold' }}>18</p>
                                    <p>Total TRX</p>
                                </td>
                            </tr>
                            <tr>
                                <td style={{ border:'2px #E8833A solid', borderCollapse:'collapse' }}>
                                    <p style={{ fontSize:'18px', fontWeight:'bold' }}>2</p>
                                    <p>Collection</p>
                                </td>
                                <td style={{ border:'2px #E8833A solid', borderCollapse:'collapse' }}>
                                    <p style={{ fontSize:'18px', fontWeight:'bold' }}>2</p>
                                    <p>Stores</p>
                                </td>
                            </tr>
                        </table>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '10px', paddingBottom: '100px' }}>
                        <div style={{ width: '100%', height: 'auto' }}>
                            <p style={{ fontWeight: 'bold', color: 'black', fontSize: '24px', display: 'flex', justifyContent: 'center' }}>Complete Your Collection</p>
                            <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                                {collectionData.map((e, i) =>
                                    <div className='card-collection' key={i}>
                                        <p style={{ fontWeight: 'bold', fontSize: '24px', color: 'black', textAlign: 'center', paddingBottom: '10px' }}>{e.nameBusiness}</p>
                                        <LinearProgress variant="determinate" value={e.lineProgress} sx={{
                                            backgroundColor: '#E3E3E3',
                                            height: '7px',
                                            width: '90%',
                                            borderRadius: '5px',
                                            margin: '0px auto',
                                            marginTop: '-20px',
                                            '& .MuiLinearProgress-bar': {
                                                backgroundColor: '#E8833A', // Warna garis (bar)
                                            },
                                        }} />
                                        <p style={{ color: 'black', textAlign: 'center' }}>{e.collection}</p>
                                    </div>
                                )}
                            </Carousel>
                        </div>
                    </Grid>

                    <Grid item xs={12} style={{ marginTop: '-50px', paddingBottom: '30px', paddingLeft: '10px', paddingRight: '10px' }}>
                        <div style={{
                            width: '100%', height: '70px', backgroundColor: '#E8833A', display: 'flex',
                            justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '24px'
                        }}>
                            Sell NFT
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: '10px' }}>
                        <div style={{ width: '100%', height: 'auto', paddingBottom: '100px' }}>
                            <p style={{ fontWeight: 'bold', color: 'black', fontSize: '24px', display: 'flex', justifyContent: 'center' }}>Get Latest Colection</p>
                            <Carousel removeArrowOnDeviceType={["tablet", "mobile"]} responsive={responsive}>
                                {nftSuggestionData.map((e, i) =>
                                    <div className='card' key={i}>
                                        <img className='product--image' src={e.imgurl} alt="" />
                                        <p style={{ fontWeight: 'bold', fontSize: '15px', display:'flex', justifyContent:'center', marginTop:'-10px' }}>{e.nameNFT}</p>
                                        <p>
                                            <button>See Collection</button>
                                        </p>
                                    </div>
                                )}
                            </Carousel>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <BottomBar />
        </>
    )
}

export default UserDashboard