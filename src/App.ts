import * as express from 'express';
import * as ENV from 'app-env';
import * as bodyParser from 'body-parser';

class App {
  public app: express.Application;
  private env;

  constructor () {
    this.env = ENV();
    this.app = express();
    this.mountRoutes()

    console.log('env', this.env.get('api'))
  }
  
  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World!'
      })
    })
    this.app.use('/', router)
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

}

export default new App().app;
