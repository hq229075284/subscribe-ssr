
const { stringToBase64, getSsrLink } = require('./util')

const http = require('http')
const fs = require('fs')
const url = require('url')
const server = http.createServer((request, response) => {
    if (url.parse(request.url).pathname === "/subscribe") {
        response.writeHead(200, {
            'Content-Type': 'text/plain'
        })
        // real-time
        const config = require('/etc/shadowsocksr/user-config.json')
        response.end(stringToBase64(getSsrLink(config)))
    } else {
        response.writeHead(500)
        response.end('url解析错误')
    }
})

server.listen(3000, function () {
    console.log('listen at 3000')
})