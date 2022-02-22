"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompareOperator_1 = __importDefault(require("./CompareOperator"));
class In extends CompareOperator_1.default {
    constructor() {
        super(...arguments);
        this.name = 'in';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        let valueToBeEquals = childrenValues[0];
        for (let [key, childrenValue] of childrenValues.entries()) {
            if (key === 0) {
                continue;
            }
            if (childrenValue == valueToBeEquals) {
                return true;
            }
        }
        return false;
    }
    isValid(vars, childrenValues) {
        return this.operands.length > 1;
    }
    toString() {
        return 'IN(' + this.getOperands().join(' = ') + ')';
    }
}
exports.default = In;
