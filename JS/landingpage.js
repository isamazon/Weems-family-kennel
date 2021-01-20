"use strict";

//  Object to contain all the landing page elements
const landingPage = {
  page1: document.querySelector(".page1"),
  page2: document.querySelector(".page2"),
  recipeBtn: document.getElementById("recipebtn"),
  locationBtn: document.getElementById("locationbtn"),
  guranteeBtn: document.getElementById("guranteebtn"),
  contactBtn: document.getElementById("contactbtn"),
  scrollUp1: document.getElementById("scrollUp"),
  scrollDown1: document.getElementById("scrollDown"),
};

// Create an onclick function for the Recipe button to scroll to page2
landingPage.recipeBtn.addEventListener("click", () => {
  landingPage.page2.scrollIntoView({ behavior: "smooth", block: "center" });
});

// Create a onclick function to scroll up and below page2
landingPage.scrollUp1.addEventListener("click", () => {
  landingPage.page1.scrollIntoView({ behavior: "smooth", block: "center" });
});
