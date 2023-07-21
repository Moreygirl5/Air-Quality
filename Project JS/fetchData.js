
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

const goodBlurb = ""

console.log(city);

function populateResults() {
    const status = document.createElement('h2');
    const circle = document.createElement('p');
    const blurb = document.createElement('p');
    console.log("Responding hello");
    
    if (currentAqi <= 50) {
        status.innerText = "Good."
        circle.style.color = "green"
        blurb.innerText = "Air quality is satisfactory, and air pollution poses little or no risk."
        explanationContainer.appendChild(blurb);
    } else if (currentAqi > 50 && currentAqi <= 100 ) {
        status.innerText = "Moderate."
        circle.style.color = "yellow"
        blurb.innerText = "Air quality is acceptable. However, there may be a risk for some people, particularly those who are unusually sensitive to air pollution."
        explanationContainer.appendChild(blurb);
    } else if (currentAqi > 100 && currentAqi <= 150 ) {
        status.innerText = "Unealthy for Sensitive Groups."
        circle.style.color = "orange"
        blurb.innerText = "Members of sensitive groups may experience health effects. The general public is less likely to be affected."
        explanationContainer.appendChild(blurb);
    } else if (currentAqi > 150 && currentAqi <= 200 ) {
        status.innerText = "Unhealthy."
        circle.style.color = "red"
        blurb.innerText = "	Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects."
        explanationContainer.appendChild(blurb);
    } else if (currentAqi > 200 && currentAqi <= 300 ) {
        status.innerText = "Very Unhealthy."
        circle.style.color = "purple"
        blurb.innerText = "Health alert: The risk of health effects is increased for everyone."
        explanationContainer.appendChild(blurb);
    } else if (currentAqi > 300) {
        status.innerText = "Hazardous."
        circle.style.color = "maroon"
        blurb.innerText = "Health warning of emergency conditions: everyone is more likely to be affected."
        explanationContainer.appendChild(blurb);
    };

    circle.innerText = "●";
   // image.setAttribute("src", imageSet.images[0]);
   // title.innerText = `${imageSet.title} - ${imageSet.name}`;
    // link.setAttribute("href", `../Gallery Page/gallery.html?id=${imageSet.id}`);
    // link.innerText = "See More";
  
  
  
    circle.classList.add("circle");
    circle.innertext = "●";
    //title.classList.add("gallery-title");
    //link.classList.add("gallery-link");
    explanationContainer.appendChild(status);
    explanationContainer.appendChild(circle);
   // card.appendChild(title);
   // card.appendChild(link)
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

    