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

