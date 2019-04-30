const request = require('request')

const url = 'https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/37.8267,-122.4233?units=si&lang=de'

request( { url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to service.')
        return
    }

    if (response.body.error) {
        console.log('Unable to find location.')
        return
    }

    const body = response.body

    const summary = response.body.daily.data[0].summary
    const temperature = response.body.currently.temperature

    console.log(summary)
    console.log(`Die aktuelle Temperatur beträgt ${temperature} Grad.`)
})


const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

request( { url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to service.')
        return
    }

    if (response.body.error) {
        console.log('Unable to find location.')
        return
    }

    console.log(response.body.features[0].place_name)

    const longitude = response.body.features[0].center[0]
    const latitude = response.body.features[0].center[1]

    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
})