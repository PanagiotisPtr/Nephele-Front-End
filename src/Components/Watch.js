import React from 'react';

import './Watch.scss';

import VideoPlayer from './VideoPlayer';
import VideoInfo from './VideoInfo';

import profile_pic from '../images/profile_pic.png';

const Comment = ({user, likes, dislikes, content}) => 
  <div className='col-container' style={{margin: '2vh'}}>
    <div className='row-container' style={{alignItems: 'center'}}>
      <img src={user.photo} alt={user.name} style={{height: '5vh', borderRadius: '100%'}}/>
      <div className='col-container' style={{marginLeft: '0.5vw'}}>
        <div className='video-title' style={{fontSize: '2vh'}}>{user.name}</div>
        <div className='row-container'>
          <div className='video-stats' style={{whiteSpace: 'nowrap', fontSize: '0.8vw', flex: 1, marginRight: '0.5vw'}}>
            <i className='clickable fas fa-thumbs-up'/> {likes}
          </div>
          <div className='video-stats' style={{whiteSpace: 'nowrap', fontSize: '0.8vw', flex: 1}}>
            <i className='clickable fas fa-thumbs-down'/> {dislikes}
          </div>
          <div style={{flex: 1}}></div>
        </div>
      </div>
    </div>
    <div className='video-description' style={{fontSize: '1vw', marginTop: '2vh'}}>{content}</div>
  </div>;

const CommentSection = ({comments}) => 
  <div className='col-container' style={{width: '100%', margin: '4vh', width: '100%', flex: 1}}>
    <input className='comment-input' style={{margin: '2vh'}} placeholder='Comment...'/>
    <div className='video-title' style={{fontSize: '1.5vw', margin: '2vh'}}>{comments.length} comments</div>
    <div className='col-container comment-section'>
      {comments.map(comment => <Comment {...comment} />)}
    </div>
  </div>;

const Watch = ({video, poster, recommended, comments}) => 
  <div className='col-container invisible-scroll' style={{height: '94vh', width: '100%'}}>
    <VideoPlayer video={video.src} poster={poster}/>

    <div className='row-container'>
      
      <VideoInfo
        video = {video.info}
        stats = {video.stats}
        channel = {video.channel}
        videos = {recommended}
      />
      <CommentSection
        comments = {comments}
      />
    </div>
  </div>;

export default Watch;