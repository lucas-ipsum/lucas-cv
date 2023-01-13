import React, { useState } from 'react'
import { Box, IconButton } from '@mui/material'
// Icons 
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import TimeLineDialogWindow from '../../TimeLineDialogWindow/TimeLineDialogWindow';

function TimeLineIcon (props) {
var icon; 
const [openWindow, setOpenWindow] = useState(false);

if (props.category == 'university') {
    icon = <SchoolIcon sx={{fontSize: '40px', border: 1, borderRadius: '50%', p:1 }}/>
} else if (props.category == 'job') {
    icon = <WorkIcon sx={{fontSize: '40px', border: 1, borderRadius: '50%', p:1 }}/>
}  else if (props.category == 'ehrenamt') {
    icon = <Diversity3Icon sx={{fontSize: '40px', border: 1, borderRadius: '50%', p:1 }}/>
}

console.log(props)
// Event Listeners 
const btnClicked = (e) => {
    setOpenWindow(true);
    console.log(e.target);
} 
const onClose = () => {
    setOpenWindow(false);
}
// Render Function 
return (
    <Box>
        {openWindow ? <TimeLineDialogWindow onClose={onClose} open={openWindow} title={props.id} beginDate={props.beginDate} endDate={props.endDate} institution={props.institution} data={props.data}/> : null}
        <Box sx={{height: '58px'}}>
            <IconButton color='primary' onClick={btnClicked}>
                {icon}
            </IconButton>
        </Box>
    </Box>

)
}

export default TimeLineIcon;