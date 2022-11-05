"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 2400;
// create server instance
const app = (0, express_1.default)();
// add routing for / path
app.get('/', (req, res) => {
    res.json({
        message: 'hello world',
    });
});
// start server
app.listen(PORT, () => {
    console.log('server is starting at port:' + PORT);
});
exports.default = app;
