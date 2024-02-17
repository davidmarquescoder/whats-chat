const { WebSocketServer } = require('ws');
const dotenv = require('dotenv').config()

console.clear()
console.log(`⚡ Server on port ${process.env.PORT}`)

// Caso a variável de ambiente não tenha nenhum valor, ele utilizará a porta 8080.
const wss = new WebSocketServer({port: process.env.PORT || 8080})

wss.on('connection', (ws) => {
    ws.on('error', console.error)

    ws.on('message', (data) => {
        // Enviando a mensagem recebida, para todos os clientes conectados.
        wss.clients.forEach(
            (client) => client.send(data.toString())
            )
    })
})