const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=46.75&lon=-71.24&units=imperial&appid=1961a74e36813368e84efb25d512b68d';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('width', '30px');
    weatherIcon.setAttribute('height', '30px');
    captionDesc.textContent = `${desc}`;
}



const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.75&lon=-71.24&units=imperial&appid=33725e6989578392fee434ee33fa43f1'

async function apiFetch2() {
    try {
        const response = await fetch(url2);
        if (response.ok) {
        const data2 = await response.json();
        // console.log (data2);
        showWeather(data2);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch2();


function showWeather(data) {
    const forecastContainer = document.querySelector('#forecast-container');
    forecastContainer.innerHTML = '';

    const forecastData = data.list;
    const currentDate = new Date();
    const nextDays = forecastData.filter(day => {
        const forecastDate = new Date(day.dt_txt);
        const timeDifference = forecastDate.getTime() - currentDate.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);
        return daysDifference >= 0 && daysDifference < 3;
    });

    nextDays.forEach(day => {
        const dayContainer = document.createElement('span');
        dayContainer.classList.add('forecast-day');

        const forecastDate = new Date(day.dt_txt);

        const dayName = forecastDate.toLocaleDateString('en-US', { weekday: 'long' });
        const monthName = forecastDate.toLocaleDateString('en-US', { month: 'long' });
        const yearNumber = forecastDate.getFullYear();

        const hours = forecastDate.getHours();
        const minutes = forecastDate.getMinutes();

        const formattedDate = document.createElement('h4');
        formattedDate.textContent = `${dayName}, ${monthName} ${forecastDate.getDate()}, ${yearNumber} ${hours}:${minutes > 9 ? minutes : '0' + minutes}`;

        const dayTemp = document.createElement('h4');
        dayTemp.innerHTML = `${day.main.temp}&deg;F`;

        const dayIcon = document.createElement('img');
        const iconSrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
        const iconDesc = day.weather[0].description;
        dayIcon.setAttribute('src', iconSrc);
        dayIcon.setAttribute('alt', iconDesc);
        dayIcon.setAttribute('width', '50px');
        dayIcon.setAttribute('height', '50px');

        const description = document.createElement('h4');
        description.textContent = `${iconDesc}`;

        dayContainer.appendChild(formattedDate);
        dayContainer.appendChild(dayTemp);
        dayContainer.appendChild(dayIcon);
        dayContainer.appendChild(description);

        forecastContainer.appendChild(dayContainer);
    });
}