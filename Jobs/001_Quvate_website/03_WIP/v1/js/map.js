mapboxgl.accessToken = 'pk.eyJ1IjoicXV2YXRlIiwiYSI6ImNrMTJkdTM5bzAxcHEzYnF5N3kzcnFrYWwifQ.iRgmlilY-UGI3eXgym29iw';
/* Map: This represents the map on the page. */
var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/dark-v10",
    zoom: 13.58,
    center: [-2.2316, 53.479]
});

map.on("load", function () {
    /* Image: An image is loaded and added to the map. */
    map.loadImage("img/cursor.png", function (error, image) {
        if (error) throw error;
        map.addImage("custom-marker", image);
        /* Style layer: A style layer ties together the source and image and specifies how they are displayed on the map. */
        map.addLayer({
            id: "markers",
            type: "symbol",
            /* Source: A data source specifies the geographic coordinate where the image marker gets placed. */
            source: {
                type: "geojson",
                data: {
                    type: 'FeatureCollection',
                    features: [{
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: "Point",
                            coordinates: [-2.2311, 53.4792]
                        }
                    }]
                }
            },
            layout: {
                "icon-image": "custom-marker",
            }
        });
    });
});
map.scrollZoom.disable();