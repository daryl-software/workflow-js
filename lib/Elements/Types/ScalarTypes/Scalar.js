"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScalarType_1 = __importDefault(require("./ScalarType"));
class Scalar extends ScalarType_1.default {
    constructor() {
        super(...arguments);
        this.name = 'scalar';
    }
    getResult(vars, childrenValues) {
        return this.scalarValue;
    }
    createFromParser(parsedData, loader) {
        let instance = Scalar.create(loader);
        instance.scalarValue = parsedData.value;
        return instance;
    }
    isValid(vars, childrenValues) {
        return this.scalarValue !== null;
    }
    toString() {
        return this.getValue();
    }
}
exports.default = Scalar;
