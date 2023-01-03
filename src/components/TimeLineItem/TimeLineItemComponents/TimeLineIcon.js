import React from 'react'
import { Box, IconButton } from '@mui/material'
// Icons 
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Diversity3Icon from '@mui/icons-material/Diversity3';

function TimeLineIcon (props) {
var icon; 

if (props.category == 'university') {
    icon = <SchoolIcon sx={{fontSize: '40px', border: 1, borderRadius: '50%', p:1 }}/>
} else if (props.category == 'job') {
    icon = <WorkIcon sx={{fontSize: '40px', border: 1, borderRadius: '50%', p:1 }}/>
}  else if (props.category == 'ehrenamt') {
    icon = <Diversity3Icon sx={{fontSize: '40px', border: 1, borderRadius: '50%', p:1 }}/>
}
// Render Function 
return (
    <Box sx={{height: '58px'}}>
        <IconButton>
        {icon}
        </IconButton>
    </Box>
)
}

export default TimeLineIcon;