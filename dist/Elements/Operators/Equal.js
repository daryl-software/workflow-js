"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Operator_1 = require("./Operator");
class Equal extends Operator_1.Operator {
    constructor() {
        super(...arguments);
        this.name = 'equal';
    }
    getJSONData() {
        return {};
    }
    getResult(vars) {
        return vars;
    }
}
exports.Equal = Equal;
