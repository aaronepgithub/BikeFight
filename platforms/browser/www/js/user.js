var tim = {
		timName: 'Required',
		timTeam: 'Solo',
		timGroup: 'None',
		timStyle: 'NO',
		timTire: '700X25',
		timTireSize: '700X25',
		timTireCircum: 2.11,
		timTireCircMeters: 2.105,
		timEvent: "timEvent",
		timHR: 0,
		timSpeed: 0,
		timCadence: 0,
		timPower: 0,
		timPhoneSpeed: 0,
		timLat: 0,
		timLon: 0,
		timDirection: 0,
		timWAC: 0,
		timWAS: 0,
		timConnectedHR: 0,
		timConnectedCSC: 0,
		timConnectedPOW: 0,
		timConnectedWAS: 0,
		timConnectedWAC: 0,
		timAvgRND: 0,
		timBestRND: 0,
		timLastRND: 0,
		timFinalRND: 0,
		timAvgHR: 0,
		timBestHR: 0,
		timLastHR: 0,
		timFinalHR: 0,
		timAvgSPD: 0,
		timBestSPD: 0,
		timLastSPD: 0,
		timFinalSPD: 0,
		timAvgCAD: 0,
		timBestCAD: 0,
		timLastCAD: 0,
		timFinalCAD: 0,
		timTodayBestSPD: 0,
		timTodayBestCAD: 0,
		timTodayBestHR: 0,
		timTodayBestRND: 0,
		timEndOfRoundScore: 0,
		timTodayBestRoundScore: 0,
		timTodayBestRoundScoreDate: 0,
		timTodayBestRoundScoreTime: 0,
		timNumberofRounds: 0,
		timScore_Total: 0,
		timScore: 0,
		timHourBestRoundScore: 0,
		timRealTimeShare: 'On',
		timDistanceTraveled: 0,
		timDistanceTraveledRound: 0,
		timCalculatedDuration: 0,
		timStartTime: 0,
		timAvgSPDtotal: 0,
		timAvgCADtotal: 0,
		timAvgHRtotal: 0,
		timMaxHR: 0
};

var popupLdr = {
	sprintName: '',
	sprintScore: 0,
	sprintSpeedName: '',
	sprintSpeedScore: 0,
	alldayName: '',
	alldayScore: 0,
	alldaySpeedName: '',
	alldaySpeedScore: 0
};

var myLdr = {
	sprintScore: 0,
	sprintSpeedScore: 0,
	alldayScore: 0,
	alldaySpeedScore: 0
};


var objScores = {};
var createAvgRoundScore = [];


function rounds_end(lr, ls, lc, lh) {
		//console.log('Fctn: rounds_end');
		objScores[tim.timNumberofRounds] = {
				ind: tim.timNumberofRounds,
				rnd: lr,
				spd: ls,
				cad: lc,
				hr: lh,
				date: pubFullDate,
				time: pubFullTime,
				duration: tim.timCalculatedDuration,
				name: tim.timName,
				group: tim.timGroup,
				team: tim.timTeam,
				style: tim.timStyle
		};

		//BEST ROUND
		var x = _.values(objScores);
		var y = _.orderBy(x, 'rnd', 'desc');
		var a1 = y[0].rnd;
		tim.timBestRoundDay = y[0].rnd;
		var a2 = y[0].spd;
		var a3 = y[0].cad;
		var a4 = y[0].hr;
		var a5 = y[0].date;
		var a6 = y[0].time;
		ui_report10(a1, a2, a3, a4);
		ui_report20(lr, ls, lc, lh);

		//ALL MY ROUNDS
		var xx = _.values(objScores);
		var yy = _.orderBy(xx, 'time', 'desc');
		//console.log('objScores, ordered by Time:  ' + JSON.stringify(yy));
		$$('.cls_top7').remove();
		$$('.cls_top6').remove();
		var objCounter = 1;
		$$('.cls_myrounds_page').remove();
		$$('.cls_myrounds_page_speed').remove();
		$$('.cls_myrounds_page_cadence').remove();
		_.forEach(yy, function(value, key) {
				//console.log('objScores value.rnd:  ' + value.rnd);
				if(objCounter<6) {

					$$('#my_last_rnd2').append(
							'<div class="cls_top7 chip bg-white">' +
							'<div class="chip-media bg-red">' + Math.round(value.rnd) + '</div>' +
							'<div class="chip-label color-black">' + '#' + objCounter + '</div>' +
							'</div>'
					);
					$$('#my_last_rnd').append(
							'<div class="cls_top6 chip bg-white">' +
							'<div class="chip-media bg-red">' + Math.round(value.rnd) + '</div>' +
							'<div class="chip-label color-black">' + '#' + objCounter + '</div>' +
							'</div>'
					);

				}


				$$('#myrounds_page').append(
					'<div class="chip cls_myrounds_page bg-white">' +
					'<div class="chip-media bg-red">' + Math.round(value.rnd) + '</div>' +
					'<div class="chip-label color-black"> #: ' + objCounter + ' | ' + value.duration + ' </div>' +
					'</div>'
				);

				$$('#myrounds_page_speed').append(
					'<div class="chip cls_myrounds_page_speed bg-white">' +
					'<div class="chip-media bg-red">' + Math.round(value.spd) + '</div>' +
					'<div class="chip-label color-black"> #: ' + objCounter + ' | ' + value.duration + ' </div>' +
					'</div>'
				);

				$$('#myrounds_page_cadence').append(
					'<div class="chip cls_myrounds_page_cadence bg-white">' +
					'<div class="chip-media bg-red">' + Math.round(value.cad) + '</div>' +
					'<div class="chip-label color-black"> #: ' + objCounter + ' | ' + value.duration + ' </div>' +
					'</div>'
				);

				objCounter++;
		});

		//FOR ENTIRE RIDE
		$$('#my_average_round_score').text(Math.round(_.meanBy(x, 'rnd')));
		$$('.my_last_rnd').text(tim.timLastRND);

		var stringChip = null;
		$('.best_round_chip').each(function(index, obj) {
				stringChip += $(this).text("MY BEST:   " + a1);
		});

		populate_last_rnd_bubbles();
}
//END OF ROUNDS END


function publishAvg() {

	//PUB AVG RND/SPD/HR/CAD
	var stringSpd = null;
	$('.tab-btn-s').each(function(index, obj) {
		stringSpd += $(this).text(Math.round(tim.timAvgSPD * 10) / 10);
	});

	var stringHr = null;
	$('.tab-btn-h').each(function(index, obj) {
		stringHr += $(this).text(Math.round(tim.timAvgHR));
	});

	var stringCad = null;
	$('.tab-btn-c').each(function(index, obj) {
		stringCad += $(this).text(Math.round(tim.timAvgCAD));
	});

	var stringRound = null;
	$('.tab-btn-round').each(function(index, obj) {
		stringRound += $(this).text(Math.round(tim.timAvgRND));
	});

	//PUB BUBBLES
	populate_tim_avg_rnd_bubbles();

}



//START BUTTON
$$('#start_btn').on('touchstart', function() {
		var storedData = myApp.formGetData('my-form');
		if (!storedData) {
				myCenterAlertOK('Enter a Name in User Settings');
				$$(this).show();
		} else {
				$$(this).hide();
				$$("#start_btn").prop("disabled", true);
				//console.log(JSON.stringify(storedData));
				updateTim();

				mainView.router.loadPage("#game1");


				// var mySwiper = $$('.swiper-container')[0].swiper;
				// mySwiper.slideNext();
				tim.timStartTime = _.now();
				timer.start(300000);
		}
		//Start FB Listener
		//listenGroupScorePost();
});



//START TOCK
var timer = new Tock({
		countdown: true,
		interval: 1000,
		callback: aCallbackFunction,
		complete: aCompleteFunction
});

function aCallbackFunction() {
		var ct = Math.round(timer.lap() / 1000);
		newTimer(ct);
}

function aCompleteFunction() {
		//console.log('Round Complete, Restarting Timer');
		publishEndofRound();
		//RESET ROUND VARS
		wheelRevsRound = 0;
		crankRevsRound = 0;
		timeElapsedRound = 0;
		timeElapsedRoundWheel = 0;
		mFirstWheelRevolutions = 'a';
		mFirstCrankRevolutions = 'a';
		roundDistance = 0;
		createAvgHeartRate = [];
		createAvgRoundScore = [];
		timer.start(299000);
}
//END TOCK




function newTimer(count) {
		//EVERY SECOND
		var stringTimer = null;
		$('.timer_btn_cls').each(function(index, obj) {
				stringTimer += $(this).text(count + ' SECONDS REMAIN');
		});


		//1 SECOND - DURATION
		var remdr1 = count % 1;
		if (remdr1 === 0) {
				var secondsInRound = 300 - count;
				var secondsAllRounds = tim.timNumberofRounds * 300;
				var calcTotalSeconds = secondsInRound + secondsAllRounds;
				var date = new Date(null);
				var tmr1 = date.setSeconds(calcTotalSeconds); // specify value for SECONDS here
				var tmr2 = date.toISOString().substr(11, 8);
				$$('#header_btn2').html('<i class="fa fa-trophy fa-pull-right"></i>' + tmr2);
				$$('#game1_btn2').html('<i class="fa fa-info-circle fa-pull-right"></i>' + tmr2);
				tim.timCalculatedDuration = tmr2;
		}


		//5 SECONDS  PAINT BUBBLES
		var remdr5 = count % 5;
		if (remdr5 === 0) {
			// publishAvg();
			// bubbleMaker();

			async.series([
				function(callback) {
					//console.log('publishAvg');
				 	publishAvg();
				 callback(null, 'pa');
				},
				function(callback) {
					//console.log('bubbleMaker');
					bubbleMaker();
					callback(null, 'bm');
				}
			]);


		}




		if (count === 280 || count === 250 || count === 190 || count === 130 || count === 70) {

					async.series([
					  function(callback) {
					  	//console.log('get_combo');
					   get_combo();
					   callback(null, 'one');
					  },
					  function(callback) {
					  	//console.log('getTotals');
					    getTotals();
					    callback(null, 'one');
					  }
					]);

		}  //END OF ASYNC CALLS




		if (count === 295) {
//			round_post(tim.timLastRND, tim.timLastSPD, tim.timLastCAD, tim.timLastHR);
			$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');

			async.series([
				function(callback) {
					//console.log('round_post');
				 			round_post(tim.timLastRND, tim.timLastSPD, tim.timLastCAD, tim.timLastHR);
				 callback(null, 'one');
				},
				function(callback) {
					//console.log('getTotals');
					totals_post();
					callback(null, 'two');
				}
			]);

		}

		if (count === 290) {
	//		totals_post();
		}



		if (count === 275) {
				myApp.modal({
						title: '<div>A New Sprint Criterium Has Just Started.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
								'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
								'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				});
				setTimeout(function() {
						myApp.closeModal();
						//console.log('TTS275 Count:  275, timCalculatedDuration:  ' + tim.timCalculatedDuration);
						//
						$$('#RTJ').html('TTS, 275, CALC DURATION:  ' + tim.timCalculatedDuration);
						//TTS - AFTER MODAL IS CLOSED
						var storedDataTTS = myApp.formGetData('my-form');
						tim.timName = storedDataTTS.name;
						tim.timTeam = storedDataTTS.team;
						tim.timStyle = storedDataTTS.style;
						if (storedDataTTS.style !== "NO") {
								TTS
									.speak({
											text: 'Get Moving.  A new Sprint Criterium just started.  Your last Criterium had a score of ' + Math.round(tim.timLastRND),
											locale: 'en-GB',
											rate: 1.5
									}, function() {
											//console.log('TTS280 SUCCESS');
									}, function(reason) {
											//console.log('TTS280 FAILURE:  ' + reason);
									});
						} //TTS - AFTER MODAL IS CLOSED

				}, 5000);
		}

		if (count === 240) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');


				popupLeaderboard();
				// myApp.modal({
				// 		title: '<div>4 Minutes Remain.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
				// 				'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
				// 				'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				// });
				// setTimeout(function() {
				// 		myApp.closeModal();
				// 		if (tim.timNumberofRounds >= 0) {
				// 				console.log('TTS240 Count:  240, timCalculatedDuration:  ' + tim.timCalculatedDuration);
				// 				//console.log(strFourMinutes);
				// 				if (tim.timStyle !== "NO") {
				// 						TTS
				// 							.speak({
				// 									text: strFourMinutes,
				// 									locale: 'en-GB',
				// 									rate: 1.5
				// 							}, function() {
				// 									console.log('TTS240 SUCCESS');
				// 							}, function(reason) {
				// 									console.log('TTS240 FAILURE:  ' + reason);
				// 							});
				// 				} //TTS
				// 		}
				// }, 5000);
		}



		if (count === 180) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
				myApp.modal({
						title: '<div>3 Minutes Remain.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
								'<br></span> Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
								'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				});
				setTimeout(function() {
						myApp.closeModal();
						if (tim.timNumberofRounds > 0) {
								//TTS
								//console.log('TTS180 Count:  180, timCalculatedDuration:  ' + tim.timCalculatedDuration);
								//console.log(strThreeMinutes);
								if (tim.timStyle !== "NO") {
										TTS
											.speak({
													//text: strThreeMinutes,
													text: '3 Minutes Remain',
													locale: 'en-GB',
													rate: 1.5
											}, function() {
													//console.log('TTS180 SUCCESS');
											}, function(reason) {
													//console.log('TTS180 FAILURE:  ' + reason);
											});
								} //TTS
						}
				}, 5000);

		}


		if (count === 120) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');

				popupMyLeaderboard();

				// myApp.modal({
				// 		title: '<div>2 Minutes Remain.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
				// 				'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
				// 				'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				// });
				// setTimeout(function() {
				// 		myApp.closeModal();
				// 		if (tim.timNumberofRounds >= 1) {
				// 				console.log('TTS120 Count:  120, timCalculatedDuration:  ' + tim.timCalculatedDuration);
				// 				if (tim.timStyle !== "NO") {
				// 						TTS
				// 							.speak({
				// 									text: strTwoMinutes,
				// 									locale: 'en-GB',
				// 									rate: 1.5
				// 							}, function() {
				// 									console.log('TTS120 SUCCESS');
				// 							}, function(reason) {
				// 									console.log('TTS120 FAILURE:  ' + reason);
				// 							});
				// 				} //TTS
				// 		}
				// }, 5000);
		}


		if (count === 60) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
				popupLeaderboard60();

				// myApp.modal({
				// 		title: '<div>1 Minute Remains.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
				// 				'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
				// 				'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				// });
				// setTimeout(function() {
				// 		myApp.closeModal();
				// 		if (tim.timNumberofRounds >= 0) {
				// 				//TTS
				// 				console.log('TTS60 Count:  60, timCalculatedDuration:  ' + tim.timCalculatedDuration);
				// 				if (tim.timStyle !== "NO") {
				// 						TTS
				// 								.speak({
				// 										//text: strOneMinute,
				// 										text: 'Final Minute',
				// 										locale: 'en-GB',
				// 										rate: 1.5
				// 								}, function() {
				// 										console.log('TTS60 SUCCESS');
				// 								}, function(reason) {
				// 										console.log('TTS60 FAILURE:  ' + reason);
				// 								});
				// 				} //TTS
				// 		}
				// }, 5000);

		}



		if (count === 30) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> ');
				myCenterAlert('30 Seconds Remain', 1000);
		}

		if (count === 5) {
				myCenterAlert('5 Seconds Remain', 1000);
		}

		if (count === 0) {
				//console.log('Count at 0');
				//myCenterAlert('Round is Complete', 1000);
		}


}
//END OF NEW TIMER FUNCTION

function publishEndofRound() {
		//console.log('Fctn publishEndofRound');
		//THESE ARE THE VALUES  CREATED FOR END OF ROUND
		tim.timLastHR = tim.timAvgHR;
		tim.timLastCAD = tim.timAvgCAD;
		tim.timLastSPD = tim.timAvgSPD;
		tim.timLastRND = tim.timAvgRND;

		tim.timNumberofRounds = tim.timNumberofRounds + 1;

		$$('#publishLastSPDValue').html('<h1 style="font-size:1.5em; text-align:center; color:white;">' + tim.timLastSPD + '</h1>');
		$$('#publishLastCADValue').html('<h1 style="font-size:1.5em; text-align:center; color:white;">' + Math.round(tim.timLastCAD) + '</h1>');
		$$('#publishLastHRValue').html('<h1 style="font-size:1.5em; text-align:center; color:white;">' + Math.round(tim.timLastHR) + '</h1>');
		$$('#publishLastRNDValue').text(Math.round(tim.timLastRND));

		myApp.modal({
	    	title: '<div>Round Complete.<hr>  Your round score was <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + tim.timLastRND +
		        '</span> and your average speed was <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + tim.timLastSPD + '</span></div><hr>'
		});
		setTimeout(function() {
		    myApp.closeModal();
		}, 5000);

		rounds_end(tim.timLastRND, tim.timLastSPD, tim.timLastCAD, tim.timLastHR);
}


function bubbleMaker() {

		if (tim.timSpeed > 35) {
				//console.log('timSpeed > 35');
		}
		var vSpeed1 = Math.round(tim.timSpeed / 2);
		var vSpeed2 = 20 - vSpeed1;
		var vSpeed3 = '#rt_speed_bubbles';
		if (vSpeed1 < 20 ) {populate_rt_bubbles(vSpeed1, vSpeed2, vSpeed3);}


		if (tim.timHR > 195) {
			//console.log('tim.timHR > 195');
		}
		var vHeartrate1 = Math.round(tim.timHR / 10);
		var vHeartrate2 = 20 - vHeartrate1;
		var vHeartrate3 = '#rt_hr_bubbles';
		if (vHeartrate1 < 20 )	{ populate_rt_bubbles(vHeartrate1, vHeartrate2, vHeartrate3); }

		if (tim.timCadence > 115) {
				//console.log('tim.timCadence > 115');

		}
		var vCadence1 = Math.round(tim.timCadence / 6);
		var vCadence2 = 20 - vCadence1;
		var vCadence3 = '#rt_cad_bubbles';
		if ( vCadence1 < 20 ) { populate_rt_bubbles(vCadence1, vCadence2, vCadence3); }


		if (tim.timAvgRND > 95) {
				//console.log('tim.timAvgRND > 95');
		}
		var vRound1 = (Math.round(tim.timAvgRND) / 5);
		var vRound2 = 20 - vRound1;
		var vRound3 = '#rt_round_bubbles';

		if (vRound1 < 20) { populate_rt_bubbles(vRound1, vRound2, vRound3); }

		function populate_rt_bubbles(x, y, z) {
			var a = '<i class="fa fa-circle fa-1x color-red"></i>';
			var b = '<i class="fa fa-circle fa-1x color-white"></i>';
			var c = a.repeat(Math.ceil(Math.round(x)));
			// var d = b.repeat(Math.ceil(Math.round(y)));
			var d = 20 - Number(x);
			var dd = Number(d) + Number(x);
			//console.log('x + d: ' + dd);
			if (dd <= 20) {
					var e = b.repeat(Math.ceil(Math.round(d)));
					var f = c.concat(e);
					$$(z).html(f);
			} else {
					return;
			}
		}
}



function populate_round_bubbles(x, y, z) {
		var a = '<i class="fa fa-circle fa-2x color-red"></i> ';
		var b = '<i class="fa fa-circle fa-2x color-white"></i> ';
		var c = a.repeat(x);
		var d = 12 - Number(x);
		var dd = Number(d) + Number(x);
		//console.log('x + d: ' + dd);
		if (dd <= 20) {
				var e = b.repeat(Math.ceil(Math.round(d)));
				var f = c.concat(e);
				$$(z).html(f);
		} else {
				return;
		}
}


function populate_last_rnd_bubbles() {
		if (tim.timLastRND > 99) {
				tim.timLastRND = 99;
		}
		var val1 = Math.round((tim.timLastRND / 4) / 2);
		var val2 = Math.round(12 - val1);
		if (val1 + val2 < 12) {
				val1 = Math.round((tim.timLastRND / 4) / 2 + 1);
		}
		var val3 = '#pub_last_round_bubbles';
		populate_round_bubbles(val1, val2, val3);

}

function populate_tim_avg_rnd_bubbles() {
		//EVERY 15 SECONDS
		if (tim.timAvgRND > 99) {
				tim.timAvgRND = 99;
		}
		var val1 = Math.round((tim.timAvgRND / 4) / 2);
		var val2 = Math.round(12 - val1);
		if (val1 + val2 < 12) {
				val1 = Math.round((tim.timAvgRND / 4) / 2 + 1);
		}
		var val3 = '#round_score_bubbles';
		populate_round_bubbles(val1, val2, val3);
}
