import React from 'react'
// MUI 
import { Box } from '@mui/material';
import style from '../sytle/style';
import TimeLineItem from '../TimeLineItem/TimeLineItem';
import data from '../../data/cvTimeline';


function TimeLine(props) {
var timeLineItems = []; 

// Helper Function 
// Date to String Format 
const formatDate = (date) => {
    // Date Format
    var dateYear = date.getFullYear().toString();
    var dateMonth = date.getMonth() + 1;
    dateMonth.toString();
    if (dateMonth < 10 ) {
        dateMonth = '0' + dateMonth
    }
    var date = dateMonth + '/' + dateYear
    return date; 
}

// Parse date to Date Format
for (let i = 0; i < data.length; i++) {
    data[i].beginDate = new Date(data[i].beginDate);        // Set Type Date 
    data[i].endDate = new Date(data[i].endDate);        // Set Type Date 
}
// Sort Data List 
data.sort((a, b) => a.beginDate - b.beginDate);

// Call TimeLineItem Components
for (let i = data.length - 1; i > 0; i--) {
    var beginDate = formatDate(data[i].beginDate)
    var endDate = formatDate(data[i].endDate)
    // Component Array
    timeLineItems.push(<TimeLineItem title={data[i].title} endDate={endDate} beginDate={beginDate} category={data[i].category} />)    
}

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