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