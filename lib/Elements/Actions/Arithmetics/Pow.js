"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionFunction_1 = __importDefault(require("../ActionFunction"));
class Pow extends ActionFunction_1.default {
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
        if (childrenValues.length < 2) {
            return false;
        }
        for (let childrenValue of childrenValues) {
            if (isNaN(Number(childrenValue))) {
                return false;
            }
        }
        return true;
    }
    toString() {
        return this.args.join(' ** ');
    }
}
exports.default = Pow;
