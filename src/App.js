import React, { Component } from 'react';
import './App.scss';
import logo from './images/logo.png';
import profile_pic from './images/profile_pic.png';
import trending_thumbnail from './images/trending_thumbnail.jpg';
import trending_creator from './images/trending_creator.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="navbar col-container">
          
          <div className="logo">
            <img src={logo} alt="logo"/>
          </div>

          <div className="profile col-container">
            <img src={profile_pic} alt="profile-pic"/>
            <div className="username">Panagiotis Petridis</div>
            <div className="location">Nottingham, UK</div>

            <div className="row-container stats">
              <div className="item col-container">
                <div className="thic" style={{alignSelf: "center"}}>122</div>
                <div className="fade" style={{alignSelf: "center"}}>VIDEOS</div>
              </div>

              <div className="item col-container">
                <div className="thic" style={{alignSelf: "center"}}>2M</div>
                <div className="fade" style={{alignSelf: "center"}}>SUBSCRIBERS</div>
              </div>
            </div>
          </div>

            <div className="separator"></div>

            <div className="menu col-container">
              
              <div className="option row-container">
                <div className="status"></div>
                <i className="fas fa-video"></i>
                <div className="name">Videos</div>
              </div>

              <div className="option row-container">
                <div className="status" style={{background: "rgb(248,248,248)"}}></div>
                <i className="fas fa-film"></i>
                <div className="name">Movies & Shows</div>
              </div>

              <div className="option row-container" style={{marginBottom: "0"}}>
                <div className="status" style={{background: "rgb(248,248,248)"}}></div>
                <i className="fas fa-donate"></i>
                <div className="name">Premium</div>
              </div>

            </div>

            <div className="separator"></div>

            <div className="menu col-container">
              <div className="option row-container">
                <div className="status" style={{background: "rgb(248,248,248)"}}></div>
                <i className="fas fa-bookmark"></i>
                <div className="name">Subscriptions</div>
                <div className="notification"><span className="num">4</span> new</div>
              </div>

              <div className="option row-container">
                <div className="status" style={{background: "rgb(248,248,248)"}}></div>
                <i className="fas fa-list"></i>
                <div className="name">Library</div>
              </div>

              <div className="option row-container">
                <div className="status" style={{background: "rgb(248,248,248)"}}></div>
                <i className="far fa-thumbs-up"></i>
                <div className="name">Liked Videos</div>
              </div>

              <div className="option row-container" style={{marginBottom: "0"}}>
                <div className="status" style={{background: "rgb(248,248,248)"}}></div>
                <i className="fas fa-clock"></i>
                <div className="name">Watch Later</div>
              </div>
            </div>

            <div className="separator"></div>

            <div className="menu col-container">
              <div className="option row-container">
                <div className="status" style={{background: "rgb(248,248,248)"}}></div>
                <i className="fas fa-sliders-h"></i>
                <div className="name">Settings</div>
                <div className="notification"><span className="num"></span></div>
              </div>

              <div className="option row-container" style={{marginBottom: "0"}}>
                <div className="status" style={{background: "rgb(248,248,248)"}}></div>
                <i className="fas fa-user"></i>
                <div className="name">Help & Report</div>
              </div>
            </div>

            <div style={{height: "15vh"}}></div>

            <div className="logout">Logout</div>
            <div className="copyright">@2019 Panagiotis Petridis</div>

        </div>


        <div className="main" style={{background: 'grey'}}>
          
          <div className="top-bar">

            <div style={{width: '65vh'}}></div>

            <div className="search-bar">
              <i className="fas fa-search"></i>
              <input type="search" placeholder="Search"></input>
            </div>
            
            <div style={{width: '45vh'}}></div>

            <div className="side-icons">
              <i className="fas fa-plus-circle"></i>
              <i className="fas fa-bell"></i>
              <i className="fas fa-user-circle"></i>
            </div>

          </div>
          
          <div className="row-container">
            <div className="content" style={{background: 'white'}}><div className="placeholder-text">content</div></div>

            <div className="side-info col-container">
              <div className="title">
                Trending
                <span className="extra">Show more</span>
              </div>

              <div className="trending-video">
                <img className="video" src={trending_thumbnail} alt='trending thumbnail'/>

                <div className="creator-name">Panagiotis Petridis</div>
                <div className="video-title">Render Layers in Blender</div>
                <div className="video-description">
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
