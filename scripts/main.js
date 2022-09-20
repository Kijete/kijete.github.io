const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/chat-persan.jpg') {
    myImage.setAttribute('src','images/chat-persan2.jpg');
  } else {
    myImage.setAttribute('src','images/chat-persan.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  const myName = prompt('Entrez votre nom.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Allo ${myName}!`;
  }
}
if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Allo ${storedName}!`;
}
myButton.onclick = () => {
  setUserName();
}
