"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = __importDefault(require("../Type"));
class ParentType extends Type_1.default {
    constructor() {
        super(...arguments);
        this.values = new Array();
    }
    getValues() {
        return this.values;
    }
    addValue(value) {
        this.values.push(value);
        return this;
    }
    removeValue(index) {
        this.values.splice(index, 1);
    }
    runThroughTree(vars) {
        let childrenValues = [];
        let values = this.getValues();
        for (let value of values) {
            if (value instanceof ParentType) {
                childrenValues.push(value.runThroughTree(vars));
            }
            else {
                if (!value.isValid(vars, [])) {
                    throw `Child ${value.constructor.name} has not a valid value`;
                }
                childrenValues.push(value.getResult(vars, []));
            }
        }
        if (!this.isValid(vars, childrenValues)) {
            throw `${this.constructor.name} has not valid value`;
        }
        return this.getResult(vars, childrenValues);
    }
    getHash() {
        return this.hashValues(this.getValues());
    }
}
exports.default = ParentType;
