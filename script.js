// let quotes = [
//   `I live my life a quarter mile at a time`,
//   `I said a ten-second car, not a ten-minute car`,
//   `You can have any brew you want... as long as it's a Corona.`,
//   `You almost had me? You never had me - you never had your car!`,
//   `I don't have friends. I have family.`,
//   `It don't matter if you win by an inch or a mile. Winning's winning.`,
// ];

window.onload =  function(event) {
  
  // Random quote of the day generator
  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').textContent = `"${
  //     quotes[Math.floor(Math.random() * quotes.length)]
  //   }"`;
  // };
  // randomQuote();

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1
  // DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-title ID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.
   function titleChange (){
    document.querySelector('#main-title').textContent = 'Hello, Im Dom and I drive fast cars!';
   }
  
   titleChange();






  // Part 2
  // Select the body and change the background-color to a new color of your choice.

function changeBckBodycolor () {
  document.querySelector('body').style.backgroundColor = 'grey'
}
   changeBckBodycolor();

  // Part 3
// Select DOM's Favorite Things list and remove the last list item.
const favoriteThings = () => {
  const favoriteThings = document.getElementById('favorite-things')
     favoriteThings.removeChild(favoriteThings.lastElementChild)
}

favoriteThings();








  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements
const changeFontSize = () => {
  const specialTitle = document.querySelectorAll('.special-title')

  for( let i = 0; i < specialTitle.length; i++) {
    specialTitle[i].style.fontSize = '2rem'
  }
}
changeFontSize();






  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
const removeRace = function() {
   const pastRace = document.getElementById('past-races')
   pastRace.removeChild(pastRace.children[3])
   return pastRace
}

removeRace(); 
  // Part 6

const addNewLi = function () {
const ew = document.getElementById('past-races')
const newLi = document.createElement('li')
newLi.textContent = 'Atlanta';
ew.appendChild(newLi)
}
addNewLi();








  // Part 7

function blogPost () {
  const newDiv = document.createElement('div');
  newDiv.classList.add('blog-post')

  const newH1 = document.createElement('h1');
  newH1.innerText = 'Atlanta';
  newDiv.appendChild(newH1);
  
const para = document.createElement('p')
para.innerText = 'Those skyscrappers were cool';
newDiv.appendChild(para);

document.querySelector('.main').appendChild(newDiv)


blogPost();
}












  }



