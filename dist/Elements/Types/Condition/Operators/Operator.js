"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = require("../../Type");
class Operator extends Type_1.Type {
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
}
exports.Operator = Operator;
