let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/trees.png') {
      myImage.setAttribute('src','images/bgp2.png');
    } else {
      myImage.setAttribute('src','images/trees.png');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Benvingut, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
    } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}

let valor = localStorage.length;
alert(valor);

//localStorage.clear();