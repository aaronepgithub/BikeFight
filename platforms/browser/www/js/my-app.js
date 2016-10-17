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
		console.log('Button Clicked!');
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
	tim.timMaxHR = storedData.maxhrinput;

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

$$('.cls_update_tim').on('touchstart', function() {
	console.log('update form data');
	var storedData10 = myApp.formGetData('my-form');
	console.log('Startup Stored Data1:  ' + JSON.stringify(storedData10));
	updateTim();
});


// $$('.my_simulator').on('touchstart', function(e) {
// 	console.log('touchstarted simulator');
// 	myCenterAlert('Simulator');

// 	var measHR = 1;
// 	var measSPD = 1;
// 	var measCAD = 1;
// 	onWheelMeasurementReceived(measSPD, _.now());
// 	onCrankMeasurementReceived(measCAD, _.now());
// 	onHRMeasurementReceived(150);

// 	function test() {
// 		measHR  =   _.random(80, 140);
// 		measCAD =  measCAD +  _.random(0.1, 2.1);
// 		measSPD =  measSPD + _.random(1.0, 4.5);
// 		onWheelMeasurementReceived(measSPD, _.now());
// 		onCrankMeasurementReceived(measCAD, _.now());
// 		onHRMeasurementReceived(measHR);
// 	}
// 	var refreshId = setInterval(test, 1000);
// });



$$('#header_btn1').on('touchstart', function(e) {
	//console.log('touchstarted hdr1');
	mainView.router.loadPage("#settings2");
});
$$('#header_btn2').on('touchstart', function(e) {
	//console.log('touchstarted hdr2');
	mainView.router.loadPage("#game1");
});


$$('#game1_btn1').on('touchstart', function(e) {
	//console.log('touchstarted hdr1');
	mainView.router.loadPage("#settings2");
});
$$('#game1_btn2').on('touchstart', function(e) {
	//console.log('touchstarted hdr2');
	mainView.router.loadPage("#main");
});


$$('#settings2_btn1').on('touchstart', function(e) {
	//console.log('touchstarted hdr1');
	mainView.router.loadPage("#game1");
});
$$('#settings2_btn2').on('touchstart', function(e) {
	//console.log('touchstarted hdr2');
	mainView.router.loadPage("#main");
});


$$('#adv_views').on('touchstart', function(e) {
	//console.log('touchstarted hdr1');
	mainView.router.loadPage("#main");
	//route to swiper
});

$$('.cls_blue').on('touchstart', function(e) {
	//console.log('touchstarted hdr2');
	mainView.router.loadPage("#champs");
});

$$('.cls_yellow').on('touchstart', function(e) {
	//console.log('touchstarted hdr2');
	mainView.router.loadPage("#myrounds");
});

$$('.cls_green').on('touchstart', function(e) {
	//console.log('touchstarted hdr2');
	mainView.router.loadPage("#dayleaders");
});

$$('.cls_notice').on('touchstart', function(e) {
	//console.log('touchstarted hdr2');
	myCenterAlertOK('IMPORTANT NOTICE.', '<div>PLEASE USE THIS APPLICATION ONLY WHEN STOPPED AND IN A SAFE ENVIRONMENT.  THE RIDER WILL ASSUME ALL RESPONSIBILITY FOR ANY EVENTS THAT OCCUR WHILE USING THIS APPLICATION. <div><hr>' +
	'<div class= "button button-fill button-raised color-blue" style="color: white;margin-bottom:35px; font-size=.4em"><a style="color: white" href="#tandc">TERMS AND CONDITIONS</a><hr></div>');
});
