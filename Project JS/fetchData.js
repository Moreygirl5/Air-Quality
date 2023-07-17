
let urlParams = new URLSearchParams(window.location.search);
let city = urlParams.get('city');
let url = 'https://api.api-ninjas.com/v1/airquality?city=' + city;
const cityName = document.getElementById("city-name");
const  coConcentration = document.getElementById("co-concentration");

console.log(city);





let qualityData = '';

const consoleData = () => {
    cityName.innerHTML=city;
    console.log(qualityData.CO.concentration);
    coConcentration.innerHTML = `Concentration: ${qualityData.CO.concentration}`;
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
        console.log(qualityData);
        consoleData();

    })
    .catch(error => {
        console.error('Error:', error);
    });

    