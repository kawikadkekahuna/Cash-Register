'use strict';

var display = document.getElementById('display');
var btn1 = document.getElementById('1');
	btn1.addEventListener('click',function(){
		display.innerHTML += btn1.id;
	})
var btn2 = document.getElementById('2');

var btn3 = document.getElementById('3');
var btn4 = document.getElementById('4');
var btn5 = document.getElementById('5');
var btn6 = document.getElementById('6');
var btn7 = document.getElementById('7');
var btn8 = document.getElementById('8');
var btn9 = document.getElementById('9');
var btn0 = document.getElementById('0');
var btndec = document.getElementById('btndec');
var btn00 = document.getElementById('00');

var btn = function(num){
	this.id = document.getElementById('' + num);
}

var btn1 = new btn();

console.log(btn1.id);