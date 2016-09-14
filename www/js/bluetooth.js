//THESE ARE THE BLE COMMANDS
//ble.disconnect(device_id, app.onError, app.onError);
//ble.scan([heartRate.service], 5, onScan, onScanFailure);
//ble.connect(peripheral.id, app.onConnect, app.onDisconnect);
//ble.startNotification(peripheral.id, btService.serviceHR, btService.measurementHR, app.onData, app.onError);
//ble.disconnect(device_id, app.onError, app.onError);

var arrSensors = [];

var btService = {
    serviceHR: '180d',
    measurementHR: '2a37',
    serviceCSC: '1816',
    measurementCSC: '2A5B',
    servicePOW: '1818',
    measurementPOW: '2A63',
    hrid: 'E3:1F:3E:CA:1E:87'
};

$$('#scanHR').on('click', function (e) {
    $$('.class_ble_results_li_hr').remove();
    console.log('clicked scanHR');
    appII.allScanII();
    myCenterAlert('Scanning for HR', 5000);
    });

    $$('#scanCSC').on('click', function (e) {
      $$('.class_ble_results_li_csc').remove();
    console.log('clicked scanCSC');
    appII.allScanCSC();
    myCenterAlert('Scanning for Speed/Cadence', 5000);
    });



var item_counter = 1;
var item_name = "delme";
var b_item = {};


var appII = {

    //START ONDATA-HR APPII
    onDataHR: function (bufferHR) {
        //console.log('appII.onDataHR');
        var dataHR = new Uint8Array(bufferHR);
        var currHR = dataHR[1];

        tim.timHR = dataHR[1];
        updateUserDataTim();

        var string = null;
        $('.tab-btn-h').each(function (index, obj) {
            string += $(this).text(currHR);
        });


    },
    //END ONDATA-HR

    //START ONERROR-HR
    onErrorHR: function () {
        console.log('appII.onErrorHR');
    },
    //END ONERROR-HR


    //HR SCAN
    allScanII: function () {
        console.log('HR allScan Starting');
        function onScanII(peripheralHR) {
            console.log("Found " + JSON.stringify(peripheralHR));

            //WAIT FOR ITEM TO BE CLICKED ON
                console.log(peripheralHR.name + ' - ' + peripheralHR.id);
                myCenterAlert('Found:  ' + peripheralHR.name + '.  Tap to connect.');

                    $$('.class_ble_results_ul').on('click', 'a', function (e) {
                        console.log('clicked class_ble_results_ul item');
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

                    arrSensors.push(
                        '        <div card><li id = "' + item_counter + '" class = "class_ble_results_li_hr color-white">' +
                        '          <a data-service = "180d" data-rssi = "' + r + '" data-name = "' + n + '" data-id = "' + i + '" href="#" class="item-link item-content ble-clickme">' +
                        '              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
                        '              <div class="item-inner"> ' +
                        '              <div class="item-title-row"> ' +
                        '                  <div class="item-title">' + n + '</div> ' +
                        '                  <div class="item-after"><span class="badge">' + r + '</span></div></div> ' +
                        '              </div> ' +
                        '          </a> ' +
                        '      </li></div>'
                    );


                    //myApp.modal({title:  arrSensors[0]});
                    //TIMEOUT & CLOSE MODAL
                    //console.log(arrSensors[0]);

                    //HTML MODAL
                    // {
                    //   var str_mod =
                      // '<div card style="font-weight:bold">' +
                      // Math.round(tim.timLastRND) + '     |  LAST RND<br>' +
                      // Math.round(tim.timLastSPD) + '     |  LAST SPD<br>' +
                      // Math.round(tim.timLastCAD) + '     |  LAST CAD<br>' +
                      // Math.round(tim.timLastHR)  + '     |  LAST HR</div>'
                      // ;
                    //   myApp.modal({title: str_mod});
                    //   setTimeout(function() {
                    //     myApp.closeModal();
                    //   }, 5000);
                    // }



        } // END ONSCAN FCTN HR


        function scanFailureII(reason) {
            console.log("BLE Scan Failed");
        }


        ble.startScan(['180d'], onScanII, scanFailureII);
        setTimeout(ble.stopScan, 5000,
        function() { console.log("Scan complete"); myCenterAlert('Complete', 500); },
        function() { console.log("stopScan failed"); }
            );

            },
            //END ALL SCAN II FUNCTION



    connectHR: function (thisItemHR) {
        console.log('thisItemHR:  ' + thisItemHR);
        console.log('Attempting Connect HR');
        myCenterAlert('Connecting HR Sensor', 1000);
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
            myCenterAlert('HR Sensor Connected.  Connect a Speed and Cadence Sensor or Press the Back Button Followed by the Start Button', 2000);
            ble.startNotification(thisItemHR, btService.serviceHR, btService.measurementHR, appII.onDataHR, appII.onErrorHR);
        }

        function onDisconnectHR(reason_HR) {
            console.log('onDisconnect HR');
            console.log(reason_HR);
            //   tim.timHR = 0;
            //   var string = null;
            //   $('.tab-btn-h').each(function(index, obj) {
            //       string += $(this).text('0');
            //   });
            myCenterAlert('HR Sensor has Disconnected', 1000);
            mainView.router.loadPage("#bluetooth");
        }
    },





    //CSC CONNECT
    connectCSC: function (thisItem) {
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
            myCenterAlert('Speed/Cadence Sensor Connected.  Connect a HR Sensor or Press the Back Button Followed by the Start Button', 2000);
            ble.startNotification(thisItem, btService.serviceCSC, btService.measurementCSC, appII.onDataCSC, appII.onErrorCSC);
        }

        function onDisconnectCSC(reason_csc) {
            console.log('onDisconnect CSC');
            console.log(reason_csc);
            tim.timSpeed = 0;
            tim.timCadence = 0;
            var stringSpd = null;
            $('.tab-btn-s').each(function (index, obj) {
                stringSpd += $(this).text(Math.round(tim.timSpeed * 10) / 10);
            });

            var stringCad = null;
            $('.tab-btn-c').each(function (index, obj) {
                stringCad += $(this).text(tim.timCadence);
            });

            myCenterAlert('Speed/Cadence Sensor has Disconnected', 1000);
            mainView.router.loadPage("#bluetooth");
        }
    },

    //START ALL SCAN and CONNECT III FUNCTION CSC
    allScanCSC: function () {
        console.log('all scan CSC Starting');

        //CALLED AFTER A SUCCESS SCAN
        function onScanCSC(peripheral) {
            console.log('OnScan CSC allScannIII');
            console.log("Found " + JSON.stringify(peripheral));
                console.log(peripheral.name + ' - ' + peripheral.id);
                myCenterAlert('Found:  ' + peripheral.name + '.  Tap to connect.');

                    $$('.class_ble_results_ul_csc').on('click', 'a', function (e) {
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
                        console.log('wacIII:  ' + wacIII);
                        console.log('wasIII:  ' + wasIII);

                        if (wacIII >= 0) {
                            console.log("III Starting the: " + i_clkName + '  ID:  ' + i_clkId + '  connectWAC');
                            appII.connectWAC(i_clkId);
                        } else if (wasIII >= 0) {
                            console.log("III Starting the: " + i_clkName + '  ID:  ' + i_clkId + '  connectWAS');
                            appII.connectWAS(i_clkId);
                        } else {
                            console.log("III Starting the: " + i_clkName + '  ID:  ' + i_clkId + '  connectCSC');
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

                    arrSensors.push(
                        '        <div card><li id = "' + item_counter + '" class = "class_ble_results_li_csc color-white">' +
                        '          <a data-service = "1816" data-rssi = "' + r + '" data-name = "' + n + '" data-id = "' + i + '" href="#" class="item-link item-content ble-clickme">' +
                        '              <div class="item-media"><i class="fa fa-bluetooth"></i></div>' +
                        '              <div class="item-inner"> ' +
                        '              <div class="item-title-row"> ' +
                        '                  <div class="item-title">' + n + '</div> ' +
                        '                  <div class="item-after"><span class="badge">' + r + '</span></div></div> ' +
                        '              </div> ' +
                        '          </a> ' +
                        '      </li></div>'
                    );


        } // END ONSCAN FCTN

        function scanFailureCSC(reason) {
            console.log("CSC BLE Scan Failed");
        }

        ble.startScan(['1816'], onScanCSC, scanFailureCSC);
        setTimeout(ble.stopScan, 5000,
        function() { console.log("Scan complete"); myCenterAlert('Complete', 500); },
        function() { console.log("stopScan failed"); }
            );

    },  //END ALL SCAN III CSC FUNCTION




    connectWAS: function (thisItem) {
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
            myCenterAlert('Speed Sensor Connected.  Connect another Sensor or Press the Back Button Followed by the Start Button', 2000);
            ble.startNotification(thisItem, btService.serviceCSC, btService.measurementCSC, appII.onDataWAS, appII.onErrorWAS);
        }

        function onDisconnectWAS() {
            console.log('onDisconnect WAS');
            myCenterAlert('Wahoo Speed Sensor has Disconnected', 1000);
            mainView.router.loadPage("#bluetooth");
        }
    },

    connectWAC: function (thisItem) {
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
            myCenterAlert('Cadence Sensor Connected.  Connect another Sensor or Press the Back Button Followed by the Start Button', 2000);
            ble.startNotification(thisItem, btService.serviceCSC, btService.measurementCSC, appII.onDataWAC, appII.onErrorWAC);
        }

        function onDisconnectWAC() {
            console.log('onDisconnect WAC');
            myCenterAlert('Wahoo Cadence Sensor has Disconnected', 1000);
            mainView.router.loadPage("#bluetooth");
        }
    },

    //START ONDATA-CSC
    onDataCSC: function (bufferCSC) {

        var dataCSC = new Uint8Array(bufferCSC);
        var currCAD = dataCSC[7];
        var currSPD = dataCSC[1];
        calcCSC(currSPD, currCAD);
    },
    //END ONDATA-CSC

    //START ONERROR-CSC
    onErrorCSC: function () {
        console.log('onErrorCSC');
    },
    //END ONERROR-CSC


    //START ONDATA-POW
    onDataPOW: function (bufferPOW) {
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
        updateUserDataTim();
    },
    //END ONDATA-POW

    //START ONERROR-POW
    onErrorPOW: function () {
        console.log('onErrorPOW');
    },
    //END ONERROR-POW


    //START ONDATA-WAC
    onDataWAC: function (bufferWAC) {
        var dataWAC = new Uint8Array(bufferWAC);
        var currWAC = dataWAC[1];
        calcWahooCadence(currWAC);
    },
    //END ONDATA-WAC

    //START ONERROR-WAC
    onErrorWAC: function () {
        console.log('onErrorWAC');
    },
    //END ONERROR-WAC


    //START ONDATA-WAS
    onDataWAS: function (bufferWAS) {
        var dataWAS = new Uint8Array(bufferWAS);
        var currWAS = dataWAS[1];
        calcWahooSpeed(currWAS);
    },
    //END ONDATA-WAS

    //START ONERROR-WAS
    onErrorWAS: function () {
        console.log('onErrorWAS');
    }
    //END ONERROR-WAS

    //LAST ONE - NO COMMA
    //END APP
};



// GLOBAL VARS USED FOR CSC CALC
var arrSpeed = new Array(20);
var arrCadence = new Array(20);
var arrTimeSpeed = new Array(20);
var arrTimeCadence = new Array(20);

var s2 = 0;
var s3 = 0;
var d1 = 0;
var d2 = 0;

function calcCSC(s, c) {

    //LOCAL VARS USED FOR CALC
    var nowSpeed = s;
    var nowCadence = c;
    var pubSpeed, pubCadence;
    var s1, s3, s4, s5;
    var t1, t2, t3, t4, t5, t10, t11, t12;
    var w2, w3, w4, w5;
    var d3, d4, d5;
    var c1;

    arrSpeed.push(nowSpeed);
    arrSpeed.shift();
    arrCadence.push(nowCadence);
    arrCadence.shift();
    arrTimeSpeed.push(Date.now());
    arrTimeSpeed.shift();
    arrTimeCadence.push(Date.now());
    arrTimeCadence.shift();


    //DIST CALCULATION
    if (arrSpeed[0] > arrSpeed[1]) {
        s1 = (arrSpeed[1] - arrSpeed[0]) + 255;
    } else {
        s1 = arrSpeed[1] - arrSpeed[0];
    }
    t1 = arrTimeSpeed[1] - arrTimeSpeed[0];
    t2 = t1 / 1000;
    t3 = t2 / 60;
    t4 = t3 / 60;
    if (s1 < 0 || isNaN(s1)) {
        return;
    }

    //S1 COUNTS THE WHEEL REVS PER TIME SLICE BETWEEN 0 & 1
    //USED FOR DISTANCE
    //S2 & S3 ARE INIT AS 0;
    //S3 MAINTAINS THE TOTAL REVS
    s3 = s2 + s1;
    //S2 WILL HAVE THE COUNT JUST PRIOR TO A NEW ADDITION ARRIVING
    s2 = s3;
    //D1 IS NOW TOTAL DISTANCE TRAVELED IN METERS
    d1 = s3 * tim.timTireCircum;
    var d1Miles = d1 * 0.000621371;
    //TOTAL DISTANCE TRAVELED
    tim.timDistanceTraveled = d1Miles.toFixed(2);
    $$('.tab-btn-dist').text(tim.timDistanceTraveled);
    $$('#header_btn1').text(tim.timDistanceTraveled + ' miles');

    //SEGMENT - NOT DISTANCE - CALC
    var temp1;
    //D2 IS NOW SEGMENT DISTANCE TRAVELED IN METERS USING 0 & 9
    if (arrSpeed[0] > arrSpeed[19]) {
        temp1 = (arrSpeed[19] - arrSpeed[0]) + 255;
    } else {
        temp1 = arrSpeed[19] - arrSpeed[0];
    }

    d2 = temp1 * tim.timTireCircum;

    //CONVERT BOTH TO MILES

    var d2Miles = d2 * 0.000621371;

    //TIME SLICE SPEED AND DISTANCE
    var temp41 = arrTimeSpeed[19] - arrTimeSpeed[0];
    var temp42 = temp41 / 1000;
    var temp43 = temp42 / 60;
    var temp44 = temp43 / 60;
    var timeslice_mph = d2Miles / temp44;
    tim.timSpeed = Math.round(timeslice_mph * 100) / 100;

    //CADENCE CALCULATION
    if (arrCadence[0] >= arrCadence[19]) {
        c1 = (arrCadence[19] - arrCadence[0]) + 255;
    } else {
        c1 = arrCadence[19] - arrCadence[0];
    }

    t10 = arrTimeCadence[19] - arrTimeCadence[0];
    t11 = t10 / 1000;
    t12 = 60 / t11;
    tim.timCadence = Math.round(c1 * t12);

    if ((!tim.timCadence) || tim.timCadence > 255) {
        tim.timCadence = 0;
    }

    if ((!tim.timSpeed)) {
        tim.timSpeed = 0;
        // console.log(tim.timSpeed + '-' + tim.timCadence);
    }



    var stringSpd = null;
    $('.tab-btn-s').each(function (index, obj) {
        stringSpd += $(this).text(Math.round(tim.timSpeed * 10) / 10);
    });

    var stringCad = null;
    $('.tab-btn-c').each(function (index, obj) {
        stringCad += $(this).text(tim.timCadence);
    });

    updateUserDataTim();
}
//END CSC CALC

//START WAHOO CAD CALC
var arrCadenceWahoo = new Array(20);
var arrTimeCadenceWahoo = new Array(20);

function calcWahooCadence(wc) {
    var nowCadenceWahoo = wc;
    var wc1, wt10, wt11, wt12;

    arrCadenceWahoo.push(nowCadenceWahoo);
    arrCadenceWahoo.shift();
    arrTimeCadenceWahoo.push(Date.now());
    arrTimeCadenceWahoo.shift();


    if (arrCadenceWahoo[0] >= arrCadenceWahoo[19]) {
        wc1 = (arrCadenceWahoo[19] - arrCadenceWahoo[0]) + 255;
    } else {
        wc1 = arrCadenceWahoo[19] - arrCadenceWahoo[0];
    }

    wt10 = arrTimeCadenceWahoo[19] - arrTimeCadenceWahoo[0];
    wt11 = wt10 / 1000;
    wt12 = 60 / wt11;

    tim.timWAC = Math.round(wc1 * wt12);

    if ((!tim.timWAC) || tim.timWAC > 255 || isNaN(tim.timWAC)) {
        tim.timWAC = 0;
    }


    tim.timCadence = tim.timWAC;

    var stringCad = null;
    $('.tab-btn-c').each(function (index, obj) {
        stringCad += $(this).text(tim.timCadence);
    });

    updateUserDataTim();
}


//START WAHOO SPEED CALC
var arrSpeedWahoo = new Array(20);
var arrTimeSpeedWahoo = new Array(20);

var ws2 = 0;
var ws3 = 0;
var wd1 = 0;
var wd2 = 0;

function calcWahooSpeed(ws) {
    var nowSpeedWahoo = ws;
    //LOCAL VARS USED FOR CALC
    var nowSpeed = ws;
    var pubSpeed;
    var ws1, ws3, ws4, ws5;
    var wt1, wt2, wt3, wt4, wt5, wt10, wt11, wt12;
    var wa2, wa3, wa4, wa5;
    var wd3, wd4, wd5;
    var wc1;

    arrSpeedWahoo.push(nowSpeedWahoo);
    arrSpeedWahoo.shift();
    arrTimeSpeedWahoo.push(Date.now());
    arrTimeSpeedWahoo.shift();

    console.log(JSON.stringify(arrSpeedWahoo));

    //DIST CALCULATION
    if (arrSpeedWahoo[0] > arrSpeedWahoo[1]) {
        ws1 = (arrSpeedWahoo[1] - arrSpeedWahoo[0]) + 255;
    } else {
        ws1 = arrSpeedWahoo[1] - arrSpeedWahoo[0];
    }
    // wt1 = arrTimeSpeedWahoo[1] - arrTimeSpeedWahoo[0];
    // wt2 = wt1 / 1000;
    // wt3 = wt2 / 60;
    // wt4 = wt3 / 60;
    // if (ws1 < 0 || isNaN(ws1)) {
    //     return;
    // }

    //WS1 COUNTS THE WHEEL REVS PER TIME SLICE BETWEEN 0 & 1
    //USED FOR DISTANCE
    //WS2 & WS3 ARE INIT AS 0;
    //WS3 MAINTAINS THE TOTAL REVS

    if (isNaN(ws1)) {
        console.log('is NaN');
    }
    else {
    ws3 = ws2 + ws1;

    console.log('ws1: ' + ws1);
        console.log('ws2: ' + ws2);
            console.log('ws3: ' + ws3);

    //S2 WILL HAVE THE COUNT JUST PRIOR TO A NEW ADDITION ARRIVING
    ws2 = ws3;
    //WD1 IS NOW TOTAL DISTANCE TRAVELED IN METERS
    wd1 = ws3 * tim.timTireCircum;
    var wd1Miles = wd1 * 0.000621371;
    //TOTAL DISTANCE TRAVELED
    tim.timDistanceTraveled = wd1Miles.toFixed(2);

    console.log('timDistanceTraveled: ' + tim.timDistanceTraveled);

    $$('.tab-btn-dist').text(tim.timDistanceTraveled);
    $$('#header_btn1').text(tim.timDistanceTraveled + ' miles');

    }


  //SEGMENT - NOT DISTANCE - CALC
    var wtemp1;
    //WD2 IS NOW SEGMENT DISTANCE TRAVELED IN METERS USING 0 & 9
    if (arrSpeedWahoo[0] > arrSpeedWahoo[19]) {
        wtemp1 = (arrSpeedWahoo[19] - arrSpeedWahoo[0]) + 255;
    } else {
        wtemp1 = arrSpeedWahoo[19] - arrSpeedWahoo[0];
    }

    wd2 = wtemp1 * tim.timTireCircum;
    //CONVERTTO MILES
    var wd2Miles = wd2 * 0.000621371;

 //TIME SLICE SPEED AND DISTANCE
    var wtemp41 = arrTimeSpeedWahoo[19] - arrTimeSpeedWahoo[0];
    var wtemp42 = wtemp41 / 1000;
    var wtemp43 = wtemp42 / 60;
    var wtemp44 = wtemp43 / 60;
    var wtimeslice_mph = wd2Miles / wtemp44;
    tim.timSpeed = Math.round(wtimeslice_mph * 100) / 100;

    if ((!tim.timSpeed)) {
        tim.timSpeed = 0;
        // console.log(tim.timSpeed + '-' + tim.timCadence);
    }

        var wstringSpd = null;
    $('.tab-btn-s').each(function (index, obj) {
        wstringSpd += $(this).text(Math.round(tim.timSpeed * 10) / 10);
    });

    updateUserDataTim();

}
