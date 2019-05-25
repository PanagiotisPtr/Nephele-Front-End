import React from 'react';

import './Utilities.scss';
import './Video.scss';
import './VideoInfo.scss';

const TitleBar = ({title, likes, dislikes}) => 
  <div className='row-container' style={{alignItems: 'center'}}>
    <div className='video-title' style={{fontSize: '2vw'}}>{title}</div>
    <div className='row-container likes-dislikes'>
      <i className='clickable fas fa-thumbs-up'/><div>{likes}</div>
      <i className='clickable fas fa-thumbs-down'/><div>{dislikes}</div>
    </div>
  </div>;

const StatsBar = ({views, date, shared}) =>
  <div className='row-container stats-bar'>
    <div className='video-stats'>VIEWS {views}</div>
    <div className='video-stats'>{date}</div>
    <div className='video-stats'>SHARED {shared}</div>
  </div>;

const Channel = ({photo, name, subscribers}) =>
  <div className='row-container' style={{alignItems: 'center'}}>
    <img src={photo} alt={name} style={{borderRadius: '100%', height: '2.5vw'}}/>
    <div className='col-container' style={{marginLeft: '0.8vw'}}>
      <div className='video-title' style={{fontSize: '1vw'}}>{name}</div>
      <div className='video-stats' style={{fontSize: '0.8vw'}}>{subscribers}</div>
    </div>
    <div className='subscribe-btn clickable' style={{marginLeft: 'auto'}}>Subscribe</div>
  </div>;

const SuggestedVideo = ({title, creator, views, date, thumbnail}) =>
  <div className='col-container clickable'>
      <img src={thumbnail} alt={title} style={{width: '14vw'}}/>
      <div className='video-creator-name' style={{fontSize: '0.8vw'}}>{creator}</div>
      <div className='video-title' style={{fontSize: '1vw'}}>{title}</div>
      <div className='row-container'>
        <div className='video-stats item' style={{fontSize: '0.7vw'}}>VIEWS {views}</div>
        <div className='video-stats item' style={{fontSize: '0.7vw'}}>{date}</div>
        <div className='item'></div>
      </div>
  </div>;

const UpNext = ({videos}) =>
  <div style={{marginLeft: '2vw'}}>
    <div style={{fontSize: '1.2vw', fontWeight: 'bold', marginBottom: '2vw'}}>Up Next</div>
    <div className='row-container suggested-videos'>
      {videos.map(video => <SuggestedVideo {...video}/> )}
    </div>
  </div>;

const VideoInfo = ({video, channel, stats, videos}) =>
  <div className='col-container' style={{width: '100%', flex: 3}}>
    <div className='col-container video-details' style={{margin: '2vw'}}>
  
      <TitleBar title={video.title} likes={stats.likes} dislikes={stats.dislikes} />
  
      <StatsBar views={stats.views} date={video.date} shared={stats.shared}/>
      
      <div className='video-description'>{video.description}</div>
      
      <Channel {...channel} />
    </div>
    
    <UpNext videos={videos}/>
  </div>;

export default VideoInfo;