import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'checkbox demo'}};
function CheckboxSystem () {
  const [radioSelect, setRadioSelect] = useState('c');

  const handleChange = (e) => {
    setRadioSelect(e.target.value);
  }

  return (
    <Box>
      <Typography variant="h5" style={{ marginTop: 30, fontWeight: "bold"}}>Check box / Radio button</Typography>
      <Box style={{ float:"left" }}> 
        <Stack spacing={2}>
          <Typography variant="h6" style={{ marginTop: 10}}>Default</Typography>
          <Typography variant="h6" style={{ marginTop: 10}}>Hover</Typography>
          <Typography variant="h6" style={{ marginTop: 10}}>checked</Typography>
        </Stack>
      </Box>
      <Box style={{ float:"left" }}> 
      <Stack spacing={0.3}>
        <Checkbox {...label} />
        <Checkbox {...label} />
        <Checkbox {...label} defaultChecked/>
      </Stack>
      </Box>
      <Box style={{ float:"left" }}> 
      <Stack spacing={0.3}>
        <Radio 
          checked={radioSelect === 'a'}
          onChange={handleChange}
          value="a"
          inputProps={{ 'aria-label': 'A'}}          
        />
        <Radio
          checked={radioSelect === 'b'}
          onChange={handleChange}
          value="b"       
          inputProps={{ 'aria-label': 'B'}}     
        />
        <Radio
          checked={radioSelect === 'c'}
          onChange={handleChange}
          value="c"
          inputProps={{ 'aria-label': 'C'}}     
        />
      </Stack>
      </Box>
    </Box>
  )
}

export default CheckboxSystem;