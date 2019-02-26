// game.js
var counter = 0;
var timer;
function game(){
var num1 = Math.floor(Math.random() * 4);
var num2 = Math.floor(Math.random() * 4);

timer = setTimeout(function(){ 
	document.getElementById("text1").innerHTML = counter;
	document.getElementById("text1").style.color = 'black';
	num1 = 4;
	return 0; }, 1500);


if(num2 == 0){
document.getElementById("text1").style.color = 'orange';
} 

if(num2 == 1){
document.getElementById("text1").style.color = 'red';
} 

if(num2 == 2){
document.getElementById("text1").style.color = 'blue';} 

if(num2 == 3){
document.getElementById("text1").style.color = 'green';
}


if(num1 == 0){
document.getElementById("text1").innerHTML = "green";

} 

if(num1 == 1){

document.getElementById("text1").innerHTML = "blue";
} 

if(num1 == 2){
document.getElementById("text1").innerHTML = "red";
} 

if(num1 == 3){
document.getElementById("text1").innerHTML = "orange";
}

$(green).click(function(){
	if(num1 == 0){
		counter++;
		clearTimeout(timer);
		game();
		num1 = 4;
		return 0;
	}

	else{
	document.getElementById("text1").innerHTML = counter;
	document.getElementById("text1").style.color = 'black';
	num1 = 4;
	return 0;
}



});

$(red).click(function(){
	if(num1 == 2){
		counter++;
		clearTimeout(timer);
		game();
		num1 = 4;
		return 0;
	}

	else{
	document.getElementById("text1").innerHTML = counter;
	document.getElementById("text1").style.color = 'black';
	num1 = 4;
	return 0;
}



});

$(orange).click(function(){
	if(num1 == 3){
		counter++;
		clearTimeout(timer);
		game();
		num1 = 4;
		return 0;
	}

	else{
	document.getElementById("text1").innerHTML = counter;
	document.getElementById("text1").style.color = 'black';
	num1 = 4;
	return 0;
}



});

$(blue).click(function(){
	if(num1 == 1){
		counter++;
		clearTimeout(timer);
		game();
		num1 = 4;
		return 0;
	}

	else{
	document.getElementById("text1").innerHTML = counter;
	document.getElementById("text1").style.color = 'black';
	num1 = 4;
	return 0;
}



});

$(document).keydown(function(e){
	var x = e.keyCode;
	if(x==38 && num1 == 0){
		counter++;
		clearTimeout(timer);
		game();
		num1 = 4;
		return 0;

	}
	else if(x==37 && num1 == 1){
		counter++;
		clearTimeout(timer);
		game();
		num1 = 4;
		return 0;
	}

	else if(x==40 && num1 == 2){
		counter++;
		clearTimeout(timer);
		game();
		num1 = 4;
		return 0;
	}

	else if(x==39 && num1 == 3){
		counter++
		clearTimeout(timer);
		game();
		num1 = 4;
		return 0;
	}

	else{
	document.getElementById("text1").innerHTML = counter;
	document.getElementById("text1").style.color = 'black';
	num1 = 4;
	return 0;
	}

	

});



return 0;
}






$(start).click(function(){
	counter = 0;
	game();
	return 0;

	


});



