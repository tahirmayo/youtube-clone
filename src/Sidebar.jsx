import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import { Icon } from '@material-ui/core';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import MoreIcon from '@material-ui/icons/More';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import SettingsIcon from '@material-ui/icons/Settings';
import ReportIcon from '@material-ui/icons/Report';
import HelpIcon from '@material-ui/icons/Help';
import EmailIcon from '@material-ui/icons/Email';


function Sidebar()
{
 return(<>
  
    <div className="sidebar">
 
 <SidebarRow selected Icon={ HomeIcon} title="Home"/>
 <SidebarRow  Icon={ WhatshotIcon} title="Trending"/>
 <SidebarRow  Icon={SubscriptionsIcon } title="Subscription"/>
 <hr/>
 <SidebarRow  Icon={VideoLibraryIcon } title="Library"/>
 <SidebarRow  Icon={ HistoryIcon} title="History"/>
 <SidebarRow  Icon={ OndemandVideoIcon} title="Your Videos"/>
 <SidebarRow  Icon={  WatchLaterIcon } title="Watch Later"/>
 <SidebarRow  Icon={ ThumbDownAltIcon} title="Liked Videos"/>
 <SidebarRow  Icon={ MoreIcon} title="Show More "/>
 <hr/>
 <SidebarRow  Icon={SportsEsportsIcon } title="Gaming"/>
 <SidebarRow  Icon={ LiveTvIcon} title="Live"/>
 <hr/>
 <SidebarRow  Icon={ SettingsIcon} title="Setting"/>
 <SidebarRow  Icon={   ReportIcon } title="Report History"/>
 <SidebarRow  Icon={ HelpIcon} title="Help"/>
 <SidebarRow  Icon={ EmailIcon } title="Send Feedback"/>
 
 <hr/>
 <p>About Press Copyright</p>
     <p> Contact Us Creators</p>
         <p> Advertise Developers</p>
         <br/>
         
         <p>Terms Privacy Policy & Safety</p>
     <p>How Youtube works</p>
         <p>Test New Features</p>
         <br/>
         
         <br/>
         <h4>@ 2020 Google LLC</h4>


 </div>
 
 
 
 </>);
};
export default Sidebar;