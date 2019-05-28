const http = require('http')

const httpUtils = require('./http-utils')

const server = http.createServer()

server.on('request', (request, response) => {
    console.log('Url:', request.url)
    console.log('Method:', request.method)

    httpUtils.handleStaticRequest(request, response)
})

server.listen(8080, () => {
    console.log('Server running on port 8080.')
})

