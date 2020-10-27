# swimmingHole
Navigation app using the Mapbox Geocoding API to query 'lakes', 'waterfalls', and 'rivers' in the United States. 

# Project Overview

## Project Name

Swimming Hole

## Project Description
Uses the Mapbox Geocoding API to return query results for 'lakes', 'waterfalls', and 'rivers' in the United States. 

Project bi-line: Near your hood or on the road, Swimming Hole is your local guide to lakes, waterfalls, and swim spots across the continental USA. 

## API and Data Sample

[Mapbox API documentation](https://docs.mapbox.com/api/) 
|| [Mapbox Geocoding API documentation](https://docs.mapbox.com/api/search/#geocoding)
|| [Mapbox Maps API documentation](https://docs.mapbox.com/api/maps/)
|| [Retrieve API Endpoints Using Mapbox Geocoding Playground](https://docs.mapbox.com/search-playground/#{%22url%22:%22%22,%22index%22:%22mapbox.places%22,%22approx%22:true,%22staging%22:false,%22onCountry%22:true,%22onType%22:true,%22onProximity%22:false,%22onBBOX%22:false,%22onLimit%22:false,%22onLanguage%22:false,%22countries%22:[],%22proximity%22:%22%22,%22typeToggle%22:{%22country%22:false,%22region%22:false,%22district%22:false,%22postcode%22:false,%22locality%22:false,%22place%22:false,%22neighborhood%22:false,%22address%22:false,%22poi%22:true},%22types%22:[%22poi%22],%22bbox%22:%22%22,%22limit%22:%22%22,%22autocomplete%22:false,%22languages%22:[],%22languageStrict%22:false,%22onDebug%22:false,%22selectedLayer%22:%22%22,%22debugClick%22:{},%22localsearch%22:false,%22query%22:%22%22})
|| [Mapbox Markers and Controls](https://docs.mapbox.com/mapbox-gl-js/api/markers/#geolocatecontrol)
|| [Mapbox Rate Limits](https://docs.mapbox.com/api/#rate-limits)

[Mapbox Geocoding API](https://api.mapbox.com/geocoding/v5/mapbox.places/{search_text}{country="ISO_3166-2:US"}.json?access_token=pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w)
|| [Mapbox Lakes Query Endpoint](https://api.mapbox.com/geocoding/v5/mapbox.places/lakes%20.json?access_token=pk.eyJ1IjoicmFtaXphY2thcnlzaGFtaXIiLCJhIjoiY2tjajRzMXA5MWMyczJybnFoMzB0cGFveiJ9.dJGkd1gcu3cPQ_l46OQT7w&cachebuster=1594645173739&autocomplete=false&types=poi)

```json
{
    "type": "FeatureCollection",
    "query": [
        "search",
        "text",
        "country",
        "iso",
        "3166-2",
        "us"
    ],
    "features": [{
                "id": "neighborhood.2106344",
                "type": "Feature",
                "place_type": [
                    "neighborhood"
                ],
                "relevance": 0.493333,
                "properties": {},
                "text": "Country",
                "place_name": "Country, Antioch, Tennessee 37013, United States",
                "matching_place_name": "Country, Antioch, Tennessee 37013, US",
                "bbox": [
                    -86.606888,
                    36.071424,
                    -86.593982,
                    36.082053
                ],
                "center": [
                    -86.6,
                    36.08
                ],
                "geometry": {
                    "type": "Point",
                    "coordinates": [
                        -86.6,
                        36.08
                    ]
                },
````
## Wireframes

[Wireframe for iphone X/XS/11 Pro](https://xd.adobe.com/view/cb72ca0d-a5c0-4b2b-b5f9-abb3dc365a92-9e21/) ||
[Wireframe for Desktop 1280](https://xd.adobe.com/view/142ba626-1035-4ea8-b2dc-35788fc44650-4178/)

### MVP/PostMVP

#### MVP 

- Implement Mapbox API connection with a public token
- Implement Mapbox API enpoints to retrieve data for rivers, lakes, and waterfalls 
- Apply advanced CSS using media-queries

#### Post-MVP  

- Apply navigational functionality to be able to use queries like 'river near me' and 'swimming hole near me' 
- Add an API endpoint using a cutomized secret (sk) API token to include curated swimming spots. The secret token can be accessed as a premium feature
- Add a favorite swimnming spots feature
- [Design a customized map using Mapbox Studios ](https://studio.mapbox.com/)
 


## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|July 10-12| Prompt / Wireframes / Priority Matrix / Timeframes | Complete
|July 13| Project Approval | Complete
|July 13| HTML and CSS Structure | Complete
|July 14| Code fetching queries for Rivers, Lakes, and Waterfalls from API| Complete
|July 15| Test code functionality using buttons; general search queries (like 'french broad river') and specific search queries (like 'french broad river swimming holes'| Complete
|July 15| MVP Completed| Complete
|July 16| Post-MVP | Incomplete
|July 17| Presentations | Incomplete

## Priority Matrix

[Swimming Hole Project Proposal: Priority Matrix](https://xd.adobe.com/view/3b023fe4-fe1a-4e3f-8f37-4ac6d64f6818-6e51/)

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Prompt / Wireframes / Priority Matrix / Timeframes | H | 8hrs| 6hrs | 6hrs |
| Implement Mapbox API connection with a public token using async function | H | 6hrs| 1hrs | 1hr |
| Create and implement API enpoint to retrieve data for rivers, lakes, and waterfalls using async function | H | 6hrs| 2hrs | 2hrs |
| Initialize javascript callback functions | H | 6hrs| 8hrs | 8hrs |
| Basic HTML | H | 2hrs| 3hrs | 3hrs |
| Basic CSS | H | 2hrs| 4hrs | 4hrs |
| Advanced CSS | H | 3hrs| 8hrs | 6hrs |
| MVP: Add navigational functionality| H | 5hrs| 1hrs | --hrs |
| MVP: Add a second API endpoint using a cutomized secret (sk) API token| H | 4hrs| --hrs | --hrs |
| MVP: Add a favorite swimnming spots feature | H | 5hrs| --hrs | --hrs |
| MVP: Design a customized map using Mapbox Studios | H | 6hrs| --hrs | --hrs |
| Total | H | 53hrs| 33hrs | 32hrs |

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  

```
//declare a map object to instantiate the mapbox map
let map = new mapboxgl.Map({
	container: 'map',
	zoom: 2,
	center: [-95.7128906, 37.0902405],
	style: 'mapbox://styles/mapbox/satellite-v9'
});

//
//rivers
//initiate ajax request for river query
let getRiversData = async() => {

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
```
## Change Log
### -Removed Search Bar: More problematic than anticipated/ strong possibilty of jeopordizing project schedule; also unneccessary for MVP as results returned by buttons turned out to be the core of functionality for MVP.

### -Realized importance of breakpoints for MVP; finetuned breakpoints from the 2 originally planned (1 for mobile; 1 for desktop) to accomodate all 11 mobile devices included in Google Chrome's Developer tools.