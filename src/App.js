// import logo from './logo.svg';
import './App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ButtonSystem from './components/ButtonSystem';
import InputFieldsSystem from './components/InputFieldsSystem';
import CheckboxSystem from './components/CheckboxSystem';
import IconsSystem from './components/IconsSystem';
import MenuUnfoldSystem from './components/MenuUnfoldSystem';
import MenuListSystem from './components/MenuListSystem';
import MenufoldSystem from './components/MenuFoldSystem';

function App() {
  return (
    <Box>
      <Box style={{ marginTop: '2%', marginLeft: '4%' }}>
        <Typography variant='h4'>Design System</Typography>
      </Box>
      <Box style={{ display: "flex", justifycontent: "start" }}>
        <Box style={{ marginTop: '1%', marginLeft: '4%' }}>
          <ButtonSystem></ButtonSystem>
          <InputFieldsSystem></InputFieldsSystem>
          <CheckboxSystem></CheckboxSystem>
          <IconsSystem></IconsSystem>      
        </Box>    
        <Box style={{ marginTop: '1%', marginLeft: '6%'}}>
          <MenuUnfoldSystem></MenuUnfoldSystem>
          <MenufoldSystem></MenufoldSystem>
          <MenuListSystem></MenuListSystem>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
