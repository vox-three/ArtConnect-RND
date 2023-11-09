import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import LogoArtConnect from '../../assets/Logo_ArtConnect.png'

/*
 * Connect2ic provides essential utilities for IC app development
 */
import { ConnectButton, ConnectDialog, useConnect } from "@connect2ic/react";
import "@connect2ic/core/style.css";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

export default function Login() {
    const navigate = useNavigate();
    const { isConnecting, isConnected, principal, activeProvider } = useConnect({
        onConnect: () => {
            // Signed in
            console.log("connected...");
        },
        onDisconnect: () => {
            // Signed out
            console.log("disconnected...");
        },
    });

    return (
        <div>
            {isConnected && <Navigate to="/scan" />}
            <div className="login-page">
                <Grid container>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '100px' }}>
                        <div className="logo-section">
                            <img src={LogoArtConnect} alt="" />
                        </div>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <span>Login to ArtConnect to open a surprise</span>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                        <div className="login-button">
                            <ConnectButton
                                onConnect={() => {
                                    navigate("/scan");
                                }}
                            />
                        </div>
                        <ConnectDialog />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

