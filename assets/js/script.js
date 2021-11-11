//Defining a baseURL and key to as part of the request URL
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?size=30&city=chicago&startDateTime=2021-11-21T00:00:00Z&endDateTime=2021-11-25T00:00:00Z&apikey=';
const KEY = 'wYk8muWgRYtJ2K4cZHocmXVoL8gum9hh'; 

  // Grab references to all the DOM elements you'll need to manipulate

  const searchTerm = document.querySelector('.search');
  const startDate = document.querySelector('.start-date');
  const endDate = document.querySelector('.end-date');
  const searchForm = document.querySelector('form');


    // Event listeners to control the functionality
searchForm.addEventListener('submit', submitSearch);

function submitSearch(e) {
    pageNumber = 0;
    fetchResults(e);
  }
  
  function fetchResults(e) {
  
    // Assemble the full URL
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value + '&fq=document_type:("article")';
  }
    if(startDate.value !== '11-11-2021') {
      url += '&begin_date=' + startDate.value;
    };
  
    if(endDate.value !== '02-02-2022') {
      url += '&end_date=' + endDate.value;
    };
    
    // Use fetch() to make the request to the API
fetch(url).then(function(result) {
    return result.json();
  }).then(function(json) {
    displayResults(json);
  });
  
  function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
  }
    const events = json.response.docs;
  
    if(events.length === 20) {
      nav.style.display = 'block';
    } else {
      nav.style.display = 'none';
    }


//the forms for the search fields save to local storage
let stateSearch = "IL";

function fetchObjects() {
    const url = BASE_URL+KEY+"&stateCode=" + stateSearch
   
    
    fetch(url)
        .then(function (response) {
            return response.json()
        })
        .then(function (ticketmasterData) {
            console.log(ticketmasterData._embedded)
            
        })

        .catch(function (error) {
            console.error(error);
        });
}

fetchObjects();
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