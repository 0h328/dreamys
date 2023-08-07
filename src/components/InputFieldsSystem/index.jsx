import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function InputFieldsSystem () {

  return (
    <Box 
      component="form" 
      noValidate 
      autoComplete="off"
    >
      <Typography variant="h5" style={{ marginTop: 30, fontWeight: "bold"}}>Input Fields</Typography>
      <Typography variant="h6" style={{ marginTop: 10}} >Default</Typography>
      <TextField id="outlined-basic" variant="outlined" style={{ marginTop: 10}} size="small"/>
      <Typography variant="h6" style={{ marginTop: 10}}>Focused</Typography>
      <TextField id="outlined-basic" variant="outlined" style={{ marginTop: 10}} size="small"/>
      <Typography variant="h6" style={{ marginTop: 10}}>Filled</Typography>
      <TextField id="outlined-basic" label="정보내용" variant="outlined" style={{ marginTop: 10}} size="small"/>
    </Box>
  )
}

export default InputFieldsSystem;