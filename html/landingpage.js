"use strict";

//  Object to contain all the landing page elements
const landingPage = {
  page1: document.querySelector(".page1"),
  page2: document.querySelector(".page2"),
  recipeBtn: document.getElementById("recipebtn"),
  locationBtn: document.getElementById("locationbtn"),
  guranteeBtn: document.getElementById("guranteebtn"),
  contactBtn: document.getElementById("contactbtn"),
};

// Create an onclick function for the Recipe button to scroll to page2
landingPage.recipeBtn.addEventListener("click", () => {
  console.log("works");
  page1.scrollIntoView({ behavior: "smooth", block: "center" });
});
