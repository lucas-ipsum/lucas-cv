import React from 'react'
// MUI 
import { Box } from '@mui/material';
import style from '../sytle/style';
import TimeLineItem from '../TimeLineItem/TimeLineItem';
import data from '../../data/cvTimeline';

function TimeLine(props) {
var timeLineItems = []; 
// Sort Date 

// Get TimeLine Data 
for (let i = 0; i < data.length; i++) {
    // Sort Date 
    data[i].beginDate = new Date(data[i].beginDate);        // Set Type Date 

    // Call Component
}
console.log(data)
data.sort((a, b) => a.beginDate - b.beginDate);

// Component
for (let i = 0; i < data.length; i++) {
    // data[i].beginDate = data[i].beginDate
    // Date Format
    var dateYear = data[i].beginDate.getFullYear().toString();
    console.log( data[i].beginDate.getMonth())
    var dateMonth = data[i].beginDate.getMonth() + 1;
    dateMonth.toString();
    if (dateMonth < 10 ) {
        dateMonth = '0' + dateMonth
    }
    var date = dateMonth + '/' + dateYear
    timeLineItems.push(<TimeLineItem title={data[i].title} beginDate={date} category={data[i].category} />)    
}
console.log(data)

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