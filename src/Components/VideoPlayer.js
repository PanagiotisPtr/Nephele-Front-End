import React from 'react';

import './VideoPlayer.scss';

const VideoPlayer = ({video, poster}) => 
  <div className='col-container' style={{ background: 'black'}}>
    <div style={{alignSelf: 'center'}}>
      <video className='video-player no-select' controls poster={poster}>
        <source src={video} type="video/mp4"/>
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>
  </div>;

export default VideoPlayer;