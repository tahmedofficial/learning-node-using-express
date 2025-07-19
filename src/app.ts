import express, { Application, NextFunction, Request, Response } from "express";
const app: Application = express()
import { todosRouter } from "./app/todos/todos.route";
import { error } from "console";
app.use(express.json());

app.use("/todos", todosRouter);


app.get('/', (req: Request, res: Response) => {

    res.send('Welcome to todo app');
})

app.use((req: Request, res: Response) => {
    res.status(404).send("Route not found");
})

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        console.log(error);
        res.status(400).send({ message: "Something went worng" });
    }
})


export default app;
