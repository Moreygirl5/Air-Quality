console.log("I'm here")
//Test console log

document.getElementById('search-button').addEventListener('click', function() {
    let searchValue = document.getElementById('search-input').value;
    // gets the value that is in the input when the search button is clicked
    let city = '';
    city = searchValue.trim();
    // empty city variable created, then filled with the user input. the .trim removes any extra spaces. 
    var url = '../Project HTML/results.html?city=' + encodeURIComponent(city);
    // this adds the city parameter to our results page as a url parameter. EncodeURIComponent turns all characters into their UTF-8 encoded value so they work in a url.
    console.log(city);
    console.log(url);
    //more test console logs
    window.location.href = url;
    //automatically goes to the url we saved as a variable earlier (our results page with the appropriate url parameter)
});