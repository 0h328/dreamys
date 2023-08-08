import React, { useState } from 'react';
import { 
  Box, 
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Stack
}from '@mui/material';

function MenuUnfoldSystem () {
  const [menu, setMenu] = useState('');

  const handleChange = (e) => {
    setMenu(e.target.value);
  };

  return (
    <Box>
      <Typography variant="h5" style={{ marginTop: '10%', fontWeight: "bold"}}>Menu-Unfold</Typography>
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
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">대메뉴</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menu}
                label="Menu"
                onChange={handleChange}
              >
                <MenuItem value={1}>대메뉴</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">대메뉴</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menu}
                label="Menu"
                onChange={handleChange}
              >
                <MenuItem value={1}>대메뉴</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 200 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">대메뉴</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menu}
                label="Menu"
                onChange={handleChange}
              >
                <MenuItem value={1}>대메뉴</MenuItem>
              </Select>
            </FormControl>
          </Box>
      </Stack>
        </Box>
    </Box>
  )
}

export default MenuUnfoldSystem;