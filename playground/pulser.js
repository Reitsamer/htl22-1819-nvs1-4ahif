const EventEmitter = require('events');

class Pulser extends EventEmitter {
    start() {
        setInterval(() => {
           this.emit('pulse', 4711, 'hello world', { firstname: 'dennis '}) 
        }, 1000)
    }
}

module.exports = Pulser