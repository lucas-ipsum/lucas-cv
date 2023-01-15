import { Box } from '@mui/system';
import React from 'react'; 
import   style from '../sytle/style'

function Footer(props) {

// Render Function 
return (
 <Box sx={{
    mt: 8,
    backgroundColor: '#4DA1C2',
    minHeight: '100px'
 }}>
<Box sx={style}>
    Footer
</Box>
</Box>
)

}

export default Footer
