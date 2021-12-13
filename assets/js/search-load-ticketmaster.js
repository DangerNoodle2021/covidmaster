
// // var baseURL = 'https://app.ticketmaster.com/discovery/v2/events.json?'
// // var apiKey = '&apikey=wYk8muWgRYtJ2K4cZHocmXVoL8gum9hh'

// // var startDateInputEl = document.querySelector("#start-date")
// // var endDateInputEl = document.querySelector("#end-date")
// // var stateInputEl = document.querySelector("#state")
// // var cityInputEl = document.querySelector("#city")
// // var zipInputEl = document.querySelector("#zip")

// // var formEl = document.querySelector('form');
// // function searchEventLoad() {
// //     if (startDateInputEl.value === '' || endDateInputEl.value === '') {
// //         alert(' Both Start Date and End Dates must be specified.')
// //     } else {

    
//     //require the dates , convert input from moment 
//     //startDate and endDate filter
//     // var startDateVal = startDateInputEl.value
//     // var startDate = moment(startDateVal,'MM/DD/YYYY').format("YYYY-MM-DDTHH:mm:ssZ");
//     // var startDateFilter = "&startDateTime=" + startDate 

//     // console.log(startDate)

//     // //enddate
//     // var endDateVal = endDateInputEl.value
//     // var endDate = moment(endDateVal,'MM/DD/YYYY').format("YYYY-MM-DDTHH:mm:ssZ");
//     // // console.log(startDate)
//     // var endDateFilter = "&endDateTime" + endDate

//     // console.log(endDate)
//     // //state filter
//     // var stateVal = stateInputEl.value
//     // var stateFilter = "&stateCode=" + stateVal

//     // console.log(stateVal)

//     //city filter
//     // var cityVal = cityInputEl.value.replace(/\s/g,"")
//     // var cityFilter = "&city=" + cityVal

//     // console.log(cityFilter)

//     // //zip filter
//     // var zipVal = zipInputEl.value
//     // var zipFilter = "&postalCode=" + zipVal

//     // console.log(zipFilter)

//     var urlValueList = [startDateVal,endDateVal, stateVal, cityVal, zipVal];
//     var urlFilterList = [startDateFilter, endDateFilter, stateFilter, cityFilter, zipFilter]
//     for (var i=0; i < urlValueList.length;) {
//         if (urlValueList[i] == '') {
//             urlFilterList.splice(i,1)
//             urlValueList.splice(i,1)
//         } else {
//             i++;
//         }
//     }

//     var requestURL = baseURL + urlFilterList.join("") + apiKey
//     console.log(requestURL)
    

//     fetch(requestURL)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (eventData) {
            
//         })
//     // console.log(initialURL)
//     }
// }
// //maybe make the values a drop down or use the calendar thing they were talking about

// var cityVal = cityInputEl.value
// formEl.addEventListener('submit', searchEventLoad)
