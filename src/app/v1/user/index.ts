import * as express from "express";
import error from "app-error";

export default express.Router()
  .get("/", async (req, res, next) => {
    try {
      res.render(undefined, "Get user2");
    } catch (err) {
      console.log("err", err);
      next(error(501, err));
    }
  })
  .get("/:id", () => {})
  .post("/", () => {})
  .put("/:id", () => {})
  .delete("/:id", () => {});