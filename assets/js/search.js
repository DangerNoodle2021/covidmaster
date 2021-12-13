
var covidAPIKey = '7e0f83a022e24a68ae76e69913b1283c'
// var covidAPIKeyFilter = '&apikey=7e0f83a022e24a68ae76e69913b1283c'
var tmBaseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
var covidBaseUrl =  'https://api.covidactnow.org/v2/country/US.json?apiKey=' + covidAPIKey
var apiKey = '&apikey=wYk8muWgRYtJ2K4cZHocmXVoL8gum9hh'

var riskLevelEl = document.querySelector('#risk-level');
var currentDateEl = document.querySelector('#current-date')
var newCasesEl = document.querySelector('#new-cases')
var posTestRate = document.querySelector('#test-rate')
var stateTitleEl = document.querySelector('.covid-title')
var percentVax = document.querySelector('#percent-vaxxed')
var stateIconEl = document.querySelector('#state-photo')

var formEl = document.querySelector('form');
var startDateInputEl = document.querySelector("#start-date")
var endDateInputEl = document.querySelector("#end-date")
var stateInputEl = document.querySelector("#state")
var cityInputEl = document.querySelector("#city")
var zipInputEl = document.querySelector("#zip")



function searchLoad(event){
    event.preventDefault();
    if (startDateInputEl.value === '' || endDateInputEl.value === '' || stateInputEl.value === '') {
        alert('The state, start date and end date must be specified.')
    } else {
    //startDate and endDate filter
    var startDateVal = startDateInputEl.value
    var startDate = moment(startDateVal,'MM/DD/YYYY').format("YYYY-MM-DDTHH:mm:ssZ");
    var startDateFilter = "&startDateTime=" + startDate 

    var endDateVal = endDateInputEl.value
    var endDate = moment(endDateVal,'MM/DD/YYYY').format("YYYY-MM-DDTHH:mm:ssZ");
    var endDateFilter = "&endDateTime=" + endDate

    var stateVal = stateInputEl.value
    var stateFilter = "&stateCode=" + stateVal

    var cityInput = cityInputEl.value.replace(/\s/g,"+")
    var cityVal =  cityInput.trim();
    var cityFilter = "&locale=*&city='" + cityVal

    var zipVal = zipInputEl.value
    var zipFilter = "&postalCode=" + zipVal


    var iconSourceEl = './assets/images/covidimages/' + stateVal + '.jpg'

    var covidRequestURL = 'https://api.covidactnow.org/v2/state/' + stateVal + '.timeseries.json?apiKey=' + covidAPIKey
    fetch(covidRequestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            //change title of covid state to the state in the data.url
            riskLevelEl.innerHTML = data.riskLevels.overall
            currentDateEl.innerHTML= data.lastUpdatedDate //CONVERT TO Month, day year
            newCasesEl.innerHTML = data.actuals.newCases
            // posTestRate.innerHTML = data.actuals.positiveTests
            percentVax.innerHTML = (data.metrics.vaccinationsCompletedRatio) * 100
            //for the increase decrease, calculate the slope of the past 30 days of infection rate and if its positive then increase and if negative, decrease 
            stateTitleEl.innerHTML = stateVal
            stateIconEl.setAttribute("src", iconSourceEl)
        })
    // console.log(tmRequestURL)
    searchEvents(startDateFilter, endDateFilter, stateFilter, cityFilter, zipFilter)
    }

};


function searchEvents(startDateFilter, endDateFilter, stateFilter, cityFilter, zipFilter) {

    // var urlValueList = [startDateVal,endDateVal, stateVal, cityVal, zipVal];
    var urlFilterList = [startDateFilter, endDateFilter, stateFilter, cityFilter, zipFilter]
    // console.log(urlFilterList)
    // for (var i=0; i < urlValueList.length;) {
    //     if (urlFilterList[i] == '') {
    //         urlFilterList.splice(i,1)
    //         urlValueList.splice(i,1)
    //     } else {
    //         i++;
    //     }
    // }
    // console.log(urlFilterList)
    var tmRequestURL = baseURL + urlFilterList.join("") + apiKey

    console.log(tmRequestURL)
    var eventsList = document.querySelectorAll('.events')
    var imagesList = document.querySelectorAll('.event-photo')
    var detailsList = document.querySelectorAll('.event-details') 
    fetch(tmRequestURL)
        .then(function(response){
            return response.json();
        })    
        .then(function (eventData) {
            console.log(detailsList)
            console.log(imagesList)
            console.log(eventsList)
            console.log(eventData)
            for (var i=0; i < eventsList.length; i++) {
                imagesList[i].setAttribute("src", eventData._embedded.events[i].images[0].url) 

                detailsList[i].children[0].innerHTML = eventData._embedded.events[i]._embedded.venues[0].name + " in " + eventData._embedded.events[i]._embedded.venues[0].city.name + ", " + eventData._embedded.events[i]._embedded.venues[0].state.stateCode
                var eventDate = eventData._embedded.events[i].dates.start.localDate + " " + eventData._embedded.events[i].dates.start.localTime
                detailsList[i].children[1].innerHTML = moment(eventDate).format("MMMM Do, YYYY, h:mm:ss a")
                detailsList[i].children[2].innerHTML = eventData._embedded.events[i].name
            }
        })
}
formEl.addEventListener('submit', searchLoad);

