const request = require('request')

const geocode = (location, callback) => {
    const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'
                        + location 
                        + '.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

    request({ url: geocodeURL, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to service.')
            return
        }

        if (response.body.features.length === 0) {
            callback('Unable to find location.')
            return
        }

        console.log(response.body.features[0].place_name)

        const longitude = response.body.features[0].center[0]
        const latitude = response.body.features[0].center[1]

        callback(undefined, {
            longitude,
            latitude
        })
    })
}

module.exports = {
    geocode
}