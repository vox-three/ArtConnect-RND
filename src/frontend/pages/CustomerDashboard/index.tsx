import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import YourIconLogo from "../../assets/rose.jpg";
import { useConnect } from "@connect2ic/react";
import { artconnect } from "../../../../.dfx/local/canisters/artconnect";

const CustomerDashboard = () => {
    const [collection, setCollection] = useState([]);

    const navigate = useNavigate();
    const { isConnected } = useConnect({});

    const lists = collection.map((nft) => (
        <Grid item xs={4} sm={6} md={4} lg={3} key={nft.id}>
            <div className="wrap-image-claim">
                <img src={nft.imageUrl} alt="Image 1" width="100%" />
            </div>
        </Grid>
    ));

    useEffect(() => {
        const getNfts = async () => {
            const nfts = await artconnect.readAllNfts();
            setCollection(nfts);
        };

        getNfts();
    }, [isConnected, collection]);

    return (
        <>
            <Navbar />
            <div className="afterscan-page">
                <Grid container>
                    <Grid item xs={12}>
                        <h1 className="title">Collection</h1>
                    </Grid>
                    <Grid item xs={12} style={{ marginTop: "-40px" }}>
                        <h3 className="title">You've collected {collection.length} NFT</h3>
                    </Grid>
                    <Grid container spacing={2} style={{ padding: "20px" }}>
                        {/* <Grid item xs={4} sm={6} md={4} lg={3}>
                            <div className="wrap-image-claim">
                                <img src={YourIconLogo} alt="Image 1" width="100%" />
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={6} md={4} lg={3}>
                            <div className="wrap-image-claim">
                                <img src={YourIconLogo} alt="Image 1" width="100%" />
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={6} md={4} lg={3}>
                            <div className="wrap-image-claim">
                                <img src={YourIconLogo} alt="Image 1" width="100%" />
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={6} md={4} lg={3}>
                            <div className="wrap-image-claim">
                                <img src={YourIconLogo} alt="Image 1" width="100%" />
                            </div>
                        </Grid> */}
                        {lists}
                    </Grid>
                </Grid>
            </div>
            <BottomBar />
        </>
    );
};

export default CustomerDashboard;
