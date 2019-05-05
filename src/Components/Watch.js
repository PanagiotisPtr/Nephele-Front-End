import React from 'react';

import './Watch.scss';

import VideoPlayer from './VideoPlayer';
import VideoInfo from './VideoInfo';


import profile_pic from '../images/profile_pic.png';

const Watch = ({video, poster}) => 
  <div className='col-container invisible-scroll' style={{height: '94vh', width: '100%'}}>
    <VideoPlayer video={video} poster={poster}/>

    <div className='row-container'>
      
      <VideoInfo
        video = {{
          title: 'video title',
          description: 'Hi there! So in this video I will be showing you guys how cool render layers are and how you can use them.',
          date: '1WK AGO'
        }}
        stats = {{
          likes: '12K',
          dislikes: '2K',
          shared: '2K',
          views: '100K'
        }}
        channel = {{
          name: 'Channel',
          subscribers: '1.2M',
          photo: profile_pic
        }}
        videos = {[
          {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: poster},
          {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: poster},
          {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: poster},
          {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: poster},
          {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: poster}
        ]}
      />

      <div className='col-container' style={{width: '100%', flex: 1}}>
        Comments
      </div>
    </div>
  </div>;

export default Watch;