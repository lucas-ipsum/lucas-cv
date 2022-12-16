import React from 'react'
// MUI 
import { Box, Grid } from '@mui/material';
import style from '../sytle/style';
import PresentationWindow from '../PresentationWindow/PresentationWindow';
import Contact from '../Contact/Contact';

function Hero(props) {

// Render Function 
return (
    <Box sx={{
        minHeight: '300px',
        backgroundColor: '#4DA1C2'
    }}>
        <Box sx={style}>
            <Grid container>
                <Grid xs={12} sm={6} >
                    <PresentationWindow /> 
                </Grid>
                <Grid xs={12} sm={6} >
                    <PresentationWindow /> 
                </Grid>
                <Grid xs={12} sx={{mt: 3}}>
                    <Contact /> 
                </Grid>
            </Grid>
        </Box>
    </Box>
)
}

export default Hero; 