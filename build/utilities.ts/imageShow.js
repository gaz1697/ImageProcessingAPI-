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
//import { promises as fs } from 'fs';
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const image_size_1 = __importDefault(require("image-size"));
function resizeImage(imgP, imgSP, wid, hei, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, sharp_1.default)(imgP)
                .resize({
                width: wid,
                height: hei,
            })
                .toFile(imgSP);
            res.sendFile(imgSP);
        }
        catch (err) {
            res.send('wrong values').sendStatus(200);
        }
    });
}
const imgShow = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    const fname = filename.substring(1, filename.length - 1);
    const wid = +width;
    const hei = +height;
    const pth = path_1.default.join(path_1.default.resolve('./'), 'assets', 'images', fname) + '.jpg';
    const thuPth = path_1.default.join(path_1.default.resolve('./'), 'assets', 'thumb', fname) + '.jpg';
    if (!fs_1.default.existsSync(pth)) {
        res.send("file doesn't exist").sendStatus(200);
    }
    else {
        if (!fs_1.default.existsSync(thuPth)) {
            resizeImage(pth, thuPth, wid, hei, res);
        }
        else {
            const sizeD = (0, image_size_1.default)(thuPth);
            if (wid != (yield sizeD.width) || hei != (yield sizeD.height)) {
                resizeImage(pth, thuPth, wid, hei, res);
            }
            else {
                res.sendStatus(200).sendFile(thuPth);
                console.log('old');
            }
        }
    }
});
exports.default = imgShow;
