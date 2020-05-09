function time() {

  var timeNow= new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
  document.getElementById('time').innerHTML=timeNow;
  //timeNow.textContent = h + ":" + m + " "+ format;
}

setInterval(time, 1000);

	var myDate = new Date();
  	if (myDate.getHours() < 12) {
        document.getElementById('greeting').innerHTML="Good Morning ";
    }
    else if(myDate.getHours() >=12 && myDate.getHours() <=17){
        document.getElementById('greeting').innerHTML="Good Afternoon ";
    }
    else if (myDate.getHours() > 17 && myDate.getHours() <=24) {
        document.getElementById('greeting').innerHTML="Good Evening ";
    }
    else
    {
        document.getElementById('greeting').innerHTML="Good Night ";
    }