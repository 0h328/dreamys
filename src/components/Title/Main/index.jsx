import React, { useState } from 'react';
import './index.css';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Stack, Box, TextField, FormHelperText } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateField } from '@mui/x-date-pickers';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { DatePicker } from '@mui/x-date-pickers';


function Main() {
  const [value, setValue] = useState('');
  const [mark, setMark] = useState(false);
  const [Text, setText] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value)
    setText('');
    setMark(false);
  }

  const handleSubmit = (e) => {
    e.preventdefault();

    if (value === 'choice1') {
      setText('선택시 텍스트가 표시됩니다.')
      setMark(false);
    } else if (value === 'choice2') {
      setText('선택시 텍스트가 표시됩니다.')
      setMark(true);
    } else {
      setText('선택시 텍스트가 표시됩니다.')
      setMark(true);
    }
  }

  return(
    <div className='Main'>
      <Box>
        <Typography variant="h2" >타이틀</Typography>
      </Box>
      <Divider />
      <Stack spacing={5} style={{ float: 'left'}}>
        <Typography>정보1</Typography>
        <Typography>정보2</Typography>
        <Typography>정보3</Typography>
        <Typography>정보4</Typography>
        <Typography>날짜</Typography>
        <Typography>정보5</Typography>
        <Typography>정보6</Typography>
      </Stack>
      <Stack spacing={4} style={{ marginLeft: '20%'}}>
        <Typography>정보 내용</Typography>
        <TextField id="outlined-basic" label="정보내용" variant="outlined" style={{ width: '20%', marginTop: 25}} size="small"/>
        <Typography>정보 내용</Typography>
        <TextField id="outlined-basic" label="정보내용" variant="outlined" style={{ width: '20%'}} size="small"/>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={['DatePicker']}>
          <DatePicker label="MM/DD/YYYY" />
        </DemoContainer>
      </LocalizationProvider>
      <form onsubmit={handleSubmit}>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel type="submit" value="choice1" control={<Radio />} label="선택1" />
            <FormControlLabel value="choice2" control={<Radio />} label="선택2" />
            <FormControlLabel value="choice3" control={<Radio />} label="선택3" />
          </RadioGroup>
          <FormHelperText>{Text}</FormHelperText>
        </FormControl>
      </form>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="temp1" control={<Radio />} label="선택1" />
            <FormControlLabel value="temp2" control={<Radio />} label="선택2" />
            <FormControlLabel value="temp3" control={<Radio />} label="선택3" />
          </RadioGroup>
        </FormControl>

      </Stack>
      
    </div>
  )
}



export default Main;
