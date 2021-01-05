"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operator_1 = __importDefault(require("./Operator"));
class Any extends Operator_1.default {
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
    toString() {
        return this.getOperands().join(' OR ');
    }
}
exports.default = Any;
