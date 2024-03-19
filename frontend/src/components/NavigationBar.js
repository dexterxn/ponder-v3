import React from 'react';
import { Typography, AppBar, Toolbar } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function NavigationBar (){

    return (
        <AppBar position="static" style={{ background: '#003c6c', minHeight: '80px' }}>
        
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginTop: '10px' }}>
                    <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.7rem' }}>
                        Ponder
                    </RouterLink>
                </Typography>
                {/* Menu items as part of the navbar */}
                <RouterLink to="/" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.2rem', marginRight: '17px', marginTop: '10px' }}>
                    Home
                </RouterLink>
                <RouterLink to="/Login" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1.2rem', marginRight: '17px', marginTop: '10px' }}>
                    Login
                </RouterLink>
            </Toolbar>
        </AppBar>
    );
}

export default NavigationBar;