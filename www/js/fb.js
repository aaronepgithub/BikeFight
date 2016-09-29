var database = firebase.database();
var top_king_name, top_king_rnd, top_king_spd, top_king_hr, top_king_cad, top_king_team;
var lastRoundIndex;
var lastRoundIndexSpeak;
var lastRoundIndexSpeak2;
var lastRoundIndexSpeakTeam;

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
						fb_timName: tim.timName,
						fb_timGroup: tim.timGroup,
						fb_RND: r1,
						fb_timTeam: tim.timTeam,
						fb_Date: pubFullDate,
						fb_DateNow: Date.now(),
						fb_SPD: r2,
						fb_CAD: r3,
						fb_HR: r4,
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
						fb_timName: tim.timName,
						fb_timGroup: tim.timGroup,
						fb_timTeam: tim.timTeam,
						fb_Date: pubFullDate,
						fb_DateNow: Date.now(),
						fb_timAvgSPDtotal: tim.timAvgSPDtotal,
						fb_timAvgCADtotal: tim.timAvgCADtotal,
						// fb_timAvgHRtotal: tim.timAvgHRtotal,
						fb_timDistanceTraveled: tim.timDistanceTraveled,
						fb_maxHRTotal: maxHRTotal,
						fb_scoreHRTotal: scoreHRTotal
				});

		
		console.log('TOTALS DATA POSTED AT:  ' + tim.timCalculatedDuration);
}



var dataSize;
//START GETCOMBO GETJSON
function get_combo() {
		console.log('Fctn get_combo');
		$$.getJSON('https://project-5844362817932994168.firebaseio.com/rounds/' + pubFullDate + '.json', function(data) {

				var xx1 = _.values(data);
				var xx2 = _.orderBy(xx1, 'fb_RND', 'desc');
				dataSize = _.size(xx2);
				console.log('Size-Number of Values:  ' + dataSize);
				//console.log('Combo Data:  ' + JSON.stringify(xx2));
				var xx_effort = _.orderBy(xx1, 'fb_scoreHRRound', 'desc');
				var xx_speed = _.orderBy(xx1, 'fb_SPD', 'desc');

				// //GET A UNIQUE ARRAY BASED ON NAME
				// var xx_reverse = _.orderBy(xx1, 'fb_DateNow', 'desc');
				// var xx_unique = _.sortedUniqBy(xx_reverse, 'fb_timName');

				// console.log('xx1:  ' + JSON.stringify(xx1));
				// 				console.log('xx_reverse:  ' + JSON.stringify(xx_reverse));
				// 								console.log('xx_unique:  ' + JSON.stringify(xx_unique));

				
				//TODO - OLD - GET RID OF
				//GET TOP CHAMP
				$$('#top_king').text(xx2[0].fb_timName);
				$$('#me_vs_king_title').text('ME VS.  ' + xx2[0].fb_timName.toUpperCase() + ' (THE CHAMP) ');
				$$('#me_vs_king_title2').text('THE CHAMP:  ' + xx2[0].fb_timName.toUpperCase() + ' (' + xx2[0].fb_RND + ') ');
				top_king_name = xx2[0].fb_timName;
				top_king_team = xx2[0].fb_timTeam;
				top_king_rnd = xx2[0].fb_RND;
				top_king_spd = xx2[0].fb_SPD;
				top_king_cad = xx2[0].fb_CAD;
				top_king_hr = xx2[0].fb_HR;
				ui_report200();




				//GET TOP EFFORT (HR) ROUND
				top_effort_round = _.maxBy(xx1, 'fb_scoreHRRound');
				console.log('top_effort_round  ' + top_effort_round);

					//FIND RANK OF TOP EFFORT/ROUND
					var round_effort_rank = _.findIndex(xx_effort,function(o) {
						return o.fb_scoreHRRound <= scoreHRRoundLast;
						});
					$$('.cls_effort_round_rank').text((1 + round_effort_rank) + '/' + dataSize);


				//GET TOP SPEED ROUND
				top_speed_round = _.maxBy(xx1, 'fb_SPD');
				console.log('top_speed_round  ' + top_speed_round);

					// FIND RANK OF TOP SPEED/ROUND
					var round_speed_rank = _.findIndex(xx_speed,function(o) {
						return o.fb_SPD <= tim.timLastSPD;
						});
					$$('.cls_avg_speed_round_rank').text((1 + round_speed_rank) + '/' + dataSize);


				//PREPARE SPEAK STR
				var lri = _.findIndex(xx2, function(o) {
						return o.fb_RND <= tim.timLastRND;
				});
				lastRoundIndex = lri + 1;
				if (lastRoundIndex >= 0) {
						//console.log('Your Last Round is Ranked Number ' + lastRoundIndex + '  for the day');
						lri_string = 'Your Last Round is Ranked Number  <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">  ' + lastRoundIndex + '  out of  ' +  dataSize  + '  </span> ' + '   for the day';
						lastRoundIndexSpeak = 'Your Last Round had a score of ' + tim.timLastRND + ' and is Ranked Number  ' + lastRoundIndex + '  out of  ' +  dataSize  + '  for the day';
						lastRoundIndexSpeak2 = 'The Champ is ' + top_king_name + '  from Team' + top_king_team + ' with a score of ' + top_king_rnd;
				} else {
						lri_string = 'Your Last Round is the Worst Today.';
						lastRoundIndexSpeak = 'Your Last Round is the Worst Today.  Very sad.';
				}

				$$('.cls_top_kings').remove();
				$$('.cls_top_kings_group').remove();
				$$('.cls_front_page').remove();
				$$('.my_last_rnd_rank').text(lastRoundIndex + '/' + dataSize);
				$$('.my_last_rnd').text(tim.timLastRND);
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
						// console.log('counter1: ' + counter1);console.log('counter2: ' + counter2);console.log('counter3: ' + counter3);
						// console.log('xxx1: ' + xxx1);console.log('xxx2: ' + xxx2);console.log('xxx3: ' + xxx3);console.log('xxx5: ' + xxx5);	

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


						if (xxx3 === tim.timGroup) {

								$$('#top_king_group').text(xxx1[0].fb_timName);
								// $$('.cls_top_kings_group').remove();
								$$('#riding_group_title').text('THE CHAMP OF MY RIDING GROUP: ' + tim.timGroup.toUpperCase());

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


						if (counter3 < 10) {
								//TOP TEN
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

				}); //END FOR EACH

		});
		console.log('DATA UPDATED AT:  ' + tim.timCalculatedDuration);
}
//END GETCOMBO GETJSON



function groupScorePost() {
  firebase.database().ref('group-score/users/'+tim.timName+'/').set({
    rider: tim.timName,
    score: tim.timBestRoundDay,
    pubDate: pubFullDate,
    group: tim.timGroup
  });
  console.log('groupScorePost');
}

function listenGroupScorePost() {
// Listen for adds
	var statusRef = firebase.database().ref('group-score');
	statusRef.on('value', function(snapshot) {
	//console.log('new Group Score Post' + JSON.stringify(snapshot.val()));
  });

}


var dataSizeLeaders;
function getTotals() {
	// var getTotalLeaders = firebase.database().ref('totals/'+ pubFullDate + '/');
	// getTotalLeaders.on('value', function(snapshot) {
	// console.log('getTotalLeaders' + JSON.stringify(snapshot.val()));
	//   });

$$.getJSON('https://project-5844362817932994168.firebaseio.com/totals/' + pubFullDate + '.json', function(data) {

		var xTotals1 = _.values(data);
		var xTotals2 = _.orderBy(xTotals1, 'fb_scoreHRTotal', 'desc');
		console.log('xTotals2:  ' + JSON.stringify(xTotals2));
		var xTotals3 = _.orderBy(xTotals1, 'fb_timAvgSPDtotal', 'desc');
		console.log('xTotals3:  ' + JSON.stringify(xTotals3));

		dataSizeLeaders = _.size(xTotals2);
		console.log('Size of Totals:  ' + dataSizeLeaders);

		//FIND RANK OF TOP TOTAL SCORES
		var total_effort_rank = _.findIndex(xTotals2,function(o) {
			return o.fb_scoreHRTotal <= scoreHRTotal;
			});
		var total_effort_rank_plus1 = total_effort_rank + 1;
		$$('.cls_effort_total_rank').text(total_effort_rank_plus1 + '/' + dataSizeLeaders);
		console.log('total_effort_rank_plus1:  ' + total_effort_rank_plus1 );


		//FIND RANK OF TOP TOTAL SPEED
		var total_speed_rank = _.findIndex(xTotals3,function(o) {
			return o.fb_timAvgSPDtotal <= tim.timAvgSPDtotal;
			});
		var total_speed_rank_plus1 = 1 + total_speed_rank;
		$$('.cls_avg_speed_total_rank').text(total_speed_rank_plus1 + '/' + dataSizeLeaders);
		console.log('total_speed_rank_plus1:  ' + total_speed_rank_plus1 );

	});


}


