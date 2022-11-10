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
const sharp_1 = __importDefault(require("sharp"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const image_size_1 = __importDefault(require("image-size"));
function resizeImage(imgP, imgSP, wid, hei) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, sharp_1.default)(imgP)
                .resize(+wid, +hei)
                .toFile(imgSP);
            return imgSP;
        }
        catch (err) {
            return 'wrong inputs';
        }
    });
}
function processImage(filename, width, height) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const fname = yield filename.substring(1, filename.length - 1);
            const pth = (yield path_1.default.join(path_1.default.resolve('./'), 'assets', 'images', fname)) + '.jpg';
            const thuPth = (yield path_1.default.join(path_1.default.resolve('./'), 'assets', 'thumb', fname)) + '.jpg';
            if (!fs_1.default.existsSync(pth)) {
                return "file doesn't exist";
            }
            else {
                if (!fs_1.default.existsSync(thuPth)) {
                    return resizeImage(pth, thuPth, width, height);
                }
                else {
                    const sizeD = (0, image_size_1.default)(thuPth);
                    if (+width != (yield sizeD.width) || +height != (yield sizeD.height)) {
                        return resizeImage(pth, thuPth, width, height);
                    }
                    else {
                        return thuPth;
                    }
                }
            }
        }
        catch (err) {
            return 'enter file name, width and height';
        }
    });
}
exports.default = processImage;
