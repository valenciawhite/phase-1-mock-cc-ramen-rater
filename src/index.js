// write Core Deliverables

/* As a user, I can:

- See all ramen images in the `div` with the id of `ramen-menu`. When the page
  loads, request the data from the server to get all the ramen objects. Then,
  display the image for each of the ramen using an `img` tag inside the
  `#ramen-menu` div.
- Click on an image from the `#ramen-menu` div and see all the info about that
  ramen displayed inside the `#ramen-detail` div and where it says
  `insert comment here` and `insert rating here`.
- Create a new ramen after submitting the `new-ramen` form. The new ramen should
  be added to the`#ramen-menu` div. The new ramen does not need to persist; in
  other words, if you refresh the page, it's okay that the new ramen is no
  longer on the page.e your code here 

  const ramenMenu = document.getElementById('ramen-menu')
  const ramenURL = "http://localhost:3000"

  fetch("http://localhost:3000/ramens")
  .then(response => response.json())
  .then(data => renderRamenImg(data))

  function renderRamenImg(ramenArray){
      const ramenImg = document.createElement('img')
      ramenMenu.appendChild(ramenImg)

      ramenArray.forEach(ramenElement => newFunction(ramenElement) )
  }


  function newFunction(ramenElementParameter){
      //debugger
      const ramenImg = document.createElement('img')
      ramenImg.src = ramenElementParameter.image;
      ramenMenu.appendChild(ramenImg)

  ramenImg.addEventListener('click, () => {
      console.log('Hello')
    });
*/


// DOM elements I will need. 
const ramenMenu = document.getElementById('ramen-menu');
const ramenDetails = document.getElementById('ramen-detail');
const ramenForm = document.getElementById('ramen-form');

// A function to display ramen menu images 
const baseURL = 'http://localhost:3000/ramens'

    fetch(baseURL).then(results => results.json()).then(data => ramenData(data)

 const ramenData = (ramenArray) => {
    // For each tag and add eventListener. 
      ramenArray.forEach(element => {
    // Creating DOM element for ramen image.
        const newRamen = document.createNewElement('img');
        newImage.addEventListener('click', renderImage(element))
    // Add the ramen menu 
    ramenMenu.appendChild(element);
      });
      
    // Add eventListener to image. 

  }


