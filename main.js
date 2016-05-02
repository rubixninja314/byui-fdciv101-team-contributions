var classNames, classTeams, IDs, teammates, scores=[], targetSum, currentSum, sectionNum;

function loadSection(section){
	section-=0;
	loadClass(section);
	var dropdownHTML='';
	sectionNum=section;
	classNames.slice().sort().forEach(function(item, index, array){
		dropdownHTML+='<a onclick="setStudent(' + classNames.indexOf(item) + ')">' + item + '</a>';
	});
	setContents('studentDropdownBtn', 'Select your name');
	setContents('teammatesList','');
	setContents('studentList', dropdownHTML);
	setClass('dropdownStudent', 'show', true);
	setClass('infoBox', 'show', false);
}

function setStudent(studentPointer){
	setContents('studentDropdownBtn', classNames[studentPointer]);
	setClass('studentList', 'show', false);
	var team = classTeams[studentPointer];
	teammates=[];
	scores=[];
	classTeams.forEach(function(item, index, array){
		if (item == team && index != studentPointer){
			teammates.push(index);
		}
	});
	var teammatesHTML='';
	teammates.forEach(function(item, index, array){
		teammatesHTML+=
		'<div id="teammate' + item + '" class="teamRating">'
		+'<label for="teammate' + item + 'score">' + classNames[item] + ': </label>'
		+'<input type="number" maxlength="2" size="2" id="teammate' + item + 'score" oninput="updateScore(' + item + ')">';
		scores[item]=0;
	});
	setContents('teammatesList', teammatesHTML);
	targetSum=teammates.length*10;
	setContents('targetSum', targetSum);
	setContents('currentSum', 0);
	validateScores();
	setClass('infoBox', 'show', true);
}

function validateScores(){
	var goodSum = setValid('sumScore', currentSum==targetSum);
	var goodHigh = setValid('highScore', hasHighScore(scores));
	var goodLow = setValid('lowScore', hasLowScore(scores));
	var goodBounds = setValid('scoreBounds', checkBounds(scores));
	displayCode(goodSum && goodHigh && goodLow && goodBounds);
}

function updateScore(teammateID){
	scores[teammateID]=document.getElementById('teammate'+teammateID+'score').value;
	currentSum = arraySum(scores);
	setContents('currentSum', currentSum);
	validateScores();
}

function displayCode(isValid){
	if(isValid){
		var code='?'+sectionNum;
		teammates.forEach(function(item,index,arrat){
			code+=';'+(IDs[item])+':'+trailZero(scores[item]);
		});
		setContents('code', code);
	}
	setClass('codeHolder', 'show', isValid);
}
