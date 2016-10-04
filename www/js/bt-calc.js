var mLastWheelRevolutions = 0;
var mLastWheelEventTime = 0;
var mLastCrankRevolutions = 0;
var mLastCrankEventTime = 0;
var nTotalDistance = 0;
var RoundWheelRevolutions = 0;
var createAvgHeartRate = [];
var meanCadence;
var meanSpeed;
var meanHR;
var mFirstWheelRevolutions = 'a';
var mFirstCrankRevolutions = 'a';

var crankRevsRound = 0;
var timeElapsedRound = 0;

var wheelRevsRound = 0;
var timeElapsedRoundWheel = 0;

var roundDistance = 0;
var totalDistance = 0;

//NEW TOTALS - RIDE
var wheelRevsRoundTotal = 0;
var timeElapsedRoundWheelTotal = 0;
var crankRevsRoundTotal = 0;
var timeElapsedRoundTotal = 0;



function onWheelMeasurementReceived(wheelRevolutions, lastWheelEventTime) {
		//console.log('wheelRevolutions:  ' + wheelRevolutions + '  lastWheelEventTime:  ' + lastWheelEventTime + '  tim.timTireCircMeters:  ' + tim.timTireCircMeters);
		var circumference = tim.timTireCircMeters;

		if (mFirstWheelRevolutions === 'a') {
				mFirstWheelRevolutions = wheelRevolutions;
				mLastWheelRevolutions = wheelRevolutions;
				mLastWheelEventTime = lastWheelEventTime;
				console.log('First Wheel Revolution this Round');
				return;
		}
		if (lastWheelEventTime < mLastWheelEventTime) {
				return;
		}

		if (mLastWheelRevolutions > wheelRevolutions) {
				wheelRevolutions2 = wheelRevolutions + 255;
		} else {
				wheelRevolutions2 = wheelRevolutions;
		} //adjusted for array buffer

		if (mLastWheelRevolutions >= 0 && wheelRevolutions2 >= 0) {

				elapWheelRevsReading = wheelRevolutions2 - mLastWheelRevolutions;
				if (elapWheelRevsReading > 10) {
						mLastWheelRevolutions = wheelRevolutions;
						return;
				}
				//ROUND
				wheelRevsRound = wheelRevsRound + wheelRevolutions2 - mLastWheelRevolutions;
				//TOTAL
				wheelRevsRoundTotal = wheelRevsRoundTotal + wheelRevolutions2 - mLastWheelRevolutions;

				// console.log('wheelRevsRound:  ' + wheelRevsRound);
				// console.log('wheelRevsReading:  ' + elapWheelRevsReading);

				//READING
				timeElapsedReadingWheel = lastWheelEventTime - mLastWheelEventTime; //time elapsed in reading
				//ROUND
				timeElapsedRoundWheel = timeElapsedRoundWheel + lastWheelEventTime - mLastWheelEventTime; //time elapsed in round
				//TOTAL
				timeElapsedRoundWheelTotal = timeElapsedRoundWheelTotal +  lastWheelEventTime - mLastWheelEventTime;


				// console.log('timeElapsedRoundWheel:  ' + timeElapsedRoundWheel);
				// console.log('timeElapsedReadingWheel:  ' + timeElapsedReadingWheel);


				var distCalc1 = elapWheelRevsReading * circumference * 0.000621371; //[for reading, get distance and convert to miles]
				roundDistance = roundDistance + distCalc1; //[get round distance and convert to miles]
				totalDistance = totalDistance + distCalc1; //[get total distance and convert to miles]
				// console.log('roundDistance:  ' + roundDistance);
				// console.log('totalDistance:  ' + totalDistance);

				//CALC AVG SPD/ROUND
				var rC1 = wheelRevsRound;
				var rC2 = timeElapsedRoundWheel / 1000; //second
				var rC3 = rC1 / rC2; //revs per second
				var rC4 = rC3 * circumference * 0.000621371 * 60 * 60; //mph per round
				tim.timAvgSPD = Math.round(rC4 * 10) / 10;


				//CALC TOTAL AVG SPD/SESSION
				var rCT1 = wheelRevsRoundTotal;
				var rCT2 = timeElapsedRoundWheelTotal / 1000; //second
				var rCT3 = rCT1 / rCT2; //revs per second
				var rCT4 = rCT3 * circumference * 0.000621371 * 60 * 60; //mph per round
				tim.timAvgSPDtotal = Math.round(rCT4 * 10) / 10;

				$$('.cls_avg_speed_total').text(tim.timAvgSPDtotal);
				$$('.cls_avg_speed_round').text(tim.timAvgSPD);
				$$('.cls_avg_speed_round_last').text(tim.timLastSPD);

				// console.log('tim.timAvgSPDtotal:  ' + tim.timAvgSPDtotal);
				// console.log('tim.timAvgSPD:  ' + tim.timAvgSPD);

				//CALC AVG SPD/READING
				var readCalc1 = elapWheelRevsReading;
				var readCalc2 = timeElapsedReadingWheel / 1000;
				var readCalc3 = readCalc1 / readCalc2;
				var readCalc4 = readCalc3 * circumference * 0.000621371 * 60 * 60; //mph per reading

				if (readCalc4 < 50) {
						tim.timSpeed = Math.round(readCalc4 * 10) / 10; //mph per reading
				}

				$$('.cls_rtspd2').text(Math.round(tim.timSpeed * 10) / 10);
				$$('.cls_rtspd20').text(Math.round(tim.timSpeed * 10) / 10);

				//Publish to UI
				tim.timDistanceTraveled = Math.round(totalDistance * 10) / 10; //total distance
				tim.timDistanceTraveledRound = Math.round(roundDistance * 10) / 10; //round distance
				$$('.tab-btn-dist').text(tim.timDistanceTraveled);
				$$('#header_btn1').text(tim.timDistanceTraveled + ' miles');



		} else {
				console.log('Bad wheelRevolutions Number:  ' + wheelRevolutions);
		}

		mLastWheelRevolutions = wheelRevolutions;
		mLastWheelEventTime = lastWheelEventTime;
}



// RESET EVERY 15
var timCadence15;
var arrCadenceValue15 = [];
var arrCadenceTime15 = [];

function onCrankMeasurementReceived(crankRevolutions, lastCrankEventTime) {
		//console.log('crankRevolutions:  ' + crankRevolutions + '  lastCrankEventTime:  ' + lastCrankEventTime);

		if (mFirstCrankRevolutions === 'a') {
				mFirstCrankRevolutions = crankRevolutions;
				mLastCrankRevolutions = crankRevolutions;
				mLastCrankEventTime = lastCrankEventTime;
				console.log('First Crank Revolution this Round');
				return;
		}


		if (mLastCrankEventTime == lastCrankEventTime) {
				return;
		}

		if (mLastCrankRevolutions >= 0) {
				var timeDifference = (lastCrankEventTime - mLastCrankEventTime) / 1000.0; // [s]
				//console.log('crankCadence timeDifference - Delta:  ' +  timeDifference);


				if (crankRevolutions < mLastCrankRevolutions) {
						crankRevolutions2 = crankRevolutions + 255;
				} else {
						crankRevolutions2 = crankRevolutions;
				}

				var crankCadenceReading = crankRevolutions2 - mLastCrankRevolutions;

				if (crankCadenceReading > 5) {
						mLastCrankRevolutions = crankRevolutions;
						return;
				}



				var crankCadence = crankCadenceReading * 60.0 / timeDifference; //[min]
				// if (crankCadence < 181) {
				// 		tim.timCadence = Math.round(crankCadence);
				// } else {
				// 		tim.timCadence = 120;
				// }



				crankRevsRound = crankRevsRound + crankCadenceReading;
				timeElapsedRound = timeElapsedRound + timeDifference;

				//TOTAL
				crankRevsRoundTotal = crankRevsRoundTotal + crankRevsRound;
				timeElapsedRoundTotal = timeElapsedRoundTotal + timeElapsedRound;
				tim.timAvgCADtotal = Math.round(crankRevsRoundTotal / timeElapsedRoundTotal * 60);


				//15 SEC CAD READING
				arrCadenceValue15.push(crankCadenceReading);
				arrCadenceTime15.push(timeDifference);
				var cv = _.sum(arrCadenceValue15);
				var ct = _.sum(arrCadenceTime15);

				tim.timCadence = Math.round(cv / ct * 60);

				if(ct > 15) {
					arrCadenceValue15 = [];
					arrCadenceTime15 = [];
				}


				//ROUND READING
				if (Math.round(crankRevsRound / timeElapsedRound * 60) < 181) {
						tim.timAvgCAD = Math.round(crankRevsRound / timeElapsedRound * 60);
				} else {
						return;
				}

				// console.log('tim.timAvgCADtotal:  ' + tim.timAvgCADtotal);
				// console.log('tim.timAvgCAD:  ' + tim.timAvgCAD);


				//POPULATE UI WITH CAD
				$$('.cls_rtcad2').text(tim.timCadence);
				$$('.cls_rtcad20').text(tim.timCadence);
		}

		mLastCrankRevolutions = crankRevolutions;
		mLastCrankEventTime = lastCrankEventTime;
}


var arrAvgHRTotal = [];
var maxHRTotal = 200;
var scoreHRTotal = 0;
var scoreHRRound = 0;
var scoreHRRoundLast = 0;

//var tempHR3 = 0;  //USED FOR OLD ROUND SCORE
function onHRMeasurementReceived(hrMeasurement) {
		tim.timHR = Math.round(hrMeasurement);

		createAvgHeartRate.push(Math.round(tim.timHR));
		tim.timAvgHR = Math.round(_.mean(createAvgHeartRate)); //reset every round

		arrAvgHRTotal.push(Math.round(tim.timHR));
		tim.timAvgHRtotal = Math.round(_.mean(arrAvgHRTotal));

		if (tim.timMaxHR > 159 && tim.timMaxHR < 211) {
			maxHRTotal = tim.timMaxHR;
		}

		
		// console.log('tim.maxHRTotal:  ' + maxHRTotal);
		// console.log('tim.timAvgHRtotal:  ' + tim.timAvgHRtotal);
		// console.log('tim.timAvgHR:  ' + tim.timAvgHR);
		getScoreHR();

		//POPULATE UI WITH HR
		$$('.cls_rthr2').text(tim.timHR);
		$$('.cls_rthr20').text(tim.timHR);

		//POPULATE MAX HR
		$$('.cls_maxHR').html('EFFORT SCORE LEADERS (MAX HR: ' + maxHRTotal + ')');


}

function getScoreHR() {
	scoreHRTotal = Math.round(tim.timAvgHRtotal / maxHRTotal * 100 * 10) / 10;
	scoreHRRound = Math.round(tim.timAvgHR / maxHRTotal * 100 * 10) / 10;
	scoreHRRoundLast = Math.round(tim.timLastHR / maxHRTotal * 100 * 10) / 10;
	tim.timAvgRND = scoreHRRound;
	//console.log('scoreHRTotal:  ' + scoreHRTotal);

	$$('.cls_effort_total').text(scoreHRTotal);
	$$('.cls_effort_round').text(scoreHRRound);
	$$('.cls_effort_round_last').text(scoreHRRoundLast);


}
