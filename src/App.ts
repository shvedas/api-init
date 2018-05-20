import * as express from "express";
import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as http from "http";
import * as helmet from "helmet";
import ENV from "app-env";
import response from "app-response";
import error from "app-error";
import v1 from "./app/v1";

class App {
  public app: express.Application;
  private env: any;

  constructor () {
    this.env = ENV();
    this.app = express();

    this.config();
    this.mountRoutes();
    this.app.use(this.set404);
    this.app.use(this.setErrors);
    this.app.set("port", this.getPort());
  }

  private mountRoutes (): void {
    this.app.get("/", (req: express.Request, res: express.Response) => {
      res.render(undefined, "API-INIT");
    });

    this.app.use("/v1", v1);
  }

  private config(): void {
    this.app.set("json spaces", this.env.get("express:json_spaces") || 2);
    this.app.use(bodyParser.json({limit: this.env.get("express:file_limit") || "5mb" }));
    this.app.use(bodyParser.urlencoded({ extended: false, limit: this.env.get("express:file_limit") || "5mb" }));
    this.app.use( compression() );
    this.app.use(helmet());
    this.app.use(this.setCors);
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

  private setCors(req: express.Request, res: express.Response, next: express.NextFunction) {
    const env = ENV();
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", env.get("express:allow_methods") || "*");
    res.header("Access-Control-Allow-Headers", env.get("express:allow_headers") || "*");

    next();
  }

  private set404(req: express.Request, res: express.Response, next: express.NextFunction) {
    next(error(404, "Not Found"));
  }

  private setErrors(err, req: express.Request, res: express.Response, next: express.NextFunction) {
    function asStatusCode( value ) {
      if (!value) return;
      if (typeof value === "number") return value;
      if (typeof value === "string") {
        const v = parseInt(value, 10);
        if (v && v >= 400 && v < 600) return v;
      }
      return;
    }
    const status = asStatusCode(err.code || err.status || err.statusCode) || 500;
    const message = err.message || http.STATUS_CODES[status] || http.STATUS_CODES[500];

    res.status(status);
    res.send({ code: status, message: message, data: undefined });
  }

}

export default new App();