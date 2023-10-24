import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "./assets/dfinity.svg";

/*
 * Connect2ic provides essential utilities for IC app development
 */
import { createClient } from "@connect2ic/core";
import { defaultProviders } from "@connect2ic/core/providers";
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
import Login from "./components/Login";
import Scan from "./components/Scan";
import Slots from "./components/Slots";
import { Profile } from "./components/Profile";

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
        path: "/slots",
        element: <Slots />,
    },
    {
        path: "/profile",
        element: <Profile />,
    },
]);

function App() {
    return (
        <div className="mobile-wrapper">
            <div className="App">
                <RouterProvider router={router} />
            </div>
        </div>
    );
}

const client = createClient({
    canisters: {
        artconnect,
    },
    providers: defaultProviders,
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
