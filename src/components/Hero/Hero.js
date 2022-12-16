import React from 'react'
// MUI 
import { Box } from '@mui/material';
import style from '../sytle/style';
import PresentationWindow from '../PresentationWindow/PresentationWindow';

function Hero(props) {

// Render Function 
return (
    <Box sx={{
        minHeight: '300px',
        backgroundColor: '#4DA1C2'
    }}>
        <Box sx={style}>
            <PresentationWindow /> 
        </Box>
    </Box>
)
}

export default Hero; 