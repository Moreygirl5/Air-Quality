console.log("I'm here")


document.getElementById('searchButton').addEventListener('click', function() {
    let searchValue = document.getElementById('searchInput').value;
    let city = '';

    city = searchValue.trim();

    var url = '/results.html?city=' + encodeURIComponent(city);

    console.log(city);
    console.log(url);

    window.location.href = url;
});