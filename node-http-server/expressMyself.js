const http = require('http')
const httpUtils = require('./http-utils')

const create = () => {

    const server = http.createServer()

    server.on('request', (request, response) => {
        console.log('Url:', request.url)
        console.log('Method:', request.method)

        httpUtils.handleStaticRequest(request, response)
    })

    const start = () => {
        server.listen(8080, () => {
            console.log('Server running on port 8080.')
        }) 
    }

    const get = (url, eventHandler) => {
        // TODO: register
    }

    const post = (url, eventHandler) => {
        // TODO: register
    }

    return {
        start,
        get,
        post
    }
}

module.exports = create