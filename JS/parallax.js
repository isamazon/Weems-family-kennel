const parallax = document.getElementByid('parallax');

window.addEventListener("scroll", function ()
{
	let offset = window.pageYOffset;
	parallax.style.backgrounfPosistionY = offset * 0.7 + "px";
})