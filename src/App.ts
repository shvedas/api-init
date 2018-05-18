import * as express from "express";
import ENV from "app-env";
import response from "app-response";
import * as bodyParser from "body-parser";
import v1 from "./app/v1";

class App {
  public app: express.Application;
  private env: any;

  constructor () {
    this.env = ENV();
    this.app = express();

    this.config();
    this.mountRoutes();
  }

  private mountRoutes (): void {
    this.app.use("/v1", v1);
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(response);
  }

  public getApp(): express.Application {
    return this.app;
  }

  public getPort() {
    return this.normalizePort( this.env.get("api:port") );
  }

  private normalizePort(val: number|string): number {
      return (typeof val === "string") ? parseInt(val, 10) : val;
  }

}

export default new App();