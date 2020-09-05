"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// ARRAY OF COFFEES
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// DOM ELEMENTS

var selection = document.querySelector('#roast-selection');
selection.addEventListener('change', updateCoffees);

var coffeeMenu = document.querySelector('#coffees');
coffeeMenu.innerHTML = renderCoffees(coffees);


var roastSelection = document.querySelector('#roast-selection2');
var submitButton = document.querySelector("#submit");
submitButton.addEventListener('click', addACoffee);


// CREATE COFFEE MENU
function renderCoffee(coffee) {
    var html = '<div class="col-6 coffee">';
    html += '<h4>' + coffee.name + '</h4>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
function renderCoffees(coffees) {
    var html = '';

    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// FILTER COFFEE MENU BASED ON ROAST SELECTION
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = selection.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if (coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee);
        }
        if (selectedRoast === "all") {
            filteredCoffees.push(coffee)
        }

    });
    coffeeMenu.innerHTML = renderCoffees(filteredCoffees.reverse());
}

// SEARCH FOR A COFFEE IN THE SYSTEM
function mySearchFunction () {
    var searchedCoffees = [];
    var input = document.getElementById("coffeeName");
    console.log(input.value);
    coffees.forEach(function(coffee) {
        if (coffee.name.toUpperCase().includes(input.value.toUpperCase())) {
            searchedCoffees.push(coffee);
            console.log(searchedCoffees);
        }
    })
    coffeeMenu.innerHTML = renderCoffees(searchedCoffees.reverse());
}

// ADD A COFFEE TO THE COFFEE MENU
function addACoffee(e) {
    e.preventDefault();
    var coffeeName = document.getElementById("nameAdded").value;
    var newCoffee = {
        id: coffees.length + 1,
        name: coffeeName,
        roast: roastSelection.value
    }
    coffees.push(newCoffee);
    coffeeMenu.innerHTML = renderCoffees(coffees);

}
