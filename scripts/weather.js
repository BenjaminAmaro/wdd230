
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
    captionDesc.textContent = `${desc}`;
}

// const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=46.75&lon=-71.24&units=imperial&appid=33725e6989578392fee434ee33fa43f1'

// async function apiFetch2() {
//     try {
//         const response = await fetch(url2);
//         if (response.ok) {
//         const data = await response.json();
//         console.log (data);
//         displayResults2(data);
//         } else {
//             throw Error(await response.text());
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// apiFetch2();

// function displayResults2(data) {
//     for (let i = 1; i <= 3; i++) {
//         const forecast = data.daily[i];
//         const forecastDate = new Date(forecast.dt * 1000); // Convert timestamp to date
//         const day = forecastDate.toLocaleDateString('en-US', { weekday: 'short' });

//         const forecastElement = document.createElement('div');
//         forecastElement.classList.add('forecast-item');
//         forecastElement.innerHTML = `
//             <p>${day}</p>
//             <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="${forecast.weather[0].description}">
//             <p>${forecast.temp.day}&deg;F</p>
//         `;

//         forecastContainer.appendChild(forecastElement);
//     }
// }
