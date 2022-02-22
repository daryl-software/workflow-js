"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CompareOperator_1 = __importDefault(require("./CompareOperator"));
class NotEqual extends CompareOperator_1.default {
    constructor() {
        super(...arguments);
        this.name = 'notEqual';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        let valueToBeEquals = childrenValues[0];
        for (let childrenValue of childrenValues) {
            if (childrenValue != valueToBeEquals) {
                return true;
            }
        }
        return false;
    }
    isValid(vars, childrenValues) {
        return this.operands.length > 0;
    }
    toString() {
        return 'NOT(' + this.getOperands()[0] + ')';
    }
}
exports.default = NotEqual;
