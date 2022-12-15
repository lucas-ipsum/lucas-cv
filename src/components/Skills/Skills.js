import React from 'react'
// MUI 
import { Box, Typography, Grid } from '@mui/material';

// Icons
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function Skills(props) {
let skillScore = props.level; 
let skillName = props.name
let skillArr = [];

// Set Array with Skill Level  
for(var i = 0; i < 5; i++) {
    if (i < skillScore) {
        skillArr.push(<CircleIcon color='primary'/>)
    } else {
        skillArr.push(<CircleOutlinedIcon color='primary'/>)
    }
}

// Render Function 
return (
    <Box>
    <Grid container>
        <Grid item xs={6}>
            <Typography variant='h5'>{skillName}</Typography>
        </Grid>
        <Grid item xs={6}>
            {skillArr}
        </Grid>
    </Grid>
       
    </Box>
)
}

export default Skills;