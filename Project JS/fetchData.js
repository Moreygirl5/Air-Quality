
let urlParams = new URLSearchParams(window.location.search);
let city = urlParams.get('city');
let url = 'https://api.api-ninjas.com/v1/airquality?city=' + city;
const cityName = document.getElementById("city-name");
const coConcentration = document.getElementById("co-concentration");
const no2Concentration = document.getElementById("no2-concentration");
const o3Concentration = document.getElementById("o3-concentration");
const so2Concentration = document.getElementById("so2-concentration");
const pm25Concentration = document.getElementById("pm2.5-concentration");
const pm10Concentration = document.getElementById("pm10-concentration");
const overallAqi = document.getElementById("overall-aqi");
const explanationContainer = document.getElementById("explanation-container");


console.log(city);

function populateResults() {
    const status = document.createElement('h2');
    const circle = document.createElement('p');
    const blurb = document.createElement('p');
    console.log("Responding hello");
    
    if (currentAqi <= 50) {
        status.innerText = "Good."
        circle.style.color = "green";
    } else if (currentAqi > 50 && currentAqi <= 100 ) {
        status.innerText = "Moderate."
        circle.style.color = "yellow";
    } else if (currentAqi > 100 && currentAqi <= 150 ) {
        status.innerText = "Unealthy for Sensitive Groups."
        circle.style.color = "orange";
    } else if (currentAqi > 150 && currentAqi <= 200 ) {
        status.innerText = "Unhealthy."
        circle.style.color = "red";
    } else if (currentAqi > 200 && currentAqi <= 300 ) {
        status.innerText = "Very Unhealthy."
        circle.style.color = "purple";
    } else if (currentAqi > 300) {
        status.innerText = "Hazardous."
        circle.style.color = "maroon";
    };

    circle.innerText = "●";
  
  
  
    circle.classList.add("circle");
    circle.innertext = "●";
    explanationContainer.appendChild(status);
    explanationContainer.appendChild(circle);

};


function setInfo(pollutant, paragraph) {
    console.log(qualityData[pollutant].concentration);
    paragraph.innerHTML = `Concentration: ${qualityData[pollutant].concentration}`;
}

let qualityData = '';
let currentAqi = '';

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


fetch(url, {
    method: 'GET',
    headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json'
    }
})
    .then(response => response.json())
    .then(result => {
        qualityData = result;
        currentAqi = qualityData.overall_aqi;
        console.log(qualityData);
        consoleData();

    })
    .catch(error => {
        console.error('Error:', error);
    });

    