import React from 'react'
// MUI 
import { Box, Typography } from '@mui/material';
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
    <Box sx={{border: 'solid 1px'}}>
        <Typography variant='h4'>{props.title}</Typography>
        {skillList}
    </Box>
)
}

export default SkillList; 