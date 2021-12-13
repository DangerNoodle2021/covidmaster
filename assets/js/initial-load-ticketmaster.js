

var baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
var apiKey = '&apikey=wYk8muWgRYtJ2K4cZHocmXVoL8gum9hh'

var ticketmasterEl = document.querySelector('#ticketmaster')
//function to load initial data for the web page at the US level

function initialEventsLoad () {
    var initialURL = baseURL + apiKey
    // console.log(initialURL)

    fetch(initialURL)
        .then(function (response){
            return response.json();
        })
        .then(function (eventData)  {
            //only pull through 5 events
            var eventsList = eventData._embedded.events
            // var event1 = document.createElement("div")
            // var event2 = document.createElement("div")
            // var event3 = document.createElement("div")
            // var event4 = document.createElement("div")
            // var event5 = document.createElement("div")
            // var events = [event1, event2, event3, event4, event5]

            for (var i=0; i < eventsList.length; i++) {
                // var events[i] = document.createElement("div")

                var eventEl = document.createElement("div")
                eventEl.setAttribute("class", "events")
                // console.log(events[i])



                //need to figure out a way to select only the same sizes of the image --> most likely to do with the url and change the ending
                var eventImageEl = document.createElement("img")
                eventImageEl.setAttribute("class", "event-photo")
                eventImageEl.setAttribute("src", eventData._embedded.events[i].images[0].url) 
                eventEl.appendChild(eventImageEl)
                ticketmasterEl.appendChild(eventEl)


                //flex div for information
                var eventDetailsEl = document.createElement("div")
                eventDetailsEl.setAttribute("class","event-details")
                eventEl.appendChild(eventDetailsEl)
                //add names, dates and locations
                
                //locations
                var locationEl = document.createElement("h2")
                var location = eventData._embedded.events[i]._embedded.venues[0].name + " in " + eventData._embedded.events[i]._embedded.venues[0].city.name + ", " + eventData._embedded.events[i]._embedded.venues[0].state.stateCode
                locationEl.innerHTML = location
                eventDetailsEl.appendChild(locationEl)
                
                //dates
                var eventDateEl = document.createElement("h2")
                var date = eventData._embedded.events[i].dates.start.localDate + " " + eventData._embedded.events[i].dates.start.localTime
                // console.log(date)
                var eventDate = moment(date).format("MMMM Do, YYYY, h:mm:ss a")
                eventDateEl.innerHTML = eventDate
                // console.log(eventDate)
                eventDetailsEl.appendChild(eventDateEl)

                //name
                var nameEl = document.createElement("h3")
                nameEl.innerHTML = eventData._embedded.events[i].name
                eventDetailsEl.appendChild(nameEl)

                // for (var i = 0; i < eventData._embedded.events.length; i++) {

                // }

            }
        
            //figure out a way to randomize the events that pull through 

        })
}

initialEventsLoad();



//function to search the events when searched. 

    //error handling
        //if start date or end date is not entered, provide message saying they need to be input
        //if the value of the input is empty then do not include in the searched events url 

//the ending of the url should always be the &apikey= + apiKey