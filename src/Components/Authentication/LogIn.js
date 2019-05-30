import React,  { useState } from 'react';
import './Authentication.scss';

import { Link } from 'react-router-dom';

const validUser = async({email, password}) => {
  const res = await fetch(`http://localhost:4000/users/validate/${email}/${password}`).then(res => res.json());
  console.log(res);
  return res.status == 'success' && res.data.length == 1;
}

const LogIn = _ => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticateUser = _ => {
    if(validUser(email, password))
      alert('successfully logged in');
    else
      alert('Invalid credentials');
  }

  return (
  <div className='row-container centered-container'>
  <div className='col-container centered-container' style={{height: '100vh'}}>
    <div className='card col-container'>
      <div id='title' className='title center'>Welcome!</div>

      <div id='email-field' className='text-input'>
        <div className='col-container'>
          <div className='input-label'>Email</div>
          <input type='email' onChange={event => setEmail(event.target.value)}/>
        </div>
      </div>

      <div className='text-input' style={{marginTop: '5vh'}}>
        <div className='col-container'>
          <div className='input-label'>Password</div>
          <input type='password' onChange={event => setPassword(event.target.value)}/>
        </div>
      </div>

      <div id='forgot-password' className='text-input' style={{marginTop: '1vh', transition: 'all 0.5s ease'}}>
        <div className='col-container'>
            <b className='clickable'>Forgot password?</b>
        </div>
      </div>

      <div className='btn-stack'>
        <Link to='/signup'>
        <div className='clickable col-container btn-snd big-btn'>
          <div className='row-container' style={{justifyContent: 'center'}}>
            <div>Sign Up</div>
          </div>
        </div>
        </Link>

        <div onClick={authenticateUser} className='clickable col-container btn-main big-btn'>
          <div className='row-container' style={{justifyContent: 'center'}}>
            <div>Log In</div>
          </div>
        </div> 
      </div>
      
    </div>
  </div>
  </div>);
}

export default LogIn;