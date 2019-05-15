import React from 'react';
import { Link } from 'react-router-dom';

import './VideoSection.scss';
import './Utilities.scss';

const Video = ({id, title, creator, thumbnail, views, date}) => 
  <div className='col-container feed' style={{marginTop: '4vh', paddingRight: '2vh'}}>
    <Link to={'/theater/' + id}>
    <img className='thumbnail' src={thumbnail} alt={title}/>
    </Link>
    <div className='video-creator-name'>{creator}</div>
    <Link className='text-link' to={'/theater/' + id}>
    <div className='video-title' style={{paddingTop: '1vh', fontSize: '1vw'}}>{title}</div>
    </Link>
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