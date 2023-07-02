/** @format */

"use strict";

const hasDisclaimerAccepted = localStorage.getItem("disclaimerAccepted");

// If the user has not accepted the timeliness disclaimer, show the pop-up
if (!hasDisclaimerAccepted) {
  document.getElementById("disclaimer-popup").style.display = "block";
}

// Function to handle timeliness disclaimer acceptance
function acceptDisclaimer() {
  localStorage.setItem("disclaimerAccepted", true);
  document.getElementById("disclaimer-popup").style.display = "none";
}

// Add event listener to the accept button
document
  .getElementById("disclaimer-accept")
  .addEventListener("click", acceptDisclaimer);
