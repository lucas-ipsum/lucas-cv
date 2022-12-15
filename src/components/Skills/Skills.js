import React from 'react'
// MUI 
import { Box, Typography } from '@mui/material';

// Icons
import CircleIcon from '@mui/icons-material/Circle';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';

function Skills(props) {
let skillScore = 4; 
let skillName = 'JavaScript'
let skillArr = [];

// Set 
for(var i = 0; i < 5; i++) {
    if (i < skillScore) {
        skillArr.push(<CircleIcon />)
    } else {
        skillArr.push(<CircleOutlinedIcon />)
    }
}



return (
    <Box sx={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap'
    }}>
        <Typography variant='h5' sx={{mr:2}}>{skillName}</Typography>
        {
            skillArr
        }
    </Box>
)
}

export default Skills;