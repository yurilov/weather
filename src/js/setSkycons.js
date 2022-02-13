import { Skycons } from './skycons';
import { refs } from './getRefs';

const optionsIcons = {
    'clear sky': 'CLEAR_DAY',
    'few clouds': 'PARTLY_CLOUDY_DAY',
    'scattered clouds': 'CLOUDY',
    'rain': 'RAIN',
    'snow': 'SNOW',
    'mist': 'FOG',
}
// //'clear sky', 'few clouds','scattered clouds',"broken clouds","shower rain",'rain','thunderstorm','snow','mist'
// clear-day,clear-night,partly-cloudy-day,partly-cloudy-night,cloudy,rain,sleet,snow,wind,fog


export const setSkycons = function (icon) {
    const iconsDescriptionsSky = optionsIcons[icon]
    const skycons = new Skycons({ "color": "pink" });
    skycons.set(refs.skyIcon, Skycons[iconsDescriptionsSky]);
    skycons.play();

}