import React from 'react';
import {
  Box,
  Typography,
} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function IconsSystem () {

  return (
    <Box>
      <Typography variant="h5" style={{ marginTop: '50%', fontWeight: "bold"}}>Icons</Typography>
      <CheckBoxIcon sx={{ color: "#FF32B1"}}/>
      <ExpandMoreIcon/>
      <ArrowDropUpIcon color="disabled"/>
      <ArrowDropUpIcon/>
      <ArrowDropDownIcon color="disabled"/>
      <ArrowDropDownIcon/>
      <KeyboardArrowLeftIcon color="disabled"/>
      <KeyboardArrowRightIcon color="disabled"/>
      <KeyboardArrowLeftIcon/>
      <KeyboardArrowRightIcon/>
    </Box>
  )
}

export default IconsSystem;