import { refs } from './getRefs';
export function renderWeather({ main, name, weather }) {
  console.log(...weather);
  refs.tempDegree.textContent = Math.round(main.temp);
  refs.locationCity.textContent = name;
  refs.tempDescr.textContent = weather[0].description;
  refs.icon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
}
