"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ScalarType_1 = __importDefault(require("./ScalarType"));
class Variable extends ScalarType_1.default {
    constructor() {
        super(...arguments);
        this.name = 'variable';
    }
    getResult(vars, childrenValues) {
        if (this.scalarValue === null) {
            throw 'No value defined';
        }
        if (!vars.has(this.scalarValue)) {
            throw 'Variable "' + this.scalarValue + '" does not exist';
        }
        return vars.get(this.scalarValue);
    }
    createFromParser(parsedData, loader) {
        let instance = Variable.create(loader);
        instance.scalarValue = parsedData.value;
        return instance;
    }
    isValid(vars, childrenValues) {
        if (this.getValue()) {
            console.log('la');
            console.log(vars.has(this.getValue()) !== null);
            return vars.has(this.getValue()) !== null;
        }
        throw `Variable must have a value`;
    }
    toString() {
        return this.getValue();
    }
}
exports.default = Variable;
