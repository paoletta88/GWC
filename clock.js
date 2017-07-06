function storeTime() {
  if (typeof(Storage) !== "undefined") {
    var currentDate = new Date();
    var endDate = currentDate.setMinutes(currentDate.getMinutes() + 15);
    localStorage.setItem("end_time", endDate);
  } else {
    // Sorry! No Web Storage support..
    alert("Sorry! The countdown cannot work properly on your web browser.");
  }
}

function clock() {
  var countDownDate = localStorage.getItem("end_time");
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    var now = new Date().getTime();
  
    var distance = countDownDate - now;
  
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerHTML = minutes + "m " + seconds + "s ";
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Time Expired!";
    }
  }, 1000);
}
