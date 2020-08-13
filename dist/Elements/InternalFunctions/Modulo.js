"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InternalFunction_1 = require("./InternalFunction");
class Modulo extends InternalFunction_1.InternalFunction {
    constructor() {
        super(...arguments);
        this.name = 'modulo';
    }
    getHash() {
        return '';
    }
    getResult(vars) {
        if (vars.length !== 2) {
            throw 'Modulo must have 2 args, ' + vars.length + ' given';
        }
        let firstOperand = Number(this.args[0].getResult(vars));
        let secondOperand = Number(this.args[1].getResult(vars));
        if (isNaN(firstOperand) || isNaN(secondOperand)) {
            throw 'Modulo argument must be numeric';
        }
        return firstOperand % secondOperand;
    }
}
exports.Modulo = Modulo;
