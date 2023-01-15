import React from 'react'
// MUI 
import { Box, Grid } from '@mui/material';
import SkillList from '../SkillList/SkillList';
import style from '../sytle/style';

function SkillsOverview(props) {
// Data
let programmingSkills = {
    "JavaScript": 4, 
    "PHP": 3, 
    "HTML": 4, 
    "CSS": 3, 
    "Python": 3, 
    "SQL": 2,
    "Java": 2 
}

let toolsSkills = {
    "React": 4,
    "Flask": 4,
    "Git": 3,
    "Express": 3,
    "Django": 3,
    "Unix": 3, 
    "Postman": 2
}
// Render Function 
return (
    <Box sx={style}>
        <Grid container spacing={4}>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} xs={12} sm={10} md={6} item> 
                <SkillList title="Programmierkenntnisse" listData={programmingSkills}/>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} xs={12} sm={10} md={6} item> 
                <SkillList title="Werkzeuge" listData={toolsSkills}/>
            </Grid>


        </Grid>
    </Box>
)
}

export default SkillsOverview; 