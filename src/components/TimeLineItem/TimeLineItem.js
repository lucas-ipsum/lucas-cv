import React from 'react'
// MUI 
import { Box, Paper, Grid, Divider } from '@mui/material'; 
import data from '../../data/cvTimeline';
// Components
import TimeLineIcon from './TimeLineItemComponents/TimeLineIcon';
import TimeLineDate from './TimeLineItemComponents/TimeLineDate';
import TimeLineEntry from './TimeLineItemComponents/TimeLineEntry';

function TimeLineItem(props) {

// Render Function 
return (
    <Box>
        <Grid container>
        <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center' }}>
                <TimeLineDate beginDate={props.beginDate} endDate={props.endDate}/>
            </Grid>
            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center' }}>
                <TimeLineIcon category={props.category}/>
            </Grid>
            <Grid item xs={4} sx={{display: 'flex', justifyContent: 'center' }}>
                <TimeLineEntry title={props.title}/>
            </Grid>
            <Grid item xs={6}>
                <Divider sx={{height: '50px', borderColor:'#000000' }} orientation='vertical' /> 
            </Grid>

        </Grid>
    </Box>
)
}

export default TimeLineItem; 