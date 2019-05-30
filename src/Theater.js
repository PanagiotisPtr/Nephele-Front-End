import React from 'react';

// Components
import Watch from './Components/Watch';

// images
import profile_pic from './images/profile_pic.png';
import trending_thumbnail from './images/trending_thumbnail.jpg';

const Theater = props => {
  console.log(props.match.params.id);
  return (
    <Watch
      video={{
        src: 'http://localhost:5000/videos/' + props.match.params.id,
        info: {
          title: 'video title',
          description: 'Hi there! So in this video I will be showing you guys how cool render layers are and how you can use them.',
          date: '1WK AGO'
        },
        stats: {
          likes: '12K',
          dislikes: '2K',
          shared: '2K',
          views: '100K'
        },
        channel: {
          name: 'Channel',
          subscribers: '1.2M',
          photo: profile_pic
        }
      }}
      poster={'http://localhost:5000/thumbnails/' + props.match.params.id}
      recommended={[
        {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
        {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
        {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
        {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail},
        {title: 'Incredible Title',creator: 'Creator', views: '100K', date: '1WEEK AGO', thumbnail: trending_thumbnail}
      ]}
      comments = {[
        {user: {name: 'Panagiotis', photo: profile_pic}, likes: '2K', dislikes: '100', content: 'Amazing video'},
        {user: {name: 'Panagiotis', photo: profile_pic}, likes: '2K', dislikes: '100', content: 'Amazing video'},
        {user: {name: 'Panagiotis', photo: profile_pic}, likes: '2K', dislikes: '100', content: 'Amazing video'},
        {user: {name: 'Panagiotis', photo: profile_pic}, likes: '2K', dislikes: '100', content: 'Amazing video'}
      ]}
    />
  );
}

export default Theater;