
const { stringToBase64, base64ToString } = require('./util')

const str = ''
const decryptStr1 = base64ToString(str)
console.log(decryptStr1)

const password_base64 = decryptStr1.split(':')[5]
console.log('password_base64:', password_base64)

const decryptStr2 = base64ToString(password_base64)
console.log(decryptStr2)
