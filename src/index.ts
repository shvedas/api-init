import server from "./App";
import * as http from "http";


// const server.getApp().listen(server.getPort());
const httpServer = http.createServer(server.getApp());

httpServer.listen(server.getPort())
  .on("error", onError)
  .on("listening", onListening);

function onListening() {
  const addr = httpServer.address();
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
  console.log("Listening on " + bind);
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof server.getPort() === "string"
    ? "Pipe " + server.getPort()
    : "Port " + server.getPort();

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

process.on("SIGTERM", async () => {
  console.log("Starting graceful shutdown");
  process.exit(0);
});
