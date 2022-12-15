import React from 'react'
// MUI 
import { Box, Typography } from '@mui/material';
import Skills from '../Skills/Skills';
// Components

function SkillList(props) {
// Props
let programmingSkills = {
    "JavaScript": 4, 
    "PHP": 3, 
    "HTML": 4 
}
let skillList = []
for (const [key, value] of Object.entries(programmingSkills)) {
    skillList.push(<Skills name={key} level={value}/>)
}
// 


// Render Function 
return (
    <Box>
        <Typography variant='h4'>Programmierkenntnisse</Typography>
        {skillList}
    </Box>
)
}

export default SkillList; 