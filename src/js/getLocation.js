import { refs } from './getRefs';
import { fetchWeather } from './weather';
import { renderWeather } from './renderWeather';

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const long = position.coords.longitude;
    console.log('long', long);
    const lat = position.coords.latitude;
    console.log('lat', lat);
    fetchWeather(long, lat).then(renderWeather).catch(console.error);
  });
}
