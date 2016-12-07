"use strict"

var brgrMenu = document.querySelectorAll(".brgr-menu")[0];
var menu = document.querySelectorAll(".menu")[0];
var stick1 = document.querySelectorAll(".stick-1")[0];
var stick2 = document.querySelectorAll(".stick-2")[0];
var stick3 = document.querySelectorAll(".stick-3")[0];
var count = 0;

brgrMenu.onclick = function(){
	count++;

	if(count%2==0) {
		menu.style.display = "none";
		stick1.style.transform = "none";
		stick2.style.display = "block";
		stick3.style.transform = "none";
		count = 0;
	} else {
		menu.style.display = "block";
		menu.style.backgroundColor = "rgba(255, 255, 255, 0.8)";
		stick1.style.transform = "rotate(45deg) translateY(-4.5px) translateX(5px)";
		stick2.style.display = "none";
		stick3.style.transform = "rotate(-45deg) translateX(4.5px) translateY(4.5px)";
	}
}



