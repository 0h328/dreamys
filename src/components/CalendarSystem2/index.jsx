import React from 'react';
import { 
  Box,
  Typography,
} from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function CalendarSystem2 () {


  return (
    <Box>
      <Typography variant="h5" style={{ marginTop: '2%', fontWeight: "bold"}}>Calendar-Select box/Dropdown</Typography>
      <Typography variant="h6" style={{ marginTop: '15%'}} >Default</Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker', 'DatePicker']}>
          <DatePicker openTo="year" />
        </DemoContainer>
        </LocalizationProvider>
          <Typography variant="h6" style={{ marginTop: '20%'}}>Hover</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker']}>
            <DatePicker label={'2015년'} openTo="year" />
          </DemoContainer>
        </LocalizationProvider>
          <Typography variant="h6" style={{ marginTop: '20%'}}>Filled</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker', 'DatePicker']}>
            <DatePicker label={'2015년'} openTo="year" />
          </DemoContainer>
        </LocalizationProvider>
    </Box>

  )
}

export default CalendarSystem2;