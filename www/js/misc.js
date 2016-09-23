
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
          return;}
    if (lastWheelEventTime < mLastWheelEventTime){return;}

    if (mLastWheelRevolutions > wheelRevolutions) {wheelRevolutions2 = wheelRevolutions + 255;}
        else {wheelRevolutions2 = wheelRevolutions; } //adjusted for array buffer

    if (mLastWheelRevolutions >= 0 && wheelRevolutions2 >= 0) {

        elapWheelRevsReading = wheelRevolutions2 - mLastWheelRevolutions;
        if(elapWheelRevsReading > 10) {
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


        var distCalc1 = elapWheelRevsReading * circumference * 0.000621371;  //[for reading, get distance and convert to miles]
        roundDistance = roundDistance + distCalc1;  //[get round distance and convert to miles]
        totalDistance = totalDistance + distCalc1;  //[get total distance and convert to miles]
        // console.log('roundDistance:  ' + roundDistance);
        // console.log('totalDistance:  ' + totalDistance);

        //CALC AVG SPD/ROUND
        var rC1 = wheelRevsRound;
        var rC2 = timeElapsedRoundWheel / 1000; //second
        var rC3 = rC1 / rC2; //revs per second
        var rC4 = rC3 * circumference * 0.000621371 * 60 * 60; //mph per round
        if(rC4<50) {
          tim.timAvgSPD = Math.round(rC4 * 10) / 10;
          }

        //$$('#addStuff').prepend('rC4:  ' + rC4  + '<br><hr>');
        //console.log('tim.timAvgSPD:  ' + tim.timAvgSPD);

        //CALC AVG SPD/READING
        var readCalc1 = elapWheelRevsReading;
        var readCalc2 = timeElapsedReadingWheel / 1000;
        var readCalc3 = readCalc1 / readCalc2;
        var readCalc4 = readCalc3 * circumference * 0.000621371 * 60 * 60; //mph per reading

        if(readCalc4<50) {
            tim.timSpeed =  Math.round(readCalc4 * 10) / 10; //mph per reading
          }
        //$$('#addStuff').prepend('readCalc4:  ' + readCalc4  + '<br><hr>');
        //console.log('tim.timSpeed:  ' + tim.timSpeed);

        // $$('#addStuff').prepend('tim.timAvgSPD:  ' + tim.timAvgSPD + '<br><hr>');
        // $$('#addStuff').prepend('tim.timSpeed:  ' + tim.timSpeed + '<br><hr>');
        $$('#RT1').html('SPD NOW:  ' + Math.round(tim.timSpeed * 10)/10 + '<br>');
        $$('.cls_rtspd2').text(Math.round(tim.timSpeed * 10)/10);
        $$('#RT2').html('SPD AVG:   ' + Math.round(tim.timAvgSPD * 10)/10 + '<br>');
        createAvgRoundScore.push(Math.round(tim.timAvgSPD*0.65));
        tim.timAvgRND = Math.round(_.mean(createAvgRoundScore)*4);
      $$('.cls_rtrnd2').text(tim.timAvgRND);






        //Publish to UI
        tim.timDistanceTraveled = Math.round(totalDistance * 10) / 10;  //total distance
        tim.timDistanceTraveledRound = Math.round(roundDistance * 10) / 10;  //round distance
        //$$('#addStuff').prepend('timDistanceTraveledRound:  ' + tim.timDistanceTraveledRound  + '<br><hr>');
        $$('.tab-btn-dist').text(tim.timDistanceTraveled);
        $$('#header_btn1').text(tim.timDistanceTraveled + ' miles');
        //console.log('tim.timDistanceTraveled:  ' + tim.timDistanceTraveled);

        var wstringSpd = null;
        $('.tab-btn-s').each(function (index, obj) {
            wstringSpd += $(this).text(Math.round(tim.timAvgSPD * 10) / 10);
        });
    }


    else {
      //console.log('Bad wheelRevolutions Number:  ' + wheelRevolutions);
    }

    mLastWheelRevolutions = wheelRevolutions;
    mLastWheelEventTime = lastWheelEventTime;
}




function onCrankMeasurementReceived(crankRevolutions, lastCrankEventTime) {
  //console.log('crankRevolutions:  ' + crankRevolutions + '  lastCrankEventTime:  ' + lastCrankEventTime);

  if (mFirstCrankRevolutions === 'a')
      {
        mFirstCrankRevolutions = crankRevolutions;
        mLastCrankRevolutions = crankRevolutions;
        mLastCrankEventTime = lastCrankEventTime;
        console.log('First Crank Revolution this Round');
      return;
    }


      if (mLastCrankEventTime == lastCrankEventTime)
      {return;}

    if (mLastCrankRevolutions >= 0) {
        var timeDifference = (lastCrankEventTime - mLastCrankEventTime) / 1000.0; // [s]
        //console.log('crankCadence timeDifference - Delta:  ' +  timeDifference);


        if (crankRevolutions < mLastCrankRevolutions) {
          crankRevolutions2 = crankRevolutions + 255;
        }

        else {
          crankRevolutions2 = crankRevolutions;
        }

        var crankCadenceReading = crankRevolutions2 - mLastCrankRevolutions;
        //console.log('crankCadenceReading - Delta:  ' +  crankCadenceReading);

        if (crankCadenceReading > 5) {
          mLastCrankRevolutions = crankRevolutions;
          return;
        }


        var crankCadence = crankCadenceReading * 60.0 / timeDifference; //[min]
        if(crankCadence < 125) {
          tim.timCadence = Math.round(crankCadence);
        }
        else {tim.timCadence = 120;}

        //console.log('tim.timCadence:  ' +  tim.timCadence);



        crankRevsRound = crankRevsRound + crankCadenceReading;
        //console.log('crankRevsRound:  ' +  crankRevsRound);

        timeElapsedRound = timeElapsedRound + timeDifference;
        //console.log('timeElapsedRound - Crank:  ' +  timeElapsedRound);

        if (Math.round(crankRevsRound / timeElapsedRound * 60) < 125) {
          tim.timAvgCAD = Math.round(crankRevsRound / timeElapsedRound * 60);
        }

        else {return;}

        // tim.timAvgCAD = Math.round(crankRevsRound / timeElapsedRound * 60);
        //console.log('tim.timAvgCAD:  ' + tim.timAvgCAD);

      $$('#RT3').html('CAD NOW:  ' + tim.timCadence + '<br>');
      $$('.cls_rtcad2').text(tim.timCadence);
      $$('#RT4').html('CAD AVG:   ' + tim.timAvgCAD + '<br>');
      createAvgRoundScore.push(Math.round(tim.timAvgCAD/4));
      tim.timAvgRND = Math.round(_.mean(createAvgRoundScore)*4);
          $$('.cls_rtrnd2').text(tim.timAvgRND);


        // $$('#addStuff').prepend('tim.timCadence:  ' + tim.timCadence + '<br><hr>');
        // $$('#addStuff').prepend('tim.timAvgCAD:  ' + tim.timAvgCAD + '<br><hr>');





        var stringCad = null;
        $('.tab-btn-c').each(function (index, obj) {
            stringCad += $(this).text(Math.round(tim.timAvgCAD));
        });

    }


    mLastCrankRevolutions = crankRevolutions;
    mLastCrankEventTime = lastCrankEventTime;
}



function onHRMeasurementReceived(hrMeasurement) {
  tim.timHR = Math.round(hrMeasurement);
  createAvgHeartRate.push(Math.round(tim.timHR));
  tim.timAvgHR = Math.round(_.mean(createAvgHeartRate));
  var string = null;
  $('.tab-btn-h').each(function (index, obj) {
      string += $(this).text(Math.round(tim.timAvgHR));
  });

    $$('#RT5').html('HR NOW:  ' + Math.round(tim.timHR) + '<br>');
    $$('.cls_rthr2').text(tim.timHR);
    $$('#RT6').html('HR AVG:   ' + Math.round(tim.timAvgHR) + '<br>');
    createAvgRoundScore.push(Math.round(tim.timAvgHR/7));
    tim.timAvgRND = Math.round(_.mean(createAvgRoundScore)*4);
    $$('#RT7').html('RND AVG:   ' + tim.timAvgRND + '<br>');
    $$('.cls_rtrnd2').text(tim.timAvgRND);
}




//  <!--OLD... SETTINGS PAGE page3 - START  ***********************************************-->
//                 <!-- <div data-page="page3" class="page cached layout-dark" style="background: url(polka10.png)">
//                     <div class="navbar">
//                         <div class="navbar-inner">
//                             <div class="center">SETTINGS</div>
//                         </div>
//                     </div>
//                 <br><br><div class="content-block">
//                     <p class="inset buttons-row">
//                     </p>
//                 </div>
//                 <div class="page-content">
//                   <form>
//                       <div class="list-block">
//                           <ul>
//                               <li class="item-content">
//                                   <div class="item-inner">
//                                       <div class="item-title label">Rounder</div>
//                                       <div class="item-input">
//                                           <input id="frm_Username" type="text" name="frm_Username">
//                                       </div>
//                                   </div>
//                               </li>
//                               <li>
//                                   <a href="#" class="item-link smart-select" data-open-in="popup" data-back-on-select="false" data-navbar-theme="black" data-form-theme="black"
//                                       data-searchbar="true">
//                                       <select id="frm_Bikeshop_Name" name="frm_bs_name">
//                                           <option value="Solo">Solo</option><option value="EVEPC">EVEPC</option><option value="Zen Bikes">Zen Bikes</option><option value="Off the Bridge">Off the Bridge</option><option value="Square Pizza">Square Pizza, NYC</option>
//                                         </select>
//                                       <div class="item-content">
//                                           <div class="item-inner">
//                                               <div class="item-title">Select Team</div>
//                                           </div>
//                                       </div>
//                                   </a>
//                               </li>
//                           </ul>
//                       </div>
//                       <div class="card" style="margin-left:45px;margin-right:45px">
//                           <div class="list-block">
//                               <ul>
//                                   <li>
//                                       <a id="login_start_btn" onclick="myFunction()" href="#" class="button button-big ripple-pink">Start</a>
//                                       <script>
//                                           function myFunction() {
//                                               console.log('clicked the login button');
//                                               tim.timBikeShop = $$('#frm_Bikeshop_Name').val();
//                                               localStorage.frm_Username = $$('#frm_Username').val();
//                                               localStorage.frm_Bikeshop_Name = tim.timBikeShop;
//                                               tim.timName = localStorage.frm_Username;
//                                               console.log('tim.timBikeShop1:  ' + tim.timBikeShop);
//                                               $$('#center_title').text('ROUNDERS, PRESENTED BY ' + tim.timBikeShop.toUpperCase());
//                                               $$('#img_logo').attr('src', 'css/logo/'+tim.timBikeShop+'.png');
//                                               $$('#title_bs').text('ABOUT ' + tim.timBikeShop.toUpperCase());
//                                               $$('#bs_name').text(tim.timBikeShop.toUpperCase());
//                                               get_shop_pages();
//                                           }
//                                     </script>
//                                   </li>
//                               </ul>
//                           </div>
//                       </div>
//                     </form>
//                   <div class="list-block">
//                       <ul>
//                           <li>
//                               <div class="item-content">
//                                   <div class="item-inner">
//                                       <div class="item-title label">Riding Group</div>
//                                       <div class="item-input">
//                                           <input id="frm_Team" type="text" value="None" style="background-color:#222;color:white">
//                                       </div>
//                                   </div>
//                               </div>
//                           </li>
//                           <li>
//                               <div class="item-content" style="font: white">
//                                   <div class="item-inner" style="padding:0;margin:0;">
//                                       <div class="item-title label">Tire Size</div>
//                                       <div class="item-input">
//                                           <select id="frm_tireSize" type="text" value="700X25" style="background-color:#222;color:white">
//                                               <option>700X23</option>
//                                               <option>700X25</option>
//                                               <option>700X28</option>
//                                               <option>700X30</option>
//                                               <option>700X32</option>
//                                               <option>700X38</option>
//                                               <option>700X40</option>
//                                               <option>700X42</option>
//                                               <option>700X44</option>
//                                           </select>
//                                       </div>
//                                   </div>
//                               </div>
//                           </li>
//                           <li class="item-content">
//                               <div class="item-inner">
//                                   <div class="item-title label">Riding Type</div>
//                                   <div class="item-input">
//                                       <select id="frm_Riding_Type" style="background-color:#222;color:white">
//                                         <option>Touring</option>
//                                         <option>Fast Pace</option>
//                                         <option>Commuting</option>
//                                         <option>Fixed Gear</option>
//                                         <option>City Bike</option>
//                                       </select>
//                                   </div>
//                               </div>
//                           </li>
//                       </ul>
//                       <div class="list-block-label" style="font-weight:bold">ROUNDERS can join Riding Groups for group messaging and leaderboards.</div>
//                       <div class="list-block-label" style="font-weight:bold">DATA SHARING can be disabled completely or set-to REAL-TIME.</div>
//                       <div class="list-block-label" style="font-weight:bold">TIRE-SIZE is used for accurate speed and distance calculations.</div>
//                       <div class="list-block-label" style="font-weight:bold">RIDING TYPE are special groups used for additional leaderboards.</div>
//                       <hr>
//                       <div class="card-content-inner">
//                           <p class="buttons-row">
//                       <a id="frm_Submit" href="#" class="button button-big button-fill button-raised color-red">UPDATE SETTINGS</a>
//                           </p>
//                       </div><br>
//                   </div>
//               </div>
//                 </div> -->
//                 <!-- END OF PAGE 3 -->
//
//                 <!--SETTINGS PAGE32 - START  ***********************************************-->
//                 <!-- <div data-page="page32" class="page cached layout-dark" style="background: url(polka10.png)">
//                     <div class="navbar">
//                         <div class="navbar-inner">
//                             <div class="center">SETTINGS</div>
//                         </div>
//                     </div>
//                     <div class="page-content">
//                       <form>
//                           <div class="list-block">
//                               <ul>
//                                   <li class="item-content">
//                                       <div class="item-inner">
//                                           <div class="item-title label">Rounder</div>
//                                           <div class="item-input">
//                                               <input id="frm_Username" type="text" name="frm_Username">
//                                           </div>
//                                       </div>
//                                   </li>
//
//                                   <li>
//                                       <a href="#" class="item-link smart-select" data-open-in="popup" data-back-on-select="false" data-navbar-theme="black" data-form-theme="black"
//                                           data-searchbar="true">
//
//                                           <select id="frm_Bikeshop_Name" name="frm_bs_name">
//                                               <option value="Solo">Solo</option><option value="EVEPC">EVEPC</option><option value="Zen Bikes">Zen Bikes</option><option value="Off the Bridge">Off the Bridge</option><option value="Square Pizza">Square Pizza, NYC</option>
//                                             </select>
//                                           <div class="item-content">
//                                               <div class="item-inner">
//
//                                                   <div class="item-title">Select Team</div>
//
//                                               </div>
//                                           </div>
//                                       </a>
//                                   </li>
//                               </ul>
//                           </div>
//
//                           <div class="card" style="margin-left:45px;margin-right:45px">
//                               <div class="list-block">
//                                   <ul>
//                                       <li>
//
//                                           <a id="login_start_btn" onclick="myFunction()" href="#" class="button button-big ripple-pink">Start</a>
//                                           <script>
//                                               function myFunction() {
//                                                   console.log('clicked the login button');
//                                                   tim.timBikeShop = $$('#frm_Bikeshop_Name').val();
//
//                                                   localStorage.frm_Username = $$('#frm_Username').val();
//                                                   localStorage.frm_Bikeshop_Name = tim.timBikeShop;
//                                                   tim.timName = localStorage.frm_Username;
//                                                   console.log('tim.timBikeShop1:  ' + tim.timBikeShop);
//
//                                                   $$('#center_title').text('ROUNDERS, PRESENTED BY ' + tim.timBikeShop.toUpperCase());
//
//
//                                                   $$('#img_logo').attr('src', 'css/logo/'+tim.timBikeShop+'.png');
//                                                   $$('#title_bs').text('ABOUT ' + tim.timBikeShop.toUpperCase());
//                                                   $$('#bs_name').text(tim.timBikeShop.toUpperCase());
//                                                   get_shop_pages();
//
//
//                                                   console.log('tim.timName  ' + tim.timName);
//                                                   if (localStorage.atbscore === undefined || localStorage.atbscore.length < 2 || localStorage.atbscore === 'undefined' || localStorage.atbscore === 'none') {
//                                                       localStorage.atbscore = '0';
//                                                   }
//                                                   if (localStorage.atbfulldate === undefined || localStorage.atbfulldate.length < 2 || localStorage.atbfulldate === 'undefined' || localStorage.atbfulldate === 'none') {
//                                                       localStorage.atbfulldate = '0';
//                                                   }
//                                                   if (localStorage.atbfulltime === undefined || localStorage.atbfulltime.length < 2 || localStorage.atbfulltime === 'undefined' || localStorage.atbfulltime === 'none') {
//                                                       localStorage.atbfulltime = '0';
//                                                   }
//                                                   if (localStorage.atbheartrate === undefined || localStorage.atbheartrate.length < 2 || localStorage.atbheartrate === 'undefined' || localStorage.atbheartrate === 'none') {
//                                                       localStorage.atbheartrate = '0';
//                                                   }
//                                                   if (localStorage.atbcadence === undefined || localStorage.atbcadence.length < 2 || localStorage.atbcadence === 'undefined' || localStorage.atbcadence === 'none') {
//                                                       localStorage.atbcadence = '0';
//                                                   }
//                                                   if (localStorage.atbspeed === undefined || localStorage.atbspeed.length < 2 || localStorage.atbspeed === 'undefined' || localStorage.atbspeed === 'none') {
//                                                       localStorage.atbspeed = '0';
//                                                   }
//                                               }
//                                         </script>
//                                       </li>
//                                   </ul>
//                               </div>
//                           </div>
//
//
//
//
//                       </form>
//
//
//                       <div class="list-block">
//
//                           <ul>
//                               <li>
//                                   <div class="item-content">
//                                       <div class="item-inner">
//                                           <div class="item-title label">Riding Group</div>
//                                           <div class="item-input">
//                                               <input id="frm_Team" type="text" value="None" style="background-color:#222;color:white">
//                                           </div>
//                                       </div>
//                                   </div>
//                               </li>
//
//
//                               <li>
//                                   <div class="item-content" style="font: white">
//                                       <div class="item-inner">
//                                           <div class="item-title label">Tire Size</div>
//                                           <div class="item-input">
//                                               <select id="frm_tireSize" type="text" value="700X25" style="background-color:#222;color:white">
//                                                   <option>700X23</option>
//                                                   <option>700X25</option>
//                                                   <option>700X28</option>
//                                                   <option>700X30</option>
//                                                   <option>700X32</option>
//                                                   <option>700X38</option>
//                                                   <option>700X40</option>
//                                                   <option>700X42</option>
//                                                   <option>700X44</option>
//                                               </select>
//                                           </div>
//                                       </div>
//                                   </div>
//                               </li>
//                               <li class="item-content">
//                                   <div class="item-inner">
//                                       <div class="item-title label">Riding Type</div>
//                                       <div class="item-input">
//                                           <select id="frm_Riding_Type" style="background-color:#222;color:white">
//                                             <option>Touring</option>
//                                             <option>Fast Pace</option>
//                                             <option>Commuting</option>
//                                             <option>Fixed Gear</option>
//                                             <option>City Bike</option>
//                                           </select>
//                                       </div>
//                                   </div>
//                               </li>
//                           </ul>
//
//                           <div class="list-block-label" style="font-weight:bold">ROUNDERS can join Riding Groups for group messaging and leaderboards.</div>
//                           <div class="list-block-label" style="font-weight:bold">DATA SHARING can be disabled completely or set-to REAL-TIME.</div>
//                           <div class="list-block-label" style="font-weight:bold">TIRE-SIZE is used for accurate speed and distance calculations.</div>
//                           <div class="list-block-label" style="font-weight:bold">RIDING TYPE are special groups used for additional leaderboards.</div>
//
//                           <hr>
//                           <div class="card-content-inner">
//                               <p class="buttons-row">
//                           <a id="frm_Submit" href="#page33" class="button button-big button-fill button-raised color-red">UPDATE SETTINGS</a>
//                               </p>
//                           </div><br>
//                       </div>
//
//                   </div>
//                 </div> -->
//
//               <!--SETTINGS PAGE32 - END  ***********************************************-->
//
//               <!--SETTINGS PAGE33 - START  ***********************************************-->
//               <!-- <div data-page="page33" class="page cached layout-dark" style="background: url(polka10.png)">
//                   <div class="navbar">
//                       <div class="navbar-inner">
//                           <div class="center">SETTINGS</div>
//                       </div>
//                   </div>
//                   <div class="page-content">
//
//
//
//                     <p style="text-align: center;font-weight: bold; font-size:1.2em">START/STOP ROUNDS</p>
//
//                     <div class="buttons-row" style="padding: 10px;">
//                         <a id="start_btn" href="#page4" class="button button-fill button-raised color-red start_btn_disable" style="font-weight: bold; content-align: center;">Start</a>
//                         <a id="stop_btn" href="#" class="button button-fill button-raised color-red" style="font-weight: bold; content-align: center;">Stop</a>
//                     </div>
//
//                     <div id="timer_btn3" class="color-white timer_btn_cls" style="text-align: center">300 SECOND ROUND</div>
//                     <div id="timer_btn_bubbles5" class="cls_timer_bubbles color-white" style="text-align: center; padding-top: 5px; padding-bottom: 15px;"><i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i><i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i> <i class="fa fa-circle fa-2x"></i></div>
//
//                       <div class="content-block">
//                     <div class="list-block-label" style="font-weight:bold"><p>Each ROUND is measured using a ROUND PERFORMANCE SCORE between 1-100.<p></div>
//                     <div class="list-block-label" style="font-weight:bold"><p>Higher ROUND SCORES indicate increased performance.<p></div>
//                     <div class="list-block-label" style="font-weight:bold"><p>ROUND SCORE displays and leaderboards are used while riding to measure performance against yourself and others.<p></div>
//                     <div class="list-block-label" style="font-weight:bold"><p>ROUNDERS doesn't do any user tracking and doesn't save any user data.<p></div>
//                     </div>
//                 </div>
//               </div> -->
//
//             <!--SETTINGS PAGE33 - END  ***********************************************-->
//
//
// <!--ZEN
//                     <div class="card">
//                     <div class="card-header">
//                         <img src="http://www.zenbikes.com/merchant/4160/images/site/ZEN_logo.png" style="width:240px;">
//                     </div>
//                     <div class="card-content">
//                         <div class="card-content-inner">134 W 24th Street<br>New York, NY 10011<br>zenbikes.info@gmail.com
//                         <div>1-212-929-2453</div>
//                         </div>
//                     </div>
//                     </div>
//                     <br>
//                     <div>
//                     <img src="http://www.zenbikes.com/merchant/4160/images/site/wrench-stem-1110-14-nth.jpg" style="width:100%;">
//                     </div>
//                     <div>
//                     <img src="http://www.zenbikes.com/merchant/4160/images/site/back_to_school_2000x667.gif" style="width:100%;">
//                     </div>
//                     <div>
//                     <img src="http://www.zenbikes.com/merchant/4160/images/site/spec_mtn1100txl_13_h.jpg" style="width:100%;">
//                     </div><br><br><br>
//                 ZEN -->
//
// <!--OTB
//                 <div class="card">
//                     <div class="card-header">
//                     <h2>Off the Bridge Coffee</h2>
//                     </div>
//                     <div class="card-content">
//                     <div class="card-content-inner">105 Canal St, New York, NY 10002
//                         <div>(212) 775-8599</div>
//                         <div><h4>Hours</h4></div>
//                         <div>M-F 8AM-8PM</div><div>SAT 10AM-7PM</div><div>SUN 10AM-6PM</div>
//                     </div>
//                     </div>
//                 </div>
//                 <br><br><br>
//                 OTB -->
//
// <!--EV
//                 <div class="card">
//                 <div class="card-header">
//                     <h2>EVEPC</h2>
//                 </div>
//                 <div class="card-content">
//                     <div class="card-content-inner">
//                     <h3>Eric Vigil Elite Performance Cycling</h3>
//                     PH: 917 676 3368
//                     </div>
//                     </div>
//
//                 </div>
//                 </div>
//                 <br><br><br>
//             EV -->
//
// <!--SQ PZA
//             <div class="card">
//                 <div class="card-header">
//                 <h2>SQUARE PIZZA</h2>
//                 </div>
//                 <div class="card-content">
//                 <div class="card-content-inner">201 Clinton St, New York, NY 10002
//                     <div>(646) 678-4294</div>
//                     <div><h4>Hours</h4></div>
//                     <div>M-S 11AM-9PM</div><div>SUN 11AM-8PM</div>
//                 </div>
//                 </div>
//             </div>
//             <div class="card">
//                 <div class="card-header">
//                 <h2>Popular Items</h2>
//                 </div>
//                 <div class="card-content">
//                 <div class="card-content-inner">
//                 Basic Cheese Pizza<br>
//                 Mozzarella cheese and homemade marinara sauce.  <br><br>
//                 Garlic Knots<br><br>
//                 Pepperoni Pizza<br>
//                 Shredded mozzarella cheese, homemade marinara sauce and pepperoni.
//                 </div>
//                 </div>
//             </div>
//             <br><br><br>
//             SQPZA -->
//
// <!-- CARD TEMPLATES
//         <div class="card">
//             <div class="card-content">
//             <div class="card-content-inner">This is simple card with plain text. But card could contain its own header, footer, list view, image, and any elements inside.</div>
//             </div>
//         </div> -->
// <!-- <div class="card">
//             <div class="card-header">Card header</div>
//             <div class="card-content">
//             <div class="card-content-inner">Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.</div>
//             </div>
//             <div class="card-footer">Card Footer</div>
//         </div> -->
// <!-- <div class="card">
//             <div class="card-content">
//             <div class="card-content-inner">Another card. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse feugiat sem est, non tincidunt ligula volutpat sit amet. Mauris aliquet magna justo. </div>
//             </div>
//         </div> -->
// <!-- <div class="card">
//             <div class="card-header">Card header</div>
//             <div class="card-content">
//             <div class="card-content-inner">Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.</div>
//             </div>
//             <div class="card-footer">
//             <a href="#" class="link">Website</a>
//             <a href="#" class="link">Maps</a>
//             </div>
//         </div> END OF CARD TEMPLATES-->
//
// //WORKS
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=20',function(data){
//
//   var a = _.values(data);
//   _.forEach(a, function(value, key) {
//       console.log('key: ' + key);
//       console.log('value: ' + JSON.stringify(value));
//       console.log('fb_timName: ' + value.fb_timName);
//       });
// });
//
// //WORKS - DATE SORT
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=20',function(data){
//
//   var a = _.values(data);
//   var b = _.sortBy(a, function(o) { return o.fb_pubFullDate; });
//   _.forEach(b, function(value, key) {
//       console.log('key: ' + key);
//       console.log('value: ' + JSON.stringify(value));
//       console.log('fb_timName: ' + value.fb_timName);
//     }); //END OF FOR EACH
//
// }); //END OF GETJSON
//
//
// //WORKS BEST RND ORDER
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=20',function(data){
//
//   var a = _.values(data);
//   var aa = _.orderBy(a, 'fb_timBestRND', 'desc');
//   _.forEach(aa, function(value, key) {
//       console.log('key: ' + key);
//       console.log('value: ' + JSON.stringify(value));
//       console.log('fb_timName: ' + value.fb_timName);
//     }); //END OF FOR EACH
//
// }); //END OF GETJSON
//
//
// //ALL DATA IN A SINGLE CALL
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=20',function(data){
//
//   var a = _.values(data);
//   var a_count=0;
//   var aa = _.filter(a, { 'fb_pubFullDate': 20160828});
//   var aaa = _.orderBy(aa, 'fb_timBestRND', 'desc');
//
//   var b_count=0;
//   var bb = _.filter(a, { 'fb_timBikeShop': tim.timBikeShop});
//   var bbb = _.orderBy(aa, 'fb_timBestRND', 'desc');
//
//   _.forEach(aaa, function(value, key) {
//       if(a_count === 3){console.log('a_count === 3');} //END OF I
//       else {
//         console.log('a: key: ' + key);
//         console.log('a: value: ' + JSON.stringify(value));
//         console.log('a: fb_timName: ' + value.fb_timName);
//         console.log('a: fb_timBestRND: ' + value.fb_timBestRND);
//         a_count++;
//       } //END OF ELSE
//     }); //END OF FOR EACH aaa
//
//     _.forEach(bbb, function(value, key) {
//         if(b_count === 3){console.log('b_count === 3');} //END OF I
//         else {
//           console.log('b: key: ' + key);
//           console.log('b: value: ' + JSON.stringify(value));
//           console.log('b: fb_timName: ' + value.fb_timName);
//           b_count++;
//         } //END OF ELSE
//       }); //END OF FOR EACH bbb
//
// }); //END OF GETJSON
// // END OF //ALL DATA IN A SINGLE CALL
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// //UNDERSCORE...
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
//
// //console.log(JSON.stringify(data));
//
// var x = _.values(data);
//
// var y = _.sortBy(x, 'fb_pubFullDate');
// var z = _.groupBy(x, 'fb_pubFullDate');
// var a = _.toArray(y);
// console.log('z:  ' + JSON.stringify(z));
//
//
// });
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&startAt=89',function(data){console.log(JSON.stringify(data));var x = _.values(data);console.log('my Result:  ' + JSON.stringify(x));});
// //my Result:  [{"fb_pubFullDate":20160820,"fb_timBestCAD":96,"fb_timBestHR":176,"fb_timBestRND":89.08,"fb_timBestSPD":22.5,"fb_timBikeShop":"Zen Bikes","fb_timName":"Johnny5","fb_timTeam":"Team"}]
// //---
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json?orderBy="fb_timBestRND"&limitToLast=2',function(data){console.log(JSON.stringify(data));var x = _.values(data);console.log('my Result:  ' + JSON.stringify(x));});
//
// //my Result:  [
// //{"fb_pubFullDate":20160824,"fb_timBestCAD":86,"fb_timBestHR":168,"fb_timBestRND":83.16,"fb_timBestSPD":29.3,"fb_timBikeShop":"OTB","fb_timName":"Blu","fb_timTeam":"Team"},{"fb_pubFullDate":20160820,"fb_timBestCAD":96,"fb_timBestHR":176,"fb_timBestRND":89.08,"fb_timBestSPD":22.5,"fb_timBikeShop":"ZenBikes","fb_timName":"Johnny5","fb_timTeam":"Team"}]
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //console.log(JSON.stringify(data));
// var x = _.values(data);
// var y = _.sortBy(x, 'fb_pubFullDate');
// var z = _.groupBy(x, 'fb_pubFullDate');
// var a = _.toArray(y);
// // console.log('a[1]:  ' + JSON.stringify(a[1]));
// // console.log('Just Val for A1 fb_timName:  ' + a[1].fb_timName);
// // a[1]:  {"fb_pubFullDate":20160824,"fb_timBestCAD":86,"fb_timBestHR":168,"fb_timBestRND":83.16,"fb_timBestSPD":29.3,"fb_timBikeShop":"OTB","fb_timName":"Blu","fb_timTeam":"Team"}
// // (index):850
// //Just Val for a[1].fb_timName:  Blu
// });
//
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// //var y = _.sortBy(x, 'fb_pubFullDate');
// var y = _.sortBy(x, 'fb_timBestRND');
// //var z = _.groupBy(x, 'fb_pubFullDate');
// var a = _.toArray(y);
// console.log('a[0].fb_timName:  ' + a[0].fb_timName);
// console.log('a[0].fb_timBestRND:  ' + a[0].fb_timBestRND);
// });
//
//
//
// //BEST SCORE
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var y = _.sortBy(x, 'fb_timBestRND');
// var a = _.toArray(y);
// var b = a.length;
// console.log('a[b].fb_timName:  ' + a[b-1].fb_timName);
// console.log('a[b].fb_timBestRND:  ' + a[b-1].fb_timBestRND);
// });
//
// // ---
//
//
// //BEST SCORE
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var y = _.sortBy(x, 'fb_timBestRND');
// var a = _.toArray(y);
// var b = _.last(a);
// console.log('a[b].fb_timName:  ' + b.fb_timName);
// console.log('a[b].fb_timBestRND:  ' + b.fb_timBestRND);
// });
//
//
// //---
// //BEST 3
// function theArray(scores){
// var b = _.last(scores, [3]);
// console.log(b[2].fb_timBestRND + '-' + b[1].fb_timBestRND + '-' +  b[0].fb_timBestRND);
// //console.log(JSON.stringify(b));
// }
// //BEST 3
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var y = _.sortBy(x, 'fb_timBestRND');
// var a = _.toArray(y);
// theArray(a);
// });
//
// //---
//
// //BEST 1 TODAY
// function theArray(scores){
// var b = _.where(scores, {fb_pubFullDate: 20160826});
// //var b = _.filter(scores, function(key, val){return val >= 20160800;});
// //NOW SORT
// var sorted = _.sortBy(b, 'fb_timBestRND');
// var c = _.last(sorted, 1);
// console.log(c[0].fb_timBestRND);console.log(c[0].fb_timName);
// }
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var a = _.toArray(x);
// theArray(a);
// });
//
//
// //---
//
// //BEST, DATE, BIKESHOP
// function theArray(scores){
// var b1 = _.where(scores, {fb_pubFullDate: 20160824, fb_timBikeShop: "OTB"});
// //var b = _.where(b1, {fb_timBikeShop: "OTB"});
// //NOW SORT
// var sorted = _.sortBy(b, 'fb_timBestRND');
// var c = _.last(sorted, 1);
// console.log(c[0].fb_timBestRND);
// }
//
// $$.getJSON('https://project-5844362817932994168.firebaseio.com/alltimescore/users.json',function(data){
// //NEED TO GET THE VALUES FIRST
// var x = _.values(data);
// var a = _.toArray(x);
// theArray(a);
// });
//
//
// //---
//
//
//
//
//
// //Standard NOTIFICATION
// // var f7Notifiction = myApp.addNotification({
// //     message: msg,
// //     hold: 5000,
// //     button: {
// //         text: num,
// //         color: 'yellow',
// //         close: false
// //     }
// // });
//
// //POPULATE COMMON VARS TO MULTI UI
// // var string = null;
// // $('.tab-btn-h').each(function(index, obj){
// //     string += $(this).text(currHR);
// // });
//
// //TRANSITION ALL THESE TO CENTER ALERTS...
// function myNoty(msg, num) {
//     myApp.modal({
//       title: '<div style="text-align: center">'+
//               '<h2>' + msg + '</h2>'+
//             '</div>'
//       // title: msg
//     });
//     setTimeout(function () {
//           myApp.closeModal();
//     }, 3000);
// }
//
// function myNotyCoach(msg) {
//     myApp.modal({
//       title: '<div style="text-align: center">'+
//               '<h3>' + msg + '</h3>'+
//             '</div>'
//     });
//     setTimeout(function () {
//           myApp.closeModal();
//     }, 3000);
// }
//
// // var total_wheel_revs = 0;
// // var dis11 = 0;
// // var dis12 = 0;
//
// //USED FOR DISTANCE CALC
// //UNUSED
// function new_dis(dis10, time10) {
//   if (dis10 < 0) {
//     return;
//   }
//   if (isNaN(dis10)) {
//       return;
//   }
//   dis12 = dis11 + dis10;
//   dis11 = dis12;
//
//   total_wheel_revs = dis12;
//   var a = total_wheel_revs * tim.timTireCircum;
//   //CONVERT METERS TO MILES
//   var b = a * 0.000621371;
//   tim.timDistanceTraveled = b.toFixed(2);
//   $$('.tab-btn-dist').text(tim.timDistanceTraveled);
//
//   var segment_distance = dis10 * tim.timTireCircum;
//   var segment_distance_miles = segment_distance * 0.000621371;
//   var segment_mph = segment_distance_miles / time10;
//   var mph_rounded = Math.round(segment_mph * 100) / 100;
// }
//
// //<div class="card"><div class="card-header">Card header</div><div class="card-content"><div class="card-content-inner">Card with header and footer. Card header is used to display card title and footer for some additional information or for custom actions.</div></div><div class="card-footer"><a href="#" class="link">Website</a><a href="#" class="link">Maps</a></div></div><br><br>
// //<div class="card"><div class="card-header">CONTACT US</div><div class="card-content"><div class="card-content-inner">134 W 24th Street<br>New York, NY 10011<br>zenbikes.info@gmail.com</div></div><div class="card-footer"><a id="call_zen" href="tel:+1-212-929-2453" class="link">Call</a><a href="https://www.google.com/maps/dir/40.7443078,-73.9935714/Zen+Bikes,+134+W+24th+St,+New+York,+NY+10011/@40.7441493,-73.9960927,17z" class="link">Maps</a></div></div><br><br>
// //div class="card"><div class="card-content"><div class="card-content-inner"><p>ZEN BIKES</p> <p>134 W 24th Street</p><p>New York, NY 10011</p> <p>zenbikes.info@gmail.com</p><p>212-929-2453</p></div></div></div>
// //
// // <div class="card"><div class="card-header"><img src="http://www.zenbikes.com/merchant/4160/images/site/ZEN_logo.png" style="width:240px;"></div><div class="card-content"><div class="card-content-inner">134 W 24th Street<br>New York, NY 10011<br>zenbikes.info@gmail.com <div>1-212-929-2453</div></div></div></div><br><br>
// // <div><img src="http://www.zenbikes.com/merchant/4160/images/site/wrench-stem-1110-14-nth.jpg" style="width:100%;"</div><br><br>
// // <div><img src="http://www.zenbikes.com/merchant/4160/images/site/back_to_school_2000x667.gif" style="width:100%;"</div><br><br>
// // <div><img src="http://www.zenbikes.com/merchant/4160/images/site/spec_mtn1100txl_13_h.jpg" style="width:100%;"</div><br><br>
//
//
//  <!-- <div class="list-block media-list">
//                             <ul>
//                                 <li id="settings_link">
//                                     <a href="#page3" class="item-link item-content">
//                                         <div class="item-media"><i class="fa fa-cog fa-2x"></i></div>
//                                         <div class="item-inner">
//                                             <div class="item-title-row">
//                                                 <div class="item-title">GET STARTED</div>
//                                             </div>
//                                             <div class="item-subtitle">Sensors, Privacy, Start</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li id="messaging_link">
//                                     <a href="#page5" class="item-link item-content">
//                                         <div class="item-media"><i class="fa fa-comment fa-2x"></i></div>
//                                         <div class="item-inner">
//                                             <div class="item-title-row">
//                                                 <div class="item-title">MESSAGING</div>
//                                             </div>
//                                             <div class="item-subtitle">Team and Group</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a href="#page4" class="item-link item-content">
//                                         <div class="item-media"><i class="fa fa-play fa-2x"></i></div>
//                                         <div class="item-inner">
//                                             <div class="item-title-row">
//                                                 <div class="item-title">ROUNDS</div>
//                                             </div>
//                                             <div class="item-subtitle">Display, Leaderboard</div>
//                                         </div>
//                                     </a>
//                                 </li>
//                                 <hr>
//                                 <li>
//                                     <a href="#shop_page" class="item-link item-content">
//                                         <div class="item-media"><img id="img_logo" src="css/logo/Solo.png" width="50"></div>
//                                         <div class="item-inner">
//                                             <div class="item-title-row">
//                                                 <div id="title_bs" class="item-title">...</div>
//                                             </div>
//                                         </div>
//                                     </a>
//                                 </li>
//
//                             </ul>
//                         </div> -->
