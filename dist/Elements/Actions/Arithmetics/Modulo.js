"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Action_1 = require("../Action");
class Modulo extends Action_1.Action {
    constructor() {
        super(...arguments);
        this.name = 'modulo';
    }
    getHash() {
        return '';
    }
    getResult(vars, childrenValues) {
        if (vars.length !== 2) {
            throw 'Modulo must have 2 args, ' + vars.length + ' given';
        }
        let firstOperand = Number(this.args[0].getResult(vars, childrenValues));
        let secondOperand = Number(this.args[1].getResult(vars, childrenValues));
        if (isNaN(firstOperand) || isNaN(secondOperand)) {
            throw 'Modulo argument must be numeric';
        }
        return firstOperand % secondOperand;
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
exports.Modulo = Modulo;
