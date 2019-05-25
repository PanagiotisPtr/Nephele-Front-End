import React, { useState, useEffect } from 'react';

// Components
import Content from './Components/Content';
import SideInfo from './Components/SideInfo';

// images
import profile_pic from './images/profile_pic.png';
import trending_thumbnail from './images/trending_thumbnail.jpg';

const creator_name = '5cd87f0e15afb10011b9f3c3';

const latestVideos = async(num) => {
  const response = await fetch('http://localhost:4000/videos/latest/' + num);
  return await response.json();
}

const Home = _ => {
  const [recent, setRecent] = useState();

  useEffect(() => {
    latestVideos(5).then(res => {
      res.data.map(video => {
        video.id = video._id;
        video.thumbnail = require('./data/videos/' + video._id + '.jpg');
      });
      setRecent(res.data);
    }).catch(err => console.log('Error:' + err));
  }, []);

  return (
    <div className='row-container'>

      <Content
        announcement = {{
          name: 'Weekly Featured',
          title: 'Summer is here!',
          description: 'Spring is over, summer is here! Kick back, relax and watch your favorite creators!'
        }}
        featured = {{
          carousel: [
            {id: '2n62g13v6jl23ghf6', creator: 'Creator', title: 'title', views: '100K', thumbnail: trending_thumbnail, date: '6DS AGO'},
            {id: '234hfk56123gk345h', creator: 'Creator', title: 'title', views: '100K', thumbnail: trending_thumbnail, date: '6DS AGO'},
            {id: 'kj34h7f34kgk3457k', creator: 'Creator', title: 'title', views: '100K', thumbnail: trending_thumbnail, date: '6DS AGO'},
            {id: 'hj42bn35nmn26nbm2', creator: 'Creator', title: 'title', views: '100K', thumbnail: trending_thumbnail, date: '6DS AGO'},
          ],
          video: {
            id: 'lkth34j23gl4ktg3l',
            thumbnail: trending_thumbnail,
            creator: 'Panagiotis Petridis',
            title: 'Render Layers in Blender',
            description: 'Hi there! So in this video I will be showing you guys how cool render layers are and how you can use them.',
            views: '100K',
            likes: '101K',
            date: '1 WEEK AGO'
          }
        }}
        feed = {[
          {
            title: 'Recommended',
            videos: recent
          },
          {
            title: 'New',
            videos: recent
          }
        ]}
      />

      <SideInfo
        title='Trending'
        video={{
          id: 'mn6jlhhjg345jhg7l45', 
          creator: 'Panagiotis Petridis',
          title: 'Render Layers in Blender',
          description: 'Hi there! So in this video I will be showing you guys how cool render layers are and how you can use them.',
          thumbnail: trending_thumbnail
        }}
        channels={[
          // for production require('./data/creators/' + creator_name + '.jpg')
          {photo: profile_pic, name: 'Channel Name', subscribers: '1M'},
          {photo: profile_pic, name: 'Channel Name', subscribers: '1M'},
          {photo: profile_pic, name: 'Channel Name', subscribers: '1M'},
          {photo: profile_pic, name: 'Channel Name', subscribers: '1M'},
          {photo: profile_pic, name: 'Channel Name', subscribers: '1M'},
          {photo: profile_pic, name: 'Channel Name', subscribers: '1M'},
          {photo: profile_pic, name: 'Channel Name', subscribers: '1M'}
        ]}
      />
    </div>
  );
}

export default Home;