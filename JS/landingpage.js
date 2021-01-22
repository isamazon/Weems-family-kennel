"use strict";

//  Object to contain all the landing page elements
const landingPage = {
  page1: document.querySelector(".page1"),
  page2: document.querySelector(".page2"),
  page3: document.querySelector(".page3"),
  recipeBtn: document.getElementById("recipebtn"),
  locationBtn: document.getElementById("locationbtn"),
  guranteeBtn: document.getElementById("guranteebtn"),
  contactBtn: document.getElementById("contactbtn"),
  scrollUp1: document.getElementById("scrollUp"),
  scrollDown1: document.getElementById("scrollDown"),
  scrollUp2: document.getElementById("scrollUp2"),
  scrollDown2: document.getElementById("scrollDown2"),
};

// On Click functions for all the page1 buttons
// Scroll into view recipe
landingPage.recipeBtn.addEventListener("click", () => {
  landingPage.page2.scrollIntoView({ behavior: "smooth", block: "center" });
});
// Scroll into view location
landingPage.locationBtn.addEventListener("click", () => {
  landingPage.page3.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Create a onclick function to scroll up and below page2
landingPage.scrollUp1.addEventListener("click", () => {
  landingPage.page1.scrollIntoView({ behavior: "smooth", block: "center" });
});
// Scroll down to page 3 function
landingPage.scrollDown1.addEventListener("click", () => {
  landingPage.page3.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Create a onclick function to scroll up and below page3
// Scroll up button to page 2
landingPage.scrollUp2.addEventListener("click", () => {
  landingPage.page2.scrollIntoView({ behavior: "smooth", block: "center" });
});
