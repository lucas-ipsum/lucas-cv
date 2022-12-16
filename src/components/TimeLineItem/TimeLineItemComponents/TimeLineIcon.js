import React from 'react'
import { Box } from '@mui/material'
// Icons 
import SchoolIcon from '@mui/icons-material/School';

function TimeLineIcon (props) {


// Render Function 
return (
    <Box>
        <SchoolIcon sx={{fontSize: '40px', border: 1, borderRadius: '50%', p:1 }}/>
    </Box>
)
}

export default TimeLineIcon;