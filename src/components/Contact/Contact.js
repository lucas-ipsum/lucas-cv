import React from 'react'
// MUI 
import { Box, IconButton } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';

function Contact (props) {

// Event Listener 
const mailButtonClicked = (e) => {
    window.open('mailto:lucas.tiedemann@posteo.de', '_self')
}
const linkedinButtonClicked = (e) => {
    window.open('https://www.linkedin.com/in/lucas-tiedemann-972444227/')
}
const phoneButtonClicked = (e) => {
    window.open('tel:+4915127063731', '_self')
}
// 

// Render Function 
return (
    <Box>
        <IconButton onClick={mailButtonClicked} aria-label="email" size="large">
            <MailIcon color='primary' sx={{fontSize: '45px'}} />
        </IconButton>
        <IconButton onClick={linkedinButtonClicked} aria-label="linkedin" size="large">
            <LinkedInIcon color='primary' sx={{fontSize: '45px'}} />
        </IconButton>
        <IconButton onClick={phoneButtonClicked} aria-label="phone" size="large">
            <PhoneIcon color='primary' sx={{fontSize: '45px'}} />
        </IconButton>
    </Box>
)
}

export default Contact; 

