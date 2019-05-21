const http = require('http')
const fs = require('fs')

const contentTypes = {
    'html': 'text/html',
    'js': 'application/javascript',
    'css': 'text/css',
    'ico': 'image/x-icon'
}

const server = http.createServer()

server.on('request', (request, response) => {
    console.log('Url:', request.url)
    console.log('Method:', request.method)

    const fileName = getFilename(request)
    const fileExtension = getFileExtension(fileName)
    const contentType = getContentType(fileExtension)

    response.statusCode = 200
    response.setHeader('Content-Type', contentType)
    const content = fs.readFileSync(fileName)
    response.write(content)
    response.end()
})

server.listen(8080, () => {
    console.log('Server running on port 8080.')
})

const getFilename = (request) => {
    var filename = request.url
    if (filename === '/')
        filename = '/index.html'

    return 'public' + filename
}

const getFileExtension = (filename) => {
    var parts = filename.split('.')
    return parts[parts.length - 1]
}

const getContentType = (extension) => {
    return contentTypes[extension]
}