import React from 'react';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () =>
{
    return(<>
    <div className="header">
    <div className="header_left">
  <ListIcon/>
  <img className="header_logo"
   src="https://cdn.mos.cms.futurecdn.net/SytNGv3ZxAVCkvcspmbbvh-320-80.jpg" alt=""
  />
  </div>
  <div className="header_input">
  <input placeholder="Search" type="text"/>
  <SearchIcon className="header_inputButton"/>
  </div>
  <div className="header_icons">
  <VideoCallIcon className="header_icon"/>
  <AppsIcon className="header_icon"/>
  <NotificationsIcon className="header_icon"/>
  <AccountCircleIcon/>
  </div> 
  </div>
    
    </>);

};
export default Header;