// This line takes the data from the data.js file
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Using the "Object.entries" and "Arrow Functions", loop through the 
// data file and then add each item to the table on the HTML screen
// Used code from classwork assignment 03-Evr_D3_Table Bonus
function buildTable(data){
  tbody.html("");
  data.forEach((data) => {
    console.log(data);
    var row = tbody.append("tr");
  
    Object.entries(data).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
} 

// Event that calls a function which I am calling buttonClick
function buttonClick(){
  // prevent the page from refreshing the page
    d3.event.preventDefault() 
    // Using d3 to select the date from the input field 
    var date = d3.select("#datetime").property("value");
    var filterData = tableData;

  // This is an "if" statement checking to see if the date entered matches one of the dates wihtin the available range.
    if (date){
      // If the date matches, then the following code will filter the data and display 
      // corresponding rows where the datetime value matches the filter value will then be displayed
      filterData = filterData.filter((row) => row.datetime === date);
    }
  buildTable(filterData);
}
d3.selectAll("#filter-btn").on("click", buttonClick);
buildTable(tableData);
























// //select the web user's input and the filter button
// var dateInputText = d3.select("#datetime")
// var button = d3.select("filter-btn")

// // filter data with date that the user inputs
// function clickSelect(){
//     //don't refresh the page!
//     d3.event.preventDefault();
//     //print the value that was input
//     console.log(dateInputText.property("value"));
//     //create a new table showing only the filterd data
//     var new_table = tableData.filter(sighting => sighting.datetime===dateInputText.property("value"))
//     //display the new table
//     displayData(new_table);
// }

// // event listener to handle change and click
// dateInputText.on("change", clickSelect)

