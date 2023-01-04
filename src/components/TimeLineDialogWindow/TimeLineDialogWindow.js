import { Dialog, DialogTitle, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import TopicIcon from '@mui/icons-material/Topic';

function TimeLineDialogWindow(props) {

const handleClose = () => {
    props.onClose();
}
// Loop Focus Areas 
let listFocusAreas = [];
if (props.data.focusAreas) {
    for (let i = 0; i < props.data.focusAreas.length; i++) {
        listFocusAreas.push(<li>{props.data.focusAreas[i]}</li>)
    }
}

return (
    <Box>
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>{props.title}</DialogTitle>
            <Box>
                <List>
                    {/* ### Date ### */}
                    <ListItem>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {props.beginDate} - {props.endDate}
                        </ListItemText>
                    </ListItem>
                    {/* ### Institution ### */}
                    <ListItem>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {props.institution}
                        </ListItemText>
                    </ListItem>
                    {/* ### Institution ### */}
                    <ListSubheader>Schwerpunkte: </ListSubheader>
                    <ul>
                        {listFocusAreas}
                        <li>TEst1</li>
                        <li>TEst2</li>
                        <li>TEst3</li>

                    </ul>
                </List>
            </Box>

        </Dialog>
    </Box>
)
}

export default TimeLineDialogWindow; 

/**
 *                     <ListItem>
                        <ListItemIcon>
                            <TopicIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <Typography>Schwerpunkte: </Typography>
                            
                        </ListItemText>
                    </ListItem>
 */