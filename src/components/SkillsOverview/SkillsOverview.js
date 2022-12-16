import React from 'react'
// MUI 
import { Box, Grid } from '@mui/material';
import SkillList from '../SkillList/SkillList';

function SkillsOverview(props) {
// Data
let programmingSkills = {
    "JavaScript": 4, 
    "PHP": 3, 
    "HTML": 4 
}

// Render Function 
return (
    <Box>
        <Grid container spacing={4}>
            <Grid xs={12} sm={12} md={4} item> 
                <SkillList title="Programmierkenntnisse" listData={programmingSkills}/>
            </Grid>

            <Grid xs={12} sm={12} md={4} item> 
                <SkillList title="Werkzeuge" listData={programmingSkills}/>
            </Grid>

        </Grid>
    </Box>
)
}

export default SkillsOverview; 