// bring in from the DOM
const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

// represents whichever one is active; set to 1 by default
let currentActive = 1;

//take next button, add event listener, when it clicks
//run a function
next.addEventListener("click", () => {
  //take whatever currentActive is at the time and increment by 1
  currentActive++;

  //don't want it to go past number 4
  //if currentActive is greater than circles.length (the amount of circles) then set currentActive to whatever the length of circles is
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  console.log(currentActive);
});
