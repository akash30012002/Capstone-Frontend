import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { makeStyles } from '@material-ui/core';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import { borderRadius } from '@mui/system';

const useStyles = makeStyles({
    shopIcon: {
        paddingRight: 10,
    },
    homeButton: {
        paddingRight: 30,
        textDecoration: 'underline',
        paddingLeft: 400
    },
    search: {
        backgroundColor: 'lightblue',
        borderRadius: 5,
        width: 300
    }
})

function HeaderUser() {

    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <ShoppingCartIcon className={classes.shopIcon} />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    upGrad E-Shop
                </Typography>
                <TextField placeholder='Search...' required size='small' className={classes.search} />
                <Typography variant="body2" className={classes.homeButton}>
                    <Link to="/login" style={{ color: 'white' }}>Home</Link>
                </Typography>
                <Button variant="contained" color='error'>
                    <Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Logout</Link>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderUser;