import React from 'react';
import './Content.scss';
import './Video.scss';

import Featured from './Featured';
import VideoSection from './VideoSection';

const Content = ({announcement, featured, feed}) => 
<div className='content invisible-scroll'>
  <div className='col-container'>

    {/* Featured Videos / Announcement */}
    <Featured
      announcement={announcement}
      carousel={featured.carousel}
      video={featured.video}
    />

    <div className='separator' style={{marginTop: '4vh', width: '130vh', alignSelf: 'center'}}></div>
    
    {/* Videos */}
    <div style={{flex: 9}}>
        {feed && feed.map(section => 
          <VideoSection
            title={section.title}
            videos={section.videos}
          />
        )}
    </div>
  </div>
</div>;

export default Content;