import React from 'react'
// MUI 
import { Box, Typography, Paper } from '@mui/material';
import Skills from '../Skills/Skills';
// Components

function SkillList(props) {
// Props

let skillList = []
for (const [key, value] of Object.entries(props.listData)) {
    skillList.push(<Skills name={key} level={value}/>)
}
// 


// Render Function 
return (
    <Box sx={{}}>
        <Paper elevation={4}>
            <Box sx={{p: 2}}>
                <Typography variant='h4'>{props.title}</Typography>
                {skillList}
            </Box>
        </Paper>
    </Box>
)
}

export default SkillList; 