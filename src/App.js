import React, { Component } from 'react';
import './App.scss';
import trending_thumbnail from './images/trending_thumbnail.jpg';

import SideNav from './Components/SideNav';

// images
import profile_pic from './images/profile_pic.png';
import TopBar from './Components/TopBar';
import Content from "./Components/Content";

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

        <div className='main' style={{flex: '7', background: 'grey'}}>
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

            <div className='side-info col-container'>
              <div className='title'>
                Trending
                <span className='extra'>Show more</span>
              </div>

              <div className='trending-video'>
                <img className='video' src={trending_thumbnail} alt='trending thumbnail'/>

                <div className='creator-name'>Panagiotis Petridis</div>
                <div className='video-title'>Render Layers in Blender</div>
                <div className='video-description'>
                  Hi there! So in this video I will be<br/>
                  showing you guys how cool 
                  render <br/>layers are and how you can use them.
                </div>
              </div>

            </div>
          
          </div>
        </div>
      </div>
    );
  }
}

export default App;
