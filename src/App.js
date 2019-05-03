import React, { Component } from 'react';
import './App.scss';
import trending_thumbnail from './images/trending_thumbnail.jpg';

import SideNav from './Components/SideNav';

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
              { icon: 'fa-bookmark', name: 'Subscriptions', notification: '4 new'},
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

        <div className='main' style={{background: 'grey'}}>
          
          <div className='top-bar'>

            <div style={{width: '65vh'}}></div>

            <div className='search-bar'>
              <i className='fas fa-search'></i>
              <input type='search' placeholder='Search'></input>
            </div>
            
            <div style={{width: '45vh'}}></div>

            <div className='side-icons'>
              <i className='fas fa-plus-circle'></i>
              <i className='fas fa-bell'></i>
              <i className='fas fa-user-circle'></i>
            </div>

          </div>
          
          <div className='row-container'>
            <div className='content' style={{background: 'white'}}>
              <div className='col-container'>

                <div style={{flex: 8, background: 'white'}}>
                  <div className='row-container' style={{background: 'black', height: '100%'}}>
                    <div className='col-container' style={{flex: 3}}>

                      <div style={{flex: 4, background: 'white'}}>
                        <div className='col-container' style={{padding: '4vh'}}>
                          <div className='weekly-featured'>
                            Weekly Featured
                          </div>
                          <div className='featured-announcement-title' style={{paddingTop: '2vh'}}>
                            Summer is here!
                          </div>
                          <div className='featured-announcement-description' style={{paddingTop: '2vh'}}>
                            Spring is over, summer is here! Kick back, relax and watch your favorite creators!
                          </div>
                        </div>
                      </div>
                    
                      <div style={{flex: 3, background: 'white'}}>
                        <div className='row-container featured-carousel' style={{paddingLeft: '4vh'}}>

                          <div className='col-container' style={{paddingRight: '2vh'}}>
                            <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                            <div className='video-creator-name'>Creator</div>
                            <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>Incredible Title</div>
                            <div className='row-container' style={{paddingTop: '1vh'}}>
                              <div className='video-stats item'>VIEWS</div>
                              <div className='video-stats item'>6DS AGO</div>
                            </div>
                          </div>

                          <div className='col-container' style={{paddingRight: '2vh'}}>
                            <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                            <div className='video-creator-name'>Creator</div>
                            <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>Incredible Title</div>
                            <div className='row-container' style={{paddingTop: '1vh'}}>
                              <div className='video-stats item'>VIEWS</div>
                              <div className='video-stats item'>6DS AGO</div>
                            </div>
                          </div>

                          <div className='col-container' style={{paddingRight: '2vh'}}>
                            <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                            <div className='video-creator-name'>Creator</div>
                            <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>Incredible Title</div>
                            <div className='row-container' style={{paddingTop: '1vh'}}>
                              <div className='video-stats item'>VIEWS</div>
                              <div className='video-stats item'>6DS AGO</div>
                            </div>
                          </div>

                          <div className='col-container' style={{paddingRight: '2vh'}}>
                            <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                            <div className='video-creator-name'>Creator</div>
                            <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>Incredible Title</div>
                            <div className='row-container' style={{paddingTop: '1vh'}}>
                              <div className='video-stats item'>VIEWS</div>
                              <div className='video-stats item'>6DS AGO</div>
                            </div>
                          </div>

                        </div>
                      </div>
                    
                    </div>
                    
                    <div className='col-container featured-video' style={{flex: 2, background: 'white'}}>
                      <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                      <div className='col-container' style={{paddingTop: '1vh'}}>
                        <div className='video-creator-name'>Panagiotis Petridis</div>
                        <div className='video-title' style={{paddingTop: '1vh'}}>Render Layers in Blender</div>
                        <div className='video-description' style={{paddingTop: '1vh'}}>
                          Hi there! So in this video I will be
                          showing you guys how cool 
                          render layers are and how you can use them.
                        </div>
                        <div className='row-container' style={{paddingTop: '1vh'}}>
                          <div className='video-stats' style={{paddingRight: '6vh'}}>VIEWS 100K</div>
                          <div className='video-stats' style={{paddingRight: '6vh'}}>LIKES 101K</div>
                          <div className='video-stats' style={{paddingRight: '6vh'}}>1 WEEK AGO</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='separator' style={{marginTop: '4vh', width: '130vh', alignSelf: 'center'}}></div>
                
                <div style={{flex: 9, background: 'white'}}>
                    <div class='category-title' style={{marginLeft: '4vh', marginTop: '4vh'}}>Recommended</div>
                    <div className='row-container' style={{margin: '0vh 0vh 4vh 4vh', flexWrap: 'wrap'}}>

                      <div className='col-container feed' style={{marginTop: '4vh', paddingRight: '2vh'}}>
                        <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                        <div className='video-creator-name'>Creator</div>
                        <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>Incredible Title</div>
                        <div className='row-container' style={{paddingTop: '1.5vh'}}>
                          <div className='video-stats item'>VIEWS</div>
                          <div className='video-stats item'>6DS AGO</div>
                          <span className='item'/>
                        </div>
                      </div>

                      <div className='col-container feed' style={{marginTop: '4vh', paddingRight: '2vh'}}>
                        <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                        <div className='video-creator-name'>Creator</div>
                        <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>Incredible Title</div>
                        <div className='row-container' style={{paddingTop: '1.5vh'}}>
                          <div className='video-stats item'>VIEWS</div>
                          <div className='video-stats item'>6DS AGO</div>
                          <span className='item'/>
                        </div>
                      </div>

                      <div className='col-container feed' style={{marginTop: '4vh', paddingRight: '2vh'}}>
                        <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                        <div className='video-creator-name'>Creator</div>
                        <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>Incredible Title</div>
                        <div className='row-container' style={{paddingTop: '1.5vh'}}>
                          <div className='video-stats item'>VIEWS</div>
                          <div className='video-stats item'>6DS AGO</div>
                          <span className='item'/>
                        </div>
                      </div>

                      <div className='col-container feed' style={{marginTop: '4vh', paddingRight: '2vh'}}>
                        <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                        <div className='video-creator-name'>Creator</div>
                        <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>Incredible Title</div>
                        <div className='row-container' style={{paddingTop: '1.5vh'}}>
                          <div className='video-stats item'>VIEWS</div>
                          <div className='video-stats item'>6DS AGO</div>
                          <span className='item'/>
                        </div>
                      </div>

                      <div className='col-container feed' style={{marginTop: '4vh', paddingRight: '2vh'}}>
                        <img className='thumbnail' src={trending_thumbnail} alt='Title'/>
                        <div className='video-creator-name'>Creator</div>
                        <div className='video-title' style={{paddingTop: '1vh', fontSize: '1.6vh'}}>Incredible Title</div>
                        <div className='row-container' style={{paddingTop: '1.5vh'}}>
                          <div className='video-stats item'>VIEWS</div>
                          <div className='video-stats item'>6DS AGO</div>
                          <span className='item'/>
                        </div>
                      </div>

                    </div>
                </div>
              
              </div>
            </div>

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
