import server from "./App";


server.getApp().listen(server.getPort(), (err: Error) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${server.getPort()}`);
});
