import * as express from "express";
import users from "./user";
import auth from "./auth";

export default express.Router()
    .use("/auth", auth)
    .use("/users", users);