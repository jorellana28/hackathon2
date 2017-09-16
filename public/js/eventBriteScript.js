var apiKey = 'DPQNSMGH5QBIBWDPNRZO';

document.addEventListener('DOMContentLoaded', action);
document.getElementById('query').focus();

function action () {
  document.getElementById('searchbutton').addEventListener('click', function(event) {

    if (document.getElementById("listContent"));
      document.getElementById("listContent").remove();

    var req = new XMLHttpRequest();

    var location = document.getElementById('query').value;
    var distance = '100mi';
    var category = 'hackathon';
    var sort = 'date';
    var url = "https://www.eventbriteapi.com/v3/events/search/?q=" + category + "&sort_by=" + sort + "&location.address=" + location + "&location.within=" + distance + "&token=" + apiKey;

    req.open('GET', url, true);

    req.addEventListener('load', function(){ 
      if(req.status >= 200 && req.status < 400){
        var response = JSON.parse(req.responseText);

      var newDiv = document.createElement("div");
      newDiv.setAttribute("id", "listContent");
      var info = document.getElementById("information");

      info.appendChild(newDiv);

        displayEvents(response);
    }
    else {
      console.log("Error in network request: " + req.statusText);
    }});

    req.send(null);

    event.preventDefault();
  })
}

// Append to list
function displayEvents(object) {
  var eventsArray = object;  
  var length = eventsArray.events.length;

  /* PRINT INFO ONTO CONSOLE */
  console.log(eventsArray);
  //console.log(length);
  //console.log(eventsArray.events[0].name.text);



  

  var listArea = document.getElementById("listContent");

  //Create the list
  var list = document.createElement("ul");
  list.setAttribute("id", "hackathon_list");
  list.id = "results";
  list.style.listStyle = "none";
  list.className = "list-group";  

  // Build list
  for (var i = 0; i < length; i++) { 

    // Format Date
    // logs ex: ‎Friday‎, ‎September‎ ‎22‎, ‎2017
    var utcDate = eventsArray.events[i].start.utc;  // ISO-8601 formatted date returned from server
    var localDate = new Date(utcDate);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    //localDate = localDate.toDateString();           // logs ex: Wed Jul 28 1993

    //Create HTML DOM Elements      
    var event = document.createElement('a'); //Preview node      
    event.className = "list-group-item list-group-item-action"; //Set type      
    event.textContent = eventsArray.events[i].name.text;   
    list.appendChild(event); 

    var breakLine = document.createElement('br');
    event.appendChild(breakLine);

    var eventDate = document.createElement('span');        
    eventDate.textContent += localDate.toLocaleDateString('en-US', options);
    event.appendChild(eventDate);      
  } 
  
  listArea.appendChild(list)
}