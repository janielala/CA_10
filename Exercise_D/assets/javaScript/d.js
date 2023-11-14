/**********************************************
 * Changing Website
 * ==================================
 ***********************************************/
/** # Once the user hovers over the 4 icons, they should increase in size by 40%, 
 * once the users mouse leaves the icons their size should decrease to normal 
 * again
 * Make the Learn More button clickable. Once the user clicks on it:
 * Remove the black overlay so that we can see the flowers clearly.
 * Change the title from ‘beautiful flowers’ to ‘welcome to my flower shop’, 
 * give the text a background and change the color to blue.
 * Change the text of the button from ‘learn more’ to ‘buy flowers’, change 
 * the background color to red.
 * Additionally to this, create an element which is hidden when the user 
 * first loads the page, but when the button is pressed revel the element, 
 * this element should contain at least two images of flower arrangements 
 * and the prices for them. #
/*  ====================== */
/**  */

let counter = 0;
document.getElementById("learn-more").addEventListener("click", function () {
  //select learn-more by id, assign event listener -- this is what you do on this event
  if (counter === 0) {
    // remove overlay
    // change the header
    //select title
    //change text using innerHTML
    //change styling
    // change the button style
    // uncover hidden element
    // handle counter
  } else {
    // put overlay back
    // hide hidden element
    // toggle the button using a counter
    // change the title back to the original
    //change the button back to the beginning
  }
});

// Change icon size on hover
// select all icons by class

for (let icon of icons) {
  icon.addEventListener("mouseenter", function () {
    //add event listener for each icon when the mouse enters do this
    //get larger
  });
  icon.addEventListener("mouseleave", function () {
    //when mouse leaves do this
    //make the icons smaller
  });
}

let secondButtons = document.getElementsByClassName("hidden-button");

for (let button of secondButtons) {
  // CODE HERE
}
