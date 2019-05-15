import React from 'react';

// Components
import Content from './Components/Content';
import SideInfo from './Components/SideInfo';

// images
import profile_pic from './images/profile_pic.png';
import trending_thumbnail from './images/trending_thumbnail.jpg';


const creator_name = '5cd87f0e15afb10011b9f3c3';


const Home = _ => {
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
            videos: [
              {id: 'hgkj23h5vk3j2g5o2', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
              {id: 'hnlcv34ghj6kgc345', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
              {id: 'jbhfvkcd234tghk53', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
              {id: '983432llg6hj26lhj', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
              {id: '2g3f23g4j6f62gjkl', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail}
            ]
          },
          {
            title: 'New',
            videos: [
              {id: '4123vjgk5d12l1212', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
              {id: 'nbvb3c26bnv345nb2', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
              {id: 'g95kh3hk8956gh546', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
              {id: 'mnbvmn45685m8nmbv', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
              {id: 'nmb3n4v7nm434b573', title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail}
            ]
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