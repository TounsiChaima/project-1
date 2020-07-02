
import React, { Component } from 'react';
class SharerButton extends React.Component {
    
    
    render () {
        return <FacebookShareButton url={window.location.href} quote={"check out this event on Bright INSAT <3"} className="share">
                    <FacebookIcon size={32} round={true}/>
               </FacebookShareButton>
     }
  } 
  
  export default SharerButton;