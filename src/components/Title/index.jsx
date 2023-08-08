import Sidebar from "./Sidebar";
import './index.css'
import Main from "./Main";
import { Divider } from "@mui/material";

function Title() {
  return (
    <div className="Title">
      <div className="container">
        <Sidebar/>
        {/* <Divider orientation="vertical" flexItem/> */}
        <Main/>
      </div>
    </div>
  )
};


export default Title;