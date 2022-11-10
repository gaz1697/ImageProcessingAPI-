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
const imageProcess_1 = __importDefault(require("../../models/imageProcess"));
describe('Test imageProcess functionality', () => {
    it('if a file name does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, imageProcess_1.default)('rerr', 300, 200);
        expect(res).toBe("file doesn't exist");
    }));
    it('if a file exist but height and width inputs given are not accepted', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, imageProcess_1.default)('.tree.', 34, -1);
        expect(res).toBe('wrong inputs');
    }));
    it('if a file exist and height and width inputs given are correct', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, imageProcess_1.default)('.tree.', 300, 500);
        expect(res).toBe('/home/dahm/Desktop/jsUdacity/ImageProcessingAPI-/assets/thumb/tree.jpg');
    }));
});
