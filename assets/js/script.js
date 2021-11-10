//search button


//the forms for the search fields save to local storage

//use the values in the form fields to apply filters to the api data 

//insert the images, locations, datetimes and titles into the cards for events





// covid data functions, variables, and appended data
//insert covid data at the different levels in dates specified. 

// declare variables for covidData function
var covidAPIKey = '8530c235e49149a59a1313f66d8492a8'
var state = document.getElementById('state')
var urlLink = `https://api.covidactnow.org/v2/states/${state}.timeseries.json?apiKey=`
var fetchBtn = document.getElementById('search')

function covidData(state){
    var queryURL = urlLink + covidAPIKey;
    // AJAX call for covid data
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        var currData = $("<div id = 'currentData'>");

        var titleSt = response.state;
        titleSt.append(currData);

        var riskLv = response.riskLevels.overall;
        riskLv.append(currData);

        var popVax = response.metrics.vaccinationsCompletedRatio;
        popVax.append(currData);

        var newCases = response.actuals.newCases;
        newCases.append(currData);

        var posTests = response.actuals.positiveTests;
        posTests.append(currData);

        var infoUrl = response.url;
        infoUrl.append(currData);
    })
}

function getcovidData(state){
    if(typeof state === 'object'){
        state = $(this).attr('data-name');
    }
    covidData(state);
}

// function to bring back covid data for each state
// function covidData (){
//     var queryURL = urlLink + covidAPIKey
//     fetch (queryURL)
//         .then(function(response){
//             return response.json()})
//         .then(function(covidDat){
//             console.log(covidDat)  /*console log data string*/
//         for (var i = 0; i < data.length; i++){
//                 // var state = response.covidDat[0].state;
//                 // state.textContent = 
                
//         }
//     })
// }
covidData();
// gets covid data upon clicking the search button
// fetchBtn.addEventListener('click', covidData);

// function to loop images depending on which state is searched, if no state searched pull up whole map


    //US on landing page
    //searched state
        //if the city is null, then provide state data
        //if city is specified, then provide county data

//searched state page
    //replace the general us cards with state, city, or date specific data
        //new cards should include small image, datetime, location, title and a favorite button

//favorite button 
    // a star or heart that fills when clicked and then adds to local storage