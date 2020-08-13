"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Operator_1 = require("./Operator");
class Any extends Operator_1.Operator {
    constructor() {
        super(...arguments);
        this.name = 'any';
    }
    getHash() {
        return '';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        for (let childrenValue of childrenValues) {
            if (childrenValue === true) {
                return true;
            }
        }
        return false;
    }
    isValid(vars, childrenValues) {
        return this.operands.length !== 2;
    }
}
exports.Any = Any;
