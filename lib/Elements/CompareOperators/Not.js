"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompareOperator_1 = __importDefault(require("./CompareOperator"));
class Not extends CompareOperator_1.default {
    constructor() {
        super(...arguments);
        this.name = 'lessOrEqual';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        return !childrenValues[0];
    }
    isValid(vars, childrenValues) {
        return this.operands.length !== 2;
    }
    toString() {
        return 'NOT(' + this.getOperands()[0] + ')';
    }
}
exports.default = Not;
