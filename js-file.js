const container = document.querySelector('.section-free-text');


//1. a <p> with red text that says “Hey I’m red!”
const redText = document.createElement('p');

redText.classList.add('content');
redText.style.color = 'red';   
redText.textContent = 'Hey I\'m red!';
container.appendChild(redText);

//2. an <h3> with blue text that says “I’m a blue h3!”
const blueTitle = document.createElement('h3')
blueTitle.style.color = 'blue';   
blueTitle.textContent = 'I\'m a blue h3!';
container.appendChild(blueTitle);

//3. a <div> with a black border and pink background color 
//   with the following elements inside of it:
const newDivContainer = document.createElement('div');
newDivContainer.classList.add('new-div');
newDivContainer.style.cssText = 'border-style: solid; background: pink;';
container.appendChild(newDivContainer);

//a. another <h1> that says “I’m in a div”
document.querySelector('.new-div');
newDivContainerH1 = document.createElement('h1');
newDivContainerH1.textContent = 'I\'m in a div';
newDivContainer.appendChild(newDivContainerH1);

//b. a <p> that says “ME TOO!”
newDivContainerP = document.createElement('p');
newDivContainerP.textContent = 'ME TOO!';
newDivContainer.appendChild(newDivContainerP);


//button id=btn
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello World");


function alertFunction(e) {
    document.querySelector('.new-div');
    newDivContainerButton = document.createElement('p');
    newDivContainerButton.textContent = e;
    newDivContainer.appendChild(newDivContainerButton);

  }
const btn = document.querySelector('#btn')

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });