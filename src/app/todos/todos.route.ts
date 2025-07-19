import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";
import client from "../../config/mongodb";
import { ObjectId } from "mongodb";

const filePath = path.join(__dirname, "../../../db/todo.json");
const database = client.db("todosDB");
const todosCollection = database.collection("todos");

export const todosRouter = express.Router();

todosRouter.get("/", async (req: Request, res: Response) => {
    const result = await todosCollection.find().toArray();
    res.send(result);
})

todosRouter.get("/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await todosCollection.findOne(query);
    res.send(result);

})

todosRouter.post("/create-todo", async (req: Request, res: Response) => {
    const todo = req.body;
    const result = await todosCollection.insertOne(todo);
    res.send(result);

})

todosRouter.put("/update-todo/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const newData = { $set: req.body };
    const result = await todosCollection.updateOne(query, newData, { upsert: true });
    res.send(result);
})

todosRouter.delete("/delete-todo/:id", async (req: Request, res: Response) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await todosCollection.deleteOne(query);
    res.send(result);
    res.send("deleted todo");
})
