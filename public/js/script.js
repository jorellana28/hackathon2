 //  Search button event listener
document.getElementById('search-form').addEventListener('submit', getMeetUpEvents);


// Ajax request using search term to getPlaylist route
function getMeetUpEvents(event) {
   var query = document.getElementById("query").value;
   console.log("query");
   // var req = new XMLHttpRequest(); 
   // var url = "https://api.meetup.com/find/events" + query;
   // req.open("GET", url, true);
   // req.addEventListener('load', function() {
   //   if(req.status >= 200 && req.status < 400){
   //     var response = JSON.parse(req.responseText);
   //     // console.log(response.results);
   //     tracks = response.results;
   //     displayTracks(response.results);
   //   } else {
   //       console.log("Error in network request: " + req.statusText);
   //   }
   // }); 
   // req.send(null);
  event.preventDefault();
}
