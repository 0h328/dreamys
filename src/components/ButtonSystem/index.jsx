import React from 'react';
import { 
  Box,  
  Button, 
  Stack, 
  Typography 
} from '@mui/material';


function ButtonSystem (props) {
  const {onClick} = props;
  return (
    <Box> 
      <Typography variant="h5" style={{ marginTop: '10%', fontWeight: "bold"}}>Button</Typography>
      <Box sx={{ width: '100%'}} style={{ marginTop: 20}}>    
        <Box style={{ float:"left" }}> 
          <Stack spacing={2}> 
            <Typography variant="h6">Default</Typography>
            <Typography variant="h6">Hover</Typography>
          </Stack>
        </Box>        
        <Stack spacing={2}> 
          <Button 
            variant="contained" 
            style={{ color:"white", width: 100, hegiht: 45, marginLeft: 30}}
            onClick={onClick}
          >
            버튼명
          </Button>
          <Button 
            variant="contained" 
            style={{ color:"white", width: 100, hegiht: 45, marginLeft: 30}}
            onClick={onClick}
          >
            버튼명
          </Button>
        </Stack>
      </Box>
    </Box>
  )
}

export default ButtonSystem;