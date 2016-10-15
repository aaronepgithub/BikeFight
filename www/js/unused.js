top_king_name = 'Epstein';
top_king_rnd = 99.0;
top_king_spd = 22.2;

function popupLeaderboard() {
	myApp.modal({
			title: 	'	<div>4 Minutes Remain.<hr> ' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">Sprint Crit Leaders</span> <br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-heartbeat"></i> ' + top_king_name + ' (' + top_king_rnd + ' %Max)<br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-dashboard"></i> ' + top_king_name + ' (' + top_king_spd + ' Mi/hr)<br><hr>' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">All-Day Crit Leaders</span> <br>' +
					'	<i class="fa fa-heartbeat"></i> ' + top_king_name + ' (' + top_king_rnd + ' %Max)<br>' +
					'	<i class="fa fa-dashboard"></i> ' + top_king_name + ' (' + top_king_spd + ' Mi/hr)<br><hr>' +
					'	</div> '
	});

	setTimeout(function() {
			myApp.closeModal();

	}, 10000);
}


function popupMyLeaderboard() {
	myApp.modal({
			title: 	'	<div>3 Minutes Remain.<hr> ' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">My Latest Crit</span> <br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-heartbeat"></i> ' + top_king_name + ' (' + top_king_rnd + ' %Max)<br>' +
					'	<i class="fa fa-clock-o"></i> <i class="fa fa-dashboard"></i> ' + top_king_name + ' (' + top_king_spd + ' Mi/hr)<br><hr>' +
					'	<span class="bg-red color-white" style="font-size:1.1em;font-weight:bold;">My All-Day Crit</span> <br>' +
					'	<i class="fa fa-heartbeat"></i> ' + top_king_name + ' (' + top_king_rnd + ' %Max)<br>' +
					'	<i class="fa fa-dashboard"></i> ' + top_king_name + ' (' + top_king_spd + ' Mi/hr)<br><hr>' +
					'	</div> '
	});

	setTimeout(function() {
			myApp.closeModal();

	}, 10000);
}




					// // '	The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
					// 					'	The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name + '</span> ' +
					// '	from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span> ' +
					// 					'	The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name + '</span> ' +
					// '	from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span> ' +


						// 				if (tim.timNumberofRounds >= 0) {
						// 		console.log('TTS240 Count:  240, timCalculatedDuration:  ' + tim.timCalculatedDuration);
						// 		//console.log(strFourMinutes);
						// 		if (tim.timStyle !== "NO") {
						// 				TTS
						// 					.speak({
						// 							text: strFourMinutes,
						// 							locale: 'en-GB',
						// 							rate: 1.5
						// 					}, function() {
						// 							console.log('TTS240 SUCCESS');
						// 					}, function(reason) {
						// 							console.log('TTS240 FAILURE:  ' + reason);
						// 					});
						// 		} //TTS
						// }


//Unused

// <!-- #1  Settings -->
// 									<div class="swiper-slide bg-black">
// 										<div class="card bg-black" style="margin-top:0px">

// 											<div class="card-header color-white bg-black no-border">
// 												<h3 style="padding:0px;margin-bottom:0px">SETTINGS</h3>
// 											</div>
// 											<hr>
// 											<div class="card-content bg-black">
// 												<div class="card-content-inner small_content_inner color-white bg-black" style="padding:8px">
// 													<div class="content-block" style="margin:0px">
// 														<div class="list-block inset">
// 															<ul>
// 																<li>
// 																	<!-- <a href="#" class="item-link item-content"> -->
// 																	<a href="#bluetooth" class="item-link item-content">
// 																		<div class="item-media"><i class="fa fa-bluetooth fa-2x"></i></div>
// 																		<div class="item-inner">
// 																			<div class="item-title">Bluetooth</div>
// 																			<!-- <div class="item-after">Label</div> -->
// 																		</div>
// 																	</a>
// 																</li>
// 																<li>
// 																	<a href="#user" class="item-link item-content">
// 																		<div class="item-media"><i class="fa fa-cog fa-2x"></i></div>
// 																		<div class="item-inner">
// 																			<div class="item-title">User Settings</div>
// 																			<!-- <div class="item-after">Label</div> -->
// 																		</div>
// 																	</a>
// 																</li>
// 																<li>
// 																	<a id="id_world_champs" href="#game1" class="item-link item-content">
// 																		<div class="item-media"><i class="fa fa-trophy fa-2x"></i></div>
// 																		<div class="item-inner">
// 																			<div class="item-title">Games</div>
// 																		</div>
// 																	</a>
// 																</li>
// 																<li>
// 																	<a id="id_team_owners" href="#teams" class="item-link item-content">
// 																		<div class="item-media"><i class="fa fa-bank fa-2x"></i></div>
// 																		<div class="item-inner">
// 																			<div class="item-title">Team Owners</div>
// 																		</div>
// 																	</a>
// 																</li>
// 															</ul>
// 															<h5>Swipe for advanced views...</h5>
// 															<!-- div class="buttons-row bg-black color-white" style="padding: 10px;">
// 																<a id="start_btn" href="#" class="button button-fill button-raised color-red" style="font-weight: bold; content-align: center;">Start</a>
// 															</div> -->

// 														</div>
// 													</div>
// 												</div>
// 											</div><hr>


// 										</div>
// 									</div>

									

//NEW ui_report1
// function ui_report1(cc1, cc2, cc3, cc4, cc5, cc6) {
// 	//console.log('ui_report1');console.log('me vs. the best:  alldates, allteams, allgroups, allridingtypes');
// 	$$('#ui_report1_div').html(
// 		// '        <br><div style="text-align:center;font-weight: bold;font-size: 1.3em;">vs. ' + cc1 + ' from <span class="shop_link">' + cc2 + '</span></div><br>' +
// 		'        <div class="row bg-red">' +
// 		'         <div class="col-20"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">RND</a></div>' +
// 		'         <div class="col-50"><a href="#" class="cls_rt_round_val button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgRND) + '</a></div>' +
// 		'         <div class="col-30"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 2.0em"><b class="shop_link color-white">' + Math.round(cc3) + '</b></a></div>' +
// 		'       </div><br><br>' +
// 		'        <div class="row bg-black">' +
// 		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">SPD</a></div>' +
// 		'         <div class="col-50"><a href="#" class="tab-btn-s button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgSPD * 10) / 10 + '</a></div>' +
// 		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(cc4 * 10) / 10 + '</b></a></div>' +
// 		'       </div>' +
// 		'        <hr><div class="row bg-black">' +
// 		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">CAD</a></div>' +
// 		'         <div class="col-50"><a href="#" class="tab-btn-c button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgCAD) + '</a></div>' +
// 		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(cc5) + '</b></a></div>' +
// 		'       </div>' +
// 		'        <hr><div class="row bg-black">' +
// 		'         <div class="col-20"><a href="#" class="button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">HR</a></div>' +
// 		'         <div class="col-50"><a href="#" class="tab-btn-h button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgHR) + '</a></div>' +
// 		'         <div class="col-30 button bg-black  button-big button-fill button-raised" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(cc6) + '</b></a></div>' +
// 		'       </div><br>'
// 	);
// }
//END ui_report1

//ui_report2 list of best rounds, alltimes, allshops, allteams
// function ui_report2(e1, e2, e3) {
// 	//console.log('ui_report2');console.log('ui_report2 list of best rounds, alltimes, allshops, allteams');
// 	$$('#ui_report2').append(
// 		'        <div class="row bg-black cls_report2">' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
// 		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
// 		'       </div>'
// 	);
// }
//ui_report2 list of best rounds, alltimes, allshops, allteams

//ui_report3 list of best rounds, today, allshops, allteams
// function ui_report3(e1, e2, e3) {
// 	//console.log('ui_report3');console.log('ui_report3 list of best rounds, today, allshops, allteams');
// 	$$('#ui_report3').append(
// 		'        <div class="row bg-black cls_report3">' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
// 		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
// 		// '         <div class="col-40"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + e1 + '</a></div>' +
// 		// '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
// 		// '         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 1.2em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
// 		'       </div>'
// 	);
// }
//ui_report3


//ui_report5 list of best rounds, past hour, today, allshops, allteams
// function ui_report5(e1, e2, e3) {
// 	//console.log('ui_report5');console.log('ui_report3 list of best rounds, past hour, today, allshops, allteams');
// 	$$('#ui_report5').append(
// 		'        <div class="row bg-black cls_report5">' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
// 		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
// 		// '         <div class="col-40"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + e1 + '</a></div>' +
// 		// '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
// 		// '         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 1.2em"><b class="shop_link color-white">' + e2 + '</b></a></div><br>' +
// 		'       </div>'
// 	);
// }
//ui_report5

// function ui_report4(e1, e2, e3) {
// 	$$('#ui_report4').append(
// 		'        <div class="row bg-black cls_report4">' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
// 		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
// 		'       </div>'
// 	);
// }

// function ui_report6(e1, e2, e3) {
// 	$$('#ui_report6').append(
// 		'        <div class="row bg-black cls_report6">' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
// 		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
// 		'       </div>'
// 	);
// }

// function ui_report7(e1, e2, e3) {
// 	$$('#ui_report7').append(
// 		'        <div class="row bg-black cls_report7">' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
// 		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
// 		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
// 		'       </div>'
// 	);
// }


//ui_report4
//console.log('ui_report4');console.log('ui_report4 List of the Best Rounds - by team -aka bikeshop');
// function ui_report4(e1, e2, e3) {
//   $$('#ui_report4').append(
//     '        <div class="row bg-black cls_report4">' +
//     '         <div class="col-40"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + e1 + '</a></div>' +
//     '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
//     '         <div class="col-40" button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 1.2em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
//     '       </div>'
//   );
// }
//ui_report4


// function populate_everyone_bestround_div(e1, e2, e3, e4, e5, e6) {
//   console.log('populate_everyone_bestround_div');console.log('List of the Best Rounds - from everyone');
//   $$('#new_everyone_best_round_div').prepend(
//     '        <div class="row bg-black fb-atscore-li_bikeshop">' +
//     '         <div class="col-40"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + e1 + '</a></div>' +
//     '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
//     '         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 1.2em"><b class=" color-white">' + e2 + '</b></a></div><br>' +
//     '       </div>'
//   );
// }


// function today_everyone(e1, e2, e3, e4, e5, e6) {
//   console.log('populate_everyone_bestround_div_today');console.log('List of the Best Rounds - from everyone - Today');
//   $$('#new_everyone_best_round_div_today').prepend(
//     '        <div class="row bg-black fb-atscore-li_bikeshop_today">' +
//     '         <div class="col-40"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + e1 + '</a></div>' +
//     '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
//     '         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 1.2em"><b class=" color-white">' + e2 + '</b></a></div><br>' +
//     '       </div>'
//   );
// }

// function populate_diy_best_round_div(e1, e2, e3, e4, e5, e6) {
//   console.log('populate_diy_best_round_div');console.log('List of the Best Rounds - from my Shop');
//   $$('#diy_best_round_div').prepend(
//     '        <div class="row bg-black fb-atscore-li_diy">' +
//     '         <div class="col-40"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + e1 + '</a></div>' +
//     '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
//     '         <div class="col-40"><a href="#shop_page" class="button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 1.2em"><b class=" color-white"><u>' + e2 + '</u></b></a></div><br>' +
//     '       </div>'
//   );
// }

// function populate_me_vs_at_div_fb() {
//   console.log('populate_me_vs_at_div_fb');console.log('me vs the alltime best - from everyone');
//   $$('#new_fb_best_div').html(
//     '        <br><div style="text-align:center;font-weight: bold;font-size: 1.3em;">vs. ' + tim.fb_BestNAME + ' from ' + tim.fb_BestSHOP + '</div><br>' +
//     '        <div class="row bg-red">' +
//     '         <div class="col-20"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">RND</a></div>' +
//     '         <div class="col-50"><a href="#" class="cls_rt_round_val button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgRND) + '</a></div>' +
//     '         <div class="col-30"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 2.0em"><b class=" color-white">' + Math.round(tim.fb_BestRND) + '</b></a></div>' +
//     '       </div><br><br>' +
//     '        <div class="row bg-black">' +
//     '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">SPD</a></div>' +
//     '         <div class="col-50"><a href="#" class="tab-btn-s button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgSPD * 10) / 10 + '</a></div>' +
//     '         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(tim.fb_BestSPD * 10) / 10 + '</b></a></div>' +
//     '       </div>' +
//     '        <hr><div class="row bg-black">' +
//     '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">CAD</a></div>' +
//     '         <div class="col-50"><a href="#" class="tab-btn-c button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + tim.timAvgCAD + '</a></div>' +
//     '         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + tim.fb_BestCAD + '</b></a></div>' +
//     '       </div>' +
//     '        <hr><div class="row bg-black">' +
//     '         <div class="col-20"><a href="#" class="button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">HR</a></div>' +
//     '         <div class="col-50"><a href="#" class="tab-btn-h button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + tim.timAvgHR + '</a></div>' +
//     '         <div class="col-30 button bg-black  button-big button-fill button-raised" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + tim.fb_BestHR + '</b></a></div>' +
//     '       </div><br>'
//   );
// }



				// createAvgRoundScore.push(Math.round(tim.timAvgCAD / 6));
				// tim.timAvgRND = Math.round(_.mean(createAvgRoundScore) * 4); //cadence of 120, score of 80
				// $$('.cls_rtrnd2').text(tim.timAvgRND);

				// //CREATE THE ROUND SCORE CAD
				// var tempCAD1 = tim.timAvgCAD - 60;  //ASSUME MAX OF 120, RANGE FROM 120 TO 60
				// var tempCAD2 = Math.round((tempCAD1 + tempHR3) * 100) / 100; //MAX VAL OF 20 BASED ON MAX CAD OF 120 2 DECIMAL PLACES
				// var tempCAD3;
				// if (tempCAD2 > 0 && tempCAD2 <60) {
				// 	tempCAD3 = tempCAD2 * 2;
				// 	createAvgRoundScore.push(tempCAD3);
				// 	tim.timAvgRND = Math.round(_.mean(createAvgRoundScore) * 10) / 10;  //1 DECIMAL PLACE
				// 	$$('.cls_rtrnd2').text(tim.timAvgRND);
				// }
				// //CREATE THE ROUND SCORE CAD







//  <!--OLD... SETTINGS PAGE page3 - START  ***********************************************-->
//                 <!-- <div data-page="page3" class="page cached layout-dark" style="background: url(polka10.png)">
//                     <div class="navbar">
//                         <div class="navbar-inner">
//                             <div class="center">SETTINGS</div>
//                         </div>
//                     </div>
//                 <br><br><div class="content-block">
//                     <p class="inset buttons-row">
//                     </p>
//                 </div>
//                 <div class="page-content">
//                   <form>
//                       <div class="list-block">
//                           <ul>
//                               <li class="item-content">
//                                   <div class="item-inner">
//                                       <div class="item-title label">Rounder</div>
//                                       <div class="item-input">
//                                           <input id="frm_Username" type="text" name="frm_Username">
//                                       </div>
//                                   </div>
//                               </li>
//                               <li>
//                                   <a href="#" class="item-link smart-select" data-open-in="popup" data-back-on-select="false" data-navbar-theme="black" data-form-theme="black"
//                                       data-searchbar="true">
//                                       <select id="frm_Bikeshop_Name" name="frm_bs_name">
//                                           <option value="Solo">Solo</option><option value="EVEPC">EVEPC</option><option value="Zen Bikes">Zen Bikes</option><option value="Off the Bridge">Off the Bridge</option><option value="Square Pizza">Square Pizza, NYC</option>
//                                         </select>
//                                       <div class="item-content">
//                                           <div class="item-inner">
//                                               <div class="item-title">Select Team</div>
//                                           </div>
//                                       </div>
//                                   </a>
//                               </li>
//                           </ul>
//                       </div>
//                       <div class="card" style="margin-left:45px;margin-right:45px">
//                           <div class="list-block">
//                               <ul>
//                                   <li>
//                                       <a id="login_start_btn" onclick="myFunction()" href="#" class="button button-big ripple-pink">Start</a>
//                                       <script>
//                                           function myFunction() {
//                                               console.log('clicked the login button');
//                                               tim.timBikeShop = $$('#frm_Bikeshop_Name').val();
//                                               localStorage.frm_Username = $$('#frm_Username').val();
//                                               localStorage.frm_Bikeshop_Name = tim.timBikeShop;
//                                               tim.timName = localStorage.frm_Username;
//                                               console.log('tim.timBikeShop1:  ' + tim.timBikeShop);
//                                               $$('#center_title').text('ROUNDERS, PRESENTED BY ' + tim.timBikeShop.toUpperCase());
//                                               $$('#img_logo').attr('src', 'css/logo/'+tim.timBikeShop+'.png');
//                                               $$('#title_bs').text('ABOUT ' + tim.timBikeShop.toUpperCase());
//                                               $$('#bs_name').text(tim.timBikeShop.toUpperCase());
//                                               get_shop_pages();
//                                           }
//                                     </script>
//                                   </li>
//                               </ul>
//                           </div>
//                       </div>
//                     </form>
//                   <div class="list-block">
//                       <ul>
//                           <li>
//                               <div class="item-content">
//                                   <div class="item-inner">
//                                       <div class="item-title label">Riding Group</div>
//                                       <div class="item-input">
//                                           <input id="frm_Team" type="text" value="None" style="background-color:#222;color:white">
//                                       </div>
//                                   </div>
//                               </div>
//                           </li>
//                           <li>
//                               <div class="item-content" style="font: white">
//                                   <div class="item-inner" style="padding:0;margin:0;">
//                                       <div class="item-title label">Tire Size</div>
//                                       <div class="item-input">
//                                           <select id="frm_tireSize" type="text" value="700X25" style="background-color:#222;color:white">
//                                               <option>700X23</option>
//                                               <option>700X25</option>
//                                               <option>700X28</option>
//                                               <option>700X30</option>
//                                               <option>700X32</option>
//                                               <option>700X38</option>
//                                               <option>700X40</option>
//                                               <option>700X42</option>
//                                               <option>700X44</option>
//                                           </select>
//                                       </div>
//                                   </div>
//                               </div>
//                           </li>
//                           <li class="item-content">
//                               <div class="item-inner">
//                                   <div class="item-title label">Riding Type</div>
//                                   <div class="item-input">
//                                       <select id="frm_Riding_Type" style="background-color:#222;color:white">
//                                         <option>Touring</option>
//                                         <option>Fast Pace</option>
//                                         <option>Commuting</option>
//                                         <option>Fixed Gear</option>
//                                         <option>City Bike</option>
//                                       </select>
//                                   </div>
//                               </div>
//                           </li>
//                       </ul>
//                       <div class="list-block-label" style="font-weight:bold">ROUNDERS can join Riding Groups for group messaging and leaderboards.</div>
//                       <div class="list-block-label" style="font-weight:bold">DATA SHARING can be disabled completely or set-to REAL-TIME.</div>
//                       <div class="list-block-label" style="font-weight:bold">TIRE-SIZE is used for accurate speed and distance calculations.</div>
//                       <div class="list-block-label" style="font-weight:bold">RIDING TYPE are special groups used for additional leaderboards.</div>
//                       <hr>
//                       <div class="card-content-inner">
//                           <p class="buttons-row">
//                       <a id="frm_Submit" href="#" class="button button-big button-fill button-raised color-red">UPDATE SETTINGS</a>
//                           </p>
//                       </div><br>
//                   </div>
//               </div>
//                 </div> -->
//                 <!-- END OF PAGE 3 -->
//
//                 <!--SETTINGS PAGE32 - START  ***********************************************-->
//                 <!-- <div data-page="page32" class="page cached layout-dark" style="background: url(polka10.png)">
//                     <div class="navbar">
//                         <div class="navbar-inner">
//                             <div class="center">SETTINGS</div>
//                         </div>
//                     </div>
//                     <div class="page-content">
//                       <form>
//                           <div class="list-block">
//                               <ul>
//                                   <li class="item-content">
//                                       <div class="item-inner">
//                                           <div class="item-title label">Rounder</div>
//                                           <div class="item-input">
//                                               <input id="frm_Username" type="text" name="frm_Username">
//                                           </div>
//                                       </div>
//                                   </li>
//
//                                   <li>
//                                       <a href="#" class="item-link smart-select" data-open-in="popup" data-back-on-select="false" data-navbar-theme="black" data-form-theme="black"
//                                           data-searchbar="true">
//
//                                           <select id="frm_Bikeshop_Name" name="frm_bs_name">
//                                               <option value="Solo">Solo</option><option value="EVEPC">EVEPC</option><option value="Zen Bikes">Zen Bikes</option><option value="Off the Bridge">Off the Bridge</option><option value="Square Pizza">Square Pizza, NYC</option>
//                                             </select>
//                                           <div class="item-content">
//                                               <div class="item-inner">
//
//                                                   <div class="item-title">Select Team</div>
//
//                                               </div>
//                                           </div>
//                                       </a>
//                                   </li>
//                               </ul>
//                           </div>
//
//                           <div class="card" style="margin-left:45px;margin-right:45px">
//                               <div class="list-block">
//                                   <ul>
//                                       <li>
//
//                                           <a id="login_start_btn" onclick="myFunction()" href="#" class="button button-big ripple-pink">Start</a>
//                                           <script>
//                                               function myFunction() {
//                                                   console.log('clicked the login button');
//                                                   tim.timBikeShop = $$('#frm_Bikeshop_Name').val();
//
//                                                   localStorage.frm_Username = $$('#frm_Username').val();
//                                                   localStorage.frm_Bikeshop_Name = tim.timBikeShop;
//                                                   tim.timName = localStorage.frm_Username;
//                                                   console.log('tim.timBikeShop1:  ' + tim.timBikeShop);
//
//                                                   $$('#center_title').text('ROUNDERS, PRESENTED BY ' + tim.timBikeShop.toUpperCase());
//
//
//                                                   $$('#img_logo').attr('src', 'css/logo/'+tim.timBikeShop+'.png');
//                                                   $$('#title_bs').text('ABOUT ' + tim.timBikeShop.toUpperCase());
//                                                   $$('#bs_name').text(tim.timBikeShop.toUpperCase());
//                                                   get_shop_pages();
//
//
//                                                   console.log('tim.timName  ' + tim.timName);
//                                                   if (localStorage.atbscore === undefined || localStorage.atbscore.length < 2 || localStorage.atbscore === 'undefined' || localStorage.atbscore === 'none') {
//                                                       localStorage.atbscore = '0';
//                                                   }
//                                                   if (localStorage.atbfulldate === undefined || localStorage.atbfulldate.length < 2 || localStorage.atbfulldate === 'undefined' || localStorage.atbfulldate === 'none') {
//                                                       localStorage.atbfulldate = '0';
//                                                   }
//                                                   if (localStorage.atbfulltime === undefined || localStorage.atbfulltime.length < 2 || localStorage.atbfulltime === 'undefined' || localStorage.atbfulltime === 'none') {
//                                                       localStorage.atbfulltime = '0';
//                                                   }
//                                                   if (localStorage.atbheartrate === undefined || localStorage.atbheartrate.length < 2 || localStorage.atbheartrate === 'undefined' || localStorage.atbheartrate === 'none') {
//                                                       localStorage.atbheartrate = '0';
//                                                   }
//                                                   if (localStorage.atbcadence === undefined || localStorage.atbcadence.length < 2 || localStorage.atbcadence === 'undefined' || localStorage.atbcadence === 'none') {
//                                                       localStorage.atbcadence = '0';
//                                                   }
//                                                   if (localStorage.atbspeed === undefined || localStorage.atbspeed.length < 2 || localStorage.atbspeed === 'undefined' || localStorage.atbspeed === 'none') {
//                                                       localStorage.atbspeed = '0';
//                                                   }
//                                               }
//                                         </script>
//                                       </li>
//                                   </ul>
//                               </div>
//                           </div>
//
//
//
//
//                       </form>
//
//
//                       <div class="list-block">
//
//                           <ul>
//                               <li>
//                                   <div class="item-content">
//                                       <div class="item-inner">
//                                           <div class="item-title label">Riding Group</div>
//                                           <div class="item-input">
//                                               <input id="frm_Team" type="text" value="None" style="background-color:#222;color:white">
//                                           </div>
//                                       </div>
//                                   </div>
//                               </li>
//
//
//                               <li>
//                                   <div class="item-content" style="font: white">
//                                       <div class="item-inner">
//                                           <div class="item-title label">Tire Size</div>
//                                           <div class="item-input">
//                                               <select id="frm_tireSize" type="text" value="700X25" style="background-color:#222;color:white">
//                                                   <option>700X23</option>
//                                                   <option>700X25</option>
//                                                   <option>700X28</option>
//                                                   <option>700X30</option>
//                                                   <option>700X32</option>
//                                                   <option>700X38</option>
//                                                   <option>700X40</option>
//                                                   <option>700X42</option>
//                                                   <option>700X44</option>
//                                               </select>
//                                           </div>
//                                       </div>
//                                   </div>
//                               </li>
//                               <li class="item-content">
//                                   <div class="item-inner">
//                                       <div class="item-title label">Riding Type</div>
//                                       <div class="item-input">
//                                           <select id="frm_Riding_Type" style="background-color:#222;color:white">
//                                             <option>Touring</option>
//                                             <option>Fast Pace</option>
//                                             <option>Commuting</option>
//                                             <option>Fixed Gear</option>
//                                             <option>City Bike</option>
//                                           </select>
//                                       </div>
//                                   </div>
//                               </li>
//                           </ul>
//
//                           <div class="list-block-label" style="font-weight:bold">ROUNDERS can join Riding Groups for group messaging and leaderboards.</div>
//                           <div class="list-block-label" style="font-weight:bold">DATA SHARING can be disabled completely or set-to REAL-TIME.</div>
//                           <div class="list-block-label" style="font-weight:bold">TIRE-SIZE is used for accurate speed and distance calculations.</div>
//                           <div class="list-block-label" style="font-weight:bold">RIDING TYPE are special groups used for additional leaderboards.</div>
//
//                           <hr>
//                           <div class="card-content-inner">
//                               <p class="buttons-row">
//                           <a id="frm_Submit" href="#page33" class="button button-big button-fill button-raised color-red">UPDATE SETTINGS</a>
//                               </p>
//                           </div><br>
//                       </div>
//
//                   </div>
//                 </div> -->
//
//               <!--SETTINGS PAGE32 - END  ***********************************************-->
//
//               <!--SETTINGS PAGE33 - START  ***********************************************-->
//               <!-- <div data-page="page33" class="page cached layout-dark" style="background: url(polka10.png)">
//                   <div class="navbar">
//                       <div class="navbar-inner">
//                           <div class="center">SETTINGS</div>
//                       </div>
//                   </div>
//                   <div class="page-content">
//
//
//
//                     <p style="text-align: center;font-weight: bold; font-size:1.2em">START/STOP ROUNDS</p>
//
//                     <div class="buttons-row" style="padding: 10px;">
//                         <a id="start_btn" href="#page4" class="button button-fill button-raised color-red start_btn_disable" style="font-weight: bold; content-align: center;">Start</a>
//                         <a id="stop_btn" href="#" class="button button-fill button-raised color-red" style="font-weight: bold; content-align: center;">Stop</a>
//                     </div>
//
//                     <div id="timer_btn3" class="color-white timer_btn_cls" style="text-align: center">300 SECOND ROUND</div>
//                     <div id="timer_btn_bubbles5" class="cls_timer_bubbles color-white" style="text-align: center; padding-top: 5px; padding-bottom: 15px;"><i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i><i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i></div>
//
//                       <div class="content-block">
//                     <div class="list-block-label" style="font-weight:bold"><p>Each ROUND is measured using a ROUND PERFORMANCE SCORE between 1-100.<p></div>
//                     <div class="list-block-label" style="font-weight:bold"><p>Higher ROUND SCORES indicate increased performance.<p></div>
//                     <div class="list-block-label" style="font-weight:bold"><p>ROUND SCORE displays and leaderboards are used while riding to measure performance against yourself and others.<p></div>
//                     <div class="list-block-label" style="font-weight:bold"><p>ROUNDERS doesn't do any user tracking and doesn't save any user data.<p></div>
//                     </div>
//                 </div>
//               </div> -->
//
//             <!--SETTINGS PAGE33 - END  ***********************************************-->
//
//
// <!--ZEN
//                     <div class="card">
//                     <div class="card-header">
//                         <img src="http://www.zenbikes.com/merchant/4160/images/site/ZEN_logo.png" style="width:240px;">
//                     </div>
//                     <div class="card-content">
//                         <div class="card-content-inner">134 W 24th Street<br>New York, NY 10011<br>zenbikes.info@gmail.com
//                         <div>1-212-929-2453</div>
//                         </div>
//                     </div>
//                     </div>
//                     <br>
//                     <div>
//                     <img src="http://www.zenbikes.com/merchant/4160/images/site/wrench-stem-1110-14-nth.jpg" style="width:100%;">
//                     </div>
//                     <div>
//                     <img src="http://www.zenbikes.com/merchant/4160/images/site/back_to_school_2000x667.gif" style="width:100%;">
//                     </div>
//                     <div>
//                     <img src="http://www.zenbikes.com/merchant/4160/images/site/spec_mtn1100txl_13_h.jpg" style="width:100%;">
//                     </div><br><br><br>
//                 ZEN -->
//
// <!--OTB
//                 <div class="card">
//                     <div class="card-header">
//                     <h2>Off the Bridge Coffee</h2>
//                     </div>
//                     <div class="card-content">
//                     <div class="card-content-inner">105 Canal St, New York, NY 10002
//                         <div>(212) 775-8599</div>
//                         <div><h4>Hours</h4></div>
//                         <div>M-F 8AM-8PM</div><div>SAT 10AM-7PM</div><div>SUN 10AM-6PM</div>
//                     </div>
//                     </div>
//                 </div>
//                 <br><br><br>
//                 OTB -->
//
// <!--EV
//                 <div class="card">
//                 <div class="card-header">
//                     <h2>EVEPC</h2>
//                 </div>
//                 <div class="card-content">
//                     <div class="card-content-inner">
//                     <h3>Eric Vigil Elite Performance Cycling</h3>
//                     PH: 917 676 3368
//                     </div>
//                     </div>
//
//                 </div>
//                 </div>
//                 <br><br><br>
//             EV -->
//
// <!--SQ PZA
//             <div class="card">
//                 <div class="card-header">
//                 <h2>SQUARE PIZZA</h2>
//                 </div>
//                 <div class="card-content">
//                 <div class="card-content-inner">201 Clinton St, New York, NY 10002
//                     <div>(646) 678-4294</div>
//                     <div><h4>Hours</h4></div>
//                     <div>M-S 11AM-9PM</div><div>SUN 11AM-8PM</div>
//                 </div>
//                 </div>
//             </div>
//             <div class="card">
//                 <div class="card-header">
//                 <h2>Popular Items</h2>
//                 </div>
//                 <div class="card-content">
//                 <div class="card-content-inner">
//                 Basic Cheese Pizza<br>
//                 Mozzarella cheese and homemade marinara sauce.  <br><br>
//                 Garlic Knots<br><br>
//                 Pepperoni Pizza<br>
//                 Shredded mozzarella cheese, homemade marinara sauce and pepperoni.
//                 </div>
//                 </div>
//             </div>
//             <br><br><br>
//             SQPZA -->
//
// <!-- CARD TEMPLATES
//         <div class="card">
//             <div class="card-content">
//             <div class="card-content-inner">This is simple card with plain text. But card could contain its own header, footer, list view, image, and any elements inside.</div>
//             </div>
//         </div> -->
// <!-- <div class="card">
//             <div class="card-header">Card header</div>
//             <div class="card-content">
//             <div class="card-content-inner">Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.</div>
//             </div>
//             <div class="card-footer">Card Footer</div>
//         </div> -->
// <!-- <div class="card">
//             <div class="card-content">
//             <div class="card-content-inner">Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. </div>
//             </div>
//         </div> -->
// <!-- <div class="card">
//             <div class="card-header">Card header</div>
//             <div class="card-content">
//             <div class="card-content-inner">Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.</div>
//             </div>
//             <div class="card-footer">
//             <a href="#" class="link">Website</a>
//             <a href="#" class="link">Maps</a>
//             </div>
//         </div> END OF CARD TEMPLATES-->
//
// //WORKS
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=20',function(data){
//
//   var a = _.values(data);
//   _.forEach(a, function(value, key) {
//       console.log('key: ' + key);
//       console.log('value: ' + JSON.stringify(value));
//       console.log('fb_timName: ' + value.fb_timName);
//       });
// });
//
// //WORKS - DATE SORT
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=20',function(data){
//
//   var a = _.values(data);
//   var b = _.sortBy(a, function(o) { return o.fb_pubFullDate; });
//   _.forEach(b, function(value, key) {
//       console.log('key: ' + key);
//       console.log('value: ' + JSON.stringify(value));
//       console.log('fb_timName: ' + value.fb_timName);
//     }); //END OF FOR EACH
//
// }); //END OF GETJSON
//
//
// //WORKS BEST RND ORDER
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=20',function(data){
//
//   var a = _.values(data);
//   var aa = _.orderBy(a, 'fb_timBestRND', 'desc');
//   _.forEach(aa, function(value, key) {
//       console.log('key: ' + key);
//       console.log('value: ' + JSON.stringify(value));
//       console.log('fb_timName: ' + value.fb_timName);
//     }); //END OF FOR EACH
//
// }); //END OF GETJSON
//
//
// //ALL DATA IN A SINGLE CALL
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=20',function(data){
//
//   var a = _.values(data);
//   var a_count=0;
//   var aa = _.filter(a, { 'fb_pubFullDate': 20160828});
//   var aaa = _.orderBy(aa, 'fb_timBestRND', 'desc');
//
//   var b_count=0;
//   var bb = _.filter(a, { 'fb_timBikeShop': tim.timBikeShop});
//   var bbb = _.orderBy(aa, 'fb_timBestRND', 'desc');
//
//   _.forEach(aaa, function(value, key) {
//       if(a_count === 3){console.log('a_count === 3');} //END OF I
//       else {
//         console.log('a: key: ' + key);
//         console.log('a: value: ' + JSON.stringify(value));
//         console.log('a: fb_timName: ' + value.fb_timName);
//         console.log('a: fb_timBestRND: ' + value.fb_timBestRND);
//         a_count++;
//       } //END OF ELSE
//     }); //END OF FOR EACH aaa
//
//     _.forEach(bbb, function(value, key) {
//         if(b_count === 3){console.log('b_count === 3');} //END OF I
//         else {
//           console.log('b: key: ' + key);
//           console.log('b: value: ' + JSON.stringify(value));
//           console.log('b: fb_timName: ' + value.fb_timName);
//           b_count++;
//         } //END OF ELSE
//       }); //END OF FOR EACH bbb
//
// }); //END OF GETJSON
// // END OF //ALL DATA IN A SINGLE CALL
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //UNDERSCORE...
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
//
// //console.log(JSON.stringify(data));
//
// var x = _.values(data);
//
// var y = _.sortBy(x, 'fb_pubFullDate');
// var z = _.groupBy(x, 'fb_pubFullDate');
// var a = _.toArray(y);
// console.log('z:  ' + JSON.stringify(z));
//
//
// });
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&startAt=89',function(data){console.log(JSON.stringify(data));var x = _.values(data);console.log('my Result:  ' + JSON.stringify(x));});
// //my Result:  [{"fb_pubFullDate":20160820,"fb_timBestCAD":96,"fb_timBestHR":176,"fb_timBestRND":89.08,"fb_timBestSPD":22.5,"fb_timBikeShop":"Zen Bikes","fb_timName":"Johnny5","fb_timTeam":"Team"}]
// //---
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=2',function(data){console.log(JSON.stringify(data));var x = _.values(data);console.log('my Result:  ' + JSON.stringify(x));});
//
// //my Result:  [
// //{"fb_pubFullDate":20160824,"fb_timBestCAD":86,"fb_timBestHR":168,"fb_timBestRND":83.16,"fb_timBestSPD":29.3,"fb_timBikeShop":"OTB","fb_timName":"Blu","fb_timTeam":"Team"},{"fb_pubFullDate":20160820,"fb_timBestCAD":96,"fb_timBestHR":176,"fb_timBestRND":89.08,"fb_timBestSPD":22.5,"fb_timBikeShop":"ZenBikes","fb_timName":"Johnny5","fb_timTeam":"Team"}]
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //console.log(JSON.stringify(data));
// var x = _.values(data);
// var y = _.sortBy(x, 'fb_pubFullDate');
// var z = _.groupBy(x, 'fb_pubFullDate');
// var a = _.toArray(y);
// // console.log('a[1]:  ' + JSON.stringify(a[1]));
// // console.log('Just Val for A1 fb_timName:  ' + a[1].fb_timName);
// // a[1]:  {"fb_pubFullDate":20160824,"fb_timBestCAD":86,"fb_timBestHR":168,"fb_timBestRND":83.16,"fb_timBestSPD":29.3,"fb_timBikeShop":"OTB","fb_timName":"Blu","fb_timTeam":"Team"}
// // (index):850
// //Just Val for a[1].fb_timName:  Blu
// });
//
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// //var y = _.sortBy(x, 'fb_pubFullDate');
// var y = _.sortBy(x, 'fb_timBestRND');
// //var z = _.groupBy(x, 'fb_pubFullDate');
// var a = _.toArray(y);
// console.log('a[0].fb_timName:  ' + a[0].fb_timName);
// console.log('a[0].fb_timBestRND:  ' + a[0].fb_timBestRND);
// });
//
//
//
// //BEST SCORE
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var y = _.sortBy(x, 'fb_timBestRND');
// var a = _.toArray(y);
// var b = a.length;
// console.log('a[b].fb_timName:  ' + a[b-1].fb_timName);
// console.log('a[b].fb_timBestRND:  ' + a[b-1].fb_timBestRND);
// });
//
// // ---
//
//
// //BEST SCORE
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var y = _.sortBy(x, 'fb_timBestRND');
// var a = _.toArray(y);
// var b = _.last(a);
// console.log('a[b].fb_timName:  ' + b.fb_timName);
// console.log('a[b].fb_timBestRND:  ' + b.fb_timBestRND);
// });
//
//
// //---
// //BEST 3
// function theArray(scores){
// var b = _.last(scores, [3]);
// console.log(b[2].fb_timBestRND + '-' + b[1].fb_timBestRND + '-' +  b[0].fb_timBestRND);
// //console.log(JSON.stringify(b));
// }
// //BEST 3
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var y = _.sortBy(x, 'fb_timBestRND');
// var a = _.toArray(y);
// theArray(a);
// });
//
// //---
//
// //BEST 1 TODAY
// function theArray(scores){
// var b = _.where(scores, {fb_pubFullDate: 20160826});
// //var b = _.filter(scores, function(key, val){return val >= 20160800;});
// //NOW SORT
// var sorted = _.sortBy(b, 'fb_timBestRND');
// var c = _.last(sorted, 1);
// console.log(c[0].fb_timBestRND);console.log(c[0].fb_timName);
// }
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var a = _.toArray(x);
// theArray(a);
// });
//
//
// //---
//
// //BEST, DATE, BIKESHOP
// function theArray(scores){
// var b1 = _.where(scores, {fb_pubFullDate: 20160824, fb_timBikeShop: "OTB"});
// //var b = _.where(b1, {fb_timBikeShop: "OTB"});
// //NOW SORT
// var sorted = _.sortBy(b, 'fb_timBestRND');
// var c = _.last(sorted, 1);
// console.log(c[0].fb_timBestRND);
// }
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var a = _.toArray(x);
// theArray(a);
// });
//
//
// //---
//
//
//
//
//
// //Standard NOTIFICATION
// // var f7Notifiction = myApp.addNotification({
// //     message: msg,
// //     hold: 5000,
// //     button: {
// //         text: num,
// //         color: 'yellow',
// //         close: false
// //     }
// // });
//
// //POPULATE COMMON VARS TO MULTI UI
// // var string = null;
// // $('.tab-btn-h').each(function(index, obj){
// //     string += $(this).text(currHR);
// // });
//
// //TRANSITION ALL THESE TO CENTER ALERTS...
// function myNoty(msg, num) {
//     myApp.modal({
//       title: '<div style="text-align: center">'+
//               '<h2>' + msg + '</h2>'+
//             '</div>'
//       // title: msg
//     });
//     setTimeout(function () {
//           myApp.closeModal();
//     }, 3000);
// }
//
// function myNotyCoach(msg) {
//     myApp.modal({
//       title: '<div style="text-align: center">'+
//               '<h3>' + msg + '</h3>'+
//             '</div>'
//     });
//     setTimeout(function () {
//           myApp.closeModal();
//     }, 3000);
// }
//
// // var total_wheel_revs = 0;
// // var dis11 = 0;
// // var dis12 = 0;
//
// //USED FOR DISTANCE CALC
// //UNUSED
// function new_dis(dis10, time10) {
//   if (dis10 < 0) {
//     return;
//   }
//   if (isNaN(dis10)) {
//       return;
//   }
//   dis12 = dis11 + dis10;
//   dis11 = dis12;
//
//   total_wheel_revs = dis12;
//   var a = total_wheel_revs * tim.timTireCircum;
//   //CONVERT METERS TO MILES
//   var b = a * 0.000621371;
//   tim.timDistanceTraveled = b.toFixed(2);
//   $$('.tab-btn-dist').text(tim.timDistanceTraveled);
//
//   var segment_distance = dis10 * tim.timTireCircum;
//   var segment_distance_miles = segment_distance * 0.000621371;
//   var segment_mph = segment_distance_miles / time10;
//   var mph_rounded = Math.round(segment_mph * 100) / 100;
// }
//
// //<div class="card"><div class="card-header">Card header</div><div class="card-content"><div class="card-content-inner">Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.</div></div><div class="card-footer"><a href="#" class="link">Website</a><a href="#" class="link">Maps</a></div></div><br><br>
// //<div class="card"><div class="card-header">CONTACT US</div><div class="card-content"><div class="card-content-inner">134 W 24th Street<br>New York, NY 10011<br>zenbikes.info@gmail.com</div></div><div class="card-footer"><a id="call_zen" href="tel:+1-212-929-2453" class="link">Call</a><a href="https://www.google.com/maps/dir/40.7443078,-73.9935714/Zen+Bikes,+134+W+24th+St,+New+York,+NY+10011/@40.7441493,-73.9960927,17z" class="link">Maps</a></div></div><br><br>
// //div class="card"><div class="card-content"><div class="card-content-inner"><p>ZEN BIKES</p> <p>134 W 24th Street</p><p>New York, NY 10011</p> <p>zenbikes.info@gmail.com</p><p>212-929-2453</p></div></div></div>
// //
// // <div class="card"><div class="card-header"><img src="http://www.zenbikes.com/merchant/4160/images/site/ZEN_logo.png" style="width:240px;"></div><div class="card-content"><div class="card-content-inner">134 W 24th Street<br>New York, NY 10011<br>zenbikes.info@gmail.com <div>1-212-929-2453</div></div></div></div><br><br>
// // <div><img src="http://www.zenbikes.com/merchant/4160/images/site/wrench-stem-1110-14-nth.jpg" style="width:100%;"</div><br><br>
// // <div><img src="http://www.zenbikes.com/merchant/4160/images/site/back_to_school_2000x667.gif" style="width:100%;"</div><br><br>
// // <div><img src="http://www.zenbikes.com/merchant/4160/images/site/spec_mtn1100txl_13_h.jpg" style="width:100%;"</div><br><br>
//
//
//  <!-- <div class="list-block media-list">
//                             <ul>
//                                 <li id="settings_link">
//                                     <a href="#page3" class="item-link item-content">
//                                         <div class="item-media"><i class="fa fa-cog fa-2x"></i></div>
//                                         <div class="item-inner">
//                                             <div class="item-title-row">
//                                                 <div class="item-title">GET STARTED</div>
//                                             </div>
//                                             <div class="item-subtitle">Sensors, Privacy, Start</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li id="messaging_link">
//                                     <a href="#page5" class="item-link item-content">
//                                         <div class="item-media"><i class="fa fa-comment fa-2x"></i></div>
//                                         <div class="item-inner">
//                                             <div class="item-title-row">
//                                                 <div class="item-title">MESSAGING</div>
//                                             </div>
//                                             <div class="item-subtitle">Team and Group</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#page4" class="item-link item-content">
//                                         <div class="item-media"><i class="fa fa-play fa-2x"></i></div>
//                                         <div class="item-inner">
//                                             <div class="item-title-row">
//                                                 <div class="item-title">ROUNDS</div>
//                                             </div>
//                                             <div class="item-subtitle">Display, Leaderboard</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <hr>
//                                 <li>
//                                     <a href="#shop_page" class="item-link item-content">
//                                         <div class="item-media"><img id="img_logo" src="css/logo/Solo.png" width="50"></div>
//                                         <div class="item-inner">
//                                             <div class="item-title-row">
//                                                 <div id="title_bs" class="item-title">...</div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//
//                             </ul>
//                         </div> -->


//POPUP DISPLAYING HTML DYNAMICALLY
// function myPopupHTML(pop) {
// 	var popupHTML = '<div class="popup">' +
// 		'<div class="content-block">' +
// 		'<p>Popup created dynamically.</p>' +
// 		'<p><a href="#" class="close-popup">Close me</a></p>' +
// 		'</div>' +
// 		'</div>';
// 	myApp.popup(popupHTML);
// }

//POPUP DISPLAYING THE 'about' HTML
// function myPopupAbout() {
// 	myApp.popup('.popup-about');
// }


// function myNoty(msg) {
// 	myApp.modal({
// 		title: '<div style="text-align: center">' +
// 			'<h3>' + msg + '</h3>' +
// 			'</div>'
// 	});
// 	setTimeout(function() {
// 		myApp.closeModal();
// 	}, 1500);
// }

// function myNotyCoach(msg) {
// 	myApp.modal({
// 		title: '<div style="text-align: center">' +
// 			'<h3>' + msg + '</h3>' +
// 			'</div>'
// 	});
// 	setTimeout(function() {
// 		myApp.closeModal();
// 	}, 1500);
// }

//
// $$('#get_active_riders').on('click', function (e) {
//     console.log('clicked update');
//     requestUserData();
// });

// $$('.open-preloader-title').on('click', function () {
//     myApp.showPreloader('Working');
//     setTimeout(function () {
//         myApp.hidePreloader();
//     }, 5000);
// });



// $$('#msg_Submit').on('click', function (e) {
//     console.log('Sending Message');
//     var inp_msg = $$('#snd_Message').val();
//     $$('#snd_Message').val('');
//     msg_Submit_fb(inp_msg);
// });



// //GROUP
// function publish_messages_group(m_date, m_group, m_name, m_message) {
// 	var x = Number(m_date);
// 	var y = Date.now() - x;
// 	var z = y / 1000;
// 	var zz = Math.round(z / 60);
// 	$$('#fb_group_msg').append(


// 		'        <li class = "fb-msg-li-group">' +
// 		'          <a href="#" class="item-link item-content">' +
// 		'              <div class="item-inner">' +
// 		'             <div class="item-title-row"> ' +
// 		'              <div class="item-title">' + m_group + '</div> ' +
// 		'                  <div class="item-after">' + zz + ' ...min ago</div> ' +
// 		'              </div> ' +
// 		'            <div class="item-subtitle">' + m_name + '</div> ' +
// 		'      <div class="item-text">' + m_message + '</div>' +
// 		'      </div>' +
// 		'     </a>' +
// 		'     </li>'

// 	);
// }

// //TEAM
// function publish_messages(m_date, m_team, m_name, m_message) {
// 	var x = Number(m_date);
// 	var y = Date.now() - x;
// 	var z = y / 1000;
// 	var zz = Math.round(z / 60);
// 	$$('#fb_team_msg').append(


// 		'        <li class = "fb-msg-li-team">' +
// 		'          <a href="#" class="item-link item-content">' +
// 		'              <div class="item-inner">' +
// 		'             <div class="item-title-row"> ' +
// 		'              <div class="item-title">' + m_team + '</div> ' +
// 		'                  <div class="item-after">' + zz + ' ...min ago</div> ' +
// 		'              </div> ' +
// 		'            <div class="item-subtitle">' + m_name + '</div> ' +
// 		'      <div class="item-text">' + m_message + '</div>' +
// 		'      </div>' +
// 		'     </a>' +
// 		'     </li>'

// 	);
// }

// function msg_Get_fb() {
// 	console.log('Get Team Messages');
// 	firebase.database().ref('messages/team/' + tim.timTeam + '/messages').limitToLast(5).orderByChild("fb_date").on('value', function(allMessagesSnapshot) {
// 		$$('.fb-msg-li-team').remove();
// 		allMessagesSnapshot.forEach(function(messageSnapshot) {
// 			var msg1 = messageSnapshot.child("fb_date").val();
// 			var msg2 = messageSnapshot.child("fb_timTeam").val();
// 			var msg3 = messageSnapshot.child("fb_timName").val();
// 			var msg4 = messageSnapshot.child("fb_message").val();
// 			//console.log('Message:  ' + msg1 + msg2 + msg3 + msg4);
// 			myCenterAlert('New Team Message', 3000);
// 			publish_messages(msg1, msg2, msg3, msg4);

// 		});
// 		//console.log('Request Data Complete');
// 	});
// }

// function msg_Get_fb_group() {
// 	console.log('Get Group Messages');
// 	firebase.database().ref('messages/group/' + tim.timGroup + '/messages').limitToLast(15).orderByChild("fb_date").on('value', function(allMessagesSnapshot) {
// 		$$('.fb-msg-li-group').remove();
// 		allMessagesSnapshot.forEach(function(messageSnapshot) {
// 			var msg1 = messageSnapshot.child("fb_date").val();
// 			var msg2 = messageSnapshot.child("fb_timGroup").val();
// 			var msg3 = messageSnapshot.child("fb_timName").val();
// 			var msg4 = messageSnapshot.child("fb_message").val();
// 			//console.log('Message:  ' + msg1 + msg2 + msg3 + msg4);
// 			myCenterAlert('New Group Message', 3000);
// 			publish_messages_group(msg1, msg2, msg3, msg4);

// 		});
// 		//console.log('Request Data Complete');
// 	});
// }



// function msg_Submit_fb(post_msg) {

// 	//I WILL MANUALLY SEND BS MESSAGES

// 	// console.log('msg_Submit_fb');
// 	// firebase.database().ref('messages/bikeshop/' + tim.timTeam + '/messages/').push({
// 	//     fb_timName: tim.timName,
// 	//     fb_message: post_msg,
// 	//     fb_bikeshop_msg: tim.timTeam,
// 	//     fb_date: Date.now()
// 	// });
// 	firebase.database().ref('messages/group/' + tim.timGroup + '/messages/').push({
// 		fb_timName: tim.timName,
// 		fb_message: post_msg,
// 		fb_timGroup: tim.timGroup,
// 		fb_date: Date.now()
// 			//USE var n = d.toString(); TO CONVERT
// 	});

// }

// function theDataTable() {
// 	//RIGHT NOW, SET TO ONCE
// 	if (tim.timRealTimeShare === 'RealTime') {
// 		$('#example').DataTable();
// 		var sorty = $('#example').DataTable();
// 		console.log('Startng Sortable Table');

// 		firebase.database().ref('users').orderByChild("fb_timTeam").equalTo(tim.timTeam).once('value', function(allMessagesSnapshot) {
// 			sorty.clear();
// 			allMessagesSnapshot.forEach(function(messageSnapshot) {

// 				sorty.row.add([
// 					messageSnapshot.child("fb_timName").val(),
// 					messageSnapshot.child("fb_timHR").val(),
// 					messageSnapshot.child("fb_timSpeed").val(),
// 					messageSnapshot.child("fb_timCadence").val(),
// 					messageSnapshot.child("fb_timWAC").val(),
// 					messageSnapshot.child("fb_timWAS").val(),
// 					messageSnapshot.child("fb_timPower").val(),
// 				]).draw(false);
// 			});
// 		});
// 		theDataTableLeader();
// 	} else {
// 		//console.log('rtdata is turned off');
// 	}
// }


// function theDataTableLeader() {
// 	//RIGHT NOW, SET TO ONCE
// 	if (tim.timRealTimeShare === 'RealTime') {
// 		$('#exampleLeader').DataTable();
// 		var sortyLeader = $('#exampleLeader').DataTable();
// 		console.log('Startng Sortable Table Leader');

// 		firebase.database().ref('score/users').orderByChild("fb_timName").once('value', function(allMessagesSnapshotLeader) {
// 			sortyLeader.clear();
// 			allMessagesSnapshotLeader.forEach(function(messageSnapshotLeader) {

// 				sortyLeader.row.add([
// 					messageSnapshotLeader.child("fb_timName").val(),
// 					messageSnapshotLeader.child("fb_timCurrentAvgScore").val(),
// 					messageSnapshotLeader.child("fb_timAvgSPD").val(),
// 					messageSnapshotLeader.child("fb_timAvgCAD").val(),
// 					messageSnapshotLeader.child("fb_timAvgHR").val(),
// 				]).draw(false);
// 			});
// 		});
// 		requestUserData();
// 	} else {
// 		//console.log('rtdata is turned off');
// 	}
// }

// $$('#call_zen').on('click', function() {
// 	if (window.cordova) {
// 		console.log('call zen');
// 		cordova.InAppBrowser.open('tel:12129292453', '_system');
// 	}
// });




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



								<div class="card">
											<div class="card-content">
												<div class="card-content-inner row bg-black color-white smaller_content_padding">
													<div class="col-50 color-white">EFFORT(ROUND)
														<div class="row" style="padding-top: 8px; padding-bottom: 1px;">
															
															</div>
														</div>
													<div id="rt_speed_val" class="tab-btn-s color-white" style="text-align:center; font-weight: bold; font-size: 3.5em">00</a>
												</div>
											</div>
											<div class="col-50 color-white">SPEED(ROUND)
												<div class="row" style="padding-top: 8px; padding-bottom: 1px;">
													
													</div>
												</div>
												<div id="rt_cad_val" class="tab-btn-c color-white" style="text-align:center; font-weight: bold; font-size: 3.5em">00</div>
											</div>
										</div>
									</div>
								</div>
								<hr>
								<div class="card">
									<div class="card-content">
										<div class="card-content-inner row bg-black color-white smaller_content_padding">
											<div class="col-50 color-white">EFFORT(DAY)
												<div class="row" style="padding-top: 1px; padding-bottom: 1px;">
													
													</div>
												</div>
											<div id="rt_hr_val" class="tab-btn-h color-white" style="text-align:center; font-weight: bold; font-size: 3.5em">00</a>
										</div>
									</div>
									<div class="col-50 color-white bg-black">SPEED(DAY)
										<div class="row" style="padding-top: 1px; padding-bottom: 1px;">
											
											</div>
										</div>
										<div id="rt_round_val" class="color-white bg-red tab-btn-round" style="text-align:center; font-weight: bold; font-size: 3.5em">00</div>
									</div>
								</div>
							</div>
						</div>
						<hr>
						<div id="timer_btn_game1" class="color-white timer_btn_cls" style="text-align: center">300 SECOND ROUND</div>
						<div id="timer_btn_bubbles_game1" class="cls_timer_bubbles color-white" style="text-align: center; padding-top: 5px; padding-bottom: 15px;"><i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i>                                        <i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i></div>






