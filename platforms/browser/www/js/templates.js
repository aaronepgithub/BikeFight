//START ME VS MY BEST ROUND TODAY
function ui_report10(rnd1, spd1, cad1, hr1) {
	$$('#ui_report10').html(
		'        <div class="row bg-red no-border">' +
		'         <div class="col-20"><a href="#" class="no-border button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">RND</a></div>' +
		'         <div class="col-50"><a href="#" class="cls_rt_round_val no-border button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgRND) + '</a></div>' +
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
		'         <div class="col-50"><a href="#" class="cls_rt_round_val button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgRND) + '</a></div>' +
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
		'         <div class="col-50"><a href="#" class="cls_rt_round_val button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgRND) + '</a></div>' +
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




//NEW ui_report1
function ui_report1(cc1, cc2, cc3, cc4, cc5, cc6) {
	//console.log('ui_report1');console.log('me vs. the best:  alldates, allteams, allgroups, allridingtypes');
	$$('#ui_report1_div').html(
		// '        <br><div style="text-align:center;font-weight: bold;font-size: 1.3em;">vs. ' + cc1 + ' from <span class="shop_link">' + cc2 + '</span></div><br>' +
		'        <div class="row bg-red">' +
		'         <div class="col-20"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">RND</a></div>' +
		'         <div class="col-50"><a href="#" class="cls_rt_round_val button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgRND) + '</a></div>' +
		'         <div class="col-30"><a href="#" class="button bg-red button-big button-fill button-raised" style="font-weight: bold; font-size: 2.0em"><b class="shop_link color-white">' + Math.round(cc3) + '</b></a></div>' +
		'       </div><br><br>' +
		'        <div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">SPD</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-s button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgSPD * 10) / 10 + '</a></div>' +
		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(cc4 * 10) / 10 + '</b></a></div>' +
		'       </div>' +
		'        <hr><div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">CAD</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-c button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgCAD) + '</a></div>' +
		'         <div class="col-30 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(cc5) + '</b></a></div>' +
		'       </div>' +
		'        <hr><div class="row bg-black">' +
		'         <div class="col-20"><a href="#" class="button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">HR</a></div>' +
		'         <div class="col-50"><a href="#" class="tab-btn-h button bg-black  button-big button-fill button-raised" style="font-weight: bold; font-size: 4em">' + Math.round(tim.timAvgHR) + '</a></div>' +
		'         <div class="col-30 button bg-black  button-big button-fill button-raised" style="font-weight: bold;text-align:center;font-size: 2.0em"><b class=" color-white">' + Math.round(cc6) + '</b></a></div>' +
		'       </div><br>'
	);
}
//END ui_report1

//ui_report2 list of best rounds, alltimes, allshops, allteams
function ui_report2(e1, e2, e3) {
	//console.log('ui_report2');console.log('ui_report2 list of best rounds, alltimes, allshops, allteams');
	$$('#ui_report2').append(
		'        <div class="row bg-black cls_report2">' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
		'       </div>'
	);
}
//ui_report2 list of best rounds, alltimes, allshops, allteams

//ui_report3 list of best rounds, today, allshops, allteams
function ui_report3(e1, e2, e3) {
	//console.log('ui_report3');console.log('ui_report3 list of best rounds, today, allshops, allteams');
	$$('#ui_report3').append(
		'        <div class="row bg-black cls_report3">' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
		// '         <div class="col-40"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + e1 + '</a></div>' +
		// '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
		// '         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 1.2em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
		'       </div>'
	);
}
//ui_report3


//ui_report5 list of best rounds, past hour, today, allshops, allteams
function ui_report5(e1, e2, e3) {
	//console.log('ui_report5');console.log('ui_report3 list of best rounds, past hour, today, allshops, allteams');
	$$('#ui_report5').append(
		'        <div class="row bg-black cls_report5">' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
		// '         <div class="col-40"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + e1 + '</a></div>' +
		// '         <div class="col-20"><a href="#" class="button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1.2em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
		// '         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="font-weight: bold;text-align:center;font-size: 1.2em"><b class="shop_link color-white">' + e2 + '</b></a></div><br>' +
		'       </div>'
	);
}
//ui_report5

function ui_report4(e1, e2, e3) {
	$$('#ui_report4').append(
		'        <div class="row bg-black cls_report4">' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
		'       </div>'
	);
}

function ui_report6(e1, e2, e3) {
	$$('#ui_report6').append(
		'        <div class="row bg-black cls_report6">' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
		'       </div>'
	);
}

function ui_report7(e1, e2, e3) {
	$$('#ui_report7').append(
		'        <div class="row bg-black cls_report7">' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised" style="text-align:center;padding:0px;font-weight: bold; font-size: 1em">' + e1 + '</a></div>' +
		'         <div class="col-10 button bg-black button-big button-fill button-raised" style="font-weight: bold; font-size: 1em">' + Math.round(e3 * 10) / 10 + '</a></div>' +
		'         <div class="col-40 button bg-black button-big button-fill button-raised text_border" style="padding:0px;font-weight: bold;text-align:center;font-size: 1em"><b class="shop_link color-blue">' + e2 + '</b></a></div><br>' +
		'       </div>'
	);
}


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