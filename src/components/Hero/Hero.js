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
                <Grid xs={12} sm={8} >
                    <PresentationWindow /> 
                    <Contact /> 

                </Grid>
                <Grid xs={12} sm={4} sx={{
                    display: 'flex', 
                    justifyContent: {
                        xs: 'center',
                        sm: 'flex-end',
                    }
                    }} >
                    <Avatar src={profile_img} sx={{
                        width: {
                            xs:'150px',
                            sm: '200px'
                        }, 
                        height: {
                            xs:'150px',
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