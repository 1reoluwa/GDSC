
function appendHeader(){

  var container=document.getElementById('container');

  var newHeader=document.createElement('h1');

  newHeader.textContent="My first header"

  container.appendChild(newHeader);
}



function changeContent(){

  var element=document.getElementById('h1');

  element.innerHTML='<p> My paragraphy</p>';

  element.textContent='Welcome back'
}



function removeContent(){

  var container=document.getElementById('container')

  var element=document.getElementById('h1')

  container.removeChild('h1');
}

