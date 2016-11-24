var ozon = 0;
var lives = 3;
var count = 0;
var countdown = 10;
var roomenter = 0;
var issVistit = false;
var key = false;
var pressed = false;
var titel = document.getElementById('titel');
var ondertitel = document.getElementById('ondertitel');
var start = document.getElementById('start');
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
document.getElementById('oudio').style.display = 'none';
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
	document.getElementById('oudio').style.display = 'block';
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
	start.innerHTML = 'Start het spel';
	start.style.cssText = 'display: block;';
	start.setAttribute("onClick", "javascript:level2();");
}

function level2(){
	if(ozon <= 0){
		document.getElementById('body').style.cssText = 'background-image: url(ozon.jpg)';
	}else{
		document.getElementById('body').style.cssText = 'background-image: url(trig.gif)';
	}
	document.getElementById('titel').innerHTML = 'In de ozonlaag';
	document.getElementById('ondertitel').innerHTML = 'Waar wil je naartoe?'
	start.style.display = 'none';
	one.style.cssText = 'display: block; width: 200px;';
	one.innerHTML = 'Ga verder de ruimte in';
	one.setAttribute("onClick", "javascript:ruimte();");
	two.style.cssText = 'display: block; width: 200px;';
	two.innerHTML = 'Ga in een baan om de aarde';
	two.setAttribute("onClick", "javascript:baanaarde();");
	four.style.cssText = 'display: block; width: 200px;';
	four.innerHTML = 'Ga naar het ISS';
	three.style.cssText = 'display: block; width: 200px;';
	three .innerHTML = 'Ga terug naar aarde';
	three.setAttribute("onclick", "javascript:planeetaarde();");
}
function ruimte(){
	ozon++
	document.getElementById('body').style.cssText = 'background-image: url(spacecat2.gif)';
	document.getElementById('titel').innerHTML = 'Verder de ruimte in';
	document.getElementById('ondertitel').innerHTML = 'Dit is spacecat2 klik ' +ozon+ ' op hem! (pijltje moet een handje worden)';
	three.innerHTML = 'Terug naar ozonlaag';
	three.setAttribute("onClick", "javascript:level2();");
	random.onclick = function undo(){
		ozon--
	}
}
function baanaarde(){
	titel.innerHTML = 'In een baan om de aarde';
	ondertitel.innerHTML = 'Je bent bij een sataliet aangekomen wat ga je doen?';
	document.getElementById('body').style.cssText = 'background-image: url(baanomaarde.jpg)';
}
function planeetaarde(){
	titel.innerHTML = 'Je bent nu op aarde';
	if(issVistit == true){
		ondertitel.innerHTML = 'Zoek de sleutel in het huis.';
		three.style.display = 'block';
	}else if(issVistit == false){
		ondertitel.innerHTML = 'Maar wat doe je hier?'
		three.style.display = 'none';
	}
	one.setAttribute("onClick", "javascript:level2();");
	one.innerHTML = 'Naar de ozonlaag';
	document.getElementById('body').style.cssText = 'background-image: url(aarde.jpg)';
	two.style.display = 'none';
	four.style.display = 'none';
	three.innerHTML = 'Naar het huis';
}