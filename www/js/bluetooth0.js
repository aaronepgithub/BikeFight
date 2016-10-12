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

var isVelo = 0;
var mio_item_counter = 0;
var oldName;

//COMBO - SCAN FOR HR/CSC
$$('#scanHR').on('click', function() {
	$$('.cls_btle_results_li_hr').remove();
    $$('.cls_btle_results_li_csc').remove();
    $$('.cls_btle_results_li_velo').remove();

    
	console.log('touchstart: scanner');
    myCenterAlert('Scanning...', 10000);
	scanHR();
    //WAIT 5 SECONDS AND THEN START HR FROM VELO
    setTimeout(function(){ scanCSC(); }, 5000);
});


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
        console.log('isVelo: ' + isVelo );
        //return;
        

        //START IF VELO
            $$('#ble_results_ul_velo').on('click', 'a', function() {
            console.log('click:  Mio Velo to Connect');

            var idHR = $$(this).data('id');var idHRName = $$(this).data('name');
            console.log(idHRName + ' | ' + idHR);
            //appII.connectHR(idHR.toString());
            if(mio_item_counter < 1) {
				console.log("Starting the: " + idHRName + '  ID:  ' + idHR + '  connectVELO');
				appII.connectCSC(idHR);
				//WAIT 5 SECONDS AND THEN START HR FROM VELO
				setTimeout(function(){ appII.connectHR(idHR); }, 5000);
				mio_item_counter++;
			}

        });


        $$('#ble_results_ul_velo').append(
        '        <li id = "' + device.id + '" class = "cls_btle_results_li_velo color-white">' +
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

        oldName = device.name.toString();
        //END IF VELO

    } else {

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

        oldName = device.name.toString();
   
 }  //END ELSE


}  //END DISCOVER

function scanHR () {    
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
    		console.log('1.  ble.startScan for CSC');
		ble.startScan(['1816'], onDiscoverDeviceCSC, onDiscoverFailure);

		setTimeout(ble.stopScan, 5000,
			function() {
				console.log("Scan complete");
				myCenterAlert('Complete', 500);
			},
			function() {
				console.log("stopScan failed");
			}
		);
}




function onDiscoverDeviceCSC(device) {
    console.log(JSON.stringify(device));
    if(device.name.toString() === oldName) {return;}
    
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

            //appII.connectCSC(idCSC.toString());

            var wacIII = idCSCName.toString().search("CADEN");
            var wasIII = idCSCName.toString().search("SPEED");

            if (wacIII >= 0) {
                console.log("III Starting the: " + idCSCName + '  ID:  ' + idCSC + '  connectWAC');
                appII.connectWAC(idCSC.toString());
            } else if (wasIII >= 0) {
                console.log("III Starting the: " + idCSCName + '  ID:  ' + idCSC + '  connectWAS');
                appII.connectWAS(idCSC.toString());
            } else {
                console.log("III Starting the: " + idCSCName + '  ID:  ' + idCSC + '  connectCSC');
                appII.connectCSC(idCSC.toString());
            }

            
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

    oldName = device.name.toString();

}  //END DISCOVER