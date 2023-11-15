import { BottomNavigation, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";

// Import Qr Reader
import { QrReader } from "react-qr-reader";

export default function Scan() {
    const [isShowScanner, setIsShowScanner] = useState(true);

    const navigate = useNavigate();
    const redirectScan = () => {
        navigate("/imageafterscan");
    };
    const redirectCollection = () => {
        navigate("/customerdashboard");
    };

    const showScanner = (e) => {
        e.preventDefault();
        setIsShowScanner(true);
    };

    return (
        <>
            <Navbar />
            <div className="scan-page">
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "20px",
                        }}
                    >
                        {/* <div className="scan-dummy"></div> */}
                        {isShowScanner && (
                            <QrReader
                                constraints={{ facingMode: "environment" }}
                                ViewFinder={() => {
                                    return <div>Scan the QR Code from the cashier!</div>;
                                }}
                                onResult={(result, error) => {
                                    if (!!result) {
                                        navigate("/imageafterscan", {
                                            state: { url: result.getText() },
                                        });
                                    }
                                    if (!!error) {
                                        console.info(error);
                                    }
                                }}
                            />
                        )}
                    </Grid>
                </Grid>
            </div>
            <BottomBar />
        </>
    );
}
