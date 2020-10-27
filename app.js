//
//global scope

//assign accessToken key with value of the API token to mapboxgl Object
mapboxgl.accessToken = 'pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w';

//declare a map object to instantiate the mapbox map
let map = new mapboxgl.Map({
  container: 'map',
  zoom: 2,
  center: [-95.7128906, 37.0902405],
  style: 'mapbox://styles/mapbox/satellite-v9'
});

//get and location of user and render it to the mapboxgl object
map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true
}));

//render data to map via renderData function
//renderData function credits Mapbox: https://docs.mapbox.com/help/tutorials/custom-markers-gl-js/
const renderData = (data) => {

  data.forEach((marker) => {
    // create a HTML element for each feature
    let el = document.createElement('div');
    el.className = 'marker';
    //make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
      .setLngLat(marker.geometry.coordinates)
      .setPopup(new mapboxgl.Popup({ offset: 30 })// add popups
        .setHTML('<h3>' + marker.text + '</h3><p>' + marker.place_name + '</p>')) //add popups
      .addTo(map);
  });
}

//endpoints

//
//rivers
//initiate ajax request for river query
let getRiversData = async () => {

  const riversURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/river.json?access_token=pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w&cachebuster=1594649638800&autocomplete=false&country=us&types=poi&limit=10"


  try {
    const response = await axios.get(riversURL)
    //console.log(response.data.features)

    //targeting the data in response
    const riversData = response.data.features
    console.log("River Data", riversData)
    renderData(riversData)

  } catch (error) {
    console.log(`Error calling getRiversData: ${error}`)
  }
}

//when the #rivers button is clicked dynamically render the riversData to the map Object
clickRiversBttn = document.querySelector('#rivers')
clickRiversBttn.addEventListener('click', getRiversData)

//
//lakes
//initiate ajax request for lakes query
let getLakesData = async () => {

  const lakesURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/lake.json?access_token=pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w&cachebuster=1594648805908&autocomplete=false&country=us&types=poi&limit=10"

  try {
    const response = await axios.get(lakesURL)

    //targeting the data in response
    const lakesData = response.data.features
    console.log("Lake Data", lakesData)
    renderData(lakesData)

  } catch (error) {
    console.log(`Error calling getLakesData: ${error}`)
  }
}

//when the #lakes button is clicked dynamically render the lakessData to the map Object
const clickLakesBttn = document.querySelector('#lakes')
clickLakesBttn.addEventListener('click', getLakesData)

//
//waterfalls
//initiate ajax request for waterfalls query
let getWaterfallsData = async () => {

  const waterfallsURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/waterfall.json?access_token=pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w&cachebuster=1594649003248&autocomplete=false&country=us&types=poi&limit=10"

  try {
    const response = await axios.get(waterfallsURL)

    //targeting the data in response
    const waterfallsData = response.data.features
    console.log("Waterfalls Data", waterfallsData)
    renderData(waterfallsData)

  } catch (error) {
    console.log(`Error calling getWaterfallsData: ${error}`)
  }
}

//when the #waterfalls button is clicked dynamically render the waterfallsData to the map Object
const waterfallsBttn = document.querySelector('#waterfalls')
waterfallsBttn.addEventListener('click', getWaterfallsData)