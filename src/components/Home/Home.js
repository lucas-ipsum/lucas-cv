import React from 'react'
import {Box} from '@mui/material';
import SkillList from '../SkillList/SkillList';
import SkillsOverview from '../SkillsOverview/SkillsOverview';
import Hero from '../Hero/Hero';
import TimeLine from '../TimeLine/TimeLine';
import Footer from '../Footer/Footer';

function Home(props) {


// Render Function 
return (
<Box>
    <Hero />
    <SkillsOverview />
    <TimeLine />
    <Footer />
</Box>

)
}

export default Home; 