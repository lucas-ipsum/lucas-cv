import './App.css';
// MUI 
import { Box } from '@mui/material';
// Components
import Home from './components/Home/Home';


function App() {
  return (
    <Box sx={{
      ml: 5,
      mr: 5, 
    }}>
      <Home />
    </Box>
    
  );
}

export default App;
