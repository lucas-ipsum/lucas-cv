import React from 'react'
import {Box} from '@mui/material';
import SkillList from '../SkillList/SkillList';
import SkillsOverview from '../SkillsOverview/SkillsOverview';
import Hero from '../Hero/Hero';

function Home(props) {


// Render Function 
return (
<Box>
    <Hero />
    <SkillsOverview />

</Box>

)
}

export default Home; 