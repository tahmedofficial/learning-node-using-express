import express, { Application, Request, Response } from "express";
const app: Application = express()
import fs from "fs";
import path from "path";
import { todosRouter } from "./app/todos/todos.route";
app.use(express.json());

app.use("/todos", todosRouter);


app.get('/', (req: Request, res: Response) => {
    res.send('Welcome to todo app');
})


export default app;
