import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import 'aos/dist/aos.css'; // Impor file CSS AOS
import AOS from 'aos';
AOS.init();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
