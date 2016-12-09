"use strict";
var sliderBttn = document.querySelectorAll(".slider-bttn_button");
var sliderItm = document.querySelectorAll(".slider-bttn__item");
var slideInnrBx = document.querySelectorAll(".slider-bttn__inner-box");
var slideWidth;
var curr;

setOnclickEvent();

function setOnclickEvent(){
	for(var i = 0; i < sliderBttn.length; i++){
		sliderBttn[i].setAttribute("onclick","chsSlide("+i+")");
		sliderItm[i].style.transition = "margin-left 0.3s linear";
	}

	sliderBttn[0].style.backgroundColor = "white";
}

function chsSlide(i){
	curr = i;
	slideWidth = sliderItm[0].offsetWidth;
	sliderItm[0].style.marginLeft = curr * (-slideWidth) + "px";
	
	for(var i = 0; i < sliderItm.length; i++){
		sliderBttn[i].style.backgroundColor = "transparent";
	}

	sliderBttn[curr].style.backgroundColor = "white";
}

window.addEventListener("resize", resizeFunction);
	
function resizeFunction (){
	slideWidth = sliderItm[0].offsetWidth;
	sliderItm[0].style.marginLeft = curr * (-slideWidth) + "px";
}