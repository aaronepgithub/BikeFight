var tim = {
    timName: 'Required',
    timTeam: 'Solo',
    timGroup: 'None',
    timStyle: 'Road',
    timTire: '700X25',
    timTireSize: '700X25',
    timTireCircum: 2.11,
    //CM VERSION
    timTireCircMeters: 2.105,
    timEvent: "timEvent",
    timHR: 0,
    timSpeed: 0,
    timCadence: 0,
    timPower: 0,
    timPhoneSpeed: 0,
    timLat: 0,
    timLon: 0,
    timDirection: 0,
    timWAC: 0,
    timWAS: 0,
    timConnectedHR: 0,
    timConnectedCSC: 0,
    timConnectedPOW: 0,
    timConnectedWAS: 0,
    timConnectedWAC: 0,
    timAvgRND: 0,
    timBestRND: 0,
    timLastRND: 0,
    timFinalRND: 0,
    timAvgHR: 0,
    timBestHR: 0,
    timLastHR: 0,
    timFinalHR: 0,
    timAvgSPD: 0,
    timBestSPD: 0,
    timLastSPD: 0,
    timFinalSPD: 0,
    timAvgCAD: 0,
    timBestCAD: 0,
    timLastCAD: 0,
    timFinalCAD: 0,
    timTodayBestSPD: 0,
    timTodayBestCAD: 0,
    timTodayBestHR: 0,
    timTodayBestRND: 0,
    timEndOfRoundScore: 0,
    timTodayBestRoundScore: 0,
    timTodayBestRoundScoreDate: 0,
    timTodayBestRoundScoreTime: 0,
    timNumberofRounds: 0,
    timScore_Total: 0,
    timScore: 0,
    timHourBestRoundScore: 0,
    timRealTimeShare: 'On',
    timDistanceTraveled: 0,
    timCalculatedDuration: 0,
    timATSpeedScore: 0,
    timATCadenceScore: 0,
    timATHeartrateScore: 0,
    timATRoundScore: 0,
    timATRoundScoreDate: 0,
    timATRoundScoreTime: 0,
    timBestRoundFullDate: 0,
    timBestRoundYear: 0,
    timBestRoundMonth: 0,
    timBestRoundDay: 0,
    fb_BestRND: 0,
    fb_BestSPD: 0,
    fb_BestCAD: 0,
    fb_BestHR: 0,
    fb_BestNAME: '...',
    fb_BestSHOP: '...',
    timStartTime: 0
};

var arrCAD = [];
var arrCADt = [];
var arrSPD = [];
var arrSPDt = [];
// calcCadence2(currCAD,currCADt);
// calcSpeed2(currSPD, currSPDt);

var cntdown = 300;
var arrTimerHR = new Array(cntdown);
var arrTimerSPD = new Array(cntdown);
var arrTimerCAD = new Array(cntdown);
var arrTimerRND = new Array(cntdown);
var objScores = {};


function rounds_end(lr, ls, lc, lh) {

    objScores[tim.timNumberofRounds] = {
        ind: tim.timNumberofRounds,
        rnd: lr,
        spd: ls,
        cad: lc,
        hr: lh,
        date: pubFullDate,
        time: pubFullTime,
        name: tim.timName,
        group: tim.timGroup,
        team: tim.timTeam,
        style: tim.timStyle
    };

    //BEST ROUND
    var x = _.values(objScores);
    var y = _.orderBy(x, 'rnd', 'desc');
    var a1 = y[0].rnd;
    var a2 = y[0].spd;
    var a3 = y[0].cad;
    var a4 = y[0].hr;
    var a5 = y[0].date;
    var a6 = y[0].time;
    ui_report10(a1, a2, a3, a4);
    ui_report20(lr, ls, lc, lh);

    $$('#my_last_rnd').html(
        '<div class="cls_top6 chip bg-white">' +
        '<div class="chip-media bg-red">' + Math.round(lr) + '</div>' +
        '<div class="chip-label color-black">' + tim.timName + '</div>' +
        '</div>'
    );

    $$('#my_last_rnd2').html(
        '<div class="cls_top6 chip bg-white">' +
        '<div class="chip-media bg-red">' + Math.round(lr) + '</div>' +
        '<div class="chip-label color-black">' + tim.timName + '</div>' +
        '</div>'
    );

    var stringChip = null;
    $('.best_round_chip').each(function(index, obj) {
        stringChip += $(this).text("MY BEST:   " + a1);
    });

    populate_last_rnd_bubbles();
}
//END OF ROUNDS END


function publishAvg(timer_val) {
    // var val1 = Math.round(timer_val / 50);
    // var val2 = Math.round(7 - val1);
    // var val3 = '.cls_timer_bubbles';
    // populate_timer_bubbles(val1, val2, val3);


    // var sumHR = 0;
    // var sumSPD = 0;
    // var sumCAD = 0;
    // var sumRND = 0;
    //
    // arrTimerSPD.map(function(item) {
    //     sumSPD += item;
    // });
    //
    // arrTimerHR.map(function(item1) {
    //     sumHR += item1;
    // });
    //
    // arrTimerCAD.map(function(item2) {
    //     sumCAD += item2;
    // });
    //
    // arrTimerRND.map(function(item3) {
    //     sumRND += item3;
    // });

    // tim.timAvgHR = Math.round(sumHR / cntdown);
    // tim.timAvgCAD = Math.round(sumCAD / cntdown);
    // tim.timAvgSPD = Math.round(sumSPD / cntdown * 10) / 10;
    // tim.timAvgRND = Math.round(((tim.timAvgSPD) + (tim.timAvgHR / 7) + (tim.timAvgCAD / 4)) / 3 * 100) / 100 * 4;
    // $$('#tim_avg_rnd_btn').text(Math.round(tim.timAvgRND));

    tim.timAvgRND = Math.round(((tim.timAvgSPD) + (tim.timAvgHR / 7) + (tim.timAvgCAD / 4)) / 3 * 100) / 100 * 4;
    $$('#tim_avg_rnd_btn').text(Math.round(tim.timAvgRND));
    populate_tim_avg_rnd_bubbles();

}

function calculate_duration() {
    var x = _.now() - tim.timStartTime;
    var y = x / 1000;
    var z = new Date(y * 1000).toISOString().substr(11, 8);
    $$('#header_btn2').text(z);
    tim.timCalculatedDuration = z;
    //tim.timCalculatedDurationMS = y;
}


var global_timer;


$$('#start_btn').on('click', function(e) {
    var storedData = myApp.formGetData('my-form');
    // if ( storedData === undefined) {
    if (!storedData) {
        myCenterAlertOK('Enter a Name in User Settings');
        $$(this).show();
    } else {
        $$(this).hide();
        $$("#start_btn").prop("disabled", true);
        console.log(JSON.stringify(storedData));
        updateTim();

        var mySwiper = $$('.swiper-container')[0].swiper;
        mySwiper.slideNext();
        tim.timStartTime = _.now();
        timer.start(300000);
    }


});
//END OF START BUTTON PRESS


//START TOCK
var timer = new Tock({
    countdown: true,
    interval: 1000,
    callback: someCallbackFunction,
    complete: someCompleteFunction
});

function someCallbackFunction() {
    var ct = Math.round(timer.lap() / 1000);
    newTimer(ct);
}

function someCompleteFunction() {
    console.log('Round Complete, Restarting Timer');
    createAvgSpeed = [];
    createAvgCadence = [];
    createAvgHeartRate = [];
    timer.start(299000);
}
//END TOCK




function newTimer(count) {

    var stringTimer = null;
    $('.timer_btn_cls').each(function(index, obj) {
        stringTimer += $(this).text(count + ' SECONDS REMAIN');
    });
    calculate_duration();

    global_timer = 300 - count;
    arrTimerHR.push(tim.timHR);
    arrTimerHR.shift();
    arrTimerSPD.push(tim.timSpeed);
    arrTimerSPD.shift();
    arrTimerCAD.push(tim.timCadence);
    arrTimerCAD.shift();
    arrTimerRND.push(tim.timAvgRND);
    arrTimerRND.shift();

    var remdr5 = count % 5;
    if (remdr5 === 0) {
        bubbleMaker();
    }

    var remdr4 = count % 4;
    if (remdr4 === 0) {
        publishAvg();
    }





    if (count === 298) {
        round_post(tim.timLastRND, tim.timLastSPD, tim.timLastCAD, tim.timLastHR);
        $$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
    }

    if (count === 296) {
        get_round_data();
    }

    if (count === 294) {
        get_round_data_group();
    }


    if (count === 280) {
        get_top_fighters();

    }


    if (count === 290) {
        var spkr0 = 'A New Round Has Just Started.  ' +
            'The Champion is ' + top_king_name + ' from Team ' + top_king_team + '. ' +
            'The leading score is ' + top_king_rnd + '. ' +
            ' Your last round score was ' + tim.timLastRND + ' .';

        myApp.modal({
            title: '<div>A New Round Has Just Started.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
                '</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
                'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
        });
        setTimeout(function() {
            myApp.closeModal();
        }, 5000);


        var storedData = myApp.formGetData('my-form');
        if (storedData.style !== "NO") {
            TTS
                .speak({
                    text: spkr0,
                    locale: 'en-GB',
                    rate: 1.5
                }, function() {
                    console.log('success');
                }, function(reason) {
                    console.log(reason);
                });

        }


    }
    //END TTS




    if (count === 245) {
        get_top_fighters();
                $$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
        //var tempCalc = Math.round(tim.timAvgRND) - Math.round(top_king_rnd);
        //myCenterAlert('4 Minutes Remain', 500);
    }



    if (count === 185) {
        get_round_data();
    }

    if (count === 180) {
              $$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
        myApp.modal({
            title: '<div>3 Minutes Remain.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
                '</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
                'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
        });
        setTimeout(function() {
            myApp.closeModal();
        }, 5000);

    }

    if (count === 165) {
        get_round_data_group();
    }

    if (count === 150) {
        myCenterAlert('Halfway', 1000);
    }

    if (count === 125) {
        get_top_fighters();
    }


    if (count === 120) {
              $$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
        myApp.modal({
            title: '<div>2 Minutes Remain.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
                '</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
                'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
        });
        setTimeout(function() {
            myApp.closeModal();
        }, 5000);
    }

    if (count === 65) {
        get_round_data();
    }


    if (count === 60) {
                    $$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-white"></i> ');
        var spkr1 = '1 Minute To Go.  ' +
            'The King is ' + top_king_name + ' from Team ' + top_king_team + '. ' +
            'The King has posted a score of ' + top_king_rnd + '. ' +
            ' You have a current score of ' + tim.timAvgRND + ' .';

        myApp.modal({
            title: '<div>1 Minute To Go.<hr>  The Champ is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;"> ' + top_king_name +
                '</span> from Team <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_team + '</span></div><hr>' +
                'The leading score is <span class="bg-red color-white" style="font-size:1.5em;font-weight:bold;">' + top_king_rnd + '</span>.<hr>'
        });
        setTimeout(function() {
            myApp.closeModal();
        }, 5000);

    }

    if (count === 45) {
        get_round_data_group();
    }

    if (count === 30) {
                          $$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> <i class="fa fa-circle fa-2x color-red"></i> ');
        myCenterAlert('30 Seconds Remain', 1000);
    }

    if (count === 5) {
        myCenterAlert('5 Seconds Remain', 1000);
    }

    if (count === 0) {
      console.log('End of Round');
        $$('#publishLastSPDValue').html('<h1 style="font-size:1.5em; text-align:center; color:white;">' + tim.timAvgSPD + '</h1>');
        $$('#publishLastCADValue').html('<h1 style="font-size:1.5em; text-align:center; color:white;">' + tim.timAvgCAD + '</h1>');
        $$('#publishLastHRValue').html('<h1 style="font-size:1.5em; text-align:center; color:white;">' + tim.timAvgHR + '</h1>');
        $$('#publishLastRNDValue').text(Math.round(tim.timAvgRND));

        //THESE ARE THE VALUES  CREATED FOR END OF ROUND
        tim.timLastHR = tim.timAvgHR;
        tim.timLastCAD = tim.timAvgCAD;
        tim.timLastSPD = tim.timAvgSPD;
        tim.timLastRND = tim.timAvgRND;
        tim.timNumberofRounds = tim.timNumberofRounds + 1;
        //****ALL POST ROUND PROCESSING
        rounds_end(tim.timLastRND, tim.timLastSPD, tim.timLastCAD, tim.timLastHR);
        //****
        myCenterAlert('Round Complete', 1000);

    }
    //END OF COUNT AT 1

    // if (count === 0) {
    //   console.log('End of Round');
    // }

}
//end of the New Timer function with count passed in.

//SWIPER P1 BUBBLES

function bubbleMaker() {

    var vSpeed1 = Math.round(tim.timSpeed / 2);
    var vSpeed2 = 20 - vSpeed1;
    var vSpeed3 = '#rt_speed_bubbles';
    populate_rt_bubbles(vSpeed1, vSpeed2, vSpeed3);


    var vHeartrate1 = Math.round(tim.timHR / 10);
    var vHeartrate2 = 20 - vHeartrate1;
    var vHeartrate3 = '#rt_hr_bubbles';
    populate_rt_bubbles(vHeartrate1, vHeartrate2, vHeartrate3);

    var vCadence1 = Math.round(tim.timCadence / 6);
    var vCadence2 = 20 - vCadence1;
    var vCadence3 = '#rt_cad_bubbles';
    populate_rt_bubbles(vCadence1, vCadence2, vCadence3);


    var vRound1 = (Math.round(tim.timAvgRND) / 5);
    var vRound2 = 20 - vRound1;
    var vRound3 = '#rt_round_bubbles';
    $$('#rt_round_val').text(Math.round(tim.timAvgRND * 10) / 10);

    var stringRND = null;
    $('.cls_rt_round_val').each(function(index, obj) {
        stringRND += $(this).text(Math.round(tim.timAvgRND * 10) / 10);
    });
    populate_rt_bubbles(vRound1, vRound2, vRound3);

    function populate_rt_bubbles(x, y, z) {
        var a = '<i class="fa fa-circle fa-1x color-red"></i>';
        var b = '<i class="fa fa-circle fa-1x color-white"></i>';
        var c = a.repeat(Math.ceil(Math.round(x)));
        var d = b.repeat(Math.ceil(Math.round(y)));
        var e;

        if (Math.round(x + y) > 19.50) {
            e = c.concat(d);
        }
        if (Math.round(x + y) < 19.51) {
            e = c.concat(d + 1);
        }
        e = c.concat(d);
        $$(z).html(e);
    }


}

function populate_timer_bubbles(x) {


  $$('.cls_timer_bubbles').html('<i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> <i class="fa fa-circle fa-2x color-white"></i> ');


    // var a = '<i class="fa fa-circle fa-2x color-white"></i> ';
    // var b = '<i class="fa fa-circle fa-2x color-red"></i> ';
    // var c = a.repeat(x);
    // var d = b.repeat(y);
    // var e = d.concat(c);
    // $$(z).html(e);
}

function populate_round_bubbles(x, y, z) {
    var a = '<i class="fa fa-circle fa-2x color-red"></i> ';
    var b = '<i class="fa fa-circle fa-2x color-white"></i> ';
    var c = a.repeat(x);
    var d = b.repeat(y);
    var e;
    if (Math.round(x + y) > 11.50) {
        e = c.concat(d);
    }
    if (Math.round(x + y) < 11.51) {
        e = c.concat(d + 1);
    }
    // console.log('x: ' + x);
    // console.log('y: ' + y);
    e = c.concat(d);
    $$(z).html(e);
}


function populate_last_rnd_bubbles() {
    var val1 = Math.round((tim.timLastRND / 4) / 2);
    var val2 = Math.round(12 - val1);
    if (val1 + val2 < 12) {
        val1 = Math.round((tim.timLastRND / 4) / 2 + 1);
    }
    var val3 = '#pub_last_round_bubbles';
    populate_round_bubbles(val1, val2, val3);

}

function populate_tim_avg_rnd_bubbles() {
    //EVERY SECOND
    var val1 = Math.round((tim.timAvgRND / 4) / 2);
    var val2 = Math.round(12 - val1);
    if (val1 + val2 < 12) {
        val1 = Math.round((tim.timAvgRND / 4) / 2 + 1);
    }
    var val3 = '#round_score_bubbles';
    populate_round_bubbles(val1, val2, val3);
}
