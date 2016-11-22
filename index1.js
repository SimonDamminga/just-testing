var lives = 3;
var count = 0;
var countdown = 10;
var roomenter = 0;
var key = false;
var pressed = false;
var start = document.getElementById('start');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
one.style.cssText = 'display: none;';
two.style.cssText = 'display: none;';
three.style.cssText = 'display: none;';
four.style.cssText = 'display: none;';
start.innerHTML = 'nog'+ countdown +' keer';	
one.innerHTML = 'Volgende';
one.style.cssText = 'display: block;';
function begin(){
	count++
	countdown--		
	if(count == 11){			

		two.style.cssText = 'display: block;';
		two.innerHTML = '<i class="fa fa-key" aria-hidden="true"></i>';
		alert('Pak de sleutel')
		start.style.cssText = 'display: none;';
		two.onclick = function sleutel(){
			key = true;
			pressed = true;
			alert('Je hebt de sleutel');
			one.setAttribute("onClick", "javascript:next();");
			if (pressed == true) {
				two.style.cssText = 'display: none;';
	
			}
		}
	}else if(countdown <= 0){
		start.innerHTML = 'Pak de sleutel';
	}
	else{
		start.innerHTML = 'nog ' + countdown  + ' keer';
	}
}
function next(){
	document.getElementById('body').style.cssText = 'background-image: url(space.jpg);';
	document.getElementById('titel').innerHTML = 'The Adventure of the....';
	alert('Nu begint pas echt de game')
	alert('Hij heet eigenlijk: ......')
	one.style.cssText = 'display: none;';
	start.style.cssText = 'display: block;';
	start.innerHTML = 'NEXT';
	start.setAttribute("onClick", "javascript:level1();");
}
function level1(){
	document.getElementById('titel').innerHTML = 'Space Cat';
	document.getElementById('body').style.cssText = 'background-image: url(cat.gif);';
	key = false;
	pressed = false;
	start.style.cssText = 'display: none;';
	one.style.cssText = 'display: block;';
	one.onclick = function substract(){
		lives--
	}
	two.style.cssText = 'display: block;';
	two.onclick = function substract2(){
		lives--
	}
	three.style.cssText = 'display: block;';
	three.onclick = function substract3(){
		lives--
	}
	four.style.cssText = 'display: block;';
	four.onclick = function substract4(){
		lives--
	}
	if (lives <= 0){
		alert('doei')
		document.getElementById('body').style.cssText = 'background-image: url(gameover.png);';
		one.style.cssText = 'display: none;';
		two.style.cssText = 'display: none;';
		three.style.cssText = 'display: none;';
		four.style.cssText = 'display: none;';
	}else{

	}
	four.setAttribute("onClick", "javascript:level2();");
}
function level2(){
	alert('doei');
}

