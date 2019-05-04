import React from 'react';
import './VideoSection.scss';

const Video = ({title, creator, thumbnail, views, date}) => 
  <div className='col-container feed' style={{marginTop: '4vh', paddingRight: '2vh'}}>
    <img className='thumbnail' src={thumbnail} alt={title}/>
    <div className='video-creator-name'>{creator}</div>
    <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>{title}</div>
    <div className='row-container' style={{paddingTop: '1.5vh'}}>
      <div className='video-stats item'>{'VIEWS ' + views}</div>
      <div className='video-stats item'>{date}</div>
      <span className='item'/>
    </div>
  </div>;

const VideoSection = ({title, videos}) => 
  <div>
    <div class='category-title' style={{marginLeft: '4vh', marginTop: '4vh'}}>{title}</div>
    <div className='row-container' style={{margin: '0vh 0vh 4vh 4vh', flexWrap: 'wrap'}}>
      {videos && videos.map(video => <Video {...video}/>)}
    </div>
  </div>;

export default VideoSection;