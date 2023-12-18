import React from 'react';
import {Grid, Tabs, Tab, Typography, Box, Paper, Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import Navbar from '../../components/Navbar';
import YourIconLogo from '../../assets/rose.jpg';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useNavigate } from "react-router-dom";


const ArtistDirectory = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [age, setAge] = React.useState('');

    const handleChangeFilter = (event) => {
        setAge(event.target.value);
    };

    const navigateDetailArtist = useNavigate();
    const redirectDetailArtis = () => {
        navigateDetailArtist("/artistprofile");
    };
  return (
    <>
            <Navbar />
            <div className='marketplace-page'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab style={{ color:'black' }}  label="Home" />
                                <Tab style={{ color:'black' }}  label="Artist Directory" />
                                <Tab style={{ color:'black' }}  label="Business Directory" />
                                <Tab style={{ color:'black' }}  label="Marketplace" />
                            </Tabs>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <TabPanel value={value} index={0}>
                            <Typography>Tab 1 Content</Typography>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                        <Grid container spacing={2} style={{ padding: '20px' }}>
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems:'center' }}>
                                    <FilterAltIcon style={{ color:'#E8833A', marginTop:'20px' }}/>
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
                                <Grid item xs={6} sm={6} md={4} lg={3}>
                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px', cursor:'pointer' }} onClick={redirectDetailArtis}>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                            </div>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Gesiha</p>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-10px', paddingLeft: '20px', paddingRight: '20px', paddingBottom:'10px' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <LocationOnIcon style={{ width: '20px' }} /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>Denpasar, Bali</span>
                                            </div>
                                        </Grid>
                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Collection</p>
                                                <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>2</span>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Collaborations</p>
                                                <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>2</span>
                                            </div>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6} md={4} lg={3}>
                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                            </div>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Geshia Ashary</p>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-10px', paddingLeft: '20px', paddingRight: '20px', paddingBottom:'10px' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <LocationOnIcon style={{ width: '20px' }} /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>Denpasar, Bali</span>
                                            </div>
                                        </Grid>
                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Collection</p>
                                                <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>2</span>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Collaborations</p>
                                                <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>2</span>
                                            </div>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6} md={4} lg={3}>
                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                            </div>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Luffy</p>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-10px', paddingLeft: '20px', paddingRight: '20px', paddingBottom:'10px' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <LocationOnIcon style={{ width: '20px' }} /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>Denpasar, Bali</span>
                                            </div>
                                        </Grid>
                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Collection</p>
                                                <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>2</span>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Collaborations</p>
                                                <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>2</span>
                                            </div>
                                        </Grid>
                                    </div>
                                </Grid>
                                <Grid item xs={6} sm={6} md={4} lg={3}>
                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                            </div>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Ichigo</p>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-10px', paddingLeft: '20px', paddingRight: '20px', paddingBottom:'10px' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <LocationOnIcon style={{ width: '20px' }} /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>Denpasar, Bali</span>
                                            </div>
                                        </Grid>
                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Collection</p>
                                                <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>2</span>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Collaborations</p>
                                                <span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>2</span>
                                            </div>
                                        </Grid>
                                    </div>
                                </Grid>
                              
                            </Grid>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Typography>Tab 3 Content</Typography>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                           
                        </TabPanel>
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

export default ArtistDirectory