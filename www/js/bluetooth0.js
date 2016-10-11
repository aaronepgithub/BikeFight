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

$$('#scanHR').on('click', function() {
	$$('.cls_btle_results_li_hr').remove();
    $$('.cls_btle_results_li_csc').remove();
	console.log('touchstart: scanner');
    myCenterAlert('Scanning...', 15000);
	scanHR();
    //WAIT 5 SECONDS AND THEN START HR FROM VELO
    setTimeout(function(){ scanCSC(); }, 6000);
});

// $$('#scanCSCx').on('touchstart', function(e) {
// 	$$('.class_ble_results_li_csc').remove();
// 	console.log('touchstart: scanCSC');
// 	scanCSC();
// 	myCenterAlert('Scanning for Speed/Cadence', 5000);
// });

// $$('#scanVELOx').on('touchstart', function(e) {
// 	$$('.class_ble_results_li_csc_mio').remove();
// 	console.log('touchstart: scanMIO');
// 	scanVelo();
// 	myCenterAlert('Scanning for MIO VELO', 5000);
// });

function onDiscoverFailure() {
    console.log('Discover Failed');
}

function onDiscoverDevice(device) {
    console.log(JSON.stringify(device));
    if(device.name.toString() === oldName) {return;}
    

    var n = device.name.toString();
    var a = n.search("Velo");var b = n.search("VELO");var c = n.search("velo");
    if (a>0 || b>0 || c>0) {
        isVelo = 1;
        isVeloID = device.id.toString();
        console.log('isVelo: ' + isVelo );
        return;
        }


            $$('#ble_results_ul').on('click', 'a', function(e) {
				console.log('click:  HR Item to Connect');

				var idHR = $$(this).data('id');var idHRName = $$(this).data('name');
                console.log(idHRName + ' | ' + idHR);
                appII.connectHR(idHR.toString());

			});


            $$('#ble_results_ul').append(
            '        <li id = "' + device.id + '" class = "cls_btle_results_li_hr color-white">' +
            '          <a data-service = "180d" data-rssi = "' + device.rssi + '" data-name = "' + device.name + '" data-id = "' + device.id + '" href="#" class="item-link item-content ble-clickme">' +
            '              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
            '              <div class="item-inner"> ' +
            '              <div class="item-title-row"> ' +
            '                  <div class="item-title">' + device.name + '</div> ' +
            '                  <div class="item-after"><span class="badge">' + device.rssi + '</span></div></div> ' +
            '              </div> ' +
            '          </a> ' +
            '      </li>'
        ); 
        //END APPEND

        var oldName = device.name.toString();

}  //END DISCOVER

function scanHR () {    
    //ble.scan(['180d'], 5, onDiscoverDevice, onError);
    		console.log('1.  ble.startScan for HR');
		ble.startScan(['180d'], onDiscoverDevice, onDiscoverFailure);

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

function scanCSC () {    
    //ble.scan(['180d'], 5, onDiscoverDevice, onError);
    		console.log('1.  ble.startScan for CSC');
		ble.startScan(['1816'], onDiscoverDeviceCSC, onDiscoverFailure);

		setTimeout(ble.stopScan, 8000,
			function() {
				console.log("Scan complete");
				myCenterAlert('Complete', 500);
			},
			function() {
				console.log("stopScan failed");
			}
		);
}


var isVelo = 0;
var isVeloID = 'abc'
var conVelo = 0;




function startVelo() {
    if(isVelo>0) {setTimeout(function(){ appII.connectCSC(isVeloID.toString()); }, 500);}
}

function onDiscoverDeviceCSC(device) {
    console.log(JSON.stringify(device));
    if(device.name.toString() === oldName2) {return;}
    
    var n = device.name.toString();
    var a = n.search("Velo");var b = n.search("VELO");var c = n.search("velo");
    if (a>0 || b>0 || c>0) {
        isVelo = 1;
        console.log('isVelo: ' + isVelo );
        return;
        }

            $$('#ble_results_ul_csc').on('click', 'a', function(e) {
				console.log('touchstart:  CSC Item to Connect');

				var idCSC = $$(this).data('id');var idCSCName = $$(this).data('name');
                console.log(idCSCName + ' | ' + idCSC);

                appII.connectCSC(idCSC.toString());

                
			});


            $$('#ble_results_ul_csc').append(
            '        <li id = "' + device.id + '" class = "cls_btle_results_li_csc color-white">' +
            '          <a data-service = "180d" data-rssi = "' + device.rssi + '" data-name = "' + device.name + '" data-id = "' + device.id + '" href="#" class="item-link item-content ble-clickme">' +
            '              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
            '              <div class="item-inner"> ' +
            '              <div class="item-title-row"> ' +
            '                  <div class="item-title">' + device.name + '</div> ' +
            '                  <div class="item-after"><span class="badge">' + device.rssi + '</span></div></div> ' +
            '              </div> ' +
            '          </a> ' +
            '      </li>'
        ); 
        //END APPEND

        var oldName2 = device.name.toString();

}  //END DISCOVER