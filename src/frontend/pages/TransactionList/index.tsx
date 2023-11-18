import React, { useEffect, useState } from "react";
import { Grid, LinearProgress } from "@mui/material";
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";
import { Navigate, useNavigate } from "react-router-dom";
import { useConnect } from "@connect2ic/react";
import { artconnect } from "../../../../.dfx/local/canisters/artconnect";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    const [merchants, setMerchants] = useState([]);

    const navigate = useNavigate();
    const { isConnected } = useConnect({});

    const lists = transactions.map((tx, idx) => (
        <Grid container key={tx.id}>
            <Grid item xs={8}>
                <h3>{merchants[idx]?.name}</h3>
                <LinearProgress
                    variant="determinate"
                    value={(Number(tx.transactions) / 5) * 100}
                    sx={{
                        backgroundColor: "#E3E3E3",
                        height: "10px",
                        borderRadius: "5px",
                        "& .MuiLinearProgress-bar": {
                            backgroundColor: "#E8833A", // Warna garis (bar)
                        },
                    }}
                />
                <p>You collected {tx.transactions} from 5 NFT</p>
            </Grid>
            <Grid
                item
                xs={4}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        width: "80px",
                        height: "40px",
                        backgroundColor: "#E8833A",
                        borderRadius: "5px",
                        color: "white",
                        fontWeight: "bold",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                    }}
                    onClick={() => navigate("/claimpage")}
                >
                    Claim
                </div>
            </Grid>
            <Grid
                item
                xs={12}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingRight: "15px",
                }}
            >
                <div
                    style={{
                        width: "100%",
                        height: "2px",
                        borderBottom: "2px solid #E3E3E3",
                    }}
                ></div>
            </Grid>
        </Grid>
    ));

    const getMerchant = async (uuid) => {
        const merchant = await artconnect.readMerchant(uuid);
        if (merchant.length) return merchant[0];
    };

    // Fetch transactions
    useEffect(() => {
        const getTransactions = async () => {
            const txs = await artconnect.readAllLoyalties();
            setTransactions(txs);
        };

        getTransactions();
    }, [isConnected, transactions]);

    // Fetch merchants
    useEffect(() => {
        const getMerchants = async () => {
            const merchants = await Promise.all(
                transactions.map((tx) => getMerchant(tx.merchantId))
            );
            setMerchants(merchants);
        };

        if (transactions.length > 0) {
            getMerchants();
        }
    }, [transactions]);

    return (
        <div>
            <Navbar />
            <div className="afterscan-page">
                <Grid container style={{ paddingLeft: "15px" }}>
                    <Grid item xs={12}>
                        <h1 className="title">Transaction List</h1>
                    </Grid>

                    {lists}
                </Grid>
            </div>
            <BottomBar />
        </div>
    );
};

export default TransactionList;
