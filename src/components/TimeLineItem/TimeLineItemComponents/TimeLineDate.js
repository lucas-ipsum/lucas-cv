import React from 'react'
import { Box } from '@mui/material';

function TimeLineDate (props) {
var date = '10. August 2013';
console.log(props)

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