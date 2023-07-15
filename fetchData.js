
let urlParams = new URLSearchParams(window.location.search);
let city = urlParams.get('city');

console.log(city);


let url = 'https://api.api-ninjas.com/v1/airquality?city=' + city;


let qualityData = '';

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

    })
    .catch(error => {
        console.error('Error:', error);
    });

    