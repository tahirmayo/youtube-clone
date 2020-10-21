import React from 'react';
import './VideoCard.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';




 function VideoCard({image,title,channal,views,timestamp,channalimage}){    
     return(
         <div className="videocard">
             <img className="videocard_thumnail" src={image} alt=""/>
             <div className="videocard_info">
             <AccountCircleIcon className="videocard_account" alt={channal} src={channalimage}/>
             <div className="videocard_text">
           <h4>{title}</h4>
           <p>{channal}</p>
           <p>
               {views}.{timestamp}
           </p>
             </div>
             </div>
         </div>
     )
 };
 export default VideoCard;