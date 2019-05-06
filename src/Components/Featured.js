import React from 'react';
import './Featured.scss';

const Announcement = ({name, title, description}) => 
  <div className='col-container' style={{padding: '4vh'}}>
    <div style={{fontSize: '2vh', fontWeight: 'bold'}}>
      {name}
    </div>
    <div style={{fontSize: '4vh', fontWeight: 'bold', paddingTop: '2vh'}}>
      {title}
    </div>
    <div style={{fontSize: '0.9vw', paddingTop: '2vh', color: 'rgb(150, 150, 150)'}}>
      {description}
    </div>
  </div>;

const VideoCarousel = ({videos}) => 
  <div className='row-container' style={{paddingLeft: '4vh'}}>

    {videos && videos.map(video => 
        <div className='col-container' style={{paddingRight: '2vh'}}>
          <img style={{width: '8vw'}} src={video.thumbnail} alt={video.title}/>
          <div className='video-creator-name'>{video.creator}</div>
          <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>{video.title}</div>
          <div className='row-container' style={{paddingTop: '1vh'}}>
            <div className='video-stats item'>{'VIEWS ' + video.views}</div>
            <div className='video-stats item'>{video.date}</div>
          </div>
        </div>
    )}
  </div>;

const FeaturedVideo = ({thumbnail, creator, title, description, views, likes, date}) => 
  <div className='col-container featured-video' style={{flex: 2}}>
    <img className='thumbnail' src={thumbnail} alt='Title'/>
    <div className='col-container' style={{paddingTop: '1vh'}}>
      <div className='video-creator-name'>{creator}</div>
      <div className='video-title' style={{paddingTop: '1vh'}}>{title}</div>
      <div className='video-description' style={{width: '25vw', paddingTop: '1vh'}}>{description}</div>
      <div className='row-container' style={{paddingTop: '1vh'}}>
        <div className='video-stats' style={{paddingRight: '6vh'}}>{'VIEWS ' + views}</div>
        <div className='video-stats' style={{paddingRight: '6vh'}}>{'LIKES ' + likes}</div>
        <div className='video-stats' style={{paddingRight: '6vh'}}>{date}</div>
      </div>
    </div>
  </div>;

const Featured = ({announcement, carousel, video}) =>
  <div style={{flex: 8}}>
    <div className='row-container'>
      <div className='col-container' style={{flex: 3}}>

        <div style={{flex: 4}}>
          <Announcement
            name={announcement.name}
            title={announcement.title}
            description={announcement.description}
          />
        </div>
      
        <div style={{flex: 3}}>
          <VideoCarousel
            videos={carousel}
          />
        </div>
      
      </div>
      
      <FeaturedVideo {...video}/>

    </div>
  </div>;

export default Featured;