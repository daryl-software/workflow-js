"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../Action");
class Times extends Action_1.Action {
    constructor() {
        super(...arguments);
        this.name = 'times';
    }
    getHash() {
        return '';
    }
    getResult(vars, childrenValues) {
        let result = childrenValues.shift();
        for (let childrenValue of childrenValues) {
            result *= childrenValue;
        }
        return result;
    }
    isValid(vars, childrenValues) {
        if (childrenValues.length === 0) {
            return false;
        }
        for (let childrenValue of childrenValues) {
            if (isNaN(Number(childrenValue))) {
                return false;
            }
        }
        return true;
    }
}
exports.Times = Times;
