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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
//create a request object
const request = (0, supertest_1.default)(index_1.default);
describe('Test images endpoint and functionality', () => {
    it('no input', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images/');
        expect(response.status).toBe(400);
    }));
    it('if a file name does not exist', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images/?filename=%22trere%22&width=500&height=4000');
        expect(response.text).toBe("file doesn't exist");
    }));
    it('if a file exist but height and width inputs given are not accepted', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images/?filename=%22tree%22');
        expect(response.text).toBe('wrong values');
    }));
    it('if a file exist and height and width inputs given are correct', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield request.get('/api/images/?filename=%22tree%22&width=500&height=400');
        expect(response.status).toBe(200);
    }));
});
