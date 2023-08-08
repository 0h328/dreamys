import React from 'react';
import './index.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Sidebar () {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="bigMenu">
          <h3 className="bigMenuTitle">대메뉴</h3>
          <ul className="sidebarList">
            <li className='sidebarListItem'>
              소메뉴
            </li>
            <li className='sidebarListItem'>
              소메뉴
            </li>
            
          </ul>
          <h3 className="bigMenuTitle">대메뉴</h3>
          <ul className="sidebarList">
            <li className='sidebarListItem'>
              소메뉴
            </li>
            <li className='sidebarListItem'>
              소메뉴
            </li>
            
          </ul>

        </div>
      </div>
    </div>
  )
};

export default Sidebar;

