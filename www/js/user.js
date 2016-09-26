var tim = {
		timName: 'Required',
		timTeam: 'Solo',
		timGroup: 'None',
		timStyle: 'Road',
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
		timATSpeedScore: 0,
		timATCadenceScore: 0,
		timATHeartrateScore: 0,
		timATRoundScore: 0,
		timATRoundScoreDate: 0,
		timATRoundScoreTime: 0,
		timBestRoundFullDate: 0,
		timBestRoundYear: 0,
		timBestRoundMonth: 0,
		timBestRoundDay: 0,
		fb_BestRND: 0,
		fb_BestSPD: 0,
		fb_BestCAD: 0,
		fb_BestHR: 0,
		fb_BestNAME: '...',
		fb_BestSHOP: '...',
		timStartTime: 0
};


// var cntdown = 300;
// var global_stuff;

var objScores = {};
var createAvgRoundScore = [];


function rounds_end(lr, ls, lc, lh) {
		console.log('rounds_end');
		objScores[tim.timNumberofRounds] = {
				ind: tim.timNumberofRounds,
				rnd: lr,
				spd: ls,
				cad: lc,
				hr: lh,
				date: pubFullDate,
				time: pubFullTime,
				name: tim.timName,
				group: tim.timGroup,
				team: tim.timTeam,
				style: tim.timStyle
		};

		//BEST ROUND
		var x = _.values(objScores);
		var y = _.orderBy(x, 'rnd', 'desc');
		var a1 = y[0].rnd;
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
		_.forEach(yy, function(value, key) {
				console.log('objScores value.rnd:  ' + value.rnd);
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
				objCounter++;
		});

		// $$('#my_last_rnd').html(
		//     '<div class="cls_top6 chip bg-white">' +
		//     '<div class="chip-media bg-red">' + Math.round(tim.timLastRND) + '</div>' +
		//     '<div class="chip-label color-black">' + tim.timName + '</div>' +
		//     '</div>'
		// );

		// $$('.my_last_rnd_rank').text('# ' + lastRoundIndex
		//     // '<div class="cls_top6 chip bg-white">' +
		//     // '<div class="chip-media bg-red">' + Math.round(tim.timLastRND) + '</div>' +
		//     // '<div class="chip-label color-black">' +  tim.timName + '</div>' +
		//     // '</div>'
		// );
		$$('.my_last_rnd').text(tim.timLastRND
		);

		var stringChip = null;
		$('.best_round_chip').each(function(index, obj) {
				stringChip += $(this).text("MY BEST:   " + a1);
		});

		populate_last_rnd_bubbles();
}
//END OF ROUNDS END


function publishAvg() {

		$$('#tim_avg_rnd_btn').text(Math.round(tim.timAvgRND));
		$$('#rt_round_val').text(Math.round(tim.timAvgRND * 10) / 10);

		var stringRND = null;
		$('.cls_rt_round_val').each(function(index, obj) {
				stringRND += $(this).text(Math.round(tim.timAvgRND * 10) / 10);
		});
		populate_tim_avg_rnd_bubbles();

}


// var global_timer;


$$('#start_btn').on('click', function(e) {
		var storedData = myApp.formGetData('my-form');
		// if ( storedData === undefined) {
		if (!storedData) {
				myCenterAlertOK('Enter a Name in User Settings');
				$$(this).show();
		} else {
				$$(this).hide();
				$$("#start_btn").prop("disabled", true);
				console.log(JSON.stringify(storedData));
				updateTim();

				var mySwiper = $$('.swiper-container')[0].swiper;
				mySwiper.slideNext();
				tim.timStartTime = _.now();
				timer.start(300000);
		}


});
//END OF START BUTTON PRESS


//START TOCK
var timer = new Tock({
		countdown: true,
		interval: 1000,
		callback: someCallbackFunction,
		complete: someCompleteFunction
});

function someCallbackFunction() {
		var ct = Math.round(timer.lap() / 1000);
		newTimer(ct);
}

function someCompleteFunction() {
		console.log('Round Complete, Restarting Timer');
		publishEndofRound();
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

		var remdr1 = count % 1;
		if (remdr1 === 0) {
				//console.log('rmdr1');
				var secondsInRound = 300 - count;
				var secondsAllRounds = tim.timNumberofRounds * 300;
				//console.log('secondsInRound:  ' + secondsInRound + '  tim.timNumberofRounds:   '+ tim.timNumberofRounds);
				var calcTotalSeconds = secondsInRound + secondsAllRounds;
				var date = new Date(null);
				var tmr1 = date.setSeconds(calcTotalSeconds); // specify value for SECONDS here
				var tmr2 = date.toISOString().substr(11, 8);
				$$('#header_btn2').text(tmr2);
				tim.timCalculatedDuration = tmr2;
		}

		var remdr4 = count % 4;
		if (remdr4 === 0) {
				bubbleMaker();
		}

		var remdr3 = count % 3;
		if (remdr3 === 0) {
				publishAvg();
		}





		if (count === 295) {
				round_post(tim.timLastRND, tim.timLastSPD, tim.timLastCAD, tim.timLastHR);
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
				// $$('#my_last_rnd').html(
				//     '<div class="cls_top6 chip bg-white">' +
				//     '<div class="chip-media bg-red">' + Math.round(tim.timLastRND) + '</div>' +
				//     '<div class="chip-label color-black">' + tim.timName + '</div>' +
				//     '</div>'
				// );
				//
				// $$('#my_last_rnd2').html(
				//     '<div class="cls_top6 chip bg-white">' +
				//     '<div class="chip-media bg-red">' + Math.round(tim.timLastRND) + '</div>' +
				//     '<div class="chip-label color-black">' + tim.timName + '</div>' +
				//     '</div>'
				// );
		}

		if (count === 285) {
				//get_round_data();
				get_combo();
		}

		if (count === 280) {
				myApp.modal({
						title: '<div>A New Round Has Just Started.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
								'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
								'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				});
				setTimeout(function() {
						myApp.closeModal();
						console.log('TTS Count:  280, timCalculatedDuration:  ' + tim.timCalculatedDuration);
						$$('#RTJ').html('TTS, 280, CALC DURATION:  ' + tim.timCalculatedDuration);
						//TTS - AFTER MODAL IS CLOSED
						var storedDataTTS = myApp.formGetData('my-form');
						tim.timName = storedDataTTS.name;
						tim.timTeam = storedDataTTS.team;
						tim.timStyle = storedDataTTS.style;
						if (storedDataTTS.style !== "NO") {
								TTS
										.speak({
												text: 'Get Moving.  A new round just started.  Your last round had a score of ' + Math.round(tim.timLastRND),
												locale: 'en-GB',
												rate: 1.5
										}, function() {
												console.log('TTS SUCCESS');
										}, function(reason) {
												console.log('TTS FAILURE:  ' + reason);
										});
						} //TTS - AFTER MODAL IS CLOSED

				}, 5000);
		}

		if (count === 245) {
				//get_round_data_group();
		}

		if (count === 195) {
				//get_top_fighters();
		}

		if (count === 240) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
				myApp.modal({
						title: '<div>4 Minutes Remain.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
								'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
								'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				});
				setTimeout(function() {
						myApp.closeModal();
						if (tim.timNumberofRounds >= 0) {
								//TTS
								console.log('TTS Count:  240, timCalculatedDuration:  ' + tim.timCalculatedDuration);
								$$('#RTJ').html('TTS, 240, CALC DURATION:  ' + tim.timCalculatedDuration);
								var storedDataTTS240 = myApp.formGetData('my-form');
								tim.timName = storedDataTTS240.name;
								tim.timTeam = storedDataTTS240.team;
								tim.timStyle = storedDataTTS240.style;
								if (storedDataTTS240.style !== "NO") {
										TTS
												.speak({
														text: 'Four Minutes Remain',
														locale: 'en-GB',
														rate: 1.5
												}, function() {
														console.log('TTS240 SUCCESS');
												}, function(reason) {
														console.log('TTS240 FAILURE:  ' + reason);
												});
								} //TTS
						}
				}, 5000);
		}

		if (count === 190) {
				// if (tim.timNumberofRounds > 1) {
				//   //TTS
				//   var storedDataTTS2 = myApp.formGetData('my-form');
				//   tim.timName = storedDataTTS2.name;
				//   tim.timTeam = storedDataTTS2.team;
				//   tim.timStyle  = storedDataTTS2.style;
				//             if (storedDataTTS2.style !== "NO") {
				//        TTS
				//            .speak({
				//                text: lastRoundIndexSpeak2,
				//                locale: 'en-GB',
				//                rate: 1.5
				//            }, function() {
				//                console.log('TTS2 SUCCESS');
				//            }, function(reason) {
				//                console.log('TTS2 FAILURE:  ' + reason);
				//            });
				//    } //TTS
				// }
		}



		if (count === 180) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
				myApp.modal({
						title: '<div>3 Minutes Remain.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
								'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
								'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				});
				setTimeout(function() {
						myApp.closeModal();
						if (tim.timNumberofRounds > 0) {
								//TTS
								console.log('TTS Count:  180, timCalculatedDuration:  ' + tim.timCalculatedDuration);
								$$('#RTJ').html('TTS, 180, CALC DURATION:  ' + tim.timCalculatedDuration);
								var storedDataTTS2 = myApp.formGetData('my-form');
								tim.timName = storedDataTTS2.name;
								tim.timTeam = storedDataTTS2.team;
								tim.timStyle = storedDataTTS2.style;
								if (storedDataTTS2.style !== "NO") {
										TTS
												.speak({
														text: lastRoundIndexSpeak2,
														locale: 'en-GB',
														rate: 1.5
												}, function() {
														console.log('TTS2 SUCCESS');
												}, function(reason) {
														console.log('TTS2 FAILURE:  ' + reason);
												});
								} //TTS
						}
				}, 5000);

		}


		if (count === 151) {
				if (tim.timNumberofRounds > 0) {
						console.log('The Champ is ' + top_king_name + '  from Team' + top_king_team);
						myApp.modal({
								title: '<div>Round is half-complete.<hr>' + lri_string + '</span></div><hr>' +
										'The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
										'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>'
						});
						setTimeout(function() {
								myApp.closeModal();
						}, 5000);
				}

		}


		if (count === 125) {
				get_combo();
		}


		if (count === 120) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
				myApp.modal({
						title: '<div>2 Minutes Remain.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
								'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
								'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				});
				setTimeout(function() {
						myApp.closeModal();
						if (tim.timNumberofRounds >= 1) {
								//TTS
								console.log('TTS Count:  120, timCalculatedDuration:  ' + tim.timCalculatedDuration);
								$$('#RTJ').html('TTS, 120, CALC DURATION:  ' + tim.timCalculatedDuration);
								var storedDataTTS3 = myApp.formGetData('my-form');
								tim.timName = storedDataTTS3.name;
								tim.timTeam = storedDataTTS3.team;
								tim.timStyle = storedDataTTS3.style;
								if (storedDataTTS3.style !== "NO") {
										TTS
												.speak({
														text: lastRoundIndexSpeak,
														locale: 'en-GB',
														rate: 1.5
												}, function() {
														console.log('TTS3 SUCCESS');
												}, function(reason) {
														console.log('TTS3 FAILURE:  ' + reason);
												});
								} //TTS
						}
				}, 5000);
		}




		if (count === 60) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> ');

				myApp.modal({
						title: '<div>1 Minute Remains.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
								'</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
								'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
				});
				setTimeout(function() {
						myApp.closeModal();
						if (tim.timNumberofRounds >= 0) {
								//TTS
								console.log('TTS Count:  60, timCalculatedDuration:  ' + tim.timCalculatedDuration);
								$$('#RTJ').html('TTS, 60, CALC DURATION:  ' + tim.timCalculatedDuration);
								var storedDataTTS11 = myApp.formGetData('my-form');
								tim.timName = storedDataTTS11.name;
								tim.timTeam = storedDataTTS11.team;
								tim.timStyle = storedDataTTS11.style;
								if (storedDataTTS11.style !== "NO") {
										TTS
												.speak({
														text: 'One Minute Remains',
														locale: 'en-GB',
														rate: 1.5
												}, function() {
														console.log('TTS11 SUCCESS');
												}, function(reason) {
														console.log('TTS11 FAILURE:  ' + reason);
												});
								} //TTS
						}
				}, 5000);

		}



		if (count === 30) {
				$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> ');
				myCenterAlert('30 Seconds Remain', 1000);
		}

		if (count === 5) {
				myCenterAlert('5 Seconds Remain', 1000);
		}

		if (count === 0) {
				console.log('Count at 0');
				myCenterAlert('Round is Complete', 1000);
		}
		//END OF COUNT AT 1

}
//end of the New Timer function with count passed in.

//SWIPER P1 BUBBLES
function publishEndofRound() {
		console.log('tim.publishEndofRound');
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
		console.log('tim.timNumberofRounds:  ' + tim.timNumberofRounds);
		console.log('tim.timLastRND:  ' + tim.timLastRND);
		rounds_end(tim.timLastRND, tim.timLastSPD, tim.timLastCAD, tim.timLastHR);

		// myApp.modal({
		//     title: '<div>Round Complete.<hr>  Your round score was <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + tim.timLastRND +
		//         '</span> and your average speed was <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + tim.timLastSPD + '</span></div><hr>'
		// });
		// setTimeout(function() {
		//     myApp.closeModal();
		// }, 3000);
}


function bubbleMaker() {

		if (tim.timSpeed > 40) {
				tim.timSpeed = 40;
		}
		var vSpeed1 = Math.round(tim.timSpeed / 2);
		var vSpeed2 = 20 - vSpeed1;
		var vSpeed3 = '#rt_speed_bubbles';
		populate_rt_bubbles(vSpeed1, vSpeed2, vSpeed3);


		if (tim.timHR > 200) {
				tim.timHR = 200;
		}
		var vHeartrate1 = Math.round(tim.timHR / 10);
		var vHeartrate2 = 20 - vHeartrate1;
		var vHeartrate3 = '#rt_hr_bubbles';
		populate_rt_bubbles(vHeartrate1, vHeartrate2, vHeartrate3);

		if (tim.timCadence > 120) {
				tim.timCadence = 120;
		}
		var vCadence1 = Math.round(tim.timCadence / 6);
		var vCadence2 = 20 - vCadence1;
		var vCadence3 = '#rt_cad_bubbles';
		populate_rt_bubbles(vCadence1, vCadence2, vCadence3);


		if (tim.timAvgRND > 99) {
				tim.timAvgRND = 99;
		}
		var vRound1 = (Math.round(tim.timAvgRND) / 5);
		var vRound2 = 20 - vRound1;
		var vRound3 = '#rt_round_bubbles';
		// $$('#rt_round_val').text(Math.round(tim.timAvgRND * 10) / 10);
		//
		// var stringRND = null;
		// $('.cls_rt_round_val').each(function(index, obj) {
		//     stringRND += $(this).text(Math.round(tim.timAvgRND * 10) / 10);
		// });
		populate_rt_bubbles(vRound1, vRound2, vRound3);

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

// function populate_timer_bubbles(x) {
// 		$$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
// }

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
		//EVERY SECOND
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