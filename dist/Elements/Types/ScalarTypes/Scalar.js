"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScalarType_1 = require("./ScalarType");
class Scalar extends ScalarType_1.ScalarType {
    constructor() {
        super(...arguments);
        this.name = 'scalar';
        this.scalarValue = null;
    }
    getHash() {
        return '';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        return this.scalarValue;
    }
    createFromParser(parsedData, configLoader) {
        let instance = new Scalar();
        instance.scalarValue = parsedData.value;
        return instance;
    }
    isValid(vars, childrenValues) {
        return this.scalarValue !== null;
    }
}
exports.Scalar = Scalar;
