import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

const filePath = path.join(__dirname, "../../../db/todo.json");

export const todosRouter = express.Router();

todosRouter.get("/", (req: Request, res: Response) => {

    console.log("hit");

    const data = fs.readFileSync(filePath, { encoding: "utf-8" });
    res.json({
        message: "json data",
        data
    })
})

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    res.send("find data")

})

todosRouter.put("/update-todo/:title", (req: Request, res: Response) => {

    res.send("updated todo");
})

todosRouter.delete("/delete-todo/:title", (req: Request, res: Response) => {

    res.send("deleted todo");
})
