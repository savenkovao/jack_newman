"use strict";

var sldrArrwLft = document.querySelectorAll(".slider-arrw_arrow-left");
var sldrArrwRght = document.querySelectorAll(".slider-arrw_arrow-right");
var sliderItm_arrw = document.querySelectorAll(".slider-arrw__item");
var slideWidthArr;
var curr = 0;

setOnclickEvent();

function setOnclickEvent(){	
	sldrArrwLft[0].setAttribute("onclick","browseLeft()");
	sldrArrwRght[0].setAttribute("onclick","browseRight()");
	slideWidthArr = sliderItm_arrw[0].offsetWidth; //width of  first slide (all slides have common width)
	arrBlock();
}

function browseLeft (){
	curr --;
	if(curr<=0) {curr=0;} 
	arrBlock();
	sliderItm_arrw[0].style.marginLeft = curr * (-slideWidthArr) + "px"; //left margin for first slide
}

function browseRight (){
	curr ++;
	if(curr>sliderItm_arrw.length-1) {curr = sliderItm_arrw.length-1;}
	arrBlock();
	sliderItm_arrw[0].style.marginLeft = curr * (-slideWidthArr) + "px"; //left margin for first slide
}

function arrBlock(){
	if(curr<=0) {
		sldrArrwLft[0].style.display = "none";
	} else {
		sldrArrwLft[0].style.display = "block";
	}

	if(curr>=sliderItm_arrw.length-1) {
		sldrArrwRght[0].style.display = "none";
	} else {
		sldrArrwRght[0].style.display = "block";
	}
}

window.addEventListener("resize", resizeFunction);
	
function resizeFunction (){
	slideWidthArr = sliderItm_arrw[0].offsetWidth;//width of  first slide (all slides have common width) after resize of the window
	sliderItm_arrw[0].style.marginLeft = curr * (-slideWidthArr) + "px";//left margin for first slide after resize of the window
}


