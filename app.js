const bgImages = [
  './images/bg2.jpg',
  './images/bg/pizza-1442945_1920.jpg',
  './images/bg/pizza-1317699_1920.jpg',
  './images/bg/pizza-bg.jpg'
]
const bgImage = document.querySelector('section.background div.bgImage img');
let counter = 0;
setInterval(() => {
  console.log(counter);
  bgImage.src = bgImages[counter];
  counter++;
  if(counter>=bgImages.length){
    counter=0;
  }
}, 3000);
