import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
    shopIcon: {
        paddingRight: 10,
    },
    loginButton: {
        paddingRight: 30,
        textDecoration: 'underline',
    },
    signUpButton: {
        paddingRight: 20,
        textDecoration: 'underline',
    }
})

function Header() {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <ShoppingCartIcon className={classes.shopIcon} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    upGrad E-Shop
                </Typography>
                <Typography variant="body2" className={classes.loginButton}>
                    <Link to="/login" style={{ color: 'white' }}>Login</Link>
                </Typography>
                <Typography variant="body2" className={classes.signUpButton}>
                    <Link to="/SignUp" style={{ color: 'white' }}>Sign Up</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;