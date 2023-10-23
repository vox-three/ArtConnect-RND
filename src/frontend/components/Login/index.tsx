import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

/*
 * Connect2ic provides essential utilities for IC app development
 */
import { ConnectButton, ConnectDialog, useConnect } from "@connect2ic/react";
import "@connect2ic/core/style.css";

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
                <div className="login-container">
                    <span>Login to ArtConnect to open a surprise</span>
                    <div className="login-button">
                        <ConnectButton
                            onConnect={() => {
                                navigate("/slots");
                            }}
                        />
                    </div>
                    <ConnectDialog />
                </div>
            </div>
        </div>
    );
}
