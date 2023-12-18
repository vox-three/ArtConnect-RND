import React from "react";
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image"; // Ikon gambar dari MUI
import CropFreeIcon from '@mui/icons-material/CropFree';
import GradeIcon from '@mui/icons-material/Grade';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate, Link, useLocation } from "react-router-dom";

const BottomBar = () => {
    const [value, setValue] = React.useState(0);

    const location = useLocation();
    return (
        <BottomNavigation
            showLabels
            className="bottom-navigation"
            value={location.pathname}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction
                className="hover-bottom-navigation"
                label="Collection"
                icon={<ImageIcon style={{ color: "orange" }} />}
                component={Link}
                to="/customerdashboard"
                value="/customerdashboard"
            />
            <BottomNavigationAction
                className="hover-bottom-navigation"
                label="Scan"
                icon={<CropFreeIcon style={{ color: "orange", fontSize:'32' }} />}
                component={Link}
                to="/scan"
                value="/scan"
            />
            <BottomNavigationAction
                className="hover-bottom-navigation"
                label="Reward"
                icon={<GradeIcon style={{ color: "orange" }} />}
                component={Link}
                to="/transactionlistpage"
                value="/transactionlistpage"
            />
             <BottomNavigationAction
                className="hover-bottom-navigation"
                label="Market"
                icon={<ShoppingCartIcon style={{ color: "orange" }} />}
                component={Link}
                to="/marketplace"
                value="/marketplace"
            />
        </BottomNavigation>
    );
};

export default BottomBar;
