function setContents(id, contents){
	document.getElementById(id).innerHTML=contents;
}
function setValid(id, isValid){
	document.getElementById(id).setAttribute('data-valid', isValid);
	return isValid;
}
function setClass(id, mClass, enable){
	var thing = document.getElementById(id).classList;
	while(thing.contains(mClass) && !enable)
		thing.remove(mClass);
	if(!thing.contains(mClass) && enable)
		thing.add(mClass);
}
function ID(x){return IDs.indexOf(x);}
function trailZero(num){
	if (num<10)
		return '0'+num;
	else
		return num;
}
function checkBounds(array){
	var valid = true;
	array.forEach(function(item,index,array){
		if(item>15 || item<1)
			valid = false;
	});
	return valid;
}	

function arraySum(array){
	var sum=0;
	array.forEach(function(item,index,array){
		sum-=-item;
	});
	return sum;
}

function hasHighScore(array){
	var valid=false;
	array.forEach(function(item,index,array){
		if(item>10){
			valid = true;
		}
	});
	return valid;
}

function hasLowScore(array){
	var valid=false;
	array.forEach(function(item,index,array){
		if(item<10){
			valid = true;
		}
	});
	return valid;
}

function expandList(id){
	document.getElementById(id).classList.toggle('show');
}