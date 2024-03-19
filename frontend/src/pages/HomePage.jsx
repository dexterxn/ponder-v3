import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavigationBar from '../components/NavigationBar';


function HomePage () {

    return (
        <>
            <NavigationBar/>
            <h1> Home page</h1>
            <TextField
                id="outlined-multiline-static"
                label="Multiline"
                multiline
                rows={4}
                defaultValue="Insert Notes"
            />
        </>
    );
}

export default HomePage;