// //Defining a baseURL and key to as part of the request URL
const BASE_URL = 'https://app.ticketmaster.com/discovery/v2/events.json?size=30&city=chicago&startDateTime=2021-11-21T00:00:00Z&endDateTime=2021-11-25T00:00:00Z&apikey=';
const KEY = 'wYk8muWgRYtJ2K4cZHocmXVoL8gum9hh'; 

//   // Grab references to all the DOM elements you'll need to manipulate

  const searchTerm = document.querySelector('.search');
  const startDate = document.querySelector('.start-date');
  const endDate = document.querySelector('.end-date');
  const searchForm = document.querySelector('form');


//     // Event listeners to control the functionality
// searchForm.addEventListener('submit', submitSearch);

//   function fetchResults(e) {
  
//     // Assemble the full URL
//     url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value + '&fq=document_type:("article")';
//   }
//     if(startDate.value !== '11-11-2021') {
//       url += '&begin_date=' + startDate.value;
//     };
  
//     if(endDate.value !== '02-02-2022') {
//       url += '&end_date=' + endDate.value;
//     };
    
//     function submitSearch(e) {
//       pageNumber = 0;
//       fetchResults(e);
//     }
    
//     // Use fetch() to make the request to the API
// fetch(url).then(function(result) {
//     return result.json();
//   }).then(function(json) {
//     displayResults(json);
//   });
  
//   function displayResults(json) {
//     while (section.firstChild) {
//         section.removeChild(section.firstChild);
//     }
//   }
//     const events = json.response.docs;
  
//     if(events.length === 20) {
//       nav.style.display = 'block';
//     } else {
//       nav.style.display = 'none';
//     }


// //the forms for the search fields save to local storage
// let stateSearch = "IL";

// function fetchObjects() {
//     const url = BASE_URL+KEY+"&stateCode=" + stateSearch
   
    
//     fetch(url)
//         .then(function (response) {
//             return response.json()
//         })
//         .then(function (ticketmasterData) {
//             console.log(ticketmasterData._embedded)
            
//         })

//         .catch(function (error) {
//             console.error(error);
//         });
// }

// fetchObjects();
// // //use the values in the form fields to apply filters to the api data 


// ---
// var state = document.querySelector('#state')
// var event = document.querySelector('#eventsbox')

// function tixData(event){
//   event.preventDefault();
//   console.log('Is this even working?')
//   // var stShorthand = state.value
//   var url = BASE_URL + KEY
//   console.log(url)
//     fetch(url)
//       .then(function(response){
//         return response.json();
//       })
//     .then(function(_embedded){
//       console.log(url)
//       event.innerHTML = data._embedded.events[0].name

//     })
// }


// getevents();

// function getevents() {
//   fetch(BASE_URL + KEY)
//     .then(response => {
//       var response = response.json();
//       console.log(response);
//       return response;
//     })
//     .then(data => {
//       var eventbox = document.querySelector('div');
//       eventbox.innerHTML = data._embedded.events[0].name;
//       document.querySelector('#eventsbox').appendChild(eventbox);

//       var typeevent = document.createElement('div');
//       typeevent.innerHTML = data._embedded.events[0].classifications[0].segment.name;
//       document.querySelector('#eventsbox').append(typeevent);

//       var price = document.createElement('div');
//       price.innerHTML = data._embedded.events[0].priceRanges[0].min;
//       document.querySelector('#min').append(price);

//       var price = document.createElement('div');
//       price.innerHTML = data._embedded.events[0].priceRanges[0].max;
//       document.querySelector('#max').append(price);

//       var picpic = document.createElement('img');
//       picpic.innerHTML = data._embedded.events[0].images[0].url;
//       document.querySelector('#max').append(picpic);
//     });
// }
