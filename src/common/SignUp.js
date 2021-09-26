import * as React from 'react';
import Header from './header/Header';
import TextField from '@mui/material/TextField';
import { Grid, Avatar, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function SignUp() {
    const textStyle = { paddingBottom: 20 }
    const avatarStyle = { backgroundColor: '#ff0062' }
    const btnstyle = { margin: '8px 0' }
    return (
        <>
            <Header />
            <Grid style={{ width: 300, margin: 'auto' }}>
                <Grid align='center' style={{ marginTop: 50 }}>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <Grid style={textStyle}>
                    <TextField label='First Name' placeholder='Enter First Name' fullWidth required size='small' />
                </Grid>
                <Grid style={textStyle}>
                    <TextField label='Last Name' placeholder='Enter Last Name' fullWidth required size='small' />
                </Grid>
                <Grid style={textStyle}>
                    <TextField label='Email Address' placeholder='Enter username' fullWidth required size='small' />
                </Grid>
                <Grid style={textStyle}>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required size='small' />
                </Grid>
                <Grid style={textStyle}>
                    <TextField label='Confirm Password' placeholder='Re-enter password' type='password' fullWidth required size='small' />
                </Grid>
                <Grid style={textStyle}>
                    <TextField label='Contact Number' placeholder='Enter Number' type='text' fullWidth required size='small' />
                </Grid>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign Up</Button>
                <Typography style={{ fontSize: 12, marginTop: 5 }}>
                    <Link href="/login">
                        <u>Already have an account? Sign In</u>
                    </Link>
                </Typography>
                <Typography style={{ color: 'grey', fontSize: 10, textAlign: 'center', marginTop: 25 }}>
                    Copyright &copy; <b><u>upGrad</u></b> 2021
                </Typography>
            </Grid>
        </>
    )
}