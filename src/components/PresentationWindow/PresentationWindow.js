import React from 'react'
// MUI 
import { Box, Typography } from '@mui/material';

function PresentationWindow(props) {


// Render Function 
return (
    <Box>
        <Typography color='primary' variant='h2'>
            Hi, ich bin Lucas
        </Typography>
        <Typography sx={{color: '#fff'}}variant='h4'>
            Web-Entwickler und Umweltinformatiker
        </Typography>
    </Box>
)
}

export default PresentationWindow;