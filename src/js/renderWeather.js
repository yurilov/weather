import { refs } from './getRefs';
import { setSkycons } from './setSkycons';
export function renderWeather({ main, name, weather }) {
  console.log(...weather);
  refs.tempDegree.textContent = Math.round(main.temp);
  refs.locationCity.textContent = name;
  refs.tempDescr.textContent = weather[0].main;
  refs.icon.src = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  console.log(weather[0].description)
  setSkycons(weather[0].description);
}
