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
						fb_HR: r4
				});
		}
		$$('#RTJ').html('FIGHTER DATA POSTED');
}

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
	console.log('new Group Score Post' + JSON.stringify(snapshot.val()));
  });

}


// function get_round_data() {
//     console.log('Fctn get_round_data');
//
//     $$.getJSON('https://project-5844362817932994168.firebaseio.com/rounds/' + pubFullDate + '.json', function(data) {
//         // console.log('Round Data:  ' + JSON.stringify(a));
//         var a = _.values(data);
//         var a1 = _.orderBy(a, 'fb_RND', 'desc');
//         var a2 = _.take(a1, 10);
//         //console.log('Round Data:  ' + JSON.stringify(a1));
//
//         $$('#top_king').text(a1[0].fb_timName);
//         $$('#me_vs_king_title').text('ME VS.  ' + a1[0].fb_timName.toUpperCase() + ' (THE CHAMP) ');
//         $$('#me_vs_king_title2').text('THE CHAMP:  ' + a1[0].fb_timName.toUpperCase() + ' (' + a1[0].fb_RND + ') ');
//         top_king_name = a1[0].fb_timName;
//         top_king_team = a1[0].fb_timTeam;
//         top_king_rnd = a1[0].fb_RND;
//         top_king_spd = a1[0].fb_SPD;
//         top_king_cad = a1[0].fb_CAD;
//         top_king_hr = a1[0].fb_HR;
//         ui_report200();
//
//
//         var lri = _.findIndex(a1, function(o) { return o.fb_RND <= tim.timLastRND; });
//         lastRoundIndex = lri + 1;
//         if (lastRoundIndex >= 0) {
//             console.log('Your Last Round is Ranked Number ' + lastRoundIndex + '  for the day');
//             lri_string = 'Your Last Round is Ranked Number <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + lastRoundIndex +'</span>' +  '  for the day';
//             lastRoundIndexSpeak = 'Your Last Round is Ranked Number ' + lastRoundIndex + '  for the day';
//             lastRoundIndexSpeak2 = 'The Champ is ' + top_king_name + '  from Team' + top_king_team;
//         }
//         else {
//             lri_string = 'Your Last Round is the Worst Today.';
//             lastRoundIndexSpeak = 'Your Last Round is the Worst Today.  Very sad.';
//         }
//
//         $$('.cls_top_kings').remove();
//         $$('.cls_front_page').remove();
//
//         _.forEach(a2, function(value, key) {
//             e1 = value.fb_timName;
//             e3 = value.fb_RND;
//             //console.log(e1 + ' - '  + e3);
//             $$('#top_kings').append(
//                 '<div class="cls_top_kings chip bg-white">' +
//                 '<div class="chip-media bg-red">' + Math.round(e3) + '</div>' +
//                 '<div class="chip-label color-black">' + e1 + '</div>' +
//                 '</div>'
//             );
//
//             $$('#front_page').append(
//                 '<div class="chip bg-white">' +
//                 '<div class="chip-media bg-red">' + Math.round(e3) + '</div>' +
//                 '<div class="chip-label color-black">' + e1 + '</div>' +
//                 '</div>'
//             );
//         }); //END FOR EACH
//
//
//
//     });
//     $$('#RTJ').html('ROUND DATA UPDATED');
// }

//START GROUP LEADERBOARD
// function get_round_data_group() {
//   console.log('Fctn get_round_data_group');
//     $$.getJSON('https://project-5844362817932994168.firebaseio.com/rounds/' + pubFullDate + '.json', function(data) {
//         // console.log('Round Data:  ' + JSON.stringify(a));
//         var a = _.values(data);
//         var a0 = _.filter(a, {
//             'fb_timGroup': tim.timGroup
//           });
//         var a1 = _.orderBy(a0, 'fb_RND', 'desc');
//         var a2 = _.take(a1, 10);
//         //console.log('Group Round Data:  ' + JSON.stringify(a2));
//
//         $$('#top_king_group').text(a1[0].fb_timName);
//         $$('.cls_top_kings_group').remove();
//         $$('#riding_group_title').text('THE CHAMP OF MY RIDING GROUP: ' + tim.timGroup.toUpperCase());
//
//
//         _.forEach(a2, function(value, key) {
//             e1 = value.fb_timName;
//             e3 = value.fb_RND;
//             //console.log(e1 + ' - '  + e3);
//             $$('#top_kings_group').append(
//                 '<div class="cls_top_kings_group chip bg-white">' +
//                 '<div class="chip-media bg-red">' + Math.round(e3) + '</div>' +
//                 '<div class="chip-label color-black">' + e1 + '</div>' +
//                 '</div>'
//             );
//
//
//         }); //END FOR EACH
//     });
//       $$('#RTJ').html('GROUP DATA UPDATED');
// }
//END GROUP LEADERBOARD




// function get_top_fighters() {
//     $$.getJSON('https://project-5844362817932994168.firebaseio.com/rounds/' + pubFullDate + '.json', function(data) {
//         console.log('Fctn get_top_fighters');
//         var a = _.values(data);
//         var a1 = _.orderBy(a, 'fb_RND', 'desc');
//         var a2 = _.take(a1, 50);
//         //console.log('Round Data:  ' + JSON.stringify(a2));
//         top_king_name = a1[0].fb_timName;
//         top_king_team = a1[0].fb_timTeam;
//         top_king_rnd = a1[0].fb_RND;
//         top_king_spd = a1[0].fb_SPD;
//         top_king_cad = a1[0].fb_CAD;
//         top_king_hr = a1[0].fb_HR;
//
//         $$('.cls_champs_page').remove();
//         var a2_counter = 1;
//         _.forEach(a2, function(value, key) {
//
//             e1 = value.fb_timName;
//             e3 = value.fb_RND;
//             e5 = value.fb_timTeam;
//
//             $$('#champs_page').append(
//                 '<div class="chip cls_champs_page bg-white">' +
//                 '<div class="chip-media bg-red">' + Math.round(e3) + '</div>' +
//                 '<div class="chip-label color-black"> #: ' + a2_counter + ' | ' + e1 + ' from ' + e5 + '</div>' +
//                 '</div>'
//             );
//             a2_counter++;
//         });
//     });
// }

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
				//GET TOP CHAMP

				//PREPARE SPEAK STR
				var lri = _.findIndex(xx2, function(o) {
						return o.fb_RND <= tim.timLastRND;
				});
				lastRoundIndex = lri + 1;
				if (lastRoundIndex >= 0) {
						//console.log('Your Last Round is Ranked Number ' + lastRoundIndex + '  for the day');
						lri_string = 'Your Last Round is Ranked Number <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + lastRoundIndex + 'out of ' +  dataSize  + ' </span>' + '  for the day';
						lastRoundIndexSpeak = 'Your Last Round is Ranked Number ' + lastRoundIndex + '  out of ' +  dataSize  + ' for the day';
						lastRoundIndexSpeak2 = 'The Champ is ' + top_king_name + '  from Team' + top_king_team;
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
		$$('#RTJ').html('DATA UPDATED AT:  ' + tim.timCalculatedDuration);
}
//END GETCOMBO GETJSON




//console.log(e1 + ' - '  + e3);
// $$('#top_kings').append(
//     '<div class="cls_top_kings chip bg-white">' +
//     '<div class="chip-media bg-red">'+ Math.round(e3) +'</div>' +
//     '<div class="chip-label color-black">'+ e1 +'</div>' +
//     '</div>'
// );
//
// $$('#front_page').append(
//     '<div class="chip bg-white">' +
//     '<div class="chip-media bg-red">'+ Math.round(e3) +'</div>' +
//     '<div class="chip-label color-black">'+ e1 +'</div>' +
//     '</div>'
// );





//  $$('.cls_champs_page').remove();
//   _.forEach(a1, function(value, key) {
//
//     e1 = value.fb_timName;
//     e3 =  value.fb_RND;
//
//
//     $$('#champs_page').append(
//         '<div class="chip cls_champs_page bg-white">' +
//         '<div class="chip-media bg-red">'+ Math.round(e3) +'</div>' +
//         '<div class="chip-label color-black">'+ e1 +'</div>' +
//         '</div>'
//     );
//   });



//  var unique = a.map(function(obj) { return obj.fb_timTeam; });
//  unique = unique.filter(function(v,i) { return unique.indexOf(v) == i; });
//  var rptChips_count2 = 0;
//  console.log('unique:  ' + JSON.stringify(unique));
//   $$('.cls_champs_page_teams').remove();
//           _.forEach(unique, function(value, key) {
//          if(rptChips_count2 === 2){
//            }
//          else {
//
//            e1 = value.fb_timName;
//            e2 = value.fb_timTeam;
//            if(value.fb_timTeam === "") {e2 = "None";}
//            e3 =  value.fb_RND;
//
//
//              $$('#champs_page_teams').append(
//                 '<div class="cls_champs_page_teams chip bg-white">' +
//              //    '<div class="chip-media bg-red"></div>' +
//                 '<div class="chip-label color-black">'+ unique[rptChips_count2] +'</div>' +
//                 '</div>'
//             );
//          rptChips_count2++;
//            }
//          });









//INSERT SHOPPAGE INTO DIV
// function get_shop_pages() {
//     $$.getJSON('https://project-5844362817932994168.firebaseio.com/shoppages_' + tim.timTeam + '.json', function(data) {
//         var a = _.values(data);
//         //console.log(a.toString());
//
//         $$('#shoppage_content_block').html(a);
//     });
// }


//GET TEAM NAME FROM LEADERBOARD
// $('#ui_report3').on('click', '.shop_link', function() {
//     //console.log('click shop link');
//     get_shop_pages_popup($(this).text());
// });
//
// $('#ui_report4').on('click', '.shop_link', function() {
//     //console.log('click shop link');
//     get_shop_pages_popup($(this).text());
// });
//
// $('#ui_report6').on('click', '.shop_link', function() {
//     //console.log('click shop link');
//     get_shop_pages_popup($(this).text());
// });
//
// $('#ui_report7').on('click', '.shop_link', function() {
//     //console.log('click shop link');
//     get_shop_pages_popup($(this).text());
// });
//
// $('.click_ui').on('click', '.shop_link', function() {
//     //console.log('click shop link');
//     get_shop_pages_popup($(this).text());
// });



//INSERT SHOPPAGE INTO POPUP
// function get_shop_pages_popup(bs_name) {
//     $$.getJSON('https://project-5844362817932994168.firebaseio.com/shoppages_' + bs_name + '.json', function(data) {
//         var a = _.values(data);
//         //console.log(a.toString());
//         $$('#shoppage_popup2').html(a);
//         mainView.router.loadPage('#shop_page_popup');
//     });
// }

//HOMEPAGE CHIPS
// function home_page_chips_delme() {
//     $$.getJSON('https://project-5844362817932994168.firebaseio.com/scores/users.json?orderBy="fb_RND_t"&limitToLast=10', function(scores) {
//         var a = _.values(scores);
//         //console.log('a:  ' + JSON.stringify(a));
//
//         //CHIPS
//         rptChips_count = 0;
//         rptChips_count2 = 0;
//         $$('.cls_front_page').remove();
//         $$('.cls_front_page_teams').remove();
//         _.forEach(a, function(value, key) {
//             if (rptChips_count === 20) {} else {
//                 e1 = value.fb_Name;
//                 e2 = value.fb_Team;
//                 e3 = value.fb_RND_t;
//                 e4 = value.fb_RoundsComplete;
//                 //console.log(e1 + ' - '  + e3);
//                 $$('#front_page').append(
//                     '<div class="cls_front_page chip bg-white">' +
//                     '<div class="chip-media bg-red">' + Math.round(e3) + '</div>' +
//                     '<div class="chip-label color-black">' + e1 + '</div>' +
//                     '</div>'
//                 );
//                 $$('#champs_page').append(
//                     '<div class="cls_front_page chip bg-white">' +
//                     '<div class="chip-media bg-red">' + Math.round(e3) + '</div>' +
//                     '<div class="chip-label color-black">' + e1 + '</div>' +
//                     '</div>'
//                 );
//
//                 $$('#front_page_teams').append(
//                     '<div class="cls_front_page_teams chip bg-white">' +
//                     '<div class="chip-media bg-red">' + e4 + '</div>' +
//                     '<div class="chip-label color-black">' + e2 + '</div>' +
//                     '</div>'
//                 );
//                 $$('#champs_page_teams').append(
//                     '<div class="cls_front_page_teams chip bg-white">' +
//                     '<div class="chip-media bg-red">' + e4 + '</div>' +
//                     '<div class="chip-label color-black">' + e2 + '</div>' +
//                     '</div>'
//                 );
//
//                 rptChips_count++;
//             }
//         });
//
//         var unique = a.map(function(obj) {
//             return obj.fb_Team;
//         });
//         unique = unique.filter(function(v, i) {
//             return unique.indexOf(v) == i;
//         });
//         var rptChips_count2 = 0;
//         // console.log(JSON.stringify(unique));
//         $$('.cls_front_page_teams').remove();
//         _.forEach(unique, function(value, key) {
//             if (rptChips_count2 === 10) {} else {
//
//                 e1 = value.fb_Name;
//                 e2 = value.fb_Team;
//                 e3 = value.fb_RND_t;
//                 e4 = value.fb_RoundsComplete;
//
//                 $$('#front_page_teams').append(
//                     '<div class="cls_front_page_teams chip bg-white">' +
//                     //    '<div class="chip-media bg-red"></div>' +
//                     '<div class="chip-label color-black">' + unique[rptChips_count2] + '</div>' +
//                     '</div>'
//                 );
//                 rptChips_count2++;
//             }
//         });
//
//
//         //END RPT1
//     });
//
// }

// function getScores_delme() {
//     //SET FREQUENCY
//     //PUB TO REPORT VIEWS
//     $$.getJSON('https://project-5844362817932994168.firebaseio.com/scores/users.json?orderBy="fb_RND_t"&limitToLast=20', function(scores) {
//         var a = _.values(scores);
//         //console.log('a:  ' + JSON.stringify(a));
//
//         //REPORT 30 CHIPS
//         rpt30_count = 0;
//         $$('.cls_rpt30').remove();
//         _.forEach(a, function(value, key) {
//             if (rpt30_count === 20) {} else {
//                 e1 = value.fb_Name;
//                 //   e2 = value.fb_Team;
//                 e3 = value.fb_RND_t;
//
//                 $$('#ui_report30_div').append(
//                     '<div class="cls_rpt30 chip bg-white">' +
//                     '<div class="chip-media bg-red">' + Math.round(e3) + '</div>' +
//                     '<div class="chip-label color-black">' + e1 + '</div>' +
//                     '</div>'
//                 );
//                 rpt30_count++;
//             } //END OF ELSE
//         }); //END OF RPT30 CHIPS
//
//         //REPORT 30 CHIPS END
//
//
//         //OVERALL
//         var o_count = 0;
//         var o = _.orderBy(a, 'fb_RND_t', 'desc');
//         //console.log('o:  ' + JSON.stringify(o));
//
//         //OVERALL-TODAY
//         var ot_count = 0;
//         var ot = _.filter(a, {
//             'fb_DATE_t': pubFullDate
//         });
//         var ot1 = _.orderBy(ot, 'fb_RND_t', 'desc');
//         var otr1, otr2, otr3;
//         $$('.cls_report3').remove();
//         _.forEach(ot1, function(value, key) {
//             if (ot_count === 3) {} else {
//                 e1 = value.fb_Name;
//                 e2 = value.fb_Team;
//                 e3 = value.fb_RND_t;
//                 ui_report3(e1, e2, e3);
//                 ot_count++;
//             } //END OF ELSE
//         }); //END OF FOR EACH TODAY
//
//         //FOR EACH TEAM
//         //SAME AS EACH DAY, JUST ADDING A TEAM FILTER
//         var ott_count = 0;
//         var ot_team = _.filter(ot, {
//             'fb_Team': tim.timTeam
//         });
//         var ot_team1 = _.orderBy(ot_team, 'fb_RND_t', 'desc');
//         $$('.cls_report4').remove();
//         _.forEach(ot_team1, function(value, key) {
//             if (ott_count === 3) {} else {
//                 e1 = value.fb_Name;
//                 e2 = value.fb_Team;
//                 e3 = value.fb_RND_t;
//                 ui_report4(e1, e2, e3);
//                 ott_count++;
//             } //END OF ELSE
//         }); //END OF FOR EACH TEAM TODAY
//
//         //END OF FOR EACH TEAM
//
//         //FOR EACH GROUP
//         //SAME AS EACH DAY, JUST ADDING A TEAM FILTER
//         var otg_count = 0;
//         var ot_group = _.filter(ot, {
//             'fb_Group': tim.timGroup
//         });
//         var ot_group1 = _.orderBy(ot_group, 'fb_RND_t', 'desc');
//         $$('.cls_report6').remove();
//         _.forEach(ot_group1, function(value, key) {
//             if (otg_count === 3) {} //END OF count
//             else {
//                 e1 = value.fb_Name;
//                 e2 = value.fb_Team;
//                 e3 = value.fb_RND_t;
//                 ui_report6(e1, e2, e3);
//                 otg_count++;
//             } //END OF ELSE
//         });
//         //END OF FOR EACH GROUP
//
//
//
//         //FOR EACH STYLE
//         //SAME AS EACH DAY, JUST ADDING A TEAM FILTER
//         var ots_count = 0;
//         var ot_style = _.filter(ot, {
//             'fb_Style': tim.timStyle
//         });
//         var ot_style1 = _.orderBy(ot_style, 'fb_RND_t', 'desc');
//         $$('.cls_report7').remove();
//         _.forEach(ot_style1, function(value, key) {
//             if (ots_count === 3) {} //END OF count
//             else {
//                 e1 = value.fb_Name;
//                 e2 = value.fb_Team;
//                 e3 = value.fb_RND_t;
//                 ui_report7(e1, e2, e3);
//                 ots_count++;
//             } //END OF ELSE
//         });
//         //END OF FOR EACH GROUP
//
//
//         //END OF FOR EACH STYLE
//
//         //OVERALL-HOUR
//         var oh_count = 0;
//         var past_hour = _.now() - 3600000;
//         var oh0 = _.filter(ot, function(o) {
//             return o.fb_TIME_h > past_hour;
//         });
//         var oh1 = _.orderBy(oh0, 'fb_RND_h', 'desc');
//         $$('.cls_report5').remove();
//         _.forEach(oh1, function(value, key) {
//             if (oh_count === 3) {} else {
//                 e1 = value.fb_Name;
//                 e2 = value.fb_Team;
//                 e3 = value.fb_RND_t;
//                 //console.log('Hourly:  ' + e1 + e2 + e3);
//                 ui_report5(e1, e2, e3);
//                 oh_count++;
//             } //END OF ELSE
//         }); //END OF FOR EACH HOUR
//
//         //RPT1 - ME VS BEST THIS HOUR
//         var ohb_count = 0;
//         var c1, c2, c3, c4, c5, c6;
//         _.forEach(oh1, function(value, key) {
//             if (ohb_count === 1) {} //END OF count
//             else {
//                 c1 = value.fb_Name;
//                 c2 = value.fb_Team;
//                 c3 = value.fb_RND_h;
//                 c4 = value.fb_SPD_h;
//                 c5 = value.fb_CAD_h;
//                 c6 = value.fb_HR_h;
//                 //announcement1 = 'Compare yourself with the best ROUND SCORE from this hour,  ' + c3 + ',  by ' + c1 + ', from ' + c2 + '.';
//                 //console.log('The Best:  ' + c1 + ':  ' + c3);
//                 ui_report1(c1, c2, c3, c4, c5, c6);
//                 $$('#name_best').text('ME vs. ' + c1 + ' (PAST HOUR)');
//                 ohb_count++;
//             }
//         });
//         //END RPT1
//     });
//
// }

//var announcement1 = 'The best from the past hour is...';

// function allData() {
//   //SET FREQUENCY
//   //ALL DATA IN A SINGLE CALL
//   $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=20',function(data){
//
//       //USED FOR ALL DATA REQUESTS
//     var a = _.values(data);
//
//     var b_count=0;
//     var bb = _.filter(a, { 'fb_timTeam': tim.timTeam});
//     var bbb = _.orderBy(bb, 'fb_timBestRND', 'desc');
//
//     var g_count=0;
//     var gg = _.filter(a, { 'fb_timGroup': tim.timGroup});
//     var ggg = _.orderBy(gg, 'fb_timBestRND', 'desc');
//
//

//
//     var d_count=0;
//     var ddd = _.orderBy(a, 'fb_timBestRND', 'desc');
//
//
// var e_count=0;
// var ee = _.filter(a, { 'fb_TodaysDate': pubFullDate});
// var eee = _.orderBy(ee, 'fb_timBestRNDToday', 'desc');
//
// var f_count=0;
// var past_hour = _.now() - 3600000;
// var ff = _.filter(a, function(o) { return o.fb_timBestRNDTodayTime > past_hour; });
// var fff = _.orderBy(ff, 'fb_timHourBestRoundScore', 'desc');
//var fff = _.orderBy(ff, 'fb_timBestRNDToday', 'desc');
//console.log('f: ' + JSON.stringify(fff));

//aaa
// var a_count=0;
// var aa = _.filter(a, { 'fb_pubFullDate': 20160828});
// var aaa = _.orderBy(aa, 'fb_timBestRND', 'desc');

// var b_count=0;
// var bb = _.filter(a, { 'fb_timTeam': tim.timTeam});
// var bbb = _.orderBy(bb, 'fb_timBestRND', 'desc');

//rp1
//     var c_count=0;
//     //var cc = _.filter(a, { 'fb_timTeam': tim.timTeam});
//     var ccc = _.orderBy(a, 'fb_timBestRND', 'desc');

// var c1, c2, c3, c4, c5, c6;
// _.forEach(ccc, function(value, key) {
//     if(c_count === 1){
//       // console.log('c_count === 1');
//       } //END OF count
//     else {
//       c1 = value.fb_timName;
//       c2 = value.fb_timTeam;
//       c3=value.fb_timBestRND;
//       c4=value.fb_timBestSPD;
//       c5=value.fb_timBestCAD;
//       c6=value.fb_timBestHR;
//       c_count++;
//     } //END OF ELSE
//   }); //END OF FOR EACH ccc
//   ui_report1(c1, c2, c3, c4, c5, c6);


//   //ddd
//   var d1, d2, d3;
//   $$('.cls_report2').remove();
//   _.forEach(ddd, function(value, key) {
//       if(d_count === 3){
//         // console.log('d_count === 3');
//         } //END OF count
//       else {
//         d1 = value.fb_timName;
//         d2 = value.fb_timTeam;
//         d3=value.fb_timBestRND;
//         ui_report2(d1, d2, d3);
//         d_count++;
//       } //END OF ELSE
//     }); //END OF FOR EACH ddd

//eee
// var e1, e2, e3;
// $$('.cls_report3').remove();
// _.forEach(eee, function(value, key) {
//     if(e_count === 3){
//       // console.log('e_count === 3');
//       } //END OF count
//     else {
//       e1 = value.fb_timName;
//       e2 = value.fb_timTeam;
//       e3=  value.fb_timBestRNDToday;
//       //console.log(e1 + e2 + e3);
//       ui_report3(e1, e2, e3);
//       e_count++;
//     } //END OF ELSE
//   }); //END OF FOR EACH eee

//fff

// var f1, f2, f3;
// $$('.cls_report5').remove();
// _.forEach(fff, function(value, key) {
//     if(f_count === 3){
//       // console.log('f_count === 3');
//       } //END OF count
//     else {
//       f1 = value.fb_timName;
//       f2 = value.fb_timTeam;
//       f3=  value.fb_timBestRNDToday;
//     //console.log('f123:  ' + f1 + f2 + f3);
//       ui_report5(f1, f2, f3);
//       f_count++;
//     } //END OF ELSE
//   }); //END OF FOR EACH fff


//bbb
//   var b1, b2, b3;
//   $$('.cls_report4').remove();
//   _.forEach(bbb, function(value, key) {
//       if(b_count === 3){
//         // console.log('b_count === 3');
//         } //END OF count
//       else {
//         b1 = value.fb_timName;
//         b2 = value.fb_timTeam;
//         b3=  value.fb_timBestRND;
//         // console.log(b1 + b2 + b3);
//         ui_report4(b1, b2, b3);
//         b_count++;
//       } //END OF ELSE
//     }); //END OF FOR EACH bbb

// //ggg
// var g1, g2, g3;
// $$('.cls_report6').remove();
// _.forEach(ggg, function(value, key) {
//     if(g_count === 3){
//       // console.log('b_count === 3');
//       } //END OF count
//     else {
//       g1 = value.fb_timName;
//       g2 = value.fb_timGroup;
//       g3=  value.fb_timBestRND;
//       // console.log(b1 + b2 + b3);
//       ui_report6(g1, g2, g3);
//       g_count++;
//     } //END OF ELSE
//   }); //END OF FOR EACH ggg



// _.forEach(aaa, function(value, key) {
//     if(a_count === 3){console.log('a_count === 3');} //END OF I
//     else {
//       // console.log('a: key: ' + key);
//       // console.log('a: value: ' + JSON.stringify(value));
//       // console.log('a: fb_timName: ' + value.fb_timName);
//       // console.log('a: fb_timBestRND: ' + value.fb_timBestRND);
//       a_count++;
//     } //END OF ELSE
//   }); //END OF FOR EACH aaa

// //bbb
// _.forEach(bbb, function(value, key) {
//     if(b_count === 3){console.log('b_count === 3');} //END OF I
//     else {
//       // console.log('b: key: ' + key);
//       // console.log('b: value: ' + JSON.stringify(value));
//       // console.log('b: fb_timName: ' + value.fb_timName);
//       b_count++;
//     } //END OF ELSE
//   }); //END OF FOR EACH bbb


//   }); END OF GETJSON
// END OF //ALL DATA IN A SINGLE CALL


// }END OF ALL DATA FUNCTION



// function remove_FB_users() {
//     var adaRef1 = firebase.database().ref('score/users/' + tim.timName);
//     adaRef1.remove()
//         .then(function() {
//             //console.log("Remove1 succeeded.");
//         })
//         .catch(function(error) {
//             console.log("Remove1 failed: " + error.message);
//         });
//
//     var adaRef2 = firebase.database().ref('users/' + tim.timName);
//     adaRef2.remove()
//         .then(function() {
//             //console.log("Remove2 succeeded.");
//         })
//         .catch(function(error) {
//             console.log("Remove2 failed: " + error.message);
//         });
// }


// $$('#rt_round_val').on('click', function() {
//     console.log('reset local storage');
//     localStorage.setItem("atbscore", 0);
//     localStorage.setItem("atbfulldate", 0);
//     localStorage.setItem("atbfulltime", 0);
//     localStorage.setItem("atbheartrate", 0);
//     localStorage.setItem("atbcadence", 0);
//     localStorage.setItem("atbspeed", 0);
//     tim.timTodayBestRoundScore = 0;
//     tim.timATRoundScore = 0;
//     tim.timATRoundScoreDate = 0;
//     tim.timATRoundScoreTime = 0;
//     tim.timATSpeedScore = 0;
//     tim.timATCadenceScore = 0;
//     tim.timATHeartrateScore = 0;
// });



// function setScores(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12) {
//     firebase.database().ref('scores/users/' + tim.timName).set({
//         fb_Name: tim.timName,
//         fb_Team: tim.timTeam,
//         fb_Group: tim.timGroup,
//         fb_Style: tim.timStyle,
//         fb_RND_t: b1,
//         fb_SPD_t: b2,
//         fb_CAD_t: b3,
//         fb_HR_t: b4,
//         fb_DATE_t: b5,
//         fb_TIME_t: b6,
//         fb_RND_h: b7,
//         fb_SPD_h: b8,
//         fb_CAD_h: b9,
//         fb_HR_h: b10,
//         fb_DATE_h: b11,
//         fb_TIME_h: b12,
//         fb_Duration: tim.timCalculatedDuration,
//         fb_Distance: tim.timDistanceTraveled,
//         fb_RoundsComplete: tim.timNumberofRounds
//     }).then(function() {
//         //console.log('Now Publish to UI, FB has been set Post-Round');
//     }).catch(function(error) {
//         console.log("Remove2 failed: " + error.message);
//     });
// }


// function setAllTimeScoreFB() {
//     firebase.database().ref('alltimescore/users/' + tim.timName).set({
//         fb_timName: tim.timName,
//         fb_timGroup: tim.timGroup,
//         fb_timTeam: tim.timTeam,
//         fb_timStyle: tim.timStyle,
//
//         fb_scoreDate: tim.timATRoundScoreDate,
//         fb_scoreTime: tim.timATRoundScoreTime,
//         fb_timBestRND: tim.timATRoundScore,
//         fb_timBestHR: tim.timATHeartrateScore,
//         fb_timBestCAD: tim.timATCadenceScore,
//         fb_timBestSPD: tim.timATSpeedScore,
//
//         fb_timBestRNDToday: tim.timTodayBestRoundScore,
//         fb_timBestRNDTodayTime: tim.timTodayBestRoundScoreTime,
//         fb_timBestRNDTodayDate: tim.timTodayBestRoundScoreDate,
//         fb_timBestHRToday: tim.timTodayBestHR,
//         fb_timBestCADToday: tim.timTodayBestCAD,
//         fb_timBestSPDToday: tim.timTodayBestSPD,
//
//         //fb_timHourBestRoundScore: tim.timHourBestRoundScore,
//
//         fb_TodaysDate: pubFullDate
//     });


// firebase.database().ref('dailyscore/' + pubFullDate + '/' + tim.timName).set({
//     // fb_pubYear: pubYear,
//     // fb_pubMonth: pubMonth,
//     // fb_pubDay: pubDay,
//     fb_pubFullDate: pubFullDate,
//     fb_timName: tim.timName,
//     fb_timTeam: tim.timTeam,
//     fb_timTeam: tim.timTeam,
//     fb_timBestRND: tim.timTodayBestRoundScore,
//     fb_timBestHR: tim.timTodayBestHR,
//     fb_timBestCAD: tim.timTodayBestCAD,
//     fb_timBestSPD: tim.timTodayBestSPD
// });


// firebase.database().ref('monthlyscore/' + pubMonth + '/' + tim.timName).set({
//     // fb_pubYear: pubYear,
//     // fb_pubMonth: pubMonth,
//     // fb_pubDay: pubDay,
//     fb_pubFullDate: xxx,
//     fb_timName: tim.timName,
//     fb_timTeam: tim.timTeam,
//     fb_timTeam: tim.timTeam,
//     fb_timBestRND: xx,
//     fb_timBestHR: z,
//     fb_timBestCAD: y,
//     fb_timBestSPD: x
// });

// firebase.database().ref('yearlyscore/' + pubYear + '/' + tim.timName).set({
//     // fb_pubYear: pubYear,
//     // fb_pubMonth: pubMonth,
//     // fb_pubDay: pubDay,
//     fb_pubFullDate: xxx,
//     fb_timName: tim.timName,
//     fb_timTeam: tim.timTeam,
//     fb_timTeam: tim.timTeam,
//     fb_timBestRND: xx,
//     fb_timBestHR: z,
//     fb_timBestCAD: y,
//     fb_timBestSPD: x
// });

// firebase.database().ref('bikeshopscore/' + tim.timTeam + '/' + tim.timName).set({
//     // fb_pubYear: pubYear,
//     // fb_pubMonth: pubMonth,
//     // fb_pubDay: pubDay,
//     fb_pubFullDate: xxx,
//     fb_timName: tim.timName,
//     fb_timTeam: tim.timTeam,
//     fb_timTeam: tim.timTeam,
//     fb_timBestRND: xx,
//     fb_timBestHR: z,
//     fb_timBestCAD: y,
//     fb_timBestSPD: x
// });
//
// firebase.database().ref('teamscore/' + tim.timTeam + '/' + tim.timName).set({
//     // fb_pubYear: pubYear,
//     // fb_pubMonth: pubMonth,
//     // fb_pubDay: pubDay,
//     fb_pubFullDate: xxx,
//     fb_timName: tim.timName,
//     fb_timTeam: tim.timTeam,
//     fb_timTeam: tim.timTeam,
//     fb_timBestRND: xx,
//     fb_timBestHR: z,
//     fb_timBestCAD: y,
//     fb_timBestSPD: x
// });


//}


//NOT USED - MAYBE USED FOR RT IN THE FUTURE?
// function setScoreFB() {
//     console.log('setScoreFB - Not Used, Remove');
//DATE FUNCTION
// var today = new Date();
// var dd = today.getDate();
// var mm = today.getMonth() + 1; //January is 0!
// var yyyy = today.getFullYear();
// if (dd < 10) {
//     dd = '0' + dd;
// }
// if (mm < 10) {
//     mm = '0' + mm;
// }
// var pubFullDate = yyyy + mm + dd;
// var pubMonth = mm;
// var pubDay = dd;
// var pubYear = yyyy;
// console.log(pubFullDate + pubMonth + pubDay + pubYear);
// if (tim.timRealTimeShare == 'On' || tim.timRealTimeShare == 'RealTime') {
//     firebase.database().ref('score/users/' + tim.timName).set({
//         fb_pubYear: pubYear,
//         fb_pubMonth: pubMonth,
//         fb_pubDay: pubDay,
//         fb_pubFullDate: pubFullDate,
//         fb_timName: tim.timName,
//         fb_timTeam: tim.timTeam,
//         fb_timGroup: tim.timGroup,
//         fb_timStyle: tim.timStyle,
//         fb_timAvgSPD: tim.timAvgSPD,
//         fb_timAvgHR: tim.timAvgHR,
//         fb_timAvgCAD: tim.timAvgCAD,
//         fb_timAvgRND: tim.timAvgRND,
//         timLastHR: tim.timLastHR,
//         timLastCAD: tim.timLastCAD,
//         timLastSPD: tim.timLastSPD,
//         timLastRND: tim.timLastRND
//     });
// } else {
//     return;
// }
//}

// function updateUserDataTim() {
//     //CALLED FROM BT
//     //ONLY WHEN DATASHARE IS RT
//     if (tim.timRealTimeShare === 'RealTime') {
//         firebase.database().ref('users/' + tim.timName).set({
//             fb_timName: tim.timName,
//             fb_timTeam: tim.timTeam,
//             fb_timEvent: tim.timEvent,
//             fb_timHR: tim.timHR,
//             fb_timSpeed: tim.timSpeed,
//             fb_timCadence: tim.timCadence,
//             fb_timPower: tim.timPower,
//             fb_timPhoneSpeed: tim.timPhoneSpeed,
//             fb_timLat: tim.timLat,
//             fb_timLon: tim.timLon,
//             fb_timDirection: tim.timDirection,
//             fb_timWAC: tim.timWAC,
//             fb_timWAS: tim.timWAS
//         });
//     } else {
//         //console.log('rtdata is turned off');
//     }
// }

//function displayFB(v1, v2, v3, v4) {
//console.log('displayFB'); //LIST OF ACTIVE RIDERS
// $$('#fbUl').append(
//
//     '        <li class = "fb-item-li">' +
//     '          <a href="#" class="item-link item-content">' +
//     '              <div class="item-media"><i class="fa fa-database"></i></div>' +
//     '              <div class="item-inner"> ' +
//     '              <div class="item-title-row"> ' +
//     '                  <div class="item-title">' + v1 + '</div></div> ' +
//     '              </div> ' +
//     '          </a> ' +
//     '      </li>'
// );
//}

// function requestUserData() {
//     //RIGHT NOW, IT IS SET TO ONCE
//     if (tim.timRealTimeShare == 'On' || tim.timRealTimeShare == 'RealTime') {
//         console.log('requestUserData');
//         // firebase.database().ref('users').orderByChild("fb_timTeam").equalTo(tim.timTeam).once('value', function (allMessagesSnapshot) {
//         //     //CLEAR ACTIVE RIDER LIST
//         //     $$('.fb-item-li').remove();
//         //
//         //     allMessagesSnapshot.forEach(function (messageSnapshot) {
//         //         var aChildName = messageSnapshot.child("fb_timName").val();
//         //         var aChildTeam = messageSnapshot.child("fb_timTeam").val();
//         //         var aChildHR = messageSnapshot.child("fb_timHR").val();
//         //         var aChildSPD = messageSnapshot.child("fb_timSpeed").val();
//         //         var aChildCAD = messageSnapshot.child("fb_timCadence").val();
//         //         var aChildPower = messageSnapshot.child("fb_timPower").val();
//         //         var aChildCADWahoo = messageSnapshot.child("fb_WAC").val();
//         //         var aChildSPDWahoo = messageSnapshot.child("fb_WAS").val();
//         //         displayFB(aChildName, aChildHR, aChildSPD, aChildCAD);
//         //     });
//         // });
//     } else {
//         //console.log('rtdata is turned off');
//     }
// }





// function populate_at_div_fb_today() {
//     firebase.database().ref('dailyscore/' + pubFullDate + '/').orderByChild("fb_timBestRND").limitToLast(3).once('value', function (allMessagesSnapshot) {
//         $$('.fb-atscore-li_bikeshop_today').remove();
//         allMessagesSnapshot.forEach(function (messageSnapshot) {
//             var msg1 = messageSnapshot.child("fb_timName").val();
//             var msg2 = messageSnapshot.child("fb_timTeam").val();
//             var msg3 = messageSnapshot.child("fb_timBestRND").val();
//             var msg4 = messageSnapshot.child("fb_timBestHR").val();
//             var msg5 = messageSnapshot.child("fb_timBestSPD").val();
//             var msg6 = messageSnapshot.child("fb_timBestCAD").val();
//             console.log('today_everyone:  ' + msg1 + msg2 + msg3 + msg4 + msg5 + msg6);
//             today_everyone(msg1, msg2, msg3, msg4, msg5, msg6);
//         });
//     });
// }

// function populate_at_div_fb() {
//
//     firebase.database().ref('alltimescore/users').orderByChild("fb_timBestRND").limitToLast(3).once('value', function (allMessagesSnapshot) {
//         $$('.fb-atscore-li_bikeshop').remove();
//         allMessagesSnapshot.forEach(function (messageSnapshot) {
//             var msg1 = messageSnapshot.child("fb_timName").val();
//             var msg2 = messageSnapshot.child("fb_timTeam").val();
//             var msg3 = messageSnapshot.child("fb_timBestRND").val();
//             var msg4 = messageSnapshot.child("fb_timBestHR").val();
//             var msg5 = messageSnapshot.child("fb_timBestSPD").val();
//             var msg6 = messageSnapshot.child("fb_timBestCAD").val();
//             console.log('Message:  ' + msg1 + msg2 + msg3 + msg4 + msg5 + msg6);
//             tim.fb_BestRND = msg3;
//             tim.fb_BestSPD = msg5;
//             tim.fb_BestHR = msg4;
//             tim.fb_BestCAD = msg6;
//             tim.fb_BestNAME = msg1;
//             tim.fb_BestSHOP = msg2;
//             populate_everyone_bestround_div(msg1, msg2, msg3, msg4, msg5, msg6);
//         });
//     });
// }

// function populate_diy_best_round() {
//     firebase.database().ref('bikeshopscore/' + tim.timTeam + '/').orderByChild("fb_timBestRND").limitToLast(3).once('value', function (allMessagesSnapshot) {
//         $$('.fb-atscore-li_diy').remove();
//         allMessagesSnapshot.forEach(function (messageSnapshot) {
//             var msg1 = messageSnapshot.child("fb_timName").val();
//             var msg2 = messageSnapshot.child("fb_timTeam").val();
//             var msg3 = messageSnapshot.child("fb_timBestRND").val();
//             var msg4 = messageSnapshot.child("fb_timBestHR").val();
//             var msg5 = messageSnapshot.child("fb_timBestSPD").val();
//             var msg6 = messageSnapshot.child("fb_timBestCAD").val();
//             console.log('shop_everyone:  ' + msg1 + msg2 + msg3 + msg4 + msg5 + msg6);
//             populate_diy_best_round_div(msg1, msg2, msg3, msg4, msg5, msg6);
//         });
//
//     });
// }