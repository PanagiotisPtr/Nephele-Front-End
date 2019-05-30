var toggle = false;
var cache = {};

function onMobile(){
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function fadeIn(element) {
  element.style.opacity = '0';
  element.style.display = 'inline';
  element.style.opacity = '1';
}

function fadeOut(element, delay) {
  element.style.opacity = '0';
  setTimeout(function(){
    element.style.display = 'none';
  }, delay);
}

function toggleSignup(){
  var verify = document.getElementById('verify-password');
  var username = document.getElementById('username-field');
  var title = document.getElementById('title');
  var forgot = document.getElementById('forgot-password');
  if(!toggle) {
    cache['username'] = username.style.marginTop;
    cache['title-top'] = title.style.marginTop;
    cache['title-bot'] = title.style.marginTop;
    username.style.marginTop = '2vh';
    fadeOut(forgot, 500);
    if(onMobile()){
      title.style.marginTop = '4.1vh';
      title.style.marginBottom = '4.2vh';
    }else{
      title.style.marginBottom = '1vw'
    }
    setTimeout(function(){
      fadeIn(username);
      fadeIn(verify);
    }, 250);
  } else {
    fadeOut(verify, 250);
    fadeOut(username, 500);
    setTimeout(function(){
      username.style.marginTop = cache['username'];
      title.style.marginTop = cache['title-top'];
      title.style.marginBottom = cache['title-bot'];
      forgot.style.opacity = '1';
      forgot.style.display = 'inline';
    }, 250)
  }
  toggle = !toggle;
}