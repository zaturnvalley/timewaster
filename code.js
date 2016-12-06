(function(){
  $(document).ready(function(){


    //Gets IP address 
    $.getJSON("http://jsonip.com/?callback=?", function (data) {
      var ipAddress = data.ip;

      //Call gets location from IP address, returns location in navbar
      var response = $.ajax({
        url: 'http://freegeoip.net/json/' + ipAddress,
        method: 'get',
        success: function(res){
          document.getElementById('location').innerHTML = 'Hello Timewaster from ' + res.city;
        }, error: function(err){
          document.getElementById('location').innerHTML = 'Hello Timewaster';
        }
      });
    });

    function timerIncrementor(){
      //Increments
      var interval = setInterval( increment, 1000 );

      //Getting IDs from HTML
      var second = document.getElementById('seconds').innerHTML;
      var minute = document.getElementById('minutes').innerHTML;
      var hour = document.getElementById('hours').innerHTML;
      var day = document.getElementById('days').innerHTML;
      var year = document.getElementById('years').innerHTML;

      //This runs through interval, checks conditions every second
      function increment() {
        second = second % 360 + 1;
        document.getElementById('seconds').innerHTML = second;
        if (second >= 60) {
          minute = minute % 360 + 1;
          document.getElementById('minutes').innerHTML = minute;
          second = 0;
        }
        if (minute >= 60) {
          hour = hour % 360 + 1;
          document.getElementById('hours').innerHTML = hour;
          minute = 0;
        }
        if (hour >= 24) {
          day = day % 360 + 1;
          document.getElementById('day').innerHTML = day;
          hour = 0;
        }
        if (day >= 360) {
          year = year % 360 + 1;
          document.getElementById('year').innerHTML = year;
          day = 0;
        }
      }
    }
    //Calls function
    timerIncrementor();
  });
})();

//if seconds is greater than 60, reset to zero, increment minutes by 1