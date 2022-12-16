import React from 'react'
// MUI 
import { Box } from '@mui/material';
import style from '../sytle/style';
import TimeLineItem from '../TimeLineItem/TimeLineItem';

function TimeLine(props) {

// Render Function 
return (
    <Box>
        <Box sx={style}>
        Timeline
            <TimeLineItem />
        </Box>
    </Box>
)
}

export default TimeLine; 