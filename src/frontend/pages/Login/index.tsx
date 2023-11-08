import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {AppBar, Toolbar, IconButton} from "@mui/material";

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
            <Container maxWidth="sm">
            <div className="login-page">
                <Grid container>
                    <Grid item xs>
                        <div className="login-container">
                            <div className="logo-section">
                                Art Connect
                            </div>
                            <span>Login to ArtConnect to open a surprise</span>
                            <div className="login-button">
                                <ConnectButton
                                    onConnect={() => {
                                        navigate("/scan");
                                    }}
                                />
                            </div>
                            <ConnectDialog />
                        </div>
                    </Grid>
                </Grid>
            </div>
            </Container>
        </div>
    );
}
