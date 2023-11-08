import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Grid from '@mui/material/Grid';

export default function Scan() {
    const navigateScan = useNavigate();
    const redirectScan = () => {
        navigateScan("/imageafterscan");
    };

    const navigateCollection = useNavigate();
    const redirectCollection = () => {
        navigateCollection("/customerdashboard");
    };

    return (
        <>
            <div className="scan-page">
                <Grid container>
                    <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop:'20px'}}>
                        <div className="scan-dummy"></div>
                    </Grid>
                    <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button className="button-scan"
                            onClick={() => {
                                redirectScan();
                            }}
                        >
                            Scan My Surprise
                        </Button>
                    </Grid>
                    <Grid item xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Button className="button-collection" onClick={() => {
                            redirectCollection();
                        }}
                        >
                            See My Collection
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
