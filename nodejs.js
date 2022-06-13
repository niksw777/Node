const os = require('os')
const User = require('./user.js')
const greeting = require('./greeting')

let eugene = new User('Eugene', 27)
eugene.sayHi()

let userName = os.userInfo().username

console.log(`Дата запроса: ${greeting.date}`)
console.log(greeting.getMessage(userName))


// const http = require('http')
// http.createServer(function (request, response) { 
//     response.end("Hello NodeJS")
// })
// .listen(3000, '127.0.0.1', function() {
//     console.log('Сервер началм прослушивание запросов на порту 3000')
// })

// const greeting = require('./greeting')