function openFunction(){
    document.getElementById("menu").style.width="300px";
    document.getElementById("mainbox").style.marginLeft="300px";
    document.getElementById("mainbox").innerHTML="Click on Cross Element and Close Menu";
   }
  function closeFunction(){
   document.getElementById("menu").style.width="0px";
   document.getElementById("mainbox").style.marginLeft="0px";
   document.getElementById("mainbox").innerHTML="&#9776; Open";
  }











  <div class="callInfo" id="info">
  <img class="phoneIcon" src="../CSS/pics/mobile-phone.png">
  <h1 class="contactUs">Contact us</h1>
  <p class="contactUsInfo">
      Please call or text 575-309-5571 my husband is doing better; thank you to everyone that have had us in yours prayers a special Thank You.<br>
      Chris: <a class="phoneNum" href="tel:575-309-5571">575-218-0061</a><br>
      <span class="importantRed">(No Text Messages to Chris' phone Please!!!)</span> if Chris does not answer call<br> 
      Janice: at <a class="phoneNum" href="tel:575-309-5571">575-309-5571</a><br> 
      ( You can send text messages to Janice's number) <span class="importantRed">No Text Messages After 9:30 P.M.</span>
  </p>
</div>

<div class="ourGurantee" id="info">
  <img class="checkMark" src="../CSS/pics/checked-symbol.png">
  <h1 class="ourGuranteeH1">Our guarantee:</h1>
  <p class="guranteeP">
      It is limited to the price of the puppy.    If you return the puppy within 24 hours a full refund is given.
      If a puppy get sick within 3 days depending on the situation a full refund is given.We shall under no circumstances be responsible or liable for any expenses incurred without a written consent. In other words if you choose to take a sick puppy to a Vet instead of bringing it back to us, the expense is yours.
      If you expose your puppy to a lot of people, like going to a birthday party the first day, we will not guarantee the puppy. If you go on vacation or take puppy on a truck ride before it is acclimated to it's new home there will be NO GUARANTTEE. Please limit the first few days, remember that this puppy is a baby and needs to be treated as such.
      If for any reason in the future, you decide you do not want the dog anymore, we will rescue the dog at our home in Portales, N.M. Just call us and let us know you are bringing the dog back. 
  </p>
</div>






/* Contact us */
.callInfo {
	position: relative;
	left: 0px;
	bottom: 3px;

}
.phoneIcon {
	position: relative;
	width: 100px;
	height: 100px;
	left: 165px;
}
.contactUs {
	position: relative;
	left: 20px;
	letter-spacing: 20px;
	font-size:3.0em;
	
}
.contactUsInfo {
	font-size: 1.20em;
	text-align: center;
	max-width: 400px;
	max-height: 400px;
	padding: 30px 15px 30px 15px;
	border: 5px solid white;
	background-color: black;
	color: #c5c6c7;
	text-align: center;
	line-height: 40px;
	overflow-y: scroll;
}
.contactUsInfo::-webkit-scrollbar {
	width: 20px;
	height: 0px;
}
.contactUsInfo::-webkit-scrollbar-thumb {
	background-color: linear-gradient(106deg, rgba(255,255,255,1) 0%, rgba(137,137,137,1) 35%, rgba(0,0,0,1) 55%);
	border-radius: 6px;
}
.contactUsInfo::-webkit-scrollbar-thumb:hover {
	background-color: #2c828b;
	transition-duration: 3s;
}
.phoneNum {
	color: white;
}
.phoneNum:hover {
	color: rgba(0,244,241,1);
}



/* Our gurantee */ 
.ourGurantee {
	position: relative;
	left: 200px;
	top: 30px;
}
.checkMark {
	position: relative;
	width: 100px;
	height: 100px;
	left: 165px;
}
.ourGuranteeH1 {
	position: relative;
	left: 20px;
	letter-spacing: 10px;
	font-size:2.5em;
}
.guranteeP {
	font-size: 1.20em;
	text-align: center;
	max-width: 400px;
	max-height: 400px;
	padding: 30px 15px 30px 15px;
	border: 5px solid white;
	background-color: black;
	color: #c5c6c7;
	text-align: center;
	line-height: 40px;
	overflow-y: scroll;
}
