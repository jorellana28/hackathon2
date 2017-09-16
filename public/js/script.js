 //  Search button event listener
document.getElementById('search-form').addEventListener('submit', getMeetUpEvents);


// Ajax request using search term to getPlaylist route
function getMeetUpEvents(event) {
   var query = document.getElementById("query").value; // query location
   var form = document.getElementById("search-form"); // form
   form.reset();

   // Using query get Coordinates

   // Make meetup API request
   var req = new XMLHttpRequest(); 
   var url = "https://api.meetup.com/find/events?key=3b5cd41e32702b161a85e68646bb&text=tech";
   req.open("GET", url, true);
   req.addEventListener('load', function() {
     if(req.status >= 200 && req.status < 400){
       var response = JSON.parse(req.responseText);
       console.log(response);
       displayEvents(response);
     } else {
         console.log("Error in network request: " + req.statusText);
     }
   }); 
   req.send(null);
  event.preventDefault();
}

// Append to list
function displayEvents(object) {
  var eventsArray = object;    
  var listArea = document.getElementById("listContent");

  //Create the list
  var list = document.createElement("ul");
  list.id = "results";
  list.style.listStyle = "none";
  list.className = "list-group";  

  // Build list
  for (var i = 0; i < eventsArray.length; i++) { 

    //Create HTML DOM Elements      
    var event = document.createElement('a'); //Preview node      
    event.className = "list-group-item list-group-item-action"; //Set type      
    event.textContent = eventsArray[i].name;   
    list.appendChild(event);      
  } 
  
  listArea.appendChild(list)
}