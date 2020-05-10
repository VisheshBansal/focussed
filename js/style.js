function time() {

  var timeNow= new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")
  document.getElementById('time').innerHTML=timeNow;
  //timeNow.textContent = h + ":" + m + " "+ format;
}

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    document.getElementById('quote').innerHTML=data[Math.floor(Math.random() * data.length)].text;    
  });


var searchBox = document.getElementById('searchInput');

searchBox.addEventListener('keyup', (e) => {
  if (e.key == "Enter"){
    console.log(e.target.value);
    window.open("https://www.google.com/search?q="+e.target.value);
  }
});

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