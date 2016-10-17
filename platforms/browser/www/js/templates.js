function popupLeaderboard() {
	var str_popupLeaderboard = '4 minutes remain.  ' +

		'.  Sprint Crit Leader is: ' + popupLdr.sprintName +
		'.  Sprint Crit Score is: ' + popupLdr.sprintScore +
		'.  Sprint Crit Speed Leader is ' + popupLdr.sprintSpeedName +
		'.  Sprint Crit Speed Leader Score is ' + popupLdr.sprintSpeedScore +
		'.  All-Day Crit Leader is ' + popupLdr.alldayName +
		'.  All-Day Speed Leader is ' + popupLdr.alldaySpeedName;



	myApp.modal({
			title: 	'	<div>4 Minutes Remain.<hr> ' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">Sprint Crit Leaders. </span> <br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-heartbeat"></i> ' + popupLdr.sprintName + ' (' + popupLdr.sprintScore + ')<br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-dashboard"></i> ' + popupLdr.sprintSpeedName + ' (' + popupLdr.sprintSpeedScore  + ')<br><hr>' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">All-Day Crit Leaders. </span> <br>' +
					'	<i class="fa fa-heartbeat"></i> ' + popupLdr.alldayName + ' (' + popupLdr.alldayScore + ')<br>' +
					'	<i class="fa fa-dashboard"></i> ' + popupLdr.alldaySpeedName + ' (' + popupLdr.alldaySpeedScore + ')<br><hr>' +
					'	</div> '
	});

	setTimeout(function() {
			myApp.closeModal();

			if (tim.timNumberofRounds >= 0) {
		console.log('TTS240 Count:  240, timCalculatedDuration:  ' + tim.timCalculatedDuration);
		//console.log(strFourMinutes);
		if (tim.timStyle !== "NO") {
				TTS
					.speak({
							text: str_popupLeaderboard,
							locale: 'en-GB',
							rate: 1.5
					}, function() {
							console.log('TTS240 SUCCESS');
					}, function(reason) {
							console.log('TTS240 FAILURE:  ' + reason);
					});
		} //TTS
}


	}, 15000);
}


function popupMyLeaderboard() {
		var str_popupMyLeaderboard = '2 minutes remain.  ' +
		'.  My Last Sprint Crit Score was: ' + myLdr.sprintScore + ' , ranking number ' + rank1 +
		'.  My Last Sprint Crit Speed was ' + myLdr.sprintSpeedScore  + ' , ranking number ' + rank2 +

 		'.  My Crit Score Average is: ' + myLdr.alldayScore + ' , ranking number ' + rank3 +
 		'.  My Average Speed is: ' + myLdr.alldaySpeedScore + ' , ranking number ' + rank4;

// 		'.  My All-Day Crit Score is: ' + myLdr.alldayScore +
// 		'.  My All-Day Crit Speed is ' + myLdr.alldaySpeedScore;



	myApp.modal({
			title: 	'	<div>2 Minutes Remain.<hr> ' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">My Last Crit Scores. </span> <br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-heartbeat"></i> ' + myLdr.sprintScore + ' #' + rank1 + '<br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-dashboard"></i> ' + myLdr.sprintSpeedScore  + ' #' + rank2 + '<br><hr>' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">My All-Day Averages. </span> <br>' +
					'	<i class="fa fa-heartbeat"></i> ' + myLdr.alldayScore + ' #' + rank3 + '<br>' +
					'	<i class="fa fa-dashboard"></i> ' + myLdr.alldaySpeedScore + ' #' + rank4 + '<br><hr>' +
					'	</div> '
	});

	setTimeout(function() {
			myApp.closeModal();


						if (tim.timNumberofRounds >= 0) {
		console.log('TTS120 Count:  120, timCalculatedDuration:  ' + tim.timCalculatedDuration);
		//console.log(strFourMinutes);
		if (tim.timStyle !== "NO") {
				TTS
					.speak({
							text: str_popupMyLeaderboard,
							locale: 'en-GB',
							rate: 1.5
					}, function() {
							console.log('TTS120 SUCCESS');
					}, function(reason) {
							console.log('TTS120 FAILURE:  ' + reason);
					});
		} //TTS
}



	}, 15000);
}


//1 MIN LDB
function popupLeaderboard60() {
	var str_popupLeaderboard60 = '1 minute remains.  ' +

		'.  Sprint Crit Leader is: ' + popupLdr.sprintName +
		'.  Sprint Crit Score is: ' + popupLdr.sprintScore +
		'.  Sprint Crit Speed Leader is ' + popupLdr.sprintSpeedName +
		'.  Sprint Crit Speed Leader Score is ' + popupLdr.sprintSpeedScore +
		'.  All-Day Crit Leader is ' + popupLdr.alldayName +
		'.  All-Day Speed Leader is ' + popupLdr.alldaySpeedName;


console.log(str_popupLeaderboard60);

	myApp.modal({
			title: 	'	<div>1 Minute Remains.<hr> ' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">Sprint Crit Leaders. </span> <br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-heartbeat"></i> ' + popupLdr.sprintName + ' (' + popupLdr.sprintScore + ')<br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-dashboard"></i> ' + popupLdr.sprintSpeedName + ' (' + popupLdr.sprintSpeedScore  + ')<br><hr>' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">All-Day Crit Leaders. </span> <br>' +
					'	<i class="fa fa-heartbeat"></i> ' + popupLdr.alldayName + ' (' + popupLdr.alldayScore + ')<br>' +
					'	<i class="fa fa-dashboard"></i> ' + popupLdr.alldaySpeedName + ' (' + popupLdr.alldaySpeedScore + ')<br><hr>' +
					'	</div> '
	});

	setTimeout(function() {
			myApp.closeModal();

				if (tim.timNumberofRounds >= 0) {
						console.log('TTS240 Count:  240, timCalculatedDuration:  ' + tim.timCalculatedDuration);
						//console.log(strFourMinutes);
						if (tim.timStyle !== "NO") {
								TTS
									.speak({
											text: 'Final Minute.',
											locale: 'en-GB',
											rate: 1.5
									}, function() {
											console.log('TTS240 SUCCESS');
									}, function(reason) {
											console.log('TTS240 FAILURE:  ' + reason);
									});
						} //TTS
				}



	}, 15000);
}


//START ME VS MY BEST ROUND TODAY
function ui_report10(rnd1, spd1, cad1, hr1) {
	$$('#ui_report10').html(
		'        <div class="row bg-red no-border">' +
		'         <div class="col-20"><a href="#" class="no-border button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">RND</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-round cls_rt_round_val no-border button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgRND) + '</a></div>' +
		'         <div class="col-30"><a href="#" class="no-border button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 2.0em"><b class=" color-white">' + Math.round(rnd1) + '</b></a></div>' +
		'       </div><br><br>' +
		'        <div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">SPD</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-s button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgSPD * 10) / 10 + '</a></div>' +
		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(spd1 * 10) / 10 + '</b></a></div>' +
		'       </div>' +
		'        <hr><div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">CAD</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-c button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgCAD) + '</a></div>' +
		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(cad1) + '</b></a></div>' +
		'       </div>' +
		'        <hr><div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">HR</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-h button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgHR) + '</a></div>' +
		'         <div class="col-30 button bg-black  button-big button-fill button-raised" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(hr1) + '</b></a></div>' +
		'       </div><br>'
	);
}

//ME VS. LAST RND
function ui_report20(rnd1, spd1, cad1, hr1) {
	$$('#ui_report20').html(
		'        <div class="row bg-red">' +
		'         <div class="col-20"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">RND</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-round cls_rt_round_val button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgRND) + '</a></div>' +
		'         <div class="col-30"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 2.0em"><b class=" color-white">' + Math.round(rnd1) + '</b></a></div>' +
		'       </div><br><br>' +
		'        <div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">SPD</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-s button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgSPD * 10) / 10 + '</a></div>' +
		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(spd1 * 10) / 10 + '</b></a></div>' +
		'       </div>' +
		'        <hr><div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">CAD</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-c button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgCAD) + '</a></div>' +
		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(cad1) + '</b></a></div>' +
		'       </div>' +
		'        <hr><div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">HR</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-h button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgHR) + '</a></div>' +
		'         <div class="col-30 button bg-black  button-big button-fill button-raised" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(hr1) + '</b></a></div>' +
		'       </div><br>'
	);
}

//ME VS. KING
function ui_report200() {

	$$('#ui_report200').html(
		'        <div class="row bg-red">' +
		'         <div class="col-20"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">RND</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-round cls_rt_round_val button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgRND) + '</a></div>' +
		'         <div class="col-30"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 2.0em"><b class=" color-white">' + Math.round(top_king_rnd) + '</b></a></div>' +
		'       </div><br><br>' +
		'        <div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">SPD</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-s button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgSPD * 10) / 10 + '</a></div>' +
		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(top_king_spd * 10) / 10 + '</b></a></div>' +
		'       </div>' +
		'        <hr><div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">CAD</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-c button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgCAD) + '</a></div>' +
		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(top_king_cad) + '</b></a></div>' +
		'       </div>' +
		'        <hr><div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">HR</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-h button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgHR) + '</a></div>' +
		'         <div class="col-30 button bg-black  button-big button-fill button-raised" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(top_king_hr) + '</b></a></div>' +
		'       </div><br>'
	);
}
