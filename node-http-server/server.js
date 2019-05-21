const http = require('http')

const server = http.createServer()

server.on('request', (request, response) => {
    console.log('Url:', request.url)
    console.log('Method:', request.method)

    response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    response.write('<h1>Hello world!</h1>')
    response.end()
})

server.listen(8080, () => {
    console.log('Server running on port 8080.')
})