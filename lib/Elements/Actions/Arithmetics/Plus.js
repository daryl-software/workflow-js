"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ActionFunction_1 = __importDefault(require("../ActionFunction"));
class Plus extends ActionFunction_1.default {
    constructor() {
        super(...arguments);
        this.name = 'plus';
    }
    getHash() {
        return '';
    }
    getResult(vars, childrenValues) {
        let result = childrenValues.shift();
        for (let childrenValue of childrenValues) {
            result += childrenValue;
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
    toString() {
        return this.args.join(' + ');
    }
}
exports.default = Plus;
