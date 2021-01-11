"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = __importDefault(require("../../Type"));
class Operator extends Type_1.default {
    constructor() {
        super(...arguments);
        this.operands = [];
    }
    addOperand(value) {
        this.operands.push(value);
        return this;
    }
    getOperands() {
        return this.operands;
    }
    removeOperand(index) {
        this.operands.splice(index, 1);
    }
}
exports.default = Operator;
