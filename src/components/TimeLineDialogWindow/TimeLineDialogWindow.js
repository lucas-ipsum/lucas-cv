import { Dialog, DialogTitle } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react'

function TimeLineDialogWindow(props) {
console.log('hiii')

const handleClose = () => {
    props.onClose();
}

return (
    <Box>
        <Dialog onClose={handleClose} open={props.open}>
            <DialogTitle>{props.title}</DialogTitle>
            TimeLineDialogWindow

        </Dialog>
    </Box>
)
}

export default TimeLineDialogWindow; 