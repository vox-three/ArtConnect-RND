import React from 'react';
import { Grid, Tabs, Tab, Typography, Box, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Navbar from '../../components/Navbar';
import YourIconLogo from '../../assets/rose.jpg';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from "react-router-dom";

const ArtistProfile = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [age, setAge] = React.useState('');

    const handleChangeFilter = (event) => {
        setAge(event.target.value);
    };

    const navigateArtistDirectory = useNavigate();
    const redirectArtisDirectory = () => {
        navigateArtistDirectory("/artistdirectory");
    };

    return (
        <>
            <Navbar />
            <div className='marketplace-page'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper>
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }} >
                                <ArrowBackIcon style={{ color: 'black', marginLeft: '80px', marginTop: '50px' }} />
                                <p style={{ marginLeft: '5px', paddingTop: '50px',cursor:'pointer' }} onClick={redirectArtisDirectory}>Back to <b>Artist Directory</b></p>
                            </div>
                            <div style={{ width: '15%', height: 'auto', backgroundColor: '#F9E7D9', border: '4px #E8833A solid', position: 'absolute', marginLeft: '80px', padding: '50px' }}>
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                        <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                    </div>
                                </Grid>
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <p style={{ fontSize: '24px', fontWeight:'bold' }}>Poppy Lessart</p>
                                </Grid>
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom:'20px' }}>
                                        <LocationOnIcon style={{ width: '20px' }} /><span style={{ fontWeight: 'bold' }}>Denpasar, Bali</span>
                                    </div>
                                </Grid>
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <p style={{ textAlign: 'justify' }}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quod, itaque, a quasi nulla omnis nostrum,
                                        eos dolorem eligendi maiores suscipit incidunt pariatur sapiente ab nisi quos autem modi accusantium commodi.
                                        Quae nemo aspernatur iusto repellendus rem, quisquam, sapiente minima
                                        nisi ad quos laboriosam sunt obcaecati adipisci officiis a! Necessitatibus!
                                    </p>
                                </Grid>
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'row' }}>
                                    <InstagramIcon style={{ color: '#E8833A' }} />
                                    <FacebookIcon style={{ color: '#E8833A' }} />
                                    <SportsBasketballIcon style={{ color: '#E8833A' }} />
                                    <ShareIcon style={{ color: '#E8833A', position: 'absolute', right: '0', paddingRight: '50px' }} />
                                </Grid>

                            </div>
                            <Tabs value={value} onChange={handleChange} centered>
                                <Tab style={{ marginLeft:'-400px', color:'black' }} label="Showcase" />
                                <Tab style={{ color:'black' }} label="Collaboration" />
                            </Tabs>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <TabPanel value={value} index={0}>
                                <Grid container spacing={2} style={{ padding: '20px' }}>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <FilterAltIcon style={{ color: '#E8833A', marginTop: '20px', marginLeft: '800px' }} />
                                        <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
                                            <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
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
                                    </Grid>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <div style={{ width: '70%', height: 'auto' }}>
                                            <Grid container spacing={2} style={{ padding: '20px' }}>
                                                <Grid item xs={6} sm={6} md={4} lg={4}>
                                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Poparty</p>
                                                        </Grid>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-20px', paddingLeft: '20px', paddingRight: '20px' }}>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui! Iste perspiciatis architecto sint quia.</p>
                                                        </Grid>
                                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Total</p>
                                                                <span style={{ fontWeight: 'bold' }}>86</span>
                                                            </div>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={4} lg={4}>
                                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Sleepy Sloth</p>
                                                        </Grid>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-20px', paddingLeft: '20px', paddingRight: '20px' }}>
                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui! Iste perspiciatis architecto sint quia.</p>
                                                        </Grid>
                                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Total</p>
                                                                <span style={{ fontWeight: 'bold' }}>128</span>
                                                            </div>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Grid container spacing={2} style={{ padding: '20px' }}>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                        <div style={{ width: '70%', height: 'auto' }}>
                                            <Grid container spacing={2} style={{ padding: '20px' }}>
                                                <Grid item xs={6} sm={6} md={4} lg={4}>
                                                    <div style={{ width: '85%', height: 'auto', backgroundColor: '#F9E7D9', border: '4px #E8833A solid', padding: '20px', display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'row' }}>
                                                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '120px', borderRadius: '100%', height: '120px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', borderRadius: '100%', height: '120px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <p style={{ fontWeight: 'bold', fontSize:'24px' }}>Argos</p>
                                                            <div style={{ width: '100%', height: 'auto', display: 'flex', marginTop:'-10px', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                                                <LocationOnIcon style={{ width: '20px' }} /><span style={{ fontWeight: 'bold' }}>Denpasar, Bali</span>
                                                            </div>
                                                            <p style={{ fontWeight: 'bold' }}>Custom Collection : 3</p>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={4} lg={4}>
                                                    <div style={{ width: '85%', height: 'auto', backgroundColor: '#F9E7D9', border: '4px #E8833A solid', padding: '20px', display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'row' }}>
                                                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '120px', borderRadius: '100%', height: '120px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', borderRadius: '100%', height: '120px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <p style={{ fontWeight: 'bold', fontSize:'24px' }}>Argos</p>
                                                            <div style={{ width: '100%', height: 'auto', display: 'flex', marginTop:'-10px', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                                                <LocationOnIcon style={{ width: '20px' }} /><span style={{ fontWeight: 'bold' }}>Denpasar, Bali</span>
                                                            </div>
                                                            <p style={{ fontWeight: 'bold' }}>Custom Collection : 3</p>
                                                        </Grid>
                                                    </div>
                                                </Grid>

                                                   <Grid item xs={6} sm={6} md={4} lg={4}>
                                                    <div style={{ width: '85%', height: 'auto', backgroundColor: '#F9E7D9', border: '4px #E8833A solid', padding: '20px', display: 'flex', justifyContent: 'center', alignItems:'center', flexDirection: 'row' }}>
                                                        <Grid item xs={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '120px', borderRadius: '100%', height: '120px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', borderRadius: '100%', height: '120px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={6}>
                                                            <p style={{ fontWeight: 'bold', fontSize:'24px' }}>Argos</p>
                                                            <div style={{ width: '100%', height: 'auto', display: 'flex', marginTop:'-10px', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                                                                <LocationOnIcon style={{ width: '20px' }} /><span style={{ fontWeight: 'bold' }}>Denpasar, Bali</span>
                                                            </div>
                                                            <p style={{ fontWeight: 'bold' }}>Custom Collection : 3</p>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                                
                                            </Grid>
                                        </div>
                                    </Grid>
                                </Grid>
                            </TabPanel>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

const TabPanel = ({ children, value, index }) => (
    <Box hidden={value !== index}>
        {value === index && <Box p={3}>{children}</Box>}
    </Box>
);

export default ArtistProfile