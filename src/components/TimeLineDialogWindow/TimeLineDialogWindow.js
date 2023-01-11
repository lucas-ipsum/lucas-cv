import { Dialog, DialogTitle, List, ListItem, ListItemIcon, ListItemText, ListSubheader, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'

// Icons 
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import TopicIcon from '@mui/icons-material/Topic';
import LanguageIcon from '@mui/icons-material/Language';

function TimeLineDialogWindow(props) {
let website; 
let focusAreas; 
// Check for props 
if (props.data.website) {website = props.data.website};
if (props.data.focusAreas) {focusAreas = props.data.focusAreas};

// Loop Focus Areas 
let listFocusAreas = [];
if (focusAreas) {
    for (let i = 0; i < focusAreas.length; i++) {
        listFocusAreas.push(<li>{focusAreas[i]}</li>)
    }
}

// Event Handler 
const handleClose = () => {
    props.onClose();
}

// Render Function 
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
                    {
                    /* ### Website ### */
                    website && 
                        <ListItem>
                            <ListItemIcon>
                                <LanguageIcon />
                            </ListItemIcon>
                            <ListItemText>
                                <a href={website}>Website</a>
                            </ListItemText>
                        </ListItem>
                    }
                    {/* ### Schwerpunkte ### */}
                    {
                    focusAreas && 
                    <>
                    <ListSubheader>Schwerpunkte: </ListSubheader>
                    <ul>
                        {listFocusAreas}
                    </ul>
                    </>                     
                    }

                </List>
            </Box>

        </Dialog>
    </Box>
)
}

export default TimeLineDialogWindow; 