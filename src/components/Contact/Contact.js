import React from 'react'
// MUI 
import { Box, IconButton, SpeedDial, SpeedDialAction } from '@mui/material';
// Icons 
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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

const copyToClipboard = (text) => {
  navigator.clipboard.writeText('test');
}
const hover = () => {
    console.log('hober')
}

// Actions Speed Dial Btn 
const actions = [
    { icon: <ContentCopyIcon />, name: 'Copy' },
]

// Icons 
const mailIcon =       
    <IconButton onClick={mailButtonClicked} aria-label="email" size="large">
        <MailIcon color='primary' sx={{fontSize: '45px'}} />
    </IconButton>

// Render Function 
return (
    <Box>
            <SpeedDial 
                // icon={mailIcon}
                icon={ <MailIcon color='primary' sx={{fontSize: '45px'}} />}
                ariaLabel="SpeedDial basic example"
                sx={{'& .MuiFab-primary': { backgroundColor: '#4DA1C2' }}}
            >
                { actions.map((action) => (
                <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    onClick={copyToClipboard}
                    onHover={hover}
                /> 
                ))}
            </SpeedDial>
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

