import React from 'react';
import { 
  Box,
  Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers/DateField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';

function CalendarSystem () {


  return (
    <Box>
      <Typography variant="h5" style={{ marginTop: '2%', fontWeight: "bold"}}>Calendar</Typography>
      <Typography variant="h6" style={{ marginTop: '20%'}} >Default</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateField']}>
          <DateField label="mm/dd/yyyy" />
        </DemoContainer>
      </LocalizationProvider>
      <Typography variant="h6" style={{ marginTop: '20%'}}>Hover</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DateField']}>
          <DateField label="mm/dd/yyyy" />
        </DemoContainer>
      </LocalizationProvider>
      <Typography variant="h6" style={{ marginTop: '20%'}}>Focused</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="Basic date picker" />
        </DemoContainer>
      </LocalizationProvider>
      <Typography variant="h6" style={{ marginTop: '20%'}}>Filled</Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem>
        <MobileDatePicker defaultValue={dayjs('2015.05.18')} />
      </DemoItem>
      </LocalizationProvider>

    </Box>

  )
}

export default CalendarSystem;