var database = firebase.database();
var top_king_name, top_king_rnd, top_king_spd, top_king_hr, top_king_cad, top_king_team;
var lastRoundIndex;
var lastRoundIndexSpeak;
var lastRoundIndexSpeak2;
var lastRoundIndexSpeakTeam;

var rank1;
var rank2;
var rank3;
var rank4;

//DATE FUNCTION
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear();
if (dd < 10) {
		dd = '0' + dd;
}
if (mm < 10) {
		mm = '0' + mm;
}
var pubFullDate = yyyy + mm + dd;
var pubFullTime = _.now();
var pubMonth = mm;
var pubDay = dd;
var pubYear = yyyy;
//console.log(pubFullDate + pubMonth + pubDay + pubYear);

var strFourMinutes = "Four Minutes Remain";
var strFourMinutesAlert = "Four Minutes Remain";
var strThreeMinutes = "Three Minutes Remain";
var strTwoMinutes = "Two Minutes Remain";
var strOneMinute = "One Minute is Remaining";


function round_post(r1, r2, r3, r4) {
		console.log('Fctn round_post');
		if (r1 !== 0) {

				var today2 = new Date();
				var dd2 = today.getDate();
				var mm2 = today.getMonth() + 1; //January is 0!
				var yyyy2 = today.getFullYear();
				if (dd2 < 10) {
						dd2 = '0' + dd2;
				}
				if (mm2 < 10) {
						mm2 = '0' + mm2;
				}
				var pubFullDate2 = yyyy2 + mm2 + dd2;

				firebase.database().ref('rounds/' + pubFullDate2 + '/').push({
						a_scoreRoundLast: scoreHRRoundLast,
						a_speedRoundLast: tim.timLastSPD,
						a_calcDurationPost: tim.timCalculatedDuration,
						fb_timName: tim.timName,
						fb_timGroup: tim.timGroup,
						fb_RND: tim.timLastRND,
						fb_timTeam: tim.timTeam,
						fb_Date: pubFullDate,
						fb_DateNow: Date.now(),
						fb_SPD: tim.timLastSPD,
						fb_CAD: tim.timLastCAD,
						fb_HR: tim.timLastHR,
						fb_timDistanceTraveled: tim.timDistanceTraveled,
						fb_maxHRTotal: maxHRTotal,
						fb_timAvgSPDtotal: tim.timAvgSPDtotal,
						fb_timAvgCADtotal: tim.timAvgCADtotal,
						fb_timAvgHRtotal: tim.timAvgHRtotal,
						fb_scoreHRTotal: scoreHRTotal,
						fb_scoreHRRound: scoreHRRound,
						fb_scoreHRRoundLast: scoreHRRoundLast,
				});
		}
		console.log('FIGHTER DATA POSTED AT:  ' + tim.timCalculatedDuration);
}

function totals_post() {
		console.log('Fctn totals_post');
		if (scoreHRTotal >= 0) {

				var today2 = new Date();
				var dd2 = today.getDate();
				var mm2 = today.getMonth() + 1; //January is 0!
				var yyyy2 = today.getFullYear();
				if (dd2 < 10) {
						dd2 = '0' + dd2;
				}
				if (mm2 < 10) {
						mm2 = '0' + mm2;
				}
				var pubFullDate2 = yyyy2 + mm2 + dd2;

				firebase.database().ref('totals/' + pubFullDate2 + '/' + tim.timName + '/').set({
						a_scoreHRTotal: scoreHRTotal,
						a_scoreHRRoundLast: scoreHRRoundLast,
						a_speedTotal: tim.timAvgSPDtotal,
						a_speedLast: tim.timLastSPD,
						a_calcDurationPost: tim.timCalculatedDuration,
						fb_timName: tim.timName,
						fb_timGroup: tim.timGroup,
						fb_timTeam: tim.timTeam,
						fb_Date: pubFullDate,
						fb_DateNow: Date.now(),
						fb_timAvgCADtotal: tim.timAvgCADtotal,
						fb_timDistanceTraveled: tim.timDistanceTraveled,
						fb_maxHRTotal: maxHRTotal,
						fb_scoreHRTotal: scoreHRTotal,
						fb_scoreHRRoundLast: scoreHRRoundLast,
						fb_timAvgSPDtotal: tim.timAvgSPDtotal,
						fb_timLastSPD: tim.timLastSPD
				});


		console.log('TOTALS DATA POSTED AT:  ' + tim.timCalculatedDuration);

	}
}


var dataSize;
//START GETCOMBO GETJSON
function get_combo() {
		console.log('Fctn get_combo at:  ' + tim.timCalculatedDuration);
		$$.getJSON('https://project-5844362817932994168.firebaseio.com/rounds/' + pubFullDate + '.json', function(data) {
			console.log('getJSON, rounds:  ' + tim.timCalculatedDuration);

				var xx1 = _.values(data);
				var xx2 = _.orderBy(xx1, 'fb_RND', 'desc');
				dataSize = _.size(xx2);
				//console.log('Round Data Size:  ' + dataSize);

				var xx_effort = _.orderBy(xx1, 'a_scoreRoundLast', 'desc');
				var xx_speed = _.orderBy(xx1, 'a_speedRoundLast', 'desc');


				//GET RANKING
				if (tim.timNumberofRounds > 0) {

					//FIND RANK OF MY LAST ROUND'S EFFORT
					var round_effort_rank = _.findIndex(xx_effort, ['a_scoreRoundLast', scoreHRRoundLast]);

					rank1 = round_effort_rank + 1;
					//console.log('Round Effort, Rank1:  ' + rank1);

					// FIND RANK OF LAST ROUND'S SPEED
					var round_speed_rank = _.findIndex(xx_speed, ['a_speedRoundLast', tim.timLastSPD]);

					rank2 = round_speed_rank + 1;
					//console.log('Round Speed, Rank2:  ' + rank2);



					if (dataSize < 101) {
						if (rank1 > 0 && rank1 < 100) {
						$$('.cls_effort_round_rank').text(rank1 + '/' + dataSize);
						//console.log('Round Effort Rank1:  ' + rank1);
						}

						if (rank2 > 0) {
						$$('.cls_avg_speed_round_rank').text(rank2 + '/' + dataSize);
						//console.log('Round Speed Rank2:  ' + rank2);
						}
					}

					if (dataSize > 100) {
						if (rank1 > 0) {
						$$('.cls_effort_round_rank').text(rank1);
						//console.log('Round Effort Rank1:  ' + rank1);
						}

						if (rank2 > 0) {
						$$('.cls_avg_speed_round_rank').text(rank2);
						//console.log('Round Speed Rank2:  ' + rank2);
						}
					}


				}


				//GET TOP CHAMP aka KING
				$$('#top_king').text(xx2[0].fb_timName);
				$$('#me_vs_king_title2').text('Leading: ' +  xx2[0].fb_timName + " (" + xx2[0].fb_RND  + ")"    )  ;
				$$('#me_vs_king_title').text('ME VS.  ' + xx2[0].fb_timName.toUpperCase() + ' (THE CHAMP) ');

				top_king_name = xx2[0].fb_timName;
				top_king_team = xx2[0].fb_timTeam;
				top_king_rnd = xx2[0].fb_RND;
				top_king_spd = xx2[0].fb_SPD;
				top_king_cad = xx2[0].fb_CAD;
				top_king_hr = xx2[0].fb_HR;

				//TOP SPEED CHAMP
				top_speed_value = xx_speed[0].fb_SPD;
				top_speed_name = xx_speed[0].fb_timName;
				top_speed_team = xx_speed[0].fb_timTeam;
				$$('#top_king_speed').text(top_speed_name);
				publishTopSpeedUI(xx_speed);



				function publishTopSpeedUI(xxx_speed) {
					console.log('fctn: publishTopSpeedUI');
					var counter333 = 0;
					$$('.cls_top_kings_speed').remove();
					$$('.cls_champs_page_speed').remove();
					_.forEach(xxx_speed, function(value, key) {

					if (counter333 < 10) {
							$$('#top_kings_speed').append(
									'<div class="cls_top_kings_speed chip bg-white">' +
									'<div class="chip-media bg-red">' + Math.round(xxx_speed[counter333].fb_SPD) + '</div>' +
									'<div class="chip-label color-black">' + xxx_speed[counter333].fb_timName + '</div>' +
									'</div>'
							);
							// counter333++;
					}

					if (counter333 < 100) {
							$$('#champs_page_speed').append(
									'<div class="cls_champs_page_speed chip bg-white">' +
									'<div class="chip-media bg-red">' + Math.round(xxx_speed[counter333].fb_SPD) + '</div>' +
									//'<div class="chip-label color-black">' + xxx_speed[counter333].fb_timName + '</div>' +
									'<div class="chip-label color-black"> #: ' + counter333 + ' | ' + xxx_speed[counter333].fb_timName + ' from ' + xxx_speed[counter333].fb_timTeam + '</div>' +
									'</div>'
							);
							counter333++;
					}


					return;
				});
				}

				//console.log('Speed Name and Value:  ' + top_speed_name + ' at ' + top_speed_value + ' mph');


				ui_report200();

				// if (tim.timNumberofRounds > 0 ) {
				// strFourMinutes = "Four Minutes Remain.  Your last effort had a score of " + scoreHRRoundLast + " and was ranked " + rank1 + " out of " + dataSize + ".  Your average speed for past round was ranked number " + rank2;
				// console.log(strFourMinutes);
				// }


				if (rank1 > 0) {
					lri_string = 'Your Last Effort is Ranked Number  <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">  ' + rank1 + '  out of  ' +  dataSize  + '  </span> ' + '   for the day';
					lastRoundIndexSpeak = 'Your Last Effort had a score of ' + tim.timLastRND + ' and is Ranked Number  ' + rank1 + '  out of  ' +  dataSize  + '  for the day';
					lastRoundIndexSpeak2 = 'The Champ is ' + top_king_name + '  from Team' + top_king_team + ' with a Effort of ' + top_king_rnd;

					strFourMinutes = "Four Minutes Remain.  Your last effort had a score of " + scoreHRRoundLast + " and was ranked " + rank1 + " out of " + dataSize + ".  Your average speed for past round was ranked number " + rank2;
					strFourMinutesAlert = '<div>Four Minutes Remain.</div><hr><div>Your last effort had a score of <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + scoreHRRoundLast + '  </span> and was ranked  <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + rank1 + ' out of ' + dataSize + '.  </span></div><hr><div>Your average speed for past round was ranked number <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + rank2 + '</span><div><hr>';

					strThreeMinutes = 'Three Minutes Remain.  The Champ is ' + top_king_name + ' from Team ' + top_king_team + ', with an Effort of ' + top_king_rnd + '.  Your last Effort was ' + tim.timLastRND + '.  The speed leader is ' + top_speed_name + ' at '  + top_speed_value  +  ' Miles Per Hour.   Your speed for the last effort was ' + tim.timLastSPD;
					strOneMinute =  'One Minute Remains.  The Champ is ' + top_king_name + ' from Team ' + top_king_team + ', with an Effort of ' + top_king_rnd + '.  Your last Effort was ' + tim.timLastRND + '.  The speed leader is ' + top_speed_name + ' at '  + top_speed_value  +  ' Miles Per Hour.   Your speed for the last effort was ' + tim.timLastSPD;
					// console.log(strFourMinutes);
					// console.log(strThreeMinutes);
					// console.log(strOneMinute);
				}

				$$('.cls_top_kings').remove();
				$$('.cls_top_kings_group').remove();
				$$('.cls_front_page').remove();


				//END PREPARE SPEAK STR


				var counter1 = 0;
				var counter2 = 0;
				var counter3 = 0;

				$$('.cls_champs_page').remove();
				//COMBO FOR EACH
				_.forEach(xx2, function(value, key) {
						xxx1 = value.fb_timName;
						xxx2 = value.fb_RND;
						xxx3 = value.fb_timGroup;
						xxx5 = value.fb_timTeam;

						//COMPLETE LIST
						if (counter1 < 100) {
								//console.log('CHAMPS PAGE:  ' + xxx1 + ' | ' + xxx2);
								$$('#champs_page').append(
										'<div class="chip cls_champs_page bg-white">' +
										'<div class="chip-media bg-red">' + Math.round(xxx2) + '</div>' +
										'<div class="chip-label color-black"> #: ' + counter1 + ' | ' + xxx1 + ' from ' + xxx5 + '</div>' +
										'</div>'
								);
						}
						counter1++;
						//END COMPLETE LIST
						//console.log('TOP 100 UI POSTED AT:  ' + tim.timCalculatedDuration);

						//START GROUP
						if (xxx3 === tim.timGroup) {

								if (counter2 < 1) {$$('#top_king_group').text(xxx1 + " (" + tim.timGroup + ")" );}
								if (counter2 < 10) {
										//ONLY IN MY GROUP
										//console.log('Group10, # ' + xxx1 + ' | ' + xxx2 + ' | ' + xxx3) ;
										$$('#top_kings_group').append(
												'<div class="cls_top_kings_group chip bg-white">' +
												'<div class="chip-media bg-red">' + Math.round(xxx2) + '</div>' +
												'<div class="chip-label color-black">' + xxx1 + '</div>' +
												'</div>'
										);
								}
								counter2++;
						} //END GROUP
						//console.log('TOP GROUP UI POSTED AT:  ' + tim.timCalculatedDuration);

						//START TOP TEN
						if (counter3 < 10) {
								$$('#top_kings').append(
										'<div class="cls_top_kings chip bg-white">' +
										'<div class="chip-media bg-red">' + Math.round(xxx2) + '</div>' +
										'<div class="chip-label color-black">' + xxx1 + '</div>' +
										'</div>'
								);

								$$('#front_page').append(
										'<div class="chip bg-white">' +
										'<div class="chip-media bg-red">' + Math.round(xxx2) + '</div>' +
										'<div class="chip-label color-black">' + xxx1 + '</div>' +
										'</div>'
								);
						}
						counter3++;
						//END TOP TEN
						//console.log('TOP 10 UI POSTED AT:  ' + tim.timCalculatedDuration);

				}); //END FOR EACH
				console.log('DATA UI <FOR EACH> POSTED AT:  ' + tim.timCalculatedDuration + '  NOW: ' + _.now());

		});
		console.log('DATA UI POSTED AT:  ' + tim.timCalculatedDuration + '  NOW: ' + _.now());
}
//END GETCOMBO GETJSON



// function groupScorePost() {
//   firebase.database().ref('group-score/users/'+tim.timName+'/').set({
//     rider: tim.timName,
//     score: tim.timBestRoundDay,
//     pubDate: pubFullDate,
//     group: tim.timGroup
//   });
//   console.log('groupScorePost');
// }
//
// function listenGroupScorePost() {
// // Listen for adds
// 	var statusRef = firebase.database().ref('group-score');
// 	statusRef.on('value', function(snapshot) {
// 	//console.log('new Group Score Post' + JSON.stringify(snapshot.val()));
//   });
// }


var dataSizeLeaders;
function getTotals() {
console.log('fctn:  getTotals at: ' + tim.timCalculatedDuration);


$$.getJSON('https://project-5844362817932994168.firebaseio.com/totals/' + pubFullDate + '.json', function(data) {
		console.log('getJSON, totals at:  ' + tim.timCalculatedDuration);

		var xTotals1 = _.values(data);
		var xTotals2 = _.orderBy(xTotals1, 'a_scoreHRTotal', 'desc');
		//console.log('xTotals2:  ' + JSON.stringify(xTotals2));
		var total_effort_leader = xTotals2[0].fb_timName;

		var xTotals3 = _.orderBy(xTotals1, 'a_speedTotal', 'desc');
		//console.log('xTotals3:  ' + JSON.stringify(xTotals3));
		var total_speed_leader = xTotals3[0].fb_timName;

		// console.log('total_effort_leader ' + total_effort_leader);
		// 		console.log('total_speed_leader ' + total_speed_leader);

		dataSizeLeaders = _.size(xTotals2);
		//console.log('Size of Totals:  ' + dataSizeLeaders);



			// FIND INDEX BY NAME
			var total_effort_rank = _.findIndex(xTotals2,function(o) {
				return o.fb_timName === tim.timName;
				});
			// console.log('total_effort_rank:  ' + total_effort_rank);
			// console.log('xTotals2:  ' + JSON.stringify(xTotals2));
			// console.log('scoreHRTotal :  ' + scoreHRTotal);

			var total_speed_rank = _.findIndex(xTotals3,function(o) {
				return o.fb_timName === tim.timName;
				});
			// console.log('total_speed_rank:  ' + total_speed_rank);
			// console.log('xTotals3:  ' + JSON.stringify(xTotals3));
			// console.log('tim.timAvgSPDtotal :  ' + tim.timAvgSPDtotal);


		rank3 = total_effort_rank + 1;

		if (rank3 > 0) {
				if (dataSizeLeaders > 99) {
					$$('.cls_effort_total_rank').text(rank4);
				} else {
					$$('.cls_effort_total_rank').text(rank3 + '/' + dataSizeLeaders);
				}
		}

		//console.log('Total Effort Rank3:  ' + rank3 );


		rank4 = total_speed_rank + 1;
		if (rank4 > 0) {
				if (dataSizeLeaders > 99) {
					$$('.cls_avg_speed_total_rank').text(rank4);
				} else {
					$$('.cls_avg_speed_total_rank').text(rank4 + '/' + dataSizeLeaders);
				}
		}

		//console.log('Total Speed Rank4:  ' + rank4);


		if (tim.timNumberofRounds > 0 ) {
			strTwoMinutes = "Two Minutes Remain.  Your total effort score for the day is " + scoreHRTotal + " and is ranked " + rank3 + " out of " + dataSizeLeaders + ".  Your average speed for today has a ranking of " + rank4 + "The day's highest effort belongs to " + total_effort_leader + " .  The highest average speed for the day is from " + total_speed_leader;
			//console.log(strTwoMinutes);
			}


		async.series([
		  function(callback) {
		  	console.log('Post to Score Leaderboard');
		   postToTempScoreLeaderboard(xTotals2);console.log('cb1');
		   callback(null, 'cb1');

		  },
		  function(callback) {
		  	console.log('Post to Speed Leaderboard');
		    postToTempSpeedLeaderboard(xTotals3);console.log('cb2');
		    callback(null, 'cb2');

		  }
		]);

	});


console.log('TOTALS UI POSTED AT:  ' + tim.timCalculatedDuration + '  NOW: ' + _.now());
}

function postToTempScoreLeaderboard(tempLdr) {
	console.log('fctn: postToTempScoreLeaderboard at:  ' + tim.timCalculatedDuration);
		$$('.cls_temp_leaders').remove();
		var temp1counter = 0;
		//console.log('Best Effort of the Day:  ' + tempLdr[0].fb_timName);
		$$('#top_effort_day').text(tempLdr[0].fb_timName);


	//COMBO FOR EACH
	_.forEach(tempLdr, function(value, key) {
			l1 = value.fb_timName;
			l2 = Math.round(value.a_scoreHRTotal);

				if (temp1counter <10) {
					$$('#temp_score_leaders').append(
					'<div class="chip cls_temp_leaders bg-white">' +
					'<div class="chip-media bg-red">' + l2 + '</div>' +
					'<div class="chip-label color-black"> #: ' + l1 + '</div>' +
					'</div>'
					);
				}

				$$('#dayleaders_page').append(
				'<div class="chip cls_temp_leaders bg-white">' +
				'<div class="chip-media bg-red">' + l2 + '</div>' +
				'<div class="chip-label color-black"> #: ' + l1 + '</div>' +
				'</div>'
				);

				temp1counter ++;
		});
console.log('TOTAL EFFORT <END FOREACH> UI POSTED AT:  ' + tim.timCalculatedDuration + '  NOW: ' + _.now());
}

function postToTempSpeedLeaderboard(tempLdrSpeed) {
console.log('fctn: postToTempSpeedLeaderboard at:  ' + tim.timCalculatedDuration);
		var temp2counter = 0;
		//console.log('Best Speed Avg for the Day:  ' + tempLdrSpeed[0].fb_timName);
		$$('#top_speed_day').text(tempLdrSpeed[0].fb_timName);

		$$('.cls_temp_leaders_speed').remove();
	//COMBO FOR EACH
	_.forEach(tempLdrSpeed, function(value, key) {
			ls1 = value.fb_timName;
			ls2 = Math.round(value.a_speedTotal);

				if(temp2counter < 10) {
					$$('#temp_score_leaders_speed').append(
					'<div class="chip cls_temp_leaders_speed bg-white">' +
					'<div class="chip-media bg-red">' + ls2 + '</div>' +
					'<div class="chip-label color-black"> #: ' + ls1 + '</div>' +
					'</div>'
					);
				}

				$$('#speedleaders_page').append(
				'<div class="chip cls_temp_leaders_speed bg-white">' +
				'<div class="chip-media bg-red">' + ls2 + '</div>' +
				'<div class="chip-label color-black"> #: ' + ls1 + '</div>' +
				'</div>'
				);


				temp2counter ++;
		});
		console.log('TOTAL SPEED UI POSTED AT:  ' + tim.timCalculatedDuration + '  NOW: ' + _.now());
}
