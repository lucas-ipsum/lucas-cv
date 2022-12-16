import React from 'react'
// MUI 
import { Box, Grid, Avatar } from '@mui/material';
import style from '../sytle/style';
import PresentationWindow from '../PresentationWindow/PresentationWindow';
import Contact from '../Contact/Contact';
// 
import profile_img from '../../static/profile_img.jpg'

function Hero(props) {

// Render Function 
return (
    <Box sx={{
        minHeight: '300px',
        backgroundColor: '#4DA1C2'
    }}>
        <Box sx={style}>
            <Grid container>
                <Grid xs={10} sm={8} >
                    <PresentationWindow /> 
                    <Contact /> 

                </Grid>
                <Grid xs={2} sm={4} sx={{display: 'flex', justifyContent: 'flex-end'}} >
                    <Avatar src={profile_img} sx={{
                        width: {
                            xs:'100px',
                            sm: '200px'
                        }, 
                        height: {
                            xs:'100px',
                            sm: '200px'
                        }
                    }}/>
                </Grid>
                <Grid xs={12} sx={{mt: 1}}>
                </Grid>
            </Grid>
        </Box>
    </Box>
)
}

export default Hero; 