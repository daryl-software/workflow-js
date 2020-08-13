"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Comparator_1 = require("./Comparator");
class Equal extends Comparator_1.Comparator {
    constructor() {
        super(...arguments);
        this.name = 'equal';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        let valueToBeEquals = childrenValues[0];
        for (let childrenValue of childrenValues) {
            if (childrenValue != valueToBeEquals) {
                return false;
            }
        }
        return true;
    }
    isValid(vars, childrenValues) {
        return this.operands.length !== 0;
    }
}
exports.Equal = Equal;
