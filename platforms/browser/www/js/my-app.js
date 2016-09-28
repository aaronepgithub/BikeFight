// Initialize app
var myApp = new Framework7({
	material: true,
	cache: true
});


var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
	domCache: true //enable inline pages
});


//THIS IS THE NOTIFICATION FUNCTION CALL
function myCenterAlert(msg, tiout) {
	myApp.modal({
		title: '<div style="text-align: center">' +
			'<h3>' + msg + '</h3>' +
			'</div>'
	});
	setTimeout(function() {
		myApp.closeModal();
	}, tiout);
}

//CENTER ALERT WITH OK BUTTON AND CALLBACK
function myCenterAlertOK(title, message) {
	myApp.alert(message, title, function() {
		console.log('Button clicked!');
	});
}



function updateTim() {
	console.log('Fctn updateTim');
	var storedData = myApp.formGetData('my-form');
	tim.timName = storedData.name;
	tim.timTeam = storedData.team;
	tim.timGroup = storedData.group;
	tim.timStyle = storedData.style;
	tim.timTire = storedData.tire;

	if (tim.timTire === '700X23') {
		tim.timTireCircum = 2.10;
	}
	if (tim.timTire === '700X25') {
		tim.timTireCircum = 2.11;
	}
	if (tim.timTire === '700X28') {
		tim.timTireCircum = 2.14;
	}
	if (tim.timTire === '700X30') {
		tim.timTireCircum = 2.15;
	}
	if (tim.timTire === '700X32') {
		tim.timTireCircum = 2.17;
	}
	if (tim.timTire === '700X38') {
		tim.timTireCircum = 2.18;
	}
	if (tim.timTire === '700X40' || tim.timTire === '700X42' || tim.timTire === '700X44') {
		tim.timTireCircum = 2.22;
	}

	if (tim.timTire === '700X23') {
		tim.timTireCircMeters = 2.096;
	}
	if (tim.timTire === '700X25') {
		tim.timTireCircMeters = 2.105;
	}
	if (tim.timTire === '700X28') {
		tim.timTireCircMeters = 2.136;
	}
	if (tim.timTire === '700X30') {
		tim.timTireCircMeters = 2.146;
	}
	if (tim.timTire === '700X32') {
		tim.timTireCircMeters = 2.155;
	}
	if (tim.timTire === '700X38') {
		tim.timTireCircMeters = 2.180;
	}
	if (tim.timTire === '700X40' || tim.timTire === '700X42' || tim.timTire === '700X44') {
		tim.timTireCircMeters = 2.212;
	}
}



function startup() {
	console.log('startup function');
	var storedData = myApp.formGetData('my-form');
	console.log('Startup Stored Data1:  ' + JSON.stringify(storedData));
	get_combo();
	ui_report10(0, 0, 0, 0);
	ui_report20(0, 0, 0, 0);
	updateTim();
}



// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
	console.log('Device is ready!');
	startup();


});

$$('.cls_update_tim').on('click', function() {
	console.log('update form data');
	var storedData10 = myApp.formGetData('my-form');
	console.log('Startup Stored Data1:  ' + JSON.stringify(storedData10));
	updateTim();
});


$$('.my_simulator').on('click', function(e) {
	console.log('clicked simulator');
	myCenterAlert('Simulator');

	var measHR = 1;
	var measSPD = 1;
	var measCAD = 1;
	onWheelMeasurementReceived(measSPD, _.now());
	onCrankMeasurementReceived(measCAD, _.now());
	onHRMeasurementReceived(150);

	function test() {
		measHR  =   _.random(140, 160);
		measCAD =  measCAD +  _.random(1.3, 1.7);
		measSPD =  measSPD + _.random(4.0, 6.5);
		onWheelMeasurementReceived(measSPD, _.now());
		onCrankMeasurementReceived(measCAD, _.now());
		onHRMeasurementReceived(measHR);
	}
	var refreshId = setInterval(test, 1000);
});



$$('#header_btn1').on('click', function(e) {
	//console.log('clicked hdr1');
	mainView.router.loadPage("#bluetooth");
});
$$('#header_btn2').on('click', function(e) {
	//console.log('clicked hdr2');
	mainView.router.loadPage("#champs");
});



