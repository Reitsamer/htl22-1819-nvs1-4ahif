const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ace7497ac9e8602309af76a56045a170/' 
                    + latitude + ',' 
                    + longitude 
                    + '?units=si&lang=de'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to service.')
            return
        }

        if (response.body.error) {
            callback('Unable to find location.')
            return
        }

        const body = response.body

        const summary = response.body.daily.data[0].summary
        const temperature = response.body.currently.temperature

        const data = {
            summary,
            temperature,
            description: `Die aktuelle Temperatur beträgt ${temperature} Grad.`
        }

        callback(undefined, data)
    })
}

module.exports = {
    forecast
}