import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import YourIconLogo from "../../assets/rose.jpg";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useConnect } from "@connect2ic/react";
import { artconnect } from "../../../../.dfx/local/canisters/artconnect";

const CustomerDashboard = () => {
    // const [collection, setCollection] = useState([]);

    // const navigate = useNavigate();
    // const { isConnected } = useConnect({});

    // const lists = collection.map((nft) => (
    //     <Grid item xs={4} sm={6} md={4} lg={3} key={nft.id}>
    //         <div className="wrap-image-claim">
    //             <img src={nft.imageUrl} alt="Image 1" width="100%" />
    //         </div>
    //     </Grid>
    // ));

    // useEffect(() => {
    //     const getNfts = async () => {
    //         const nfts = await artconnect.readAllNfts();
    //         setCollection(nfts);
    //     };

    //     getNfts();
    // }, [isConnected, collection]);
    const [age, setAge] = React.useState('');

    const handleChangeFilter = (event) => {
        setAge(event.target.value);
    };

    const [store, setStore] = React.useState('');

    const handleChangeFilterStore = (event) => {
        setStore(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div className="afterscan-page">
                <Grid container>
                    <Grid item xs={12}>
                        <h1 className="title">NFT</h1>
                        <p style={{ textAlign: 'center', fontWeight: 'bold' }}>You've collected 0 NFTs</p>
                    </Grid>
                    <Grid item xs={12} style={{ paddingLeft:'20px' }}>
                        <FilterAltIcon style={{ color: '#E8833A', marginTop: '30px' }} />
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                            <InputLabel id="demo-simple-select-standard-label" style={{ fontSize:'10px', fontWeight:'bold' }}>All Collections</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={age}
                                onChange={handleChangeFilter}
                                label="Age"
                            >
                                <MenuItem value="Low to High">
                                    <em>Low To High</em>
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                            <InputLabel id="demo-simple-select-standard-label" style={{ fontSize:'10px', fontWeight:'bold' }}>All Store</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={store}
                                onChange={handleChangeFilterStore}
                                label="Age"
                            >
                                <MenuItem value="Low to High">
                                    <em>Low To High</em>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    {/* <Grid item xs={12} style={{ marginTop: "-40px" }}>
                        <h3 className="title">You've collected {collection.length} NFT</h3>
                    </Grid> */}
                    <Grid container spacing={2} style={{ padding: "20px" }}>
                        <Grid item xs={6} sm={6} md={4} lg={3}>
                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px #E3E3E3 solid' }}>
                                <Grid item xs={12} style={{ padding: '10px' }}>
                                    <div style={{ width: '100%', height: '100px', backgroundColor: 'red' }}>
                                        <img className='product--image' src={YourIconLogo} alt="" />
                                    </div>
                                </Grid>
                                <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'flex-start' }}>
                                        <p style={{ fontWeight: 'bold', fontSize: '12px', color: 'black', paddingLeft: '10px' }}>#696</p>
                                    </div>
                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end' }}>
                                        <p style={{ fontSize: '12px', color: 'black', paddingRight: '10px' }}>Poparty</p>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{
                                        width: '100%', height: '30px', backgroundColor: '#E8833A', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: 'white'
                                    }}>
                                        Sell
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={4} lg={3}>
                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px #E3E3E3 solid' }}>
                                <Grid item xs={12} style={{ padding: '10px' }}>
                                    <div style={{ width: '100%', height: '100px', backgroundColor: 'red' }}>
                                        <img className='product--image' src={YourIconLogo} alt="" />
                                    </div>
                                </Grid>
                                <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'flex-start' }}>
                                        <p style={{ fontWeight: 'bold', fontSize: '12px', color: 'black', paddingLeft: '10px' }}>#696</p>
                                    </div>
                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end' }}>
                                        <p style={{ fontSize: '12px', color: 'black', paddingRight: '10px' }}>Poparty</p>
                                    </div>
                                </Grid>
                                <Grid item xs={12}>
                                    <div style={{
                                        width: '100%', height: '30px', backgroundColor: '#E8833A', display: 'flex',
                                        justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', color: 'white'
                                    }}>
                                        Sell
                                    </div>
                                </Grid>
                            </div>
                        </Grid>
                        {/* {lists} */}
                    </Grid>
                </Grid>
            </div>
            <BottomBar />
        </>
    );
};

export default CustomerDashboard;
