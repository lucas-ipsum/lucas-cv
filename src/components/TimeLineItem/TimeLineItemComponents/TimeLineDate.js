import React from 'react'
import { Box, Typography } from '@mui/material';

function TimeLineDate (props) {


// Render Function 
return (
    <Box sx={{
        lineHeight: '58px'
    }}>
        <Typography>{props.beginDate} - {props.endDate}</Typography> 
    </Box>
)
}

export default TimeLineDate;