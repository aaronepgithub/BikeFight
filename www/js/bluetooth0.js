var blteService = {
	serviceHR: '180d',
	measurementHR: '2a37',
	serviceCSC: '1816',
	measurementCSC: '2A5B',
	// servicePOW: '1818',
	// measurementPOW: '2A63',
	// serviceHRwrist: '55FF',
	// measurementHRwrist: '000033F2-0000-1000-8000-00805F9B34FB'
};

$$('#clickerTest').on('touchstart', function(e) {
	console.log('clickerTest');
  $$('.class_ble_results_li_test').remove();
	btleScanner1();
	myCenterAlert('Scanning for...HR', 5000);
});



function btleScanner1() {
  console.log('fctn: btleScanner');
//ONBLTESCAN
    function onbtleScan (peripheral) {
      console.log("Found " + JSON.stringify(peripheral));

  //START ONCLICK FCTN
      $$('.class_ble_results_li_test').on('touchstart', 'a', function(e) {
				var data1 = $$(this).data('id');
				var data2 = $$(this).data('name');
				var data3 = 'hr';

				//CALL CONNECTHR FUNCTION
				      appII.connectHR(data1.toString());
        });



      $$('#ble_results_ul_test').append(
      ' <li class="class_ble_results_li_test blte_items color-white"><a class="blte_items" data-data3="'+peripheral.name+'" data-data1="'+peripheral.id+'" data-data2="'+peripheral.name+'"> ' +
      ' href="#" class="blte_items color-white item-link item-content"> '+ peripheral.name +' </a></li>'
      );
		}
//END ONBLTESCAN
    function onbtleScanFailure(reason) {
      console.log('fctn:  Scan Failed' + reason);
    }
    console.log('1.  bltescan for HR');
    ble.startScan([blteService.serviceHR], onbtleScan, onbtleScanFailure);

    setTimeout(ble.stopScan, 5000,
      function() {
        console.log("Scan complete");
        myCenterAlert('Complete', 500);
      },
      function() {
        console.log("stopScan failed");
      }
    );
}  //END BLTESCANNER1
