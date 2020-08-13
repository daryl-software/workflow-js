"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = require("./ParentType");
class Operator extends ParentType_1.ParentType {
    constructor() {
        super(...arguments);
        this.name = 'operator';
        this.operator = null;
    }
    getHash() {
        return '';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        var _a;
        return (_a = this.operator) === null || _a === void 0 ? void 0 : _a.getResult(vars, childrenValues);
    }
    createFromParser(parsedData, configLoader) {
        let instance = new Operator();
        instance.operator = configLoader.getOperatorProviderConfig().getClass(parsedData.operator);
        return instance;
    }
    isValid(vars, childrenValues) {
        if (this.operator === null) {
            return false;
        }
        return this.operator.isValid(vars, childrenValues);
    }
}
exports.Operator = Operator;
