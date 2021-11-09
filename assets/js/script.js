
//search button


//the forms for the search fields save to local storage

//use the values in the form fields to apply filters to the api data 

//insert the images, locations, datetimes and titles into the cards for events





// covid data

//insert covid data at the different levels in dates specified. 
    //if date is not specified, then populate the soonest upcoming
// var covidAPIKey = '7e0f83a022e24a68ae76e69913b1283c'
// var urlLink = 'https://api.covidactnow.org/v2/state/{state}.json?apiKey='
// var cityInput = ''
// https://api.covidactnow.org/v2/state/{state}.json?apiKey=YOUR_KEY_HERE
// https://api.covidactnow.org/v2/county/{fips}.json?apiKey=YOUR_KEY_HERE
// https://api.covidactnow.org/v2/cbsa/{cbsa_code}.json?apiKey=YOUR_KEY_HERE

function covidData (){
    var queryURL = 'https://api.covidactnow.org/v2/state/IL.json?apiKey=7e0f83a022e24a68ae76e69913b1283c'
    fetch (queryURL)
        .then(function(response){
            return response.json()
        .then(function(data){
            console.log(data);
            for (var i = 0; i < data.length; i++){
                var state = document.createElement('p');
                state.textContent = data[i].state;
            }
        })
    })
}
    
    //US on landing page
    //searched state
        //if the city is null, then provide state data
        //if city is specified, then provide county data

//searched state page
    //replace the general us cards with state, city, or date specific data
        //new cards should include small image, datetime, location, title and a favorite button

//favorite button 
    // a star or heart that fills when clicked and then adds to local storage