"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Operator_1 = __importDefault(require("./Operator"));
class All extends Operator_1.default {
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
        for (let childrenValue of childrenValues) {
            if (childrenValue !== true) {
                return false;
            }
        }
        return true;
    }
    isValid(vars, childrenValues) {
        return this.operands.length === 2;
    }
    toString() {
        return this.getOperands().join(' AND ');
    }
}
exports.default = All;
