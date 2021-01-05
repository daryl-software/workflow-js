"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Element_1 = __importDefault(require("../Element"));
const Scalar_1 = __importDefault(require("../Types/ScalarTypes/Scalar"));
const Variable_1 = __importDefault(require("../Types/ScalarTypes/Variable"));
class CompareOperator extends Element_1.default {
    constructor() {
        super(...arguments);
        this.operands = new Array();
    }
    getHash() {
        return '';
    }
    getJSONData() {
        return null;
    }
    getOperands() {
        return this.operands;
    }
    addOperand(type) {
        this.operands.push(type);
        return this;
    }
    attachNewScalar(value) {
        const operand = Scalar_1.default.create(this.getLoader());
        operand.setValue(value);
        this.addOperand(operand);
        return operand;
    }
    attachNewVariable(name) {
        const operand = Variable_1.default.create(this.getLoader());
        operand.setValue(name);
        this.addOperand(operand);
        return operand;
    }
    removeOperand(index) {
        this.operands.splice(index, 1);
    }
}
exports.default = CompareOperator;
