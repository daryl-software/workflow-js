"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __importDefault(require("../Element"));
class ActionFunction extends Element_1.default {
    constructor() {
        super(...arguments);
        this.args = [];
    }
    addArgs(arg) {
        this.args.push(arg);
    }
    getArgs() {
        return this.args;
    }
    removeArgs(index) {
        return this.args.splice(index, 1);
    }
    getHash() {
        return this.hashValues(this.args);
    }
    getJSONData() {
        return null;
    }
}
exports.default = ActionFunction;
