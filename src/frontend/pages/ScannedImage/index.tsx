import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
// import YourIconLogo from "../../assets/rose.jpg";
import { useNavigate, useLocation } from "react-router-dom";
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";

// Import Lazy Load
import { LazyLoadImage } from "react-lazy-load-image-component";

const ImageAfterScan = () => {
    const location = useLocation();
    console.log(location.state.url);

    const navigateDetailPage = useNavigate();
    const redirectDetailPage = (imgurl) => {
        navigateDetailPage("/imagedetailpage", {state:{imgurl:imgurl}});
    };
    return (
        <>
            <Navbar />
            <div className="afterscan-page">
                <Grid container>
                    <Grid item xs={12}>
                        <h1 className="title">Honney Coffee</h1>
                        <div className="title-map">
                            <LocationOnIcon style={{ fontSize: 16 }} />
                            <Typography fontSize="16px" component={"center"}>
                                Hanoman, Ubud
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <h3 className="title">You've collected 1 NFT</h3>
                        <Typography
                            fontSize="15px"
                            component={"center"}
                            style={{ paddingLeft: "20px", paddingRight: "20px" }}
                        >
                            Purchase any product in the store to get an NFT and get a surprise
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center", alignItems:'center', marginTop: "20px", flexDirection:'column' }}
                    >
                        <p style={{ fontWeight:'bold', fontSize:'24px' }}>#213</p>
                        <div className="wrap-image-scan">
                            {/* <img src={location.state?.url} alt="" /> */}
                            <LazyLoadImage src={location.state.url} alt="NFT image" />
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
                    >
                        <Button
                            className="button-collection"
                            onClick={() => {
                                redirectDetailPage(location.state.url);
                            }}
                        >
                            See Details
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <BottomBar />
        </>
    );
};

export default ImageAfterScan;
