mapboxgl.accessToken = 'pk.eyJ1IjoicXV2YXRlIiwiYSI6ImNrMTJkdTM5bzAxcHEzYnF5N3kzcnFrYWwifQ.iRgmlilY-UGI3eXgym29iw';
var map = new mapboxgl.Map({
container: 'map', // container id
style: 'mapbox://styles/mapbox/dark-v10', //hosted style id
center: [-2.242631, 53.480759], // starting position
zoom: 14 // starting zoom
});
  
map.scrollZoom.disable();