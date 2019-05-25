import React from 'react';
import './TopBar.scss';

const Icon = ({icon, active}) => <i className={(active ? 'active ' : '') + 'fas '+ icon}></i>;

const SearchBar = _ =>
  <div className='search-bar'>
    <input type='search' placeholder='Search'/>
    <i className='fas fa-search'></i>
  </div>;

const TopBar = props => 
  <div className='top-bar'>
    <SearchBar/>
    {/* Right-Side icons */}
    <div className='side-icons'>
      {props.icons.map((icon, index) => 
        <Icon icon={icon} active={props.active === index}/>
      )}
    </div>
  </div>;

export default TopBar;