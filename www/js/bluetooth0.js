//startup bt
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
						console.log('TTS BT Disconnect SUCCESS');
				}, function(reason) {
						console.log('TTS FAILURE:  ' + reason);
				});
	}
}


var isVelo = 0;
var oldName;


//COMBO - SCAN FOR HR/CSC
 $$('#blteScanner').on('touchstart', function(e) {
	 var connectCounter = 0;var connectCounter1 = 0;var connectCounter2 = 0;

 	oldName = '';
 	connectCounter = 0;connectCounter1 = 0;connectCounter2 = 0;
 	$$('.cls_btle_results_li').remove();


 	console.log('touchstart: scanner');
     myCenterAlert('Scanning...', 5000);
 	//scanHR();
     //WAIT 5 SECONDS AND THEN START HR FROM VELO
     // setTimeout(function(){ scanCSC(); }, 5000);
//     appII.allScanII();
//     setTimeout(function(){ appII.allScanCSC(); }, 5000);

     scanAll();
 });


function scanAll () {
            console.log('1.  blte scanAll');
        ble.startScan([], onDiscoverDevice, onDiscoverFailure);

        setTimeout(ble.stopScan, 5000,
            function() {
                console.log("Scan complete");
                //myCenterAlert('Complete', 500);
            },
            function() {
                console.log("stopScan failed");
            }
        );
}

//function scanCSC () {
//            console.log('1.  ble.startScan for CSC');
//        ble.startScan(['1816'], onDiscoverDeviceCSC, onDiscoverFailure);
//
//        setTimeout(ble.stopScan, 5000,
//            function() {
//                console.log("Scan complete");
//                myCenterAlert('Complete', 500);
//            },
//            function() {
//                console.log("stopScan failed");
//            }
//        );
//}


function onDiscoverFailure() {
    console.log('Discover Failed');
}

function onDiscoverDevice(device) {
    console.log(JSON.stringify(device));


    if(device.name.toString() === oldName) {return;}



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

				function blteConnect(blteID, blteName) {

						var type = searchName (blteName);

						function onError() {
							console.log('Connect Error');
							tim.timHR = 0;tim.timSpeed = 0;tim.timCadence = 0;
							var string = null;
							$('.tab-btn-h').each(function(index, obj) {
								string += $(this).text('0');
							});
							$('.tab-btn-s').each(function(index, obj) {
								string += $(this).text('0');
							});
							$('.tab-btn-c').each(function(index, obj) {
								string += $(this).text('0');
							});


							myCenterAlert('BLTE has Disconnected', 1000);
							mainView.router.loadPage("#bluetooth");
							$$(".cls_disconnect_message").html('<h3>RECONNECT SENSORS</h3>');

							msgBlteDisconnect();
						}

						function onConnect() {

							if (type === 1) {
							 console.log('VELO');
							 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
								 ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError);
								 ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError);
								 }

							 if (type === 2) {
								 console.log('WAC');
									//ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError);
									myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
									ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataWAC, onError);
									}

								if (type === 3) {
								 console.log('WAS');
									 //ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError);
									 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
									 ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataWAS, onError);
									 }

									 if (type === 0) {
		 								 console.log('Other');
										 myCenterAlert('Sensor Connected.  Connect another Sensor or Return to Settings and Start', 3000);
	 									 ble.startNotification(blteID, blteServices.serviceHR, blteServices.measurementHR, onDataHR, onError);
	 									 ble.startNotification(blteID, blteServices.serviceCSC, blteServices.measurementCSC, onDataCSC, onError);
	 									 }

								function onError() {console.log('On Error');}

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


						}  //End onConnect

						console.log('blteConnect, id: ' + blteID);
						ble.connect(blteID, onConnect, onError);

				}



        $$('#blte_results_ul').on('click', 'a', function(e) {
            console.log('click:  Blte Item to Connect');
						// $$('.cls_btle_results_li').remove();

    				var idBlteId = $$(this).data('id');
            var idBlteName = $$(this).data('name');
            console.log(idBlteName + ' | ' + idBlteId);


						console.log(idBlteId);
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




}  //END DISCOVER

//function blteConnect(blteID) {
//
//    function onError() {console.log('Connect Error');}
//    function onConnect() {
//         ble.startNotification(blteID, blteServices.serviceHR, onDataHR, onError);
//         ble.startNotification(blteID, blteServices.serviceCSC, onDataCSC, onError);
//
//        function onError() {console.log('On Error');}
//        function onDataHR() {console.log('On DataHR');}
//        function onDataCSC() {console.log('On DatCSC');}
//    }
//
//
//    ble.connect(blteID, onConnect, onError);
//}





//
//function onDiscoverDeviceCSC(device) {
//    console.log(JSON.stringify(device));
//    if(device.name.toString() === oldName) {return;}
//
//    var n = device.name.toString();
//    var a = n.search("Velo");var b = n.search("VELO");var c = n.search("velo");
//    if (a>0 || b>0 || c>0) {
//        isVelo = 1;
//        console.log('isVelo: ' + isVelo );
//        return;
//        }
//
//        $$('#ble_results_ul_csc').on('click', 'a', function() {
//            console.log('touchstart:  CSC Item to Connect');
//
//            var idCSC = $$(this).data('id');var idCSCName = $$(this).data('name');
//            console.log(idCSCName + ' | ' + idCSC);
//
//            //appII.connectCSC(idCSC.toString());
//
//            var wacIII = idCSCName.toString().search("CADEN");
//            var wasIII = idCSCName.toString().search("SPEED");
//
//
//							if(connectCounter2 < 1) {
//				            if (wacIII >= 0) {
//				                console.log("III Starting the: " + idCSCName + '  ID:  ' + idCSC + '  connectWAC');
//				                appII.connectWAC(idCSC.toString());
//				            } else if (wasIII >= 0) {
//				                console.log("III Starting the: " + idCSCName + '  ID:  ' + idCSC + '  connectWAS');
//				                appII.connectWAS(idCSC.toString());
//				            } else {
//				                console.log("III Starting the: " + idCSCName + '  ID:  ' + idCSC + '  connectCSC');
//				                appII.connectCSC(idCSC.toString());
//				            }
//										connectCounter2++;
//										// $$('.cls_btle_results_li_hr').remove();
//										$$('.cls_btle_results_li_csc').remove();
//										$$('.cls_btle_results_li_velo').remove();
//								}
//
//
//        });
//
//
//        $$('#ble_results_ul_csc').append(
//        '        <li id = "' + device.id + '" class = "cls_btle_results_li_csc color-white">' +
//        '          <a data-service = "180d" data-rssi = "' + device.rssi + '" data-name = "' + device.name + '" data-id = "' + device.id + '" href="#" class="item-link item-content ble-clickme">' +
//        '              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
//        '              <div class="item-inner"> ' +
//        '              <div class="item-title-row"> ' +
//        '                  <div class="item-title">' + device.name + '</div> ' +
//        '                  <div class="item-after"><span class="badge">' + device.rssi + '</span></div></div> ' +
//        '              </div> ' +
//        '          </a> ' +
//        '      </li>'
//    );
//    //END APPEND
//
//    oldName = device.name.toString();
//
//}  //END DISCOVER
