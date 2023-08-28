/** @format */

"use strict";

// Show the pop-up when the page loads
document.getElementById("disclaimer-popup").style.display = "block";

// Function to hide timeliness disclaimer upon acceptance
function acceptDisclaimer() {
  document.getElementById("disclaimer-popup").style.display = "none";
}

// Add event listener to the accept button
document
  .getElementById("disclaimer-accept")
  .addEventListener("click", acceptDisclaimer);
