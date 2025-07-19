"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.todosRouter = void 0;
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filePath = path_1.default.join(__dirname, "../../../db/todo.json");
exports.todosRouter = express_1.default.Router();
exports.todosRouter.get("/", (req, res) => {
    console.log("hit");
    const data = fs_1.default.readFileSync(filePath, { encoding: "utf-8" });
    res.json({
        message: "json data",
        data
    });
});
exports.todosRouter.post("/create-todo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    console.log(data);
    res.send("find data");
}));
exports.todosRouter.put("/update-todo/:title", (req, res) => {
    res.send("updated todo");
});
exports.todosRouter.delete("/delete-todo/:title", (req, res) => {
    res.send("deleted todo");
});
