import L from 'leaflet';
import icon from './img/marker.png';

const iconPerson = new L.Icon({
    iconUrl: icon,
    // iconRetinaUrl: require('./img/marker.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { iconPerson };