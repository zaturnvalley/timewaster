(function(){
  $(document).ready(function(){
    console.log('ready');

    var timeTable = {
      years: 00,
      days: 00,
      hours: 00,
      minutes: 00,
      seconds: 00
    }

    function timerIncrementor(){
      var second = document.getElementById('seconds').innerHTML;
      var interval = setInterval( increment, 1000 );
      var minute = document.getElementById('minutes').innerHTML;
      var hour = document.getElementById('hours').innerHTML;
      var day = document.getElementById('days').innerHTML;
      var year = document.getElementById('years').innerHTML;

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
    timerIncrementor();
  });
})();

//if seconds is greater than 60, reset to zero, increment minutes by 1