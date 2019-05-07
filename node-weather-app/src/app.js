const request = require('request')

const forecast = require('./forecast')
const geocode = require('./geocode')

forecast(37.8267, -122.4233, (error, data) => {
    console.log(error)
    console.log(data)
})

geocode('Vienna', (error, data) => {
    console.log(error)
    console.log(data)
})

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/XXXLos%20Angeles.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

