// Preloader ------------------
function hideMy(showElement){
    setTimeout(() => {
        showElement.style.opacity = '0';
        showElement.style.zIndex = '-1';
    }, 1000);
}

document.addEventListener("DOMContentLoaded", () => {
    let preloader = document.querySelector('.preloader');

    let preloaderGo = new Promise((resolve, reject) => {
        resolve(hideMy(preloader));
    });

    preloaderGo.then(() => {
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 1300);
    });
});

// API waethers ------------------
var url = 'https://api.openweathermap.org/data/2.5/weather',
    key = '19976e75c6f7be206222768e8b9d370a';

var searchValue = document.querySelector('#searchCity'),
    searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener("click", () => {
    locationCity = document.querySelector('#searchCity').value;

    if(locationCity.length != " "){
        fetch(url + '?q=' + locationCity + '&units=metric&appid=' + key)
            .then(response => response.json())
            .then(data => {
                var codeCountry = document.querySelector('#code'),
                    cityName = document.querySelector('#cityName'),
                    tempCity = document.querySelector('#tempCity'),
                    weather = document.querySelector('#weather');

                    document.querySelector('.container-main .column .card').style.transform = "rotateY(360deg)";

                    cityName.innerHTML = locationCity + ",";
                    codeCountry.innerHTML = data.sys.country;
                    tempCity.innerHTML = Math.round(data.main.temp) + " c";
                    weather.innerHTML = data.weather[0].main;
            })
            .then(document.querySelector('.container-main .column .card').style.transform = "rotateY(0deg)")
        .catch(err => allert("Error!("))
    }else{
        alert("Write city name!")
    }
});