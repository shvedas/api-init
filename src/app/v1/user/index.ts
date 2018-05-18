import * as express from "express";

export default express.Router()
    .get("/", (req, res) => { res.render(undefined, "Get user");
    })
    .get("/:id", () => {})
    .post("/", () => {})
    .put("/:id", () => {})
    .delete("/:id", () => {});