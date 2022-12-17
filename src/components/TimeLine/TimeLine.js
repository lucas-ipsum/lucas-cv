import React from 'react'
// MUI 
import { Box } from '@mui/material';
import style from '../sytle/style';
import TimeLineItem from '../TimeLineItem/TimeLineItem';
import data from '../../data/cvTimeline';

function TimeLine(props) {
var timeLineItems = []; 

// Get TimeLine Data 
for (let i = 0; i < data.length; i++) {
    timeLineItems.push(<TimeLineItem title={data[i].title} date={data[i].date} category={data[i].category} />)    
}
console.log(data[1].title)
// Render Function 
return (
    <Box>
        <Box sx={style}>
            {timeLineItems}
        </Box>
    </Box>
)
}

export default TimeLine; 