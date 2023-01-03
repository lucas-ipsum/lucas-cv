import React from 'react'
import { Box, Typography } from '@mui/material';

function TimeLineDate (props) {


// Render Function 
return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }}>
        <Typography sx={{lineHeight: '58px', transform: 'translateY(8px)'}}>
            {props.beginDate} - {props.endDate}
        </Typography> 
    </Box>
)
}

export default TimeLineDate;