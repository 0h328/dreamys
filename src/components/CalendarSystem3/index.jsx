import React from 'react';
import { 
  Box,
  Typography,
  Stack,
  Button,
} from '@mui/material';

function CalendarSystem3 () {


  return (
    <Box>
      <Typography variant="h5" style={{ marginTop: '2%', fontWeight: "bold"}}>Calendar-Button</Typography>
      <Box style={{ marginTop: '30%', float: "left"}}>
        <Stack spacing={4.8}>
          <Typography variant="h7" >Default</Typography>
          <Typography variant="h7" >Hover</Typography>
          <Typography variant="h7" >Clicked,Focused</Typography>
          <Typography variant="h7" >Today</Typography>
          <Typography variant="h7" >Today Clicked,Focused</Typography>
        </Stack>
      </Box>
      <Box style={{ marginTop: '30%' }}>
        <Stack spacing={3.5}>
          <Button style={{ borderRadius: '50%', marginLeft: '50%' }} variant="text" size="small">1</Button>
          <Button style={{ borderRadius: '50%', marginLeft: '50%'  }} variant="outlined" size="small">1</Button>
          <Button style={{ borderRadius: '50%', marginLeft: '50%'  }} variant="contained" size="small">1</Button>
          <Button style={{ borderRadius: '50%', marginLeft: '50%'  }} variant="text" size="small">1</Button>
          <Button style={{ borderRadius: '50%', marginLeft: '50%'  }} variant="contained" size="small">1</Button>
        </Stack>
      </Box>
    </Box>

  )
}

export default CalendarSystem3;