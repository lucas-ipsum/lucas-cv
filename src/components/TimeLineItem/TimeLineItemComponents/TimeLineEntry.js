import React from 'react';
import { Box } from '@mui/material';

function TimeLineEntry (props) {
var entry = 'Wirtschaftsinformatik B.Sc.';

// Render Function 
return (
    <Box sx={{
        lineHeight: '58px'
    }}>
        {entry}
    </Box>
)
}

export default TimeLineEntry; 