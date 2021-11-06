
//search button


//the forms for the search fields save to local storage

//use the values in the form fields to apply filters to the api data 

//insert the images, locations, datetimes and titles into the cards for events





// covid data

//insert covid data at the different levels in dates specified. 
    //if date is not specified, then populate the soonest upcoming
var covidAPIKey = '7e0f83a022e24a68ae76e69913b1283c'
var urlLink = 'https://api.covidactnow.org/v2/states.json?apiKey='
// https://api.covidactnow.org/v2/states.json?apiKey={apiKey}

function covidData (city){
    var queryURL = urlLink + covidAPIKey
    fetch (queryURL)
    .then(function(response)){
        return response.JSON()
        .then(function(response){
            console.log(response);
        })
    }
}
    
    //US on landing page
    //searched state
        //if the city is null, then provide state data
        //if city is specified, then provide county data

//searched state page
    //replace the general us cards with state, city, or date specific data
        //new cards should include small image, datetime, location, title and a favorite button

//favorite button 
    //a star or heart that fills when clicked and then adds to local storage
