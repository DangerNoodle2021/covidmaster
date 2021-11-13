//Defining a baseURL and key to as part of the request URL
  /*
  Use input fields to build URL 

  fetch data from API

  Display data

  Error message display
  
  */

  
  var BASE_URl = 'https://app.ticketmaster.com/discovery/v2/events.json?size=30&city='
  var KEY = 'wYk8muWgRYtJ2K4cZHocmXVoL8gum9hh'; 
  //Create variables for input fields. City, Start/End dates 
var cityInput = document.querySelector("#city")
var startDateInput = document.querySelector("#start-date")
var endDateInput = document.querySelector("#end-date")
var searchForm = document.querySelector('form')

//Create form variable 
var eventOneEl= document.querySelector('#event-1')
var formSubmitHandler = function (event) { 
  var city = cityInput.value.trim();
  var startDate = startDateInput.value.trim();
  var endDate = endDateInput.value.trim();
  console.log(city)

  fetch(BASE_URl)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
      displayEvents(data, event);
      })
    } else {
      alert('')
    }
  })}
formSubmitHandler()


function initialEventLoad () {
  // event.preventDefault();

var initialUrl = BASE_URl
  fetch(initialUrl)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          // console.log()
          eventOneEl.setattribute("src", data._embedded.events.images.childnodes[0])

      })
}

initialEventLoad();
  

//Create form variable 
var formSubmitHandler = function (event) {
  event.preventDefault(); 
  var city = cityInput.value.trim();
  var startDate = startDateInput.value.trim();
  var endDate = endDateInput.value.trim();
  console.log(city)

  fetch(apiUrl)
  .then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
      displayEvents(data, event);
      })
    } else {
      alert('')
    }
  })}
formSubmitHandler()

//Create event listner for form (line 103)
searchForm.addEventListener('submit', formSubmitHandler);





  if (city) {
    getEvents(city);}

fetchObjects();
//use the values in the form fields to apply filters to the api data 





//insert the images, locations, datetimes and titles into the cards for events

