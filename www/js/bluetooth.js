//THESE ARE THE BLE COMMANDS
//ble.disconnect(device_id, app.onError, app.onError);
//ble.scan([heartRate.service], 5, onScan, onScanFailure);
//ble.connect(peripheral.id, app.onConnect, app.onDisconnect);
//ble.startNotification(peripheral.id, btService.serviceHR, btService.measurementHR, app.onData, app.onError);
//ble.disconnect(device_id, app.onError, app.onError);

var arrSensors = [];
var i_clkId1;
var i_clkId2;
var i_clkId3;
var i_clkId4;

function msgBluetoothDisconnect() {
	if (tim.timStyle !== "NO") {
		TTS
				.speak({
						text: 'Bluetooth Sensors have Disconnected',
						locale: 'en-GB',
						rate: 1.5
				}, function() {
						console.log('TTS BT Disconnect SUCCESS');
				}, function(reason) {
						console.log('TTS FAILURE:  ' + reason);
				});
	}
}


//var i_clkId5;

// function reconnectBluetooth() {

// 	if (i_clkId1) {
// 		//appII.connectHR(i_clkId1);
// 		var recon1 = _.delay(function(hrLog) {
// 			appII.connectHR(i_clkId1);
// 			console.log(hrLog);
// 		}, 1000, 'reconnect HR');
// 	}

// 	if (i_clkId2) {
// 		//appII.connectCSC(i_clkId2);
// 		var recon2 = _.delay(function(hrLog) {
// 			appII.connectCSC(i_clkId2);
// 			console.log(hrLog);
// 		}, 2000, 'reconnect CSC');
// 	}

// 	if (i_clkId3) {
// 		// appII.connectWAS(i_clkId3);
// 		var recon3 = _.delay(function(hrLog) {
// 			appII.connectWAS(i_clkId3);
// 			console.log(hrLog);
// 		}, 3000, 'reconnect WAS');
// 	}

// 	if (i_clkId4) {
// 		//appII.connectWAC(i_clkId4);
// 		var recon4 = _.delay(function(hrLog) {
// 			appII.connectWAC(i_clkId4);
// 			console.log(hrLog);
// 		}, 4000, 'reconnect WAC');
// 	}

// }
//appII.connectHR(i_clkId1);
//appII.connectCSC(i_clkId2);
//appII.connectWAS(i_clkId3);
//appII.connectWAC(i_clkId4);


var btService = {
	serviceHR: '180d',
	measurementHR: '2a37',
	serviceCSC: '1816',
	measurementCSC: '2A5B',
	servicePOW: '1818',
	measurementPOW: '2A63',
	serviceHRwrist: '55FF',
	measurementHRwrist: '000033F2-0000-1000-8000-00805F9B34FB'
};

$$('#scanHR').on('click', function(e) {
	$$('.class_ble_results_li_hr').remove();
	console.log('click: scanHR');
	appII.allScanII();
	myCenterAlert('Scanning for HR', 5000);
});

$$('#scanCSC').on('click', function(e) {
	$$('.class_ble_results_li_csc').remove();
	console.log('click: scanCSC');
	appII.allScanCSC();
	myCenterAlert('Scanning for Speed/Cadence', 5000);
});

$$('#scanMIO').on('click', function(e) {
	$$('.class_ble_results_li_csc_mio').remove();
	console.log('click: scanMIO');
	appII.allScanCSC_MIO();
	myCenterAlert('Scanning for MIO', 5000);
});




var item_counter = 1;
var appII = {

	//START ONDATA-HR APPII
	onDataHR: function(bufferHR) {
		//console.log('appII.onDataHR');
		var dataHR = new Uint8Array(bufferHR);
		//console.log('dataHR:  ' + JSON.stringify(dataHR));
			var currHR = dataHR[1];
			onHRMeasurementReceived(currHR);
	},
	//END ONDATA-HR

	//START ONERROR-HR
	onErrorHR: function() {
		console.log('appII.onErrorHR');
		myCenterAlert('HR Sensor Error', 1000);
		mainView.router.loadPage("#bluetooth");
		$$(".cls_disconnect_message").html('<h3>RECONNECT SENSORS</h3>');
	},

	//HR SCAN
	allScanII: function() {
		console.log('fctn: HR allScan');

		function onScanII(peripheralHR) {

			var veloI = peripheralHR.name.toString().search("VELO");
			var veloII = peripheralHR.name.toString().search("Velo");
			var veloIII = peripheralHR.name.toString().search("velo");
				if (veloIII >= 0 || veloII >= 0 || veloI >= 0) {
					return;
				}

			console.log('fctn: onScanII <HR SCAN>');
			console.log("Found " + JSON.stringify(peripheralHR));

			//WAIT FOR ITEM TO BE CLICKED ON
			console.log(peripheralHR.name + ' - ' + peripheralHR.id);
			myCenterAlert('Found:  ' + peripheralHR.name + '.  Tap to connect.');

			$$('.class_ble_results_ul').on('click', 'a', function(e) {
				console.log('click:  HR Item to Connect');
				var i_service = $$(this).data('service');
				var i_clkIdHR = $$(this).data('id');
				var i_clkName = $$(this).data('name');
				var i_clkItmService = $$(this).data('service');
				var i_clkItmRSSI = $$(this).data('rssi');

				console.log(i_service);
				console.log(i_clkIdHR);
				console.log(i_clkName);
				console.log(i_clkItmRSSI);

				console.log("II Starting the: " + i_clkName + '  ID:  ' + i_clkIdHR);
				i_clkId1 = i_clkIdHR;

				appII.connectHR(i_clkIdHR);
			});

			i = peripheralHR.id;
			n = peripheralHR.name;
			r = peripheralHR.rssi;

			$$('#ble_results_ul').append(

				'        <li id = "' + item_counter + '" class = "class_ble_results_li_hr color-white">' +
				'          <a data-service = "180d" data-rssi = "' + r + '" data-name = "' + n + '" data-id = "' + i + '" href="#" class="item-link item-content ble-clickme">' +
				'              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
				'              <div class="item-inner"> ' +
				'              <div class="item-title-row"> ' +
				'                  <div class="item-title">' + n + '</div> ' +
				'                  <div class="item-after"><span class="badge">' + r + '</span></div></div> ' +
				'              </div> ' +
				'          </a> ' +
				'      </li>'

			); //END APPEND

			item_counter++;

		} // END ONSCAN FCTN HR
		function scanFailureII(reason) {
			console.log('fctn:  HR Scan Failed' + reason);
		}


		console.log('1.  ble.startScan for HR');
		ble.startScan(['180d'], onScanII, scanFailureII);

		setTimeout(ble.stopScan, 5000,
			function() {
				console.log("Scan complete");
				myCenterAlert('Complete', 500);
			},
			function() {
				console.log("stopScan failed");
			}
		);

	},
	//END ALL SCAN II FUNCTION



	connectHR: function(thisItemHR) {
		console.log('thisItemHR:  ' + thisItemHR);
		console.log('Attempting Connect HR');
		myCenterAlert('Connecting HR Sensor', 1000);
		console.log('2.  ble.connect for HR');
		ble.connect(thisItemHR, onConnectHR, onDisconnectHR);


		function onConnectHR() {
			console.log('HR onConnect');

			btService = {
				serviceHR: '180d',
				measurementHR: '2a37',
				serviceCSC: '1816',
				measurementCSC: '2A5B',
				servicePOW: '1818',
				measurementPOW: '2A63'
			};
			console.log('About to start HR Notification');
			myCenterAlert('HR Sensor Connected.  Connect another Sensor or Press the Back & Start Buttons', 5000);
			console.log('3.  ble.Notification for HR');
			ble.startNotification(thisItemHR, btService.serviceHR, btService.measurementHR, appII.onDataHR, appII.onErrorHR);
		}


		function onDisconnectHR(reason_HR) {
			console.log('onDisconnect HR');
			console.log(reason_HR);
			tim.timHR = 0;
			var string = null;
			$('.tab-btn-h').each(function(index, obj) {
				string += $(this).text('0');
			});
			myCenterAlert('HR Sensor has Disconnected', 1000);
			mainView.router.loadPage("#bluetooth");
			$$(".cls_disconnect_message").html('<h3>RECONNECT SENSORS</h3>');

			msgBluetoothDisconnect();
		}
	},


	//CSC CONNECT
	connectCSC: function(thisItem) {
		console.log('thisItem:  ' + thisItem);
		console.log('CSC Attempting Connect');
		myCenterAlert('Connecting Speed/Cadence Sensor', 1000);
		ble.connect(thisItem, onConnectCSC, onDisconnectCSC);

		function onConnectCSC() {
			console.log('onConnect CSC');

			btService = {
				serviceHR: '180d',
				measurementHR: '2a37',
				serviceCSC: '1816',
				measurementCSC: '2A5B',
				servicePOW: '1818',
				measurementPOW: '2A63'
			};
			console.log('About to start CSC Notification');
			myCenterAlert('Speed/Cadence Sensor Connected.  Connect another Sensor or Press the Back & Start Buttons', 3000);
			ble.startNotification(thisItem, btService.serviceCSC, btService.measurementCSC, appII.onDataCSC, appII.onErrorCSC);
		}

		function onDisconnectCSC(reason_csc) {
			console.log('onDisconnect CSC');
			console.log(reason_csc);
			tim.timSpeed = 0;
			tim.timCadence = 0;
			var stringSpd = null;
			$('.tab-btn-s').each(function(index, obj) {
				stringSpd += $(this).text(Math.round(tim.timSpeed * 10) / 10);
			});

			var stringCad = null;
			$('.tab-btn-c').each(function(index, obj) {
				stringCad += $(this).text(tim.timCadence);
			});

			myCenterAlert('SPD/CAD Sensor has Disconnected', 1000);
			mainView.router.loadPage("#bluetooth");
			$$(".cls_disconnect_message").html('<h3>RECONNECT SENSORS</h3>');

			msgBluetoothDisconnect();

			// mainView.router.loadPage("#bluetooth");
			// myApp.alert('Reconnect?', 'SPD/CAD Sensor Disconnected', function() {
			// 	console.log('attempting reconnect...');
			// 	appII.connectCSC(i_clkId2);
			// });
		}
	},


//START MIO VELO

allScanCSC_MIO: function() {
	console.log('all scan MIO Starting');
	var mio_item_counter = 0;


	//CALLED AFTER A SUCCESS SCAN
	function onScanCSC_MIO(peripheral) {
		if(mio_item_counter > 0) {
			return;
		}

		var veloI = peripheral.name.toString().search("VELO");
		var veloII = peripheral.name.toString().search("Velo");
		var veloIII = peripheral.name.toString().search("velo");

			if (veloIII >= 0 || veloII >= 0 || veloI >=0) {



		console.log('OnScan MIO allScannIII');
		console.log("Found " + JSON.stringify(peripheral));
		console.log(peripheral.name + ' - ' + peripheral.id);
		myCenterAlert('Found:  ' + peripheral.name + '.  Tap to connect.');

		$$('.class_ble_results_ul_csc_mio').on('click', 'a', function(e) {
			console.log('clicked class_ble_results_ul_csc_mio item');
			var i_service = $$(this).data('service');
			var i_clkId = $$(this).data('id');
			var i_clkName = $$(this).data('name');
			var i_clkItmService = $$(this).data('service');
			var i_clkItmRSSI = $$(this).data('rssi');

			console.log(i_service);
			console.log(i_clkId);
			console.log(i_clkName);
			console.log(i_clkItmRSSI);



			if(mio_item_counter < 2) {
				console.log("Starting the: " + i_clkName + '  ID:  ' + i_clkId + '  connectVELO');
				appII.connectCSC(i_clkId);
				mio_item_counter++;
				//WAIT 5 SECONDS AND THEN START HR FROM VELO
				setTimeout(function(){ appII.connectHR(i_clkId); }, 5000);
			}
		});

		i = peripheral.id;
		n = peripheral.name;
		r = peripheral.rssi;

		$$('#ble_results_ul_csc_mio').append(

			'        <li id = "' + item_counter + '" class = "class_ble_results_li_csc_mio color-white">' +
			'          <a data-service = "1816" data-rssi = "' + r + '" data-name = "' + n + '" data-id = "' + i + '" href="#" class="item-link item-content ble-clickme">' +
			'              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
			'              <div class="item-inner"> ' +
			'              <div class="item-title-row"> ' +
			'                  <div class="item-title">' + n + '</div> ' +
			'                  <div class="item-after"><span class="badge">' + r + '</span></div></div> ' +
			'              </div> ' +
			'          </a> ' +
			'      </li>'

		); //END APPEND
		mio_item_counter++;

	} // END VELO TEST
		
	} // END ONSCAN FCTN

	function scanFailureCSC_MIO(reason) {
		console.log("CSC_MIO BLE Scan Failed");
	}

	ble.startScan(['1816'], onScanCSC_MIO, scanFailureCSC_MIO);
	setTimeout(ble.stopScan, 5000,
		function() {
			console.log("Scan complete");
			myCenterAlert('Complete', 500);

		},
		function() {
			console.log("stopScan failed");
		}
	);
},
//END MIO VELO



	//START ALL SCAN and CONNECT III FUNCTION CSC
	allScanCSC: function() {
		console.log('all scan CSC Starting');

		//CALLED AFTER A SUCCESS SCAN
		function onScanCSC(peripheral) {
			console.log('OnScan CSC allScannIII');
			var veloI = peripheral.name.toString().search("VELO");
			var veloII = peripheral.name.toString().search("Velo");
			var veloIII = peripheral.name.toString().search("velo");
				if (veloIII >= 0 || veloII >= 0 || veloI >= 0) {
					return;
				}
			console.log("Found " + JSON.stringify(peripheral));
			console.log(peripheral.name + ' - ' + peripheral.id);
			myCenterAlert('Found:  ' + peripheral.name + '.  Tap to connect.');

			$$('.class_ble_results_ul_csc').on('click', 'a', function(e) {
				console.log('clicked class_ble_results_ul_csc item');
				var i_service = $$(this).data('service');
				var i_clkId = $$(this).data('id');
				var i_clkName = $$(this).data('name');
				var i_clkItmService = $$(this).data('service');
				var i_clkItmRSSI = $$(this).data('rssi');

				console.log(i_service);
				console.log(i_clkId);
				console.log(i_clkName);
				console.log(i_clkItmRSSI);


				var wacIII = i_clkName.toString().search("CADEN");
				var wasIII = i_clkName.toString().search("SPEED");
				var veloI = i_clkName.toString().search("VELO");
				var veloII = i_clkName.toString().search("Velo");
				var veloIII = i_clkName.toString().search("velo");
				console.log('wacIII:  ' + wacIII);
				console.log('wasIII:  ' + wasIII);


				if (veloIII >= 0 || veloII >= 0 || veloI >= 0) {
					return;
				}


				if (wacIII >= 0) {
					console.log("III Starting the: " + i_clkName + '  ID:  ' + i_clkId + '  connectWAC');
					i_clkId4 = i_clkId;
					appII.connectWAC(i_clkId);
				} else if (wasIII >= 0) {
					console.log("III Starting the: " + i_clkName + '  ID:  ' + i_clkId + '  connectWAS');
					i_clkId3 = i_clkId;
					appII.connectWAS(i_clkId);
				} else {
					console.log("III Starting the: " + i_clkName + '  ID:  ' + i_clkId + '  connectCSC');
					i_clkId2 = i_clkId;
					appII.connectCSC(i_clkId);
				}

			});

			i = peripheral.id;
			n = peripheral.name;
			r = peripheral.rssi;

			$$('#ble_results_ul_csc').append(

				'        <li id = "' + item_counter + '" class = "class_ble_results_li_csc color-white">' +
				'          <a data-service = "1816" data-rssi = "' + r + '" data-name = "' + n + '" data-id = "' + i + '" href="#" class="item-link item-content ble-clickme">' +
				'              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
				'              <div class="item-inner"> ' +
				'              <div class="item-title-row"> ' +
				'                  <div class="item-title">' + n + '</div> ' +
				'                  <div class="item-after"><span class="badge">' + r + '</span></div></div> ' +
				'              </div> ' +
				'          </a> ' +
				'      </li>'

			); //END APPEND

			item_counter++;


		} // END ONSCAN FCTN

		function scanFailureCSC(reason) {
			console.log("CSC BLE Scan Failed");
		}

		ble.startScan(['1816'], onScanCSC, scanFailureCSC);
		setTimeout(ble.stopScan, 5000,
			function() {
				console.log("Scan complete");
				myCenterAlert('Complete', 500);
			},
			function() {
				console.log("stopScan failed");
			}
		);

	}, //END ALL SCAN III CSC FUNCTION



	connectWAS: function(thisItem) {
		console.log('thisItem:  ' + thisItem);
		console.log('Attempting Connect WAS');
		myCenterAlert('Connecting Wahoo Speed Sensor', 1500);
		ble.connect(thisItem, onConnectWAS, onDisconnectWAS);

		function onConnectWAS() {
			console.log('onConnect WAS');
			var btService = {
				serviceHR: '180d',
				measurementHR: '2a37',
				serviceCSC: '1816',
				measurementCSC: '2A5B',
				servicePOW: '1818',
				measurementPOW: '2A63'
			};
			myCenterAlert('Speed Sensor Connected.  Connect another Sensor or Press the Back & Start Buttons', 3000);
			ble.startNotification(thisItem, btService.serviceCSC, btService.measurementCSC, appII.onDataWAS, appII.onErrorWAS);
		}

		function onDisconnectWAS() {
			console.log('onDisconnect WAS');
			myCenterAlert('SPD Sensor has Disconnected', 1000);
			mainView.router.loadPage("#bluetooth");
			$$(".cls_disconnect_message").html('<h3>RECONNECT SENSORS</h3>');

			msgBluetoothDisconnect();
		}
	},

	connectWAC: function(thisItem) {
		console.log('thisItem:  ' + thisItem);
		console.log('Attempting Connect WAC');
		myCenterAlert('Connecting Wahoo Cadence Sensor', 1500);
		ble.connect(thisItem, onConnectWAC, onDisconnectWAC);

		function onConnectWAC() {
			console.log('onConnect WAC');
			var btService = {
				serviceHR: '180d',
				measurementHR: '2a37',
				serviceCSC: '1816',
				measurementCSC: '2A5B',
				servicePOW: '1818',
				measurementPOW: '2A63'
			};
			myCenterAlert('Cadence Sensor Connected.  Connect another Sensor or Press the Back & Start Buttons', 3000);
			ble.startNotification(thisItem, btService.serviceCSC, btService.measurementCSC, appII.onDataWAC, appII.onErrorWAC);
		}

		function onDisconnectWAC() {
			console.log('onDisconnect WAC');
			myCenterAlert('CAD Sensor has Disconnected', 1000);
			mainView.router.loadPage("#bluetooth");
			$$(".cls_disconnect_message").html('<h3>RECONNECT SENSORS</h3>');

			msgBluetoothDisconnect();
		}
	},

	//START ONDATA-CSC
	onDataCSC: function(bufferCSC) {

		var dataCSC = new Uint8Array(bufferCSC);
		var currCAD = dataCSC[7];
		var currSPD = dataCSC[1];
		//calcCSC(currSPD, currCAD);
		var currCSCtime = _.now();
		onWheelMeasurementReceived(currSPD, currCSCtime); //_.now()
		onCrankMeasurementReceived(currCAD, currCSCtime);

	},
	//END ONDATA-CSC

	//START ONERROR-CSC
	onErrorCSC: function() {
		mainView.router.loadPage("#bluetooth");
		myApp.alert('Reconnect?', 'CADENCE Sensor Error', function() {
			console.log('attempting reconnect error CSC...');
			appII.connectCSC(i_clkId2);
		});
	},
	//END ONERROR-CSC


	//START ONDATA-POW
	onDataPOW: function(bufferPOW) {
		//console.log('onDataPOW');
		var dataPOW = new Uint8Array(bufferPOW);
		var currPOW = dataPOW[2];
		var powFlag = dataPOW[3];

		if (powFlag == 1) {
			currPOWx = currPOW + 255;
		}
		if (powFlag === 0) {
			currPOWx = currPOW;
		}

		tim.timPower = Math.round(currPOWx);
		console.log('tim.timPower:  ' + tim.timPower);
		// $$('#POW').text(tim.timPower);
		// $$('#POW1').text(tim.timPower);
		//updateUserDataTim();
	},
	//END ONDATA-POW

	//START ONERROR-POW
	onErrorPOW: function() {
		console.log('onErrorPOW');
	},
	//END ONERROR-POW


	//START ONDATA-WAC
	onDataWAC: function(bufferWAC) {
		var dataWAC = new Uint8Array(bufferWAC);
		var currWAC = dataWAC[1];
		var currWACtime = _.now();
		onCrankMeasurementReceived(currWAC, currWACtime);
		//calcWahooCadence(currWAC);
		//console.log('WAC:  ' + JSON.stringify(dataWAC));
	},
	//END ONDATA-WAC

	//START ONERROR-WAC
	onErrorWAC: function() {
		console.log('onErrorWAC');
		mainView.router.loadPage("#bluetooth");
		myApp.alert('Reconnect?', 'CADENCE Sensor Error', function() {
			console.log('attempting reconnect error WAC...');
			appII.connectWAC(i_clkId4);
		});
	},
	//END ONERROR-WAC


	//START ONDATA-WAS
	onDataWAS: function(bufferWAS) {
		var dataWAS = new Uint8Array(bufferWAS);
		var currWAS = dataWAS[1];
		var currWAStime = _.now();
		onWheelMeasurementReceived(currWAS, currWAStime);
		//calcWahooSpeed(currWAS);

		//console.log('WAS:  ' + JSON.stringify(dataWAS));

	},
	//END ONDATA-WAS

	//START ONERROR-WAS
	onErrorWAS: function() {
			console.log('onErrorWAS');
			mainView.router.loadPage("#bluetooth");
			myApp.alert('Reconnect?', 'SPEED Sensor Error', function() {
				console.log('attempting reconnect error WAS...');
				appII.connectWAS(i_clkId3);
			});
		}
		//END ONERROR-WAS

	//LAST ONE - NO COMMA
	//END APP
};
