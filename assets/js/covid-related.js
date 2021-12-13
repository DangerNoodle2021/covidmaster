
// gets covid data upon clicking the search button

// https://api.covidactnow.org/v2/states/${state}.timeseries.json?apiKey= 7e0f83a022e24a68ae76e69913b1283c

//need to add in variables for each covid metric and 
var riskLevelEl = document.querySelector('#risk-level');
var currentDateEl = document.querySelector('#current-date')
var newCasesEl = document.querySelector('#new-cases')
var posTestRate = document.querySelector('#test-rate')
var stateTitleEl = document.querySelector('.covid-title')
var percentVax = document.querySelector('#percent-vaxxed')
var stateIconEl = document.querySelector('#state-photo')
// console.log(stateIconEl);
var formEl = document.querySelector('form');
var state = document.querySelector('#state')
// console.log(formEl)
var covidAPIKey = '7e0f83a022e24a68ae76e69913b1283c'

function initialData () {
    // event.preventDefault();
    var initialURL = 'https://api.covidactnow.org/v2/country/US.json?apiKey=' + covidAPIKey

    var iconSourceEl = './assets/images/covidimages/USA.jpg'
    // console.log(iconSourceEl)
    // console.log(initialURL)
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

            stateIconEl.setAttribute("src", iconSourceEl)
        })
}

initialData();

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

