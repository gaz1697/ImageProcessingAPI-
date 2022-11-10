"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const PORT = 2400;
// create server instance
const app = (0, express_1.default)();
// add routes
//app.get('/', (req, res) => {
// res.sendStatus(200);
//});
app.use('/api', index_1.default);
// start server
app.listen(PORT, () => {
    // const thumbPath = path.resolve(__dirname, '../assets/thumb');
    // if (!fs.existsSync(thumbPath)) {
    //   fs.mkdirSync(thumbPath);
    // }
    console.log('server is starting at port:' + PORT);
});
exports.default = app;
