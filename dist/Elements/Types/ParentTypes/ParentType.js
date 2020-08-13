"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = require("../Type");
class ParentType extends Type_1.Type {
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
    runThroughTree(vars) {
        let childrenValues = [];
        let values = this.getValues();
        for (let value of values) {
            if (value instanceof ParentType) {
                childrenValues.push(value.runThroughTree(vars));
            }
            else {
                childrenValues.push(value.getResult(vars, []));
            }
        }
        return this.getResult(vars, childrenValues);
    }
}
exports.ParentType = ParentType;
