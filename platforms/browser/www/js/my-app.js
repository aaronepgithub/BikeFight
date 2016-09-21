// Initialize app
var myApp = new Framework7({
    material: true,
    cache: true
});


var $$ = Dom7;
var mainView = myApp.addView('.view-main', {
    domCache: true //enable inline pages
});


//THIS IS THE NOTIFICATION FUNCTION CALL
function myCenterAlert(msg, tiout) {
    //CHANGE ALL NOTY TO THIS ONE
    myApp.modal({
        title: '<div style="text-align: center">' +
        '<h3>' + msg + '</h3>' +
        '</div>'
    });
    setTimeout(function () {
        myApp.closeModal();
    }, tiout);
}

//CENTER ALERT WITH OK BUTTON AND CALLBACK
function myCenterAlertOK(title, message) {
    myApp.alert(message, title, function () {
        console.log('Button clicked!');
    });
}

//POPUP DISPLAYING HTML DYNAMICALLY
  function myPopupHTML(pop) {
  var popupHTML = '<div class="popup">'+
                    '<div class="content-block">'+
                      '<p>Popup created dynamically.</p>'+
                      '<p><a href="#" class="close-popup">Close me</a></p>'+
                    '</div>'+
                  '</div>';

  myApp.popup(popupHTML);
  }

  //POPUP DISPLAYING THE 'about' HTML
  function myPopupAbout() {
      myApp.popup('.popup-about');
  }


function myNoty(msg) {
    myApp.modal({
        title: '<div style="text-align: center">' +
        '<h3>' + msg + '</h3>' +
        '</div>'
    });
    setTimeout(function () {
        myApp.closeModal();
    }, 1500);
}

function myNotyCoach(msg) {
    myApp.modal({
        title: '<div style="text-align: center">' +
        '<h3>' + msg + '</h3>' +
        '</div>'
    });
    setTimeout(function () {
        myApp.closeModal();
    }, 1500);
}

function updateTim() {
  console.log('Fctn updateTim');
  var storedData = myApp.formGetData('my-form');
  tim.timName = storedData.name;
  tim.timTeam = storedData.team;
  tim.timGroup = storedData.group;
  tim.timStyle  = storedData.style;
  tim.timTire = storedData.tire;

  if (tim.timTire === '700X23') { tim.timTireCircum = 2.10; }
  if (tim.timTire === '700X25') { tim.timTireCircum = 2.11; }
  if (tim.timTire === '700X28') { tim.timTireCircum = 2.14; }
  if (tim.timTire === '700X30') { tim.timTireCircum = 2.15; }
  if (tim.timTire === '700X32') { tim.timTireCircum = 2.17; }
  if (tim.timTire === '700X38') { tim.timTireCircum = 2.18; }
  if (tim.timTire === '700X40' || tim.timTire === '700X42' || tim.timTire === '700X44') { tim.timTireCircum = 2.22; }

  if (tim.timTire === '700X23') { tim.timTireCircMeters = 2.096; }
  if (tim.timTire === '700X25') { tim.timTireCircMeters = 2.105; }
  if (tim.timTire === '700X28') { tim.timTireCircMeters = 2.136; }
  if (tim.timTire === '700X30') { tim.timTireCircMeters = 2.146; }
  if (tim.timTire === '700X32') { tim.timTireCircMeters = 2.155; }
  if (tim.timTire === '700X38') { tim.timTireCircMeters = 2.180; }
  if (tim.timTire === '700X40' || tim.timTire === '700X42' || tim.timTire === '700X44') { tim.timTireCircMeters = 2.212; }
}

function startup() {
    console.log('startup function');
    var storedData = myApp.formGetData('my-form');
    console.log('Startup Stored Data1:  ' + JSON.stringify(storedData));
    //console.log(tim.timName);
    get_round_data();
    ui_report10(0, 0, 0, 0);
    ui_report20(0, 0, 0, 0);
    updateTim();
    }



// Handle Cordova Device Ready Event
$$(document).on('deviceready', function () {
    console.log('Device is ready!');
    startup();


    });

    $$('.cls_update_tim').on('click', function () {
        console.log('update form data');
        var storedData10 = myApp.formGetData('my-form');
        console.log('Startup Stored Data1:  ' + JSON.stringify(storedData10));
        updateTim();
    });


    $$('.my_simulator').on('click', function (e) {
        console.log('clicked simulator');
        myCenterAlert('Simulator');

        var measHR = 100; var measSPD = 1; var measCAD = 1;
        onWheelMeasurementReceived(measSPD, _.now());
        onCrankMeasurementReceived(measCAD, _.now());
        onHRMeasurementReceived(120);

        function test() {
          measHR = _.random(80, 200);
          measCAD = measCAD + _.random(1.5, 2.5);
          measSPD = measSPD + _.random(5.5, 10.5);
          onWheelMeasurementReceived(measSPD, _.now());
          onCrankMeasurementReceived(measCAD, _.now());
          onHRMeasurementReceived(measHR);
        }
        var refreshId = setInterval(test, 1000);
    });
    //
    // $$('#get_active_riders').on('click', function (e) {
    //     console.log('clicked update');
    //     requestUserData();
    // });

    // $$('.open-preloader-title').on('click', function () {
    //     myApp.showPreloader('Working');
    //     setTimeout(function () {
    //         myApp.hidePreloader();
    //     }, 5000);
    // });

    // $$('#header_btn1').on('click', function (e) {
    //     //console.log('clicked hdr1');
    //     mainView.router.loadPage("#page5");
    // });
    //     $$('#header_btn2').on('click', function (e) {
    //     //console.log('clicked hdr2');
    //     mainView.router.loadPage("#page10");
    // });

    // $$('#msg_Submit').on('click', function (e) {
    //     console.log('Sending Message');
    //     var inp_msg = $$('#snd_Message').val();
    //     $$('#snd_Message').val('');
    //     msg_Submit_fb(inp_msg);
    // });



//GROUP
function publish_messages_group(m_date, m_group, m_name, m_message) {
    var x = Number(m_date);
    var y = Date.now() - x;
    var z = y / 1000;
    var zz = Math.round(z / 60);
    $$('#fb_group_msg').append(


        '        <li class = "fb-msg-li-group">' +
        '          <a href="#" class="item-link item-content">' +
        '              <div class="item-inner">' +
        '             <div class="item-title-row"> ' +
        '              <div class="item-title">' + m_group + '</div> ' +
        '                  <div class="item-after">' + zz + ' ...min ago</div> ' +
        '              </div> ' +
        '            <div class="item-subtitle">' + m_name + '</div> ' +
        '      <div class="item-text">' + m_message + '</div>' +
        '      </div>' +
        '     </a>' +
        '     </li>'

    );
}

//TEAM
function publish_messages(m_date, m_team, m_name, m_message) {
    var x = Number(m_date);
    var y = Date.now() - x;
    var z = y / 1000;
    var zz = Math.round(z / 60);
    $$('#fb_team_msg').append(


        '        <li class = "fb-msg-li-team">' +
        '          <a href="#" class="item-link item-content">' +
        '              <div class="item-inner">' +
        '             <div class="item-title-row"> ' +
        '              <div class="item-title">' + m_team + '</div> ' +
        '                  <div class="item-after">' + zz + ' ...min ago</div> ' +
        '              </div> ' +
        '            <div class="item-subtitle">' + m_name + '</div> ' +
        '      <div class="item-text">' + m_message + '</div>' +
        '      </div>' +
        '     </a>' +
        '     </li>'

    );
}

function msg_Get_fb() {
    console.log('Get Team Messages');
    firebase.database().ref('messages/team/' + tim.timTeam + '/messages').limitToLast(5).orderByChild("fb_date").on('value', function (allMessagesSnapshot) {
        $$('.fb-msg-li-team').remove();
        allMessagesSnapshot.forEach(function (messageSnapshot) {
            var msg1 = messageSnapshot.child("fb_date").val();
            var msg2 = messageSnapshot.child("fb_timTeam").val();
            var msg3 = messageSnapshot.child("fb_timName").val();
            var msg4 = messageSnapshot.child("fb_message").val();
            //console.log('Message:  ' + msg1 + msg2 + msg3 + msg4);
            myCenterAlert('New Team Message', 3000);
            publish_messages(msg1, msg2, msg3, msg4);

        });
        //console.log('Request Data Complete');
    });
}

function msg_Get_fb_group() {
    console.log('Get Group Messages');
    firebase.database().ref('messages/group/' + tim.timGroup + '/messages').limitToLast(15).orderByChild("fb_date").on('value', function (allMessagesSnapshot) {
        $$('.fb-msg-li-group').remove();
        allMessagesSnapshot.forEach(function (messageSnapshot) {
            var msg1 = messageSnapshot.child("fb_date").val();
            var msg2 = messageSnapshot.child("fb_timGroup").val();
            var msg3 = messageSnapshot.child("fb_timName").val();
            var msg4 = messageSnapshot.child("fb_message").val();
            //console.log('Message:  ' + msg1 + msg2 + msg3 + msg4);
            myCenterAlert('New Group Message', 3000);
            publish_messages_group(msg1, msg2, msg3, msg4);

        });
        //console.log('Request Data Complete');
    });
}



function msg_Submit_fb(post_msg) {

    //I WILL MANUALLY SEND BS MESSAGES

    // console.log('msg_Submit_fb');
    // firebase.database().ref('messages/bikeshop/' + tim.timTeam + '/messages/').push({
    //     fb_timName: tim.timName,
    //     fb_message: post_msg,
    //     fb_bikeshop_msg: tim.timTeam,
    //     fb_date: Date.now()
    // });
    firebase.database().ref('messages/group/' + tim.timGroup + '/messages/').push({
        fb_timName: tim.timName,
        fb_message: post_msg,
        fb_timGroup: tim.timGroup,
        fb_date: Date.now()
        //USE var n = d.toString(); TO CONVERT
    });

}

function theDataTable() {
  //RIGHT NOW, SET TO ONCE
    if (tim.timRealTimeShare === 'RealTime') {
        $('#example').DataTable();
        var sorty = $('#example').DataTable();
        console.log('Startng Sortable Table');

        firebase.database().ref('users').orderByChild("fb_timTeam").equalTo(tim.timTeam).once('value', function (allMessagesSnapshot) {
            sorty.clear();
            allMessagesSnapshot.forEach(function (messageSnapshot) {

                sorty.row.add([
                    messageSnapshot.child("fb_timName").val(),
                    messageSnapshot.child("fb_timHR").val(),
                    messageSnapshot.child("fb_timSpeed").val(),
                    messageSnapshot.child("fb_timCadence").val(),
                    messageSnapshot.child("fb_timWAC").val(),
                    messageSnapshot.child("fb_timWAS").val(),
                    messageSnapshot.child("fb_timPower").val(),
                ]).draw(false);
            });
        });
        theDataTableLeader();
    }
    else {
        //console.log('rtdata is turned off');
    }
}


function theDataTableLeader() {
    //RIGHT NOW, SET TO ONCE
    if (tim.timRealTimeShare === 'RealTime') {
        $('#exampleLeader').DataTable();
        var sortyLeader = $('#exampleLeader').DataTable();
        console.log('Startng Sortable Table Leader');

        firebase.database().ref('score/users').orderByChild("fb_timName").once('value', function (allMessagesSnapshotLeader) {
            sortyLeader.clear();
            allMessagesSnapshotLeader.forEach(function (messageSnapshotLeader) {

                sortyLeader.row.add([
                    messageSnapshotLeader.child("fb_timName").val(),
                    messageSnapshotLeader.child("fb_timCurrentAvgScore").val(),
                    messageSnapshotLeader.child("fb_timAvgSPD").val(),
                    messageSnapshotLeader.child("fb_timAvgCAD").val(),
                    messageSnapshotLeader.child("fb_timAvgHR").val(),
                ]).draw(false);
            });
        });
        requestUserData();
    }
    else {
        //console.log('rtdata is turned off');
    }
}

$$('#call_zen').on('click', function () {    if (window.cordova) {
      console.log('call zen');
        cordova.InAppBrowser.open('tel:12129292453', '_system');
    }
  });
