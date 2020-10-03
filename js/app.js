// let myapp = L.map('mapid').setView([51.505, -0.09], 13);
let myapp = L.map('mapid').setView([37.8, -96], 4);
import { churches } from './churches.js';
import { states } from './states.js';
import { statesData } from './statesData.js';

L.tileLayer(
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoia2FyYW4tYXBlaXJvbiIsImEiOiJjanJvaTd1anAxMWl3NDRtZnpzMDlkNjlrIn0.KyY3Ta2anTCTVFqRw5mgnA',
  {
    attribution: `Map data  &copy; <a href="https://www.ngex.com/">NGEX</a>
    &
      &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,
      <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>,
      Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
    maxZoom: 18,
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      'pk.eyJ1Ijoia2FyYW4tYXBlaXJvbiIsImEiOiJjanJvaTd1anAxMWl3NDRtZnpzMDlkNjlrIn0.KyY3Ta2anTCTVFqw5mgnA',
  }
).addTo(myapp);
const churchMap = new Map();

function mapData() {
  for (let c of churches) {
    for (let state of states) {
      if (c.address.toLowerCase().includes(state.toLowerCase())) {
        if (churchMap.has(state)) {
          churchMap.set(state, churchMap.get(state) + 1);
          break;
        } else {
          churchMap.set(state, 1);
          break;
        }
      }
    }
  }
}
function transformData() {
  for (const feature of statesData.features) {
    if (churchMap.has(feature.properties.name)) {
      feature.properties.density = churchMap.get(feature.properties.name);
    } else {
      feature.properties.density = 0;
    }
  }
}
let geojson = null;
function addMarkers() {
  //   L.geoJson(statesData, { style: style }).addTo(myapp);
  geojson = L.geoJson(statesData, {
    style: style,
    onEachFeature: onEachFeature,
  }).addTo(myapp);
}

function getColor(d) {
  return d > 1000
    ? '#650909'
    : d > 500
    ? '#99000d'
    : d > 200
    ? '#b10026'
    : d > 100
    ? '#e31a1c'
    : d > 50
    ? '#FD8D3C'
    : d > 20
    ? '#fd8d3c'
    : d > 10
    ? '#feb24c'
    : '#ffeda0';
}

/*function getColor(d) {
  return d > 1000
    ? '#800026'
    : d > 500
    ? '#BD0026'
    : d > 200
    ? '#E31A1C'
    : d > 100
    ? '#FC4E2A'
    : d > 50
    ? '#FD8D3C'
    : d > 20
    ? '#FEB24C'
    : d > 10
    ? '#FED976'
    : '#FFEDA0';
}*/
function style(feature) {
  return {
    fillColor: getColor(feature.properties.density),
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  };
}

function highlightFeature(e) {
  var layer = e.target;

  layer.setStyle({
    weight: 5,
    color: '#666',
    dashArray: '',
    fillOpacity: 0.7,
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }
  info.update(layer.feature.properties);
}
function resetHighlight(e) {
  console.log('mouseout');
  geojson.resetStyle(e.target);
  info.update();
}
function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature,
  });
}

var info = L.control();

info.onAdd = function (myapp) {
  this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
  this.update();
  return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
  this._div.innerHTML =
    '<h4>Number of Churches</h4>' +
    (props
      ? '<b>' +
        props.name +
        '</b><br />' +
        props.density +
        ' Churches / mi<sup>2</sup>'
      : 'Hover over a state');
};

info.addTo(myapp);

var legend = L.control({ position: 'bottomright' });

legend.onAdd = function (myapp) {
  var div = L.DomUtil.create('div', 'info legend'),
    grades = [0, 10, 20, 50, 100, 200, 500, 1000],
    labels = [];

  // loop through our density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      '<i style="background:' +
      getColor(grades[i] + 1) +
      '"></i> ' +
      grades[i] +
      (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
  }

  return div;
};

legend.addTo(myapp);

mapData();
transformData();
addMarkers();
