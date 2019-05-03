import React from 'react';
import './SideNav.scss';

// Images
import logo from '../images/logo.png';

const UserStats = props =>
  <div className='profile col-container'>
  <img src={props.profilePicture} alt={props.username}/>
  <div className='username'>{props.username}</div>
  <div className='location'>{props.location}</div>

  <div className='row-container stats'>
    <div className='item col-container' style={{alignItems: 'center'}}>
      <div className='number'>{props.videos}</div>
      <div className='name'>VIDEOS</div>
    </div>

    <div className='item col-container'  style={{alignItems: 'center'}}>
      <div className='number'>{props.subscribers}</div>
      <div className='name'>SUBSCRIBERS</div>
    </div>
  </div>
  </div>;

const Separator = ({width, margin}) => 
  <div className='separator' style={{
    width: width,
    marginTop: margin,
    marginBottom: margin}}>
  </div>;

const MenuItem = ({icon, name, notification, selected}) => 
  <div className='option row-container' style={{marginBottom: '0'}}>
    {selected 
      ? <div className='selected'></div> 
      : <div  className='selected' style={{background: 'rgb(248,248,248)'}}></div>
    }
    <i className={'fas ' + icon}></i>
    <div className='name'>{name}</div>
    <div className='notification'>{notification}</div>
  </div>;

const SideNav = props =>
  <aside className='navbar col-container'>
              
  {/* Nephele Logo */}
  <img className='logo' src={logo} alt='Nephele Logo'/>

  {/* User Infomation */}
  <UserStats
    username={props.username}
    location={props.location}
    videos={props.videos}
    subscribers={props.subscribers}
    profilePicture={props.profilePicture}
  />

  {/* Menu */}
  {props.options.map(menu => 
    <div className='menu col-container'>
        <Separator width='80%' margin='5%'/>
        {menu.map(item =>
          <MenuItem
          icon={item.icon}
          name={item.name}
          notification={item.notification}
          selected={item.selected}
          />
        )}
    </div>
  )}

  <div style={{height: '22.5%'}}></div>

  <div className='logout'>Logout</div>
  <div className='copyright'>@2019 Panagiotis Petridis</div>

  </aside>;

export default SideNav;