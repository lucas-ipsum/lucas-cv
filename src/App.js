import './App.css';
// MUI 
import { Box } from '@mui/material';
// Components
import Home from './components/Home/Home';


function App() {
  return (
    <Box sx={{

      ml: {
        xs: 2,
        sm: 5,
        lg: '20vw'
      },
      mr: {
        xs: 2,
        sm: 5,
        lg: '20vw'
      }, 
    }}>
      <Home />
    </Box>
    
  );
}

export default App;
