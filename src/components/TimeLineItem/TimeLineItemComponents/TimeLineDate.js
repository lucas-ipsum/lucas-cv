import React from 'react'
import { Box } from '@mui/material';

function TimeLineDate (props) {


// Render Function 
return (
    <Box sx={{
        lineHeight: '58px'
    }}>
        {props.date}
    </Box>
)
}

export default TimeLineDate;