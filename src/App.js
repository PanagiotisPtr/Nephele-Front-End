import React, { Component } from 'react';
import './App.scss';
import trending_thumbnail from './images/trending_thumbnail.jpg';

// Components
import SideNav from './Components/SideNav';
import TopBar from './Components/TopBar';
import Content from "./Components/Content";
import SideInfo from './Components/SideInfo';

// images
import profile_pic from './images/profile_pic.png';


class App extends Component {
  render() {
    return (
      <div className='app'>
        <SideNav
          username='Panagiotis Petridis'
          location='Nottingham, UK'
          videos='122'
          subscribers='2M'
          profilePicture={profile_pic}
          options={[
            [
              { icon: 'fa-video', name: 'Videos', selected: true},
              { icon: 'fa-film', name: 'Movies & Shows'},
              { icon: 'fa-donate', name: 'Premium'}
            ],
            [
              { icon: 'fa-bookmark', name: 'Subscriptions', notification: 'new'},
              { icon: 'fa-list', name: 'Library'},
              { icon: 'fa-thumbs-up', name: 'Liked Videos'},
              { icon: 'fa-clock', name: 'Watch Later'}
            ],
            [
              { icon: 'fa-sliders-h', name: 'Settings'},
              { icon: 'fa-user', name: 'Help & Report'}
            ]
          ]}
        />

        <div className='main' style={{flex: '7'}}>
          <TopBar
            icons = {['fa-plus-circle', 'fa-bell', 'fa-user-circle']}
            active = {0}
          />
          
          <div className='row-container'>
            <Content
              announcement = {{
                name: 'Weekly Featured',
                title: 'Summer is here!',
                description: 'Spring is over, summer is here! Kick back, relax and watch your favorite creators!'
              }}
              featured = {{
                carousel: [
                  {creator: 'Creator', title: 'title', views: '100K', thumbnail: trending_thumbnail, date: '6DS AGO'},
                  {creator: 'Creator', title: 'title', views: '100K', thumbnail: trending_thumbnail, date: '6DS AGO'},
                  {creator: 'Creator', title: 'title', views: '100K', thumbnail: trending_thumbnail, date: '6DS AGO'},
                  {creator: 'Creator', title: 'title', views: '100K', thumbnail: trending_thumbnail, date: '6DS AGO'},
                ],
                video: {
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
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail}
                  ]
                },
                {
                  title: 'New',
                  videos: [
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
                    {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail}
                  ]
                }
              ]}
            />

            <SideInfo
              title='Trending'
              video={{
                creator: 'Panagiotis Petridis',
                title: 'Render Layers in Blender',
                description: 'Hi there! So in this video I will be showing you guys how cool render layers are and how you can use them.',
                thumbnail: trending_thumbnail
              }}
              channels={[
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
        </div>
      </div>
    );
  }
}

export default App;
