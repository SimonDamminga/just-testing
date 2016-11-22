var count = 0;
var countdown = 5;
var key = false;
document.getElementById('knopje-text').innerHTML = 'nog '+ countdown+ ' keer'
function enter(){
	document.getElementById('body').style.cssText = 'background-image: url(background1.png);';
	count++
	if (count == 5) {
		document.getElementById('knopje').onclick = function doei(){
			key = true;
			alert('Je hebt een sleutel gevonden')
		}
		document.getElementById('knopje').style.cssText = 'background-color: black;';
		document.getElementById('knopje-text').innerHTML = 'Klik voor sleutel';
	}else if(count >= 6){
		document.getElementById('knopje').style.cssText = 'display: none;';
	}
	else{
		document.getElementById('knopje').style.cssText = 'background-color: red;';
	}
}
function leave(){
	countdown-- 
	document.getElementById('body').style.cssText = 'background-image: url(background.png);';
	
	if (countdown <= 0) {
		
	}else{
		document.getElementById('knopje-text').innerHTML = 'nog '+ countdown +' keer';
	}
}