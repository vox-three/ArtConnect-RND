import React from 'react';
import {Grid, Tabs, Tab, Typography, Box, Paper, Select, MenuItem, FormControl, InputLabel} from '@mui/material';
import Navbar from '../../components/Navbar';
import BottomBar from '../../components/BottomBar';
import YourIconLogo from '../../assets/rose.jpg';
import icp from '../../assets/icp.png';
import FilterAltIcon from '@mui/icons-material/FilterAlt';


const MarketPlace = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [age, setAge] = React.useState('');

    const handleChangeFilter = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <Navbar />
            <div className='marketplace-page'>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Paper>
                            <Tabs value={value} onChange={handleChange}>
                                <Tab label="Home" />
                                <Tab label="Artist Directory" />
                                <Tab label="Business Directory" />
                                <Tab label="Marketplace" />
                            </Tabs>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <TabPanel value={value} index={0}>
                            <Typography>Tab 1 Content</Typography>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Typography>Tab 2 Content</Typography>
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <Typography>Tab 3 Content</Typography>
                        </TabPanel>
                        <TabPanel value={value} index={3}>
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
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Volume</p>
                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                </div>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Listing</p>
                                                <span style={{ fontWeight: 'bold' }}>86</span>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Avg</p>
                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                </div>
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
                                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Poparty</p>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-20px', paddingLeft: '20px', paddingRight: '20px' }}>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui! Iste perspiciatis architecto sint quia.</p>
                                        </Grid>
                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Volume</p>
                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                </div>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Listing</p>
                                                <span style={{ fontWeight: 'bold' }}>86</span>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Avg</p>
                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                </div>
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
                                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Poparty</p>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-20px', paddingLeft: '20px', paddingRight: '20px' }}>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui! Iste perspiciatis architecto sint quia.</p>
                                        </Grid>
                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Volume</p>
                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                </div>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Listing</p>
                                                <span style={{ fontWeight: 'bold' }}>86</span>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Avg</p>
                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                </div>
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
                                            <p style={{ fontWeight: 'bold', fontSize: '24px' }}>Poparty</p>
                                        </Grid>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '-20px', paddingLeft: '20px', paddingRight: '20px' }}>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, qui! Iste perspiciatis architecto sint quia.</p>
                                        </Grid>
                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Volume</p>
                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                </div>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Listing</p>
                                                <span style={{ fontWeight: 'bold' }}>86</span>
                                            </div>
                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Avg</p>
                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                </div>
                                            </div>
                                        </Grid>
                                    </div>
                                </Grid>
                            </Grid>
                        </TabPanel>
                    </Grid>
                </Grid>
            </div>
            <BottomBar />
        </>
    )
}

const TabPanel = ({ children, value, index }) => (
    <Box hidden={value !== index}>
        {value === index && <Box p={3}>{children}</Box>}
    </Box>
);

export default MarketPlace