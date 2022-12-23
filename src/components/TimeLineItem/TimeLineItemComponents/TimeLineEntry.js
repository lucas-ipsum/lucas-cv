import React from 'react';
import { Box, Typography } from '@mui/material';

function TimeLineEntry (props) {
var entry = 'Wirtschaftsinformatik B.Sc.';

// Render Function 
return (
    <Box sx={{
        lineHeight: '58px'
    }}>
        <Typography variant='body1' paragraph={true}>{props.title}</Typography>
        
    </Box>
)
}

export default TimeLineEntry; 