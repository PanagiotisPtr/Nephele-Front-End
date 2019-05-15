import React from 'react';
import { Link } from 'react-router-dom';

import './SideInfo.scss';
import './Video.scss';
import './Utilities.scss';

const Video = ({id, creator, title, description, thumbnail}) =>
  <div className='trending-video'>
    <Link to={'/theater/' + id}>
      <img className='image-link' src={thumbnail} alt='trending thumbnail'/>
    </Link>
    <div className='video-creator-name'>{creator}</div>
    <Link className='text-link' to={'/theater/' + id}>
    <div className='video-title'>{title}</div>
    </Link>
    <div className='video-description'>{description}</div>
  </div>;

const Channel = ({photo, name, subscribers}) => 
  <div className='row-container' style={{alignItems: 'center'}}>
    <img className='channel-photo' src={photo} alt={name}/>
    <div className='col-container' style={{marginLeft: '1vw'}}>
      <div className='video-title'>{name}</div>
      <div className='video-description'>{subscribers + ' Subscribers'}</div>
    </div>
  </div>

const SideInfo = ({title, video, channels}) => 
  <div className='side-info col-container invisible-scroll'>
    {/* Title */}
    <div className='title' style={{marginTop: '4vh'}}>{title}</div>

    {/* Video */}
    <Video {...video}/>

    {/* Top Channels */}
    <div>
      <div className='separator' style={{marginBottom: '4vh', width: '15vw'}}></div>
      <div className='title' style={{marginBottom: '4vh'}}>Top Channels</div>
      <div className='col-container channel-list'>
        {channels && channels.map(channel => <Channel {...channel}/>)}
      </div>
    </div>
  </div>;

export default SideInfo;