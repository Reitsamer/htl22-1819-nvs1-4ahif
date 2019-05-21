const Pulser = require('./pulser')

const pulser = new Pulser()

pulser.on('pulse', (zahl, ...whatever) => {
    console.log(`${new Date()} >>> pulse received.`)
    console.log(zahl)
    console.log(whatever)
})

pulser.start()
