import * as express from 'express'

class App {
  public express;

  public someValue: string = '1'

  constructor () {
    this.express = express()
    this.mountRoutes()

    this.someValue = '2';
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express
