import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import NavigationBar from '../components/NavigationBar';
import { Button } from '@mui/material';


function HomePage () {

    function AutoSave(e){
        console.log(e.target.value);
    }

    return (
        <>

        <NavigationBar/>
        <div style = {{ 
            marginLeft: "5%",
            marginRight: "5%",
            margin: "dense",
            alignItems: 'center'
            }}>

                <h1>Home page</h1>
            <Box
                sx={{
                    width: 500,
                    // height: 500,
                    maxWidth: '100%',
                }}
                >
                <TextField onChange={AutoSave}
                    fullWidth label="Notes" 
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="some kind of text box "
                />
            </Box>
            <Button style={{ marginTop: '1%' }} variant="contained">Contained</Button>

        </div>

        </>

    );
}

export default HomePage;