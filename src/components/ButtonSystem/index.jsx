import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function ButtonSystem (props) {
  const {onClick} = props;
  return (
    <Box> 
      <Typography variant="h5" style={{ marginTop: 40, fontWeight: "bold"}}>Button</Typography>
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