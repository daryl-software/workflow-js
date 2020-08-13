"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = require("./ParentType");
class Condition extends ParentType_1.ParentType {
    constructor() {
        super();
        this.name = 'condition';
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
    addValue(value) {
        var _a;
        (_a = this.operator) === null || _a === void 0 ? void 0 : _a.addOperand(value);
        return this;
    }
    createFromParser(parsedData, configLoader) {
        let instance = new Condition();
        instance.operator = configLoader.getTypeProviderConfig().getClass(parsedData.operator);
        return instance;
    }
    isValid(vars, childrenValues) {
        var _a;
        if (this.operator === null) {
            return false;
        }
        return (_a = this.operator) === null || _a === void 0 ? void 0 : _a.isValid(vars, childrenValues);
    }
}
exports.Condition = Condition;
