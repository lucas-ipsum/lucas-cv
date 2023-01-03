import React from 'react';
import { Box, Typography } from '@mui/material';

function TimeLineEntry (props) {
var entry = 'Wirtschaftsinformatik B.Sc.';

// Render Function 
return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'

    }}>
        <Typography sx={{lineHeight: '58px', transform: 'translateY(8px)'}} variant='body1' paragraph={true}>
            {props.title}
        </Typography>
        
    </Box>
)
}

export default TimeLineEntry; 