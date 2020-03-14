// const axios = require('axios').default;
const searchBtn = document.querySelector("button")
let city_name = document.querySelector("#city_name")
let weather = document.querySelector("#weather")
let rain = document.querySelector("#rain")
let wind = document.querySelector("#weather")
let city = document.querySelector("#city")
let cloud = document.querySelector("#cloud")

searchBtn.addEventListener('click', onSearchBtn)

async function onSearchBtn() {
    city_name = city_name.value
    const apikey = "2ceece92f41c6a6e3f1e98f3e1db56f2"
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${apikey}`
    try {
        const response = await axios.get(api);
        console.log(response.data);
        handleData(response.data)
    } catch (error) {
        console.error(error);
    }
}

function handleData(data) {
    city.textContent = "City name:  " + data.name
    weather.textContent = `Weather`
    let ul = document.createElement("ul")
    let li
    for (let key of Object.keys(data.weather[0])) {
        li = document.createElement("li")
        li.textContent = `${key}:  ${data.weather[0][key]}`
        ul.appendChild(li)
    }
    for (let key of Object.keys(data.main)) {
        li = document.createElement("li")
        li.textContent = `${key}:  ${data.main[key]}`
        ul.appendChild(li)
    }
    weather.appendChild(ul)

    cloud.textContent = "Cloudiness: " + data.clouds.all + "%"
}