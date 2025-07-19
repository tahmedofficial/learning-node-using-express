"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const todos_route_1 = require("./app/todos/todos.route");
app.use(express_1.default.json());
app.use("/todos", todos_route_1.todosRouter);
app.get('/', (req, res) => {
    res.send('Welcome to todo app');
});
app.use((req, res) => {
    res.status(404).send("Route not found");
});
app.use((error, req, res, next) => {
    if (error) {
        console.log(error);
        res.status(400).send({ message: "Something went worng" });
    }
});
exports.default = app;
