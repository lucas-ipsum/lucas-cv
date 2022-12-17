import React from 'react';
import { Box } from '@mui/material';

function TimeLineEntry (props) {
var entry = 'Wirtschaftsinformatik B.Sc.';

// Render Function 
return (
    <Box sx={{
        lineHeight: '58px'
    }}>
        {props.title}
    </Box>
)
}

export default TimeLineEntry; 