 var apiKey = 'DPQNSMGH5QBIBWDPNRZO';

      document.addEventListener('DOMContentLoaded', action);
      document.getElementById('query').focus();

      function action () {
        document.getElementById('searchbutton').addEventListener('click', function(event) {

          if (document.getElementById("listContent"));
            document.getElementById("listContent").remove();

          var req = new XMLHttpRequest();

          var payload  = {location:null, distance:null, category:null};
          payload.location = document.getElementById('query').value;
          payload.distance = '100mi';
          payload.category = 'hackathon';

          req.open('GET', "https://www.eventbriteapi.com/v3/events/search/?q=" + payload.category + "&location.address=" + payload.location + "&location.within=" + payload.distance + "&token=" + apiKey, true);

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
        var length = eventsArray.pagination.object_count;

        /* PRINT INFO ONTO CONSOLE
        console.log(eventsArray);
        console.log(length);
        console.log(eventsArray.events[0].name.text);
        */

        var listArea = document.getElementById("listContent");

        //Create the list
        var list = document.createElement("ul");
        list.setAttribute("id", "hackathon_list");
        list.id = "results";
        list.style.listStyle = "none";
        list.className = "list-group";  

        // Build list
        for (var i = 0; i < length; i++) { 

          //Create HTML DOM Elements      
          var event = document.createElement('a'); //Preview node      
          event.className = "list-group-item list-group-item-action"; //Set type      
          event.textContent = eventsArray.events[i].name.text;   
          list.appendChild(event);      
        } 
        
        listArea.appendChild(list)
      }