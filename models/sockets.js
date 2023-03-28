class Sockets {
  constructor(io) {
    this.io = io

    this.socketEvents()
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      // socket es el cliente que se conecta al websocket
      // socket.emit(nombre del evento, payload)
      socket.on("mensaje-to-server", (data) => {
        console.log(data)

        this.io.emit("mensaje-from-server", data)
      })
    })
  }
}

module.exports = Sockets
