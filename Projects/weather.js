const button = document.getElementById("search-button");
const city = document.getElementById("city");

const time = document.getElementById("time");
const temp = document.getElementById("temp");
const feel = document.getElementById("feel");
const condition = document.getElementById("condition");
const prep = document.getElementById("prep");
const humid = document.getElementById("humid");
const windSpeed = document.getElementById("windSpeed");


async function getData (cityName) {
    const promise = await fetch (
        `http://api.weatherapi.com/v1/current.json?key= e51064633c484c468ce92511240903 &q=${cityName}&aqi=yes`
    );
    return await promise.json();
}

button.addEventListener("click" , async ()=> {
    const result = await getData(city.value)
    console.log(result)
    time.innerText = result.location.localtime.slice(11);
    temp.innerText = result.current.temp_c + '°';
    feel.innerText = result.current.feelslike_c + '°';
    prep.innerText = result.current.precip_mm + '%';
    condition.innerText = result.current.condition.text;
    humid.innerText = result.current.humidity + '%';
    windSpeed.innerText = result.current.wind_kph + 'km/h';
});

// http://api.weatherapi.com/v1/current.json?key= e51064633c484c468ce92511240903 &q=London&aqi=yes
