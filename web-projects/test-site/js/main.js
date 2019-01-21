var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/blue-marble.png') {
      myImage.setAttribute('src', 'img/dark_deer.png');
    } else {
      myImage.setAttribute('src', 'img/blue-marble.png');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Welcome to My Web, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to My Web, ' + storedName;
}
myButton.onclick()=function(){
	setUserName();
}