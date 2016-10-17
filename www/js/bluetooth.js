var blteServices = {
	serviceHR: '180d',
	measurementHR: '2a37',
	serviceCSC: '1816',
	measurementCSC: '2A5B',
	servicePOW: '1818',
	measurementPOW: '2A63',
	serviceHRwrist: '55FF',
	measurementHRwrist: '000033F2-0000-1000-8000-00805F9B34FB'
};


function msgBlteDisconnect() {
	if (tim.timStyle !== "NO") {
		TTS
				.speak({
						text: 'Bluetooth Sensors have Disconnected',
						locale: 'en-GB',
						rate: 1.5
				}, function() {
						//console.log('TTS BT Disconnect SUCCESS');
				}, function(reason) {
						//console.log('TTS FAILURE:  ' + reason);
				});
	}
}


var isVelo = 0;
var oldName, connectCounter;
var hrType, cscType;


//SCAN FOR HR
 $$('#blteScannerHR').on('touchstart', function(e) {
	connectCounter = 0;
 	oldName = '';
 	$$('.cls_btle_results_li').remove();
 	//console.log('touchstart: scanner');
     myCenterAlert('HR Scanning...', 5000);
     scanHR();
 });

 //SCAN FOR CSC
 $$('#blteScannerCSC').on('touchstart', function(e) {
	connectCounter = 0;
 	oldName = '';
 	$$('.cls_btle_results_li_csc').remove();
 	//console.log('touchstart: scanner');
     myCenterAlert('SP/CAD Scanning...', 5000);
     scanCSC();
 });

  //SCAN FOR VELO
 $$('#blteScannerVELO').on('touchstart', function(e) {
	connectCounter = 0;
 	oldName = '';
 	$$('.cls_btle_results_li').remove();
 	//console.log('touchstart: scanner');
     myCenterAlert('HR Scanning...', 5000);
     scanCSC();
 });


function scanHR () {
            //console.log('1.  blte scanHR');
        ble.startScan(['180d'], onDiscoverDevice, onDiscoverFailure);
        setTimeout(ble.stopScan, 5000,
            function() {
                //console.log("Scan complete");
                myCenterAlert('Complete', 500);
            },
            function() {
                //console.log("stopScan failed");
            }
        );
}

function scanCSC () {
           //console.log('1.  ble.startScan for CSC');
       ble.startScan(['1816'], onDiscoverDeviceCSC, onDiscoverFailure);
       setTimeout(ble.stopScan, 5000,
           function() {
               //console.log("Scan complete");
               myCenterAlert('Complete', 500);
           },
           function() {
               //console.log("stopScan failed");
           }
       );
}




function searchName (x) {

	var veloI = x.toString().search("VELO");
	var veloII = x.toString().search("Velo");
	var veloIII = x.toString().search("velo");
	var wacIII = x.toString().search("CADEN");
	var wasIII = x.toString().search("SPEED");
		if (veloIII >= 0 || veloII >= 0 || veloI >= 0) {
			return 1;
		}
		if (wacIII >=0) {return 2;}
		if (wasIII >=0) {return 3;}

		if (veloIII < 0 && wacIII < 0 && wasIII < 0 ) {
			return 0;
		}

}

function onDiscoverFailure() {
    //console.log('Discover Failed');
}

function onDiscoverDevice(device) {
    //console.log(JSON.stringify(device));
    if(device.name.toString() === oldName) {return;}

				function blteConnect(blteID, blteName) {


							function onConnect() {
									myCenterAlert('Connecting.....', 1000);

									if (hrType === 1) {
									 //console.log('VELO');
									 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
										 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
											 if(tim.timSpeed > 0 ) {ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError3);}
											 if(tim.timHR > 0) {ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError3);}
											 else {
											 	ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError4);
											 			setTimeout(function() {
															ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError4);
														}, 5000);
											 	}
										 }

									 if (hrType === 2) {
										 //console.log('WAC');
											//ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError);
											myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
											ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataWAC, onError);
											}

									if (hrType === 3) {
									 //console.log('WAS');
										 //ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError);
										 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
										 ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataWAS, onError);
										 }

									 if (hrType === 0) {
											 //console.log('Other');
										 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
										 ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError4);
											 // if(tim.timSpeed > 0 ) {ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError3);}
											 // if(tim.timHR > 0) {ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError3);}
											 // else {
											 // 	ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError4);
											 // 			setTimeout(function() {
												// 			ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError4);
												// 		}, 5000);
											 // 	}
									 	}

										function onError2() {
											//console.log('On Error2');
										}
										function onError3() {
											//console.log('On Error3');
										}
										function onError4() {
											//console.log('On Error4');
										}

										


										function onDataHR(buffer1) {
											var dataHR = new Uint8Array(buffer1);
											//console.log('dataHR:  ' + JSON.stringify(dataHR));
												var currHR = dataHR[1];
												onHRMeasurementReceived(currHR);
										}

										function onDataCSC(buffer2) {
											var dataCSC = new Uint8Array(buffer2);
											var currCAD = dataCSC[7];
											var currSPD = dataCSC[1];
											var currCSCtime = _.now();
											onWheelMeasurementReceived(currSPD, currCSCtime);
											onCrankMeasurementReceived(currCAD, currCSCtime);
										}

										function onDataWAC(buffer3) {
											var dataWAC = new Uint8Array(buffer3);
											var currWAC = dataWAC[1];
											// var currSPD = dataCSC[1];
											var currWACtime = _.now();
											// onWheelMeasurementReceived(currSPD, currCSCtime);
											onCrankMeasurementReceived(currWAC, currWACtime);
										}

										function onDataWAS(buffer4) {
											var dataWAS = new Uint8Array(buffer4);
											// var currCAD = dataCSC[7];
											var currWAS = dataWAS[1];
											var currWAStime = _.now();
											onWheelMeasurementReceived(currWAS, currWAStime);
											// onCrankMeasurementReceived(currCAD, currCSCtime);
										}


								}


						myCenterAlert('Connecting....', 1000);
						var type = searchName (blteName);
						hrType = type;

						function onError() {
							//console.log('Connect Error');
							tim.timHR = 0;
							// tim.timSpeed = 0;tim.timCadence = 0;
							var string = null;
							$('.tab-btn-h').each(function(index, obj) {
								string += $(this).text('0');
							});
							// $('.tab-btn-s').each(function(index, obj) {
							// 	string += $(this).text('0');
							// });
							// $('.tab-btn-c').each(function(index, obj) {
							// 	string += $(this).text('0');
							// });


							myCenterAlert('BLTE HR has Disconnected', 1000);
							mainView.router.loadPage("#bluetooth");
							$$(".cls_disconnect_message").html('<h3>RECONNECT SENSORS</h3>');

							msgBlteDisconnect();
						}

						

						//console.log('blteConnect, id: ' + blteID);
						myCenterAlert('Connecting...', 1000);
						ble.connect(blteID, onConnect, onError);

				}



        $$('#blte_results_ul').on('click', 'a', function(e) {
            //console.log('click:  Blte Item to Connect');
						//$$('.cls_btle_results_li').remove();
						myCenterAlert('Connecting..', 1000);

    				var idBlteId = $$(this).data('id');
            var idBlteName = $$(this).data('name');
            //console.log(idBlteName + ' | ' + idBlteId);


						//console.log(idBlteId);
            blteConnect(idBlteId, idBlteName);
        });


        var ii = device.id;
        var nn = device.name;
        var rr = device.rssi;

        $$('#blte_results_ul').append(
        '        <li class = "cls_btle_results_li color-white">' +
        '          <a data-service = "180d" data-rssi = "' + rr + '" data-name = "' + nn + '" data-id = "' + ii + '" href="#" class="item-link item-content ble-clickme">' +
        '              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
        '              <div class="item-inner"> ' +
        '              <div class="item-title-row"> ' +
        '                  <div class="item-title">' + nn + '</div> ' +
        '                  <div class="item-after"><span class="badge">' + rr + '</span></div></div> ' +
        '              </div> ' +
        '          </a> ' +
        '      </li>'
        );
        //END APPEND

        oldName = device.name.toString();
}  //END DISCOVER HR


//ON DISCOVER CSC
function onDiscoverDeviceCSC(device) {
    //console.log(JSON.stringify(device));
    if(device.name.toString() === oldName) {return;}

				function blteConnectCSC(blteID, blteName) {

					//START ONCONNECTCSC
							function onConnectCSC() {
		myCenterAlert('Connecting.....', 1000);

		if (cscType === 1) {
		 //console.log('VELO');
		 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
			 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
				 if(tim.timSpeed > 0 ) {ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError3);}
				 if(tim.timHR > 0) {ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError3);}
				 else {
				 	ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError4);
				 			setTimeout(function() {
								ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError4);
							}, 5000);
				 	}
			 }

		 if (cscType === 2) {
			 //console.log('WAC');
				//ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError);
				myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
				ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataWAC, onError);
				}

		if (cscType === 3) {
		 //console.log('WAS');
			 //ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError);
			 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
			 ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataWAS, onError);
			 }

		 if (cscType === 0) {
				 //console.log('Other');
			 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
			 ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError3);
			 
				 // if(tim.timSpeed > 0 ) {ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError3);}
				 // if(tim.timHR > 0) {ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError3);}
				 // else {
				 // 	ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError4);
				 // 			setTimeout(function() {
					// 			ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError4);
					// 		}, 5000);
				 // 	}
		 	}

			function onError2() {console.log('On Error2');}
			function onError3() {console.log('On Error3');}
			function onError4() {console.log('On Error4');}

			


			function onDataHR(buffer1) {
				var dataHR = new Uint8Array(buffer1);
				//console.log('dataHR:  ' + JSON.stringify(dataHR));
					var currHR = dataHR[1];
					onHRMeasurementReceived(currHR);
			}

			function onDataCSC(buffer2) {
				var dataCSC = new Uint8Array(buffer2);
				var currCAD = dataCSC[7];
				var currSPD = dataCSC[1];
				var currCSCtime = _.now();
				onWheelMeasurementReceived(currSPD, currCSCtime);
				onCrankMeasurementReceived(currCAD, currCSCtime);
			}

			function onDataWAC(buffer3) {
				var dataWAC = new Uint8Array(buffer3);
				var currWAC = dataWAC[1];
				// var currSPD = dataCSC[1];
				var currWACtime = _.now();
				// onWheelMeasurementReceived(currSPD, currCSCtime);
				onCrankMeasurementReceived(currWAC, currWACtime);
			}

			function onDataWAS(buffer4) {
				var dataWAS = new Uint8Array(buffer4);
				// var currCAD = dataCSC[7];
				var currWAS = dataWAS[1];
				var currWAStime = _.now();
				onWheelMeasurementReceived(currWAS, currWAStime);
				// onCrankMeasurementReceived(currCAD, currCSCtime);
			}	


								}
					//END ONCONNECT CSC

						myCenterAlert('Connecting....', 1000);
						var type = searchName (blteName);
						cscType = type;

						function onError() {
							//console.log('Connect Error');
							//tim.timHR = 0;
							tim.timSpeed = 0;tim.timCadence = 0;
							var string = null;
							// $('.tab-btn-h').each(function(index, obj) {
							// 	string += $(this).text('0');
							// });
							$('.tab-btn-s').each(function(index, obj) {
								string += $(this).text('0');
							});
							$('.tab-btn-c').each(function(index, obj) {
								string += $(this).text('0');
							});


							myCenterAlert('BLTE CSC has Disconnected', 1000);
							mainView.router.loadPage("#bluetooth");
							$$(".cls_disconnect_message").html('<h3>RECONNECT SENSORS</h3>');

							msgBlteDisconnect();
						}

						

						//console.log('blteConnect, id: ' + blteID);
						myCenterAlert('Connecting...', 1000);
						ble.connect(blteID, onConnectCSC, onError);

				}



        $$('#blte_results_ul_csc').on('click', 'a', function(e) {
            //console.log('click:  Blte Item to Connect');
						//$$('.cls_btle_results_li').remove();
						myCenterAlert('Connecting..', 1000);

    				var idBlteId = $$(this).data('id');
            		var idBlteName = $$(this).data('name');
            		var idBlteService = $$(this).data('service');
            		//console.log(idBlteName + ' | ' + idBlteId);


						//console.log(idBlteId);
            blteConnectCSC(idBlteId, idBlteName);
        });


        var ii = device.id;
        var nn = device.name;
        var rr = device.rssi;

        $$('#blte_results_ul_csc').append(
        '        <li class = "cls_btle_results_li_csc color-white">' +
        '          <a data-service = "csc" data-rssi = "' + rr + '" data-name = "' + nn + '" data-id = "' + ii + '" href="#" class="item-link item-content ble-clickme">' +
        '              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
        '              <div class="item-inner"> ' +
        '              <div class="item-title-row"> ' +
        '                  <div class="item-title">' + nn + '</div> ' +
        '                  <div class="item-after"><span class="badge">' + rr + '</span></div></div> ' +
        '              </div> ' +
        '          </a> ' +
        '      </li>'
        );
        //END APPEND

        oldName = device.name.toString();
}  //END DISCOVER CSC





