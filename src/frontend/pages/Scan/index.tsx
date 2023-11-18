import { BottomNavigation, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import BottomBar from "../../components/BottomBar";
import Navbar from "../../components/Navbar";

// Import connect2ic
import { useConnect } from "@connect2ic/react";

// Import Qr Reader
import { QrReader } from "react-qr-reader";
import { artconnect } from "../../../../.dfx/local/canisters/artconnect";

export default function Scan() {
    const [isShowScanner, setIsShowScanner] = useState(false);

    const navigate = useNavigate();

    const { isConnected, principal } = useConnect({});

    const showScanner = (e) => {
        e.preventDefault();
        setIsShowScanner(true);
    };

    const getGift = async (nftUrl) => {
        // Create dummy creator
        const creator = await artconnect.createCreator(
            "Joe",
            "Denpasar",
            "Bali",
            "behance",
            "flickr",
            "instagram",
            "reddit"
        );
        // Create NFT
        const nft = await artconnect.createNft(
            creator.id,
            nftUrl,
            "https://dummymetadataurl.com/0.json"
        );
        // Create Merchant
        const merchant = await artconnect.createMerchant(
            "Honey Coffee",
            "-6.238981624626078",
            "106.847674946022"
        );
        // Create Loyalty
        const loyalty = await artconnect.createLoyalty(merchant.uuid);
        // Transfer NFT
        if ("Ok" in nft) {
            await artconnect.sendNft(nft.Ok.id);
        }
        // Add Transaction
        await artconnect.addTransaction(loyalty.id);
        console.log(loyalty);
    };

    useEffect(() => {
        const manageUser = async () => {
            // Find User
            const users = await artconnect.readAllUsers();
            const user = await artconnect.readUser();
            console.log(users.length, "Users found: ", users);
            console.log(user.length, "User found: ", user);

            // Create User if user not found
            if (user.length === 0) {
                console.log("User not found, creating a new one...");
                await artconnect.createUser();
            }
        };

        if (isConnected) manageUser().catch(console.error);
    }, [isConnected]);

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
                                        getGift(result.getText());
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
                    <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <Button className="button-scan" onClick={showScanner}>
                            Scan My Surprise
                        </Button>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
                    >
                        <Button
                            className="button-collection"
                            onClick={() => {
                                navigate("/customerdashboard");
                            }}
                        >
                            See My Collection
                        </Button>
                    </Grid>
                </Grid>
            </div>
            <BottomBar />
        </>
    );
}
