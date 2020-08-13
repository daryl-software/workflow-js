"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Operator_1 = require("./Operator");
class All extends Operator_1.Operator {
    constructor() {
        super(...arguments);
        this.name = 'all';
    }
    getHash() {
        return '';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        console.log(vars, childrenValues);
        for (let childrenValue of childrenValues) {
            if (childrenValue !== true) {
                return false;
            }
        }
        return true;
    }
    isValid(vars, childrenValues) {
        return this.operands.length !== 2;
    }
}
exports.All = All;
