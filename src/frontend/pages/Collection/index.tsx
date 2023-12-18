import React from 'react';
import { Grid, Tabs, Tab, Typography, Box, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import Navbar from '../../components/Navbar';
import BottomBar from '../../components/BottomBar';
import YourIconLogo from '../../assets/rose.jpg';
import icp from '../../assets/icp.png';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Collection = () => {

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
                            <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <ArrowBackIcon style={{ color: 'black', marginLeft: '50px', marginTop: '50px' }} />
                                <p style={{ marginLeft: '5px', paddingTop: '50px' }}>Back to <b>Marketplace</b></p>
                            </div>
                            <div style={{ width: '20%', height: 'auto', backgroundColor: '#F9E7D9', border: '4px #E8833A solid', position: 'absolute', marginLeft: '50px', padding: '50px' }}>
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <p style={{ fontSize: '24px' }}>Po Party</p>
                                </Grid>
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <p style={{ textAlign: 'justify' }}>
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque quod, itaque, a quasi nulla omnis nostrum,
                                        eos dolorem eligendi maiores suscipit incidunt pariatur sapiente ab nisi quos autem modi accusantium commodi.
                                        Quae nemo aspernatur iusto repellendus rem, quisquam, sapiente minima
                                        nisi ad quos laboriosam sunt obcaecati adipisci officiis a! Necessitatibus!
                                    </p>
                                </Grid>
                                <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column' }}>
                                    <p style={{ textAlign: 'justify' }}>
                                        Creator : <b>Poppy Lessart</b>
                                    </p>
                                    <p style={{ textAlign: 'justify', marginTop: '-10px' }}>
                                        Creator Royalty : <b>2.5%</b>
                                    </p>
                                </Grid>
                                <Grid xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Volume</p>
                                        <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                            <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                        </div>
                                    </div>
                                    <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Listing</p>
                                        <span style={{ fontWeight: 'bold' }}>86</span>
                                    </div>
                                    <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                        <p style={{ fontWeight: 'bold', color: '#E8833A' }}>Avg</p>
                                        <div style={{ width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                            <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                        </div>
                                    </div>
                                </Grid>

                            </div>
                            <Tabs value={value} onChange={handleChange} centered>
                                <Tab label="Home" />
                                <Tab label="Artist Directory" />
                                <Tab label="Business Directory" />
                                <Tab label="Marketplace" />
                            </Tabs>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid item xs={12}>
                            <TabPanel value={value} index={0}>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                <Grid container spacing={2} style={{ padding: '20px' }}>
                                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                                        <FilterAltIcon style={{ color: '#E8833A', marginTop: '20px' }} />
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
                                                <Grid item xs={6} sm={6} md={4} lg={3}>
                                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px', paddingBottom:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <span>NRI : 18%</span>
                                                            </div>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                                    <VisibilityIcon/><span style={{ paddingLeft: '5px' }}>120</span>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', paddingRight:'30px'}}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end' }}>
                                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={4} lg={3}>
                                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px', paddingBottom:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <span>NRI : 18%</span>
                                                            </div>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                                    <VisibilityIcon/><span style={{ paddingLeft: '5px' }}>120</span>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', paddingRight:'30px'}}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end' }}>
                                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={4} lg={3}>
                                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px', paddingBottom:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <span>NRI : 18%</span>
                                                            </div>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                                    <VisibilityIcon/><span style={{ paddingLeft: '5px' }}>120</span>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', paddingRight:'30px'}}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end' }}>
                                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={4} lg={3}>
                                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px', paddingBottom:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <span>NRI : 18%</span>
                                                            </div>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                                    <VisibilityIcon/><span style={{ paddingLeft: '5px' }}>120</span>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', paddingRight:'30px'}}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end' }}>
                                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6} sm={6} md={4} lg={3}>
                                                    <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', border: '2px solid #e3e3e3', paddingTop: '20px', paddingBottom: '20px' }}>
                                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: '200px', height: '200px', backgroundColor: 'red' }}>
                                                                <img src={YourIconLogo} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt="" />
                                                            </div>
                                                        </Grid>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px', paddingBottom:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <span>NRI : 18%</span>
                                                            </div>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                                                    <VisibilityIcon/><span style={{ paddingLeft: '5px' }}>120</span>
                                                                </div>
                                                            </div>
                                                        </Grid>
                                                        <div style={{ width: '80%', height: '2px', backgroundColor: '#E3E3E3', margin: '0px auto' }}></div>
                                                        <Grid xs={12} style={{ display: 'flex', justifyContent: 'center', paddingTop:'10px' }}>
                                                            <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', paddingRight:'30px'}}>
                                                                <div style={{ width: '100%', height: 'auto', backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end' }}>
                                                                    <img src={icp} style={{ width: '20px' }} alt="" /><span style={{ fontWeight: 'bold', paddingLeft: '5px' }}>0.77</span>
                                                                </div>
                                                            </div>
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

export default Collection