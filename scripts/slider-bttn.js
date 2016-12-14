"use strict";
var sliderBttn = document.querySelectorAll(".slider-bttn__button");
var sliderItmBttn = document.querySelectorAll(".slider-bttn__item");
var slideInnrBx = document.querySelectorAll(".slider-bttn__inner-box");
var slideWidthBttn;
var currBttn;

setOnclickEvent();

//set 'onclick' event for every slider's button
function setOnclickEvent(){
	for(var i = 0; i < sliderBttn.length; i++){
		sliderBttn[i].setAttribute("onclick","chsSlide("+i+")");
	}
	sliderBttn[0].classList.add("slider-bttn__button_sel");
}

function chsSlide(i){
	currBttn = i; //currBttnent slide (currBttnent selected button)
	slideWidthBttn = sliderItmBttn[0].offsetWidth; //width of  first slide (all slides have common width)
	sliderItmBttn[0].style.marginLeft = currBttn * (-slideWidthBttn) + "px"; //left margin for first slide
	
	for(var i = 0; i < sliderItmBttn.length; i++){
		sliderBttn[i].classList.remove("slider-bttn__button_sel"); //transparent background for button of unselected slides
	}
	sliderBttn[currBttn].classList.add("slider-bttn__button_sel"); //backgrond color for button of selected slide
}

window.addEventListener("resize", resizeFunction);
	
function resizeFunction (){
	slideWidthBttn = sliderItmBttn[0].offsetWidth;//width of  first slide (all slides have common width) after resize of the window
	sliderItmBttn[0].style.marginLeft = currBttn * (-slideWidthBttn) + "px";//left margin for first slide after resize of the window
}