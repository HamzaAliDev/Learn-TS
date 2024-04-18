"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fun_js_1 = __importDefault(require("./fun.js"));
console.log("this is main page");
console.log((0, fun_js_1.default)(23, 55));
console.log("after the import");
