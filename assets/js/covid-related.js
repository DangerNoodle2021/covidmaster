


// //insert the images, locations, datetimes and titles into the cards for events





// // covid data functions, variables, and appended data
// //insert covid data at the different levels in dates specified. 

// // declare variables for covidData function
// var covidAPIKey = '8530c235e49149a59a1313f66d8492a8'
// var state = document.getElementById('state')
// var urlLink = `https://api.covidactnow.org/v2/states/${state}.timeseries.json?apiKey=`
// var fetchBtn = document.getElementById('search')

// function covidData(state){
//     var queryURL = urlLink + covidAPIKey;
//     // AJAX call for covid data
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
//     }).then(function(response){
//         var currData = $("<div id = 'currentData'>");

//         var titleSt = response.state;
//         titleSt.append(currData);

//         var riskLv = response.riskLevels.overall;
//         riskLv.append(currData);

//         var popVax = response.metrics.vaccinationsCompletedRatio;
//         popVax.append(currData);

//         var newCases = response.actuals.newCases;
//         newCases.append(currData);

//         var posTests = response.actuals.positiveTests;
//         posTests.append(currData);

//         var infoUrl = response.url;
//         infoUrl.append(currData);
//     })
// }

// function getcovidData(state){
//     if(typeof state === 'object'){
//         state = $(this).attr('data-name');
//     }
//     covidData(state);
// }

// // function to bring back covid data for each state
// // function covidData (){
// //     var queryURL = urlLink + covidAPIKey
// //     fetch (queryURL)
// //         .then(function(response){
// //             return response.json()})
// //         .then(function(covidDat){
// //             console.log(covidDat)  /*console log data string*/
// //         for (var i = 0; i < data.length; i++){
// //                 // var state = response.covidDat[0].state;
// //                 // state.textContent = 
                
// //         }
// //     })
// // }
// covidData();



// gets covid data upon clicking the search button

// https://api.covidactnow.org/v2/states/${state}.timeseries.json?apiKey= 7e0f83a022e24a68ae76e69913b1283c

//need to add in variables for each covid metric and 
var riskLevelEl = document.querySelector('#risk-level');
var currentDateEl = document.querySelector('#current-date')
var newCasesEl = document.querySelector('#new-cases')
var posTestRate = document.querySelector('#test-rate')
var stateTitleEl = document.querySelector('#covid-title')
var percentVax = document.querySelector('#percent-vaxxed')
console.log(riskLevelEl);
var formEl = document.querySelector('form');
var state = document.querySelector('#state')
console.log(formEl)
var apiKey = '7e0f83a022e24a68ae76e69913b1283c'


function initialData () {
    // event.preventDefault();
    var initialURL = 'https://api.covidactnow.org/v2/country/US.json?apiKey=' + apiKey
    console.log(initialURL)
    fetch(initialURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // console.log()
            riskLevelEl.innerHTML = data.riskLevels.overall
            currentDateEl.innerHTML= data.lastUpdatedDate //CONVERT TO Month, day year
            newCasesEl.innerHTML = data.actuals.newCases
            // posTestRate.innerHTML = data.actuals.positiveTests
            percentVax.innerHTML = (data.metrics.vaccinationsCompletedRatio) * 100
            // console.log(stateShorthand) 
        })
}

initialData();


function searchCovid (event){
    event.preventDefault();
    console.log('hello!!!!!!!!!!!!!!!!!')
    var stateShorthand= state.value

    var requestURL = 'https://api.covidactnow.org/v2/state/' + stateShorthand + '.timeseries.json?apiKey=' + apiKey
    console.log(requestURL)
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(requestURL)
            //change title of covid state to the state in the data.url
            riskLevelEl.innerHTML = data.riskLevels.overall
            currentDateEl.innerHTML= data.lastUpdatedDate //CONVERT TO Month, day year
            newCasesEl.innerHTML = data.actuals.newCases
            // posTestRate.innerHTML = data.actuals.positiveTests
            percentVax.innerHTML = (data.metrics.vaccinationsCompletedRatio) * 100
            //for the increase decrease, calculate the slope of the past 30 days of infection rate and if its positive then increase and if negative, decrease 
            // console.log(stateShorthand) 
            console.log(stateShorthand) 
        })
};

formEl.addEventListener('submit', searchCovid);


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


