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
				wheelRevsRound = wheelRevsRound + wheelRevolutions2 - mLastWheelRevolutions;

				// console.log('wheelRevsRound:  ' + wheelRevsRound);
				// console.log('wheelRevsReading:  ' + elapWheelRevsReading);


				timeElapsedRoundWheel = timeElapsedRoundWheel + lastWheelEventTime - mLastWheelEventTime; //time elapsed in round
				timeElapsedReadingWheel = lastWheelEventTime - mLastWheelEventTime; //time elapsed in reading
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
				if (rC4 < 50) {
						tim.timAvgSPD = Math.round(rC4 * 10) / 10;
				}

				//$$('#addStuff').prepend('rC4:  ' + rC4  + '<br><hr>');
				//console.log('tim.timAvgSPD:  ' + tim.timAvgSPD);

				//CALC AVG SPD/READING
				var readCalc1 = elapWheelRevsReading;
				var readCalc2 = timeElapsedReadingWheel / 1000;
				var readCalc3 = readCalc1 / readCalc2;
				var readCalc4 = readCalc3 * circumference * 0.000621371 * 60 * 60; //mph per reading

				if (readCalc4 < 50) {
						tim.timSpeed = Math.round(readCalc4 * 10) / 10; //mph per reading
				}

				$$('.cls_rtspd2').text(Math.round(tim.timSpeed * 10) / 10);

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


			//*** REDO
				var crankCadence = crankCadenceReading * 60.0 / timeDifference; //[min]
				if (crankCadence < 125) {
						tim.timCadence = Math.round(crankCadence);
				} else {
						tim.timCadence = 120;
				}

				crankRevsRound = crankRevsRound + crankCadenceReading;
				timeElapsedRound = timeElapsedRound + timeDifference;

				if (Math.round(crankRevsRound / timeElapsedRound * 60) < 125) {
						tim.timAvgCAD = Math.round(crankRevsRound / timeElapsedRound * 60);
				} else {
						return;
				}


				//POPULATE UI WITH CAD
				$$('.cls_rtcad2').text(tim.timCadence);
		}

		mLastCrankRevolutions = crankRevolutions;
		mLastCrankEventTime = lastCrankEventTime;
}


var tempHR3 = 0;  //USED FOR OLD ROUND SCORE
function onHRMeasurementReceived(hrMeasurement) {
		tim.timHR = Math.round(hrMeasurement);
		createAvgHeartRate.push(Math.round(tim.timHR));
		tim.timAvgHR = Math.round(_.mean(createAvgHeartRate));

		//POPULATE UI WITH HR
		$$('.cls_rthr2').text(tim.timHR);


		//OLD
		//CREATE THE ROUND SCORE
		var tempHR1 = tim.timAvgHR - 100;
		var tempHR2 = Math.round(tempHR1 / 5 * 100) / 100; //MAX VAL OF 20 BASED ON MAX HR OF 200 2 DECIMAL PLACES
		if (tempHR2 > 0 && tempHR2 <25) {
			tempHR3 = tempHR2;
		}		
}


