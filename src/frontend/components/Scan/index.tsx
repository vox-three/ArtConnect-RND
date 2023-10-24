import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Scan() {
    const navigate = useNavigate();
    const redirectMain = () => {
        navigate("/main");
    };

    return (
        <div className="scan-page">
            <div className="scan-container">
                <Button
                    onClick={() => {
                        redirectMain();
                    }}
                >
                    Scan your surprise
                </Button>
            </div>
        </div>
    );
}
