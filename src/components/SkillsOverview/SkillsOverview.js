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
    "HTML": 4 
}

// Render Function 
return (
    <Box sx={style}>
        <Grid container spacing={4}>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} xs={12} sm={10} md={6} item> 
                <SkillList title="Programmierkenntnisse" listData={programmingSkills}/>
            </Grid>
            <Grid sx={{ display: 'flex', justifyContent: 'center' }} xs={12} sm={10} md={6} item> 
                <SkillList title="Werkzeuge" listData={programmingSkills}/>
            </Grid>


        </Grid>
    </Box>
)
}

export default SkillsOverview; 