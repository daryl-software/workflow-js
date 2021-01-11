"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = __importDefault(require("../Type"));
class ScalarType extends Type_1.default {
    constructor() {
        super(...arguments);
        this.scalarValue = null;
    }
    getJSONData() {
        return {
            'type': this.getName(),
            'value': this.getValue()
        };
    }
    getValue() {
        return this.scalarValue;
    }
    setValue(value) {
        this.scalarValue = value;
    }
    getHash() {
        return this.hashString('Scalar:' + this.constructor.name + '.' + this.getValue());
    }
}
exports.default = ScalarType;
