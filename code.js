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

    function secondIncrementor(){
      var i = document.getElementById('seconds').innerHTML;
      console.log(i)
      var interval = setInterval( increment, 1000 );
      function increment() {
        i = i % 360 + 1;
        document.getElementById('seconds').innerHTML = i;
      }
    }
    secondIncrementor()
  });
})();

//if seconds is greater than 60, reset to zero, increment minutes by 1