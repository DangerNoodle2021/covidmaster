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
// //use the values in the form fields to apply filters to the api data 


