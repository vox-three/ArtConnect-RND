import React, { useEffect } from "react";
import { BrowserRouter, createBrowserRouter, RouterProvider, useLocation } from "react-router-dom";
import logo from "./assets/dfinity.svg";

/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core";
import { InternetIdentity } from "@connect2ic/core/providers/internet-identity";
import {
    ConnectButton,
    ConnectDialog,
    Connect2ICProvider,
    useConnect,
    useWallet,
} from "@connect2ic/react";
import "@connect2ic/core/style.css";
/*
 * Import canister definitions like this:
 */
import * as artconnect from "../../.dfx/local/canisters/artconnect";
/*
 * Some examples to get you started
 */
// import { Counter } from "./components/Counter";
// import { Transfer } from "./components/Transfer";
// import { Profile } from "./components/Profile";
import Login from "./pages/Login";
import Scan from "./pages/Scan";
import Slots from "./pages/Slots";
import { Profile } from "./pages/Profile";
import Navbar from "./components/Navbar";
import ImageAfterScan from "./pages/ScannedImage";
import ImageDetailPage from "./pages/ImageDetail";
import CustomerDashboard from "./pages/CustomerDashboard";
import ClaimPage from "./pages/Claim";
import BottomBar from "./components/BottomBar";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/scan",
        element: <Scan />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
    {
        path: "/imageafterscan",
        element: <ImageAfterScan />,
    },
    {
        path: "/imagedetailpage",
        element: <ImageDetailPage />,
    },
    {
        path: "/customerdashboard",
        element: <CustomerDashboard />,
    },
    {
        path: "/claimpage",
        element: <ClaimPage />,
    },
]);

function App() {
    return (
        <div className="mobile-wrapper">
            <div className="App">
                {/* <Navbar/> */}
                <RouterProvider router={router} />
                {/* <BottomBar/> */}
            </div>
        </div>
    );
}

const client = createClient({
    canisters: {
        artconnect,
    },
    providers: [new InternetIdentity()],
    // globalProviderConfig: {
    //     dev: import.meta.env.DEV,
    // },
});

// Subscribe to client state changes
const unsub = client.subscribe((state) => {
    // New state
    // console.log("Client State: ", state.event);
});

export default () => (
    <Connect2ICProvider client={client}>
        <App />
    </Connect2ICProvider>
);
