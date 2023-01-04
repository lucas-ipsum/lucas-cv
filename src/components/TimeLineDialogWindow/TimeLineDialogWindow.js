import { Dialog, DialogTitle, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

function TimeLineDialogWindow(props) {

const handleClose = () => {
    props.onClose();
}

return (
    <Box>
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>{props.title}</DialogTitle>
            <Box>
                <List>
                    <ListItem>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemText>
                            {props.beginDate} - {props.endDate}
                        </ListItemText>
                    </ListItem>
                    <ListItem>Test</ListItem>
                    <ListItem>Test</ListItem>

                </List>
            </Box>

        </Dialog>
    </Box>
)
}

export default TimeLineDialogWindow; 