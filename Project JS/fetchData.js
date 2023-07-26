
<<<<<<< Updated upstream
let urlParams = new URLSearchParams(window.location.search);
let city = urlParams.get('city');
let url = 'https://api.api-ninjas.com/v1/airquality?city=' + city;
=======
let urlParams = new URLSearchParams(window.location.search); //pulls the url parameters into a variable
let city = urlParams.get('city'); //Pulls the city parameter from the urlParams variable
let url = 'https://api.api-ninjas.com/v1/airquality?city=' + city; // creates the url to fetch the specific city api information
>>>>>>> Stashed changes
const cityName = document.getElementById("city-name");
const coConcentration = document.getElementById("co-concentration");
const no2Concentration = document.getElementById("no2-concentration");
const o3Concentration = document.getElementById("o3-concentration");
const so2Concentration = document.getElementById("so2-concentration");
const pm25Concentration = document.getElementById("pm2.5-concentration");
const pm10Concentration = document.getElementById("pm10-concentration");
const overallAqi = document.getElementById("overall-aqi");
const explanationContainer = document.getElementById("explanation-container");

<<<<<<< Updated upstream

console.log(city);
=======
// All of the above assign variable names to document elements


console.log(city); // Just a test log to make sure the city was grabbed successfully from the search bar. 
>>>>>>> Stashed changes

function populateResults() {
    const status = document.createElement('h2');
    const circle = document.createElement('p');
    const blurb = document.createElement('p');
<<<<<<< Updated upstream
    console.log("Responding hello");
=======
    // These save new elements as variables, to be filled later. 
    console.log("Responding hello"); // Another test log. 
>>>>>>> Stashed changes
    
    if (currentAqi <= 50) {
        status.innerText = "Good."
        circle.style.color = "green"
        blurb.innerText = "Air quality is satisfactory, and air pollution poses little or no risk."
<<<<<<< Updated upstream
        explanationContainer.appendChild(blurb);
=======
>>>>>>> Stashed changes
    } else if (currentAqi > 50 && currentAqi <= 100 ) {
        status.innerText = "Moderate."
        circle.style.color = "yellow"
        blurb.innerText = "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
<<<<<<< Updated upstream
        explanationContainer.appendChild(blurb);
    } else if (currentAqi > 100 && currentAqi <= 150 ) {
        status.innerText = "Unealthy for Sensitive Groups."
        circle.style.color = "orange"
        blurb.innerText = "Members of sensitive groups may experience health effects. The general public is less likely to be affected."
        explanationContainer.appendChild(blurb);
=======
    } else if (currentAqi > 100 && currentAqi <= 150 ) {
        status.innerText = "Unhealthy for Sensitive Groups."
        circle.style.color = "orange"
        blurb.innerText = "Members of sensitive groups may experience health effects. The general public is less likely to be affected."
>>>>>>> Stashed changes
    } else if (currentAqi > 150 && currentAqi <= 200 ) {
        status.innerText = "Unhealthy."
        circle.style.color = "red"
        blurb.innerText = "	Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."
<<<<<<< Updated upstream
        explanationContainer.appendChild(blurb);
=======
>>>>>>> Stashed changes
    } else if (currentAqi > 200 && currentAqi <= 300 ) {
        status.innerText = "Very Unhealthy."
        circle.style.color = "purple"
        blurb.innerText = "Health alert: The risk of health effects is increased for everyone."
<<<<<<< Updated upstream
        explanationContainer.appendChild(blurb);
=======
>>>>>>> Stashed changes
    } else if (currentAqi > 300) {
        status.innerText = "Hazardous."
        circle.style.color = "maroon"
        blurb.innerText = "Health warning of emergency conditions: everyone is more likely to be affected."
<<<<<<< Updated upstream
        explanationContainer.appendChild(blurb);
    };

    circle.innerText = "●";
  
  
  
    circle.classList.add("circle");
    circle.innertext = "●";
    explanationContainer.appendChild(status);
    explanationContainer.appendChild(circle);

};

=======
    };
// The above else/else if statement checks the current aqi provided by the api for a value and creates an element based on that level. currentAqi is created later, when we fetch the data. 
    circle.innerText = "●";
  // Just makes the circle
  
  
    circle.classList.add("circle");
    status.classList.add("status")
    blurb.classList.add("blurb")
    // adds class lists to each element for styling purposes
    explanationContainer.appendChild(status);
    explanationContainer.appendChild(blurb);
    explanationContainer.appendChild(circle);
    // actually adds those elements to the document
};
// Note that this was all done in a function. 
>>>>>>> Stashed changes

function setInfo(pollutant, paragraph) {
    console.log(qualityData[pollutant].concentration);
    paragraph.innerHTML = `Concentration: ${qualityData[pollutant].concentration}`;
}
<<<<<<< Updated upstream

let qualityData = '';
let currentAqi = '';
=======
// This a function that grabs the concentration from a specified pollutant type and assigns that value to a specific paragraph, using a template literal. 

let qualityData = '';
let currentAqi = '';
// Creating blank variables to assign values too later
>>>>>>> Stashed changes

const consoleData = () => {
    cityName.innerHTML = city;
    setInfo("CO", coConcentration)
    setInfo("NO2", no2Concentration)
    setInfo("O3", o3Concentration)
    setInfo("SO2", so2Concentration)
    setInfo("PM2.5", pm25Concentration)
    setInfo("PM10", pm10Concentration)
    overallAqi.innerHTML = currentAqi;
    populateResults();
    console.log('end of code', qualityData);
}
<<<<<<< Updated upstream

=======
// function that calls the setInfo function for each type of pollutant then calls the populateResults function to actually publish those elements on the page. 
>>>>>>> Stashed changes

fetch(url, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    }
<<<<<<< Updated upstream
=======
    //gets the api data using the url variable we made earlier.
>>>>>>> Stashed changes
})
    .then(response => response.json())
    .then(result => {
        qualityData = result;
        currentAqi = qualityData.overall_aqi;
        console.log(qualityData);
        consoleData();
<<<<<<< Updated upstream

=======
        //assigns that data to the qualityData variable and the overall aqi to the currentAqi variable. Calls the consoleData function we created above.
>>>>>>> Stashed changes
    })
    .catch(error => {
        console.error('Error:', error);
    });

    