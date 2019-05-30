import React,  { useState } from 'react';
import './Authentication.scss';

import { Link } from 'react-router-dom';

const validEmail = email => /\S+@\S+\.\S+/.test(email);

const SignUp = _ => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');

  const sendUserData = _ => {
    if(password !== verify){
      alert('passwords don\'t match');
    } else if(!validEmail(email)){
      alert('Invalid email adress');
    } else {
      fetch('http://localhost:4000/users', {
      method: 'POST',
      body: JSON.stringify({
        username: username,
        email: email,
        password: password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(response => {
      alert('Success! Welcome to Nepehele!');
      console.log('Success:', JSON.stringify(response));
    })
    .catch(error => {
      alert('Unable to create user account');
      console.error('Error:', error);
    });
    }
  }

  return (
  <div className='row-container centered-container'>
  <div className='col-container centered-container' style={{height: '100vh'}}>
    <div className='card col-container'>
      <div id='title' className='title center' style={{marginBottom: '0vh'}}>Welcome!</div>

      <div id='username-field' className='text-input' style={{transition: 'all 0.5s ease'}}>
        <div className='col-container'>
          <div className='input-label'>Username</div>
          <input type='text' onChange={event => setUsername(event.target.value)}/>
        </div>
      </div>

      <div id='email-field' className='text-input' style={{marginTop: '5vh'}}>
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

      <div id='verify-password' className='text-input' style={{marginTop: '5vh', transition: 'all 0.5s ease'}}>
        <div className='col-container'>
          <div className='input-label'>Verify Password</div>
          <input type='password' onChange={event => setVerify(event.target.value)}/>
        </div>
      </div>

      <div className='btn-stack'>
        <div onClick={sendUserData} className='clickable col-container btn-snd big-btn'>
          <div className='row-container' style={{justifyContent: 'center'}}>
            <div>Sign Up</div>
          </div>
        </div>

        <Link to='/login'>
        <div className='clickable col-container btn-main big-btn'>
          <div className='row-container' style={{justifyContent: 'center'}}>
            <div>Log In</div>
          </div>
        </div> 
        </Link>
      </div>
      
    </div>
  </div>
  </div>);
}

export default SignUp;