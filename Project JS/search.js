console.log("I'm here")


document.getElementById('search-button').addEventListener('click', function() {
    let searchValue = document.getElementById('search-input').value;
    let city = '';

    city = searchValue.trim();

    var url = '../Project HTML/results.html?city=' + encodeURIComponent(city);

    console.log(city);
    console.log(url);

    window.location.href = url;
});