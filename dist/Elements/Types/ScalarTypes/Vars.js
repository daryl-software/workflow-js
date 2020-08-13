"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ScalarType_1 = require("./ScalarType");
class Vars extends ScalarType_1.ScalarType {
    constructor() {
        super(...arguments);
        this.name = 'vars';
        this.scalarValue = null;
    }
    getHash() {
        return '';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        if (this.scalarValue === null) {
            throw 'Unknown error';
        }
        if (!vars.hasOwnProperty(this.scalarValue)) {
            throw 'Vars "' + this.scalarValue + '" does not exist';
        }
        return vars[this.scalarValue];
    }
    createFromParser(parsedData, configLoader) {
        let instance = new Vars();
        instance.scalarValue = parsedData.value;
        return instance;
    }
    isValid(vars, childrenValues) {
        return this.scalarValue !== null;
    }
}
exports.Vars = Vars;
