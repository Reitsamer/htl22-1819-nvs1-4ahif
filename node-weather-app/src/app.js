const request = require('request')

const { forecast } = require('./forecast')
const { geocode } = require('./geocode')

const location = process.argv[2]

geocode(location, (error, { latitude, longitude }) => {
    if (error) {
        console.log('Unable to fetch data.')
        return
    }
    
    // console.log(data)
    forecast(latitude, longitude, (error, data) => {
        if (error) {
            console.log('Unable to fetch data.')
            return
        }
    
        console.log(data)
    })
})




// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/XXXLos%20Angeles.json?access_token=pk.eyJ1IjoicmVpdCIsImEiOiJjanVkM3F5aGUwaHk1NGRxcDZrcjlzaXdkIn0.bQG57GOwvmpb_41o5Kge_Q'

