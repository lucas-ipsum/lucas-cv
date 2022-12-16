import React from 'react'
// MUI 
import { Box, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

function Contact (props) {


// Render Function 
return (
    <Box>
        <IconButton aria-label="email" size="large">
            <MailIcon sx={{fontSize: '45px'}} />
        </IconButton>
    </Box>
)
}

export default Contact; 

