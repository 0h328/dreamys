// import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonSystem from './components/ButtonSystem';
import InputFieldsSystem from './components/InputFieldsSystem';
import CheckboxSystem from './components/CheckboxSystem';
import IconsSystem from './components/IconsSystem';

function App() {
  return (
    <Box style={{ marginTop: 40, marginLeft: 40}}>
      <Typography variant='h4'>Design System</Typography>
      <ButtonSystem></ButtonSystem>
      <InputFieldsSystem></InputFieldsSystem>
      <CheckboxSystem></CheckboxSystem>
      <IconsSystem></IconsSystem>
    </Box>    
  );
}

export default App;
