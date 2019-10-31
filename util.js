function stringToBase64(str) {
    var base64Str = Buffer.from(str).toString('base64');
    return base64Str;
}
function base64ToString(base64Str) {
    var str = Buffer.from(base64Str, 'base64').toString();
    return str;
}
function getSsrLink(config) {
    const ip = require('os').networkInterfaces().eth0[0].address
    const port = config.server_port
    const protocol = config.protocol
    const encrypt = config.method
    const mixin = 'http_post'
    const pwd = config.password
    const link = `ssr://${stringToBase64(`${ip}:${port}:${protocol}:${encrypt}:${mixin}:${stringToBase64(pwd).replace(/=/g, '')}`)}`
    console.log(link)
    return link
}

module.exports.stringToBase64 = stringToBase64
module.exports.base64ToString = base64ToString
module.exports.getSsrLink = getSsrLink