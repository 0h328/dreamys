import React from 'react';
import { 
  Box, 
  Typography,
  Stack,
  TextField,
}from '@mui/material';

function MenuListSystem () {


  return (
    <Box>
      <Typography variant="h5" style={{ marginTop: '10%', fontWeight: "bold"}}>MenuList</Typography>
      <Box style={{ float: "left", marginTop: '5%', marginRight: '25%' }}>
        <Stack spacing={2}>
          <Typography variant="h5" style={{ marginTop: '25%' }}>Inactive</Typography>
          <Typography variant="h5" style={{ marginTop: '35%' }}>hover</Typography>
          <Typography variant="h5" style={{ marginTop: '45%' }}>active</Typography>
        </Stack>
      </Box>
      <Box style={{  marginTop: '6%', }}>
        <Stack spacing={2}>
          <Box sx={{ minWidth: 200 }}>
            <TextField id="outlined-basic" label="소메뉴" variant="outlined" style={{ marginTop: 10}} size="small"/>
          </Box>
          <Box sx={{ minWidth: 200 }}>
            <TextField id="outlined-basic" label="소메뉴"  variant="outlined" style={{ marginTop: 10}} size="small"/>
          </Box>
          <Box sx={{ minWidth: 200 }}>
            <TextField id="outlined-basic" label="소메뉴" variant="outlined" style={{ marginTop: 10}} size="small"/>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default MenuListSystem;