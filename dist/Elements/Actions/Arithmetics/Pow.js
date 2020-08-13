"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../Action");
class Pow extends Action_1.Action {
    constructor() {
        super(...arguments);
        this.name = 'pow';
    }
    getHash() {
        return '';
    }
    getResult(vars, childrenValues) {
        return Math.pow(childrenValues[0], childrenValues[1]);
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
exports.Pow = Pow;
