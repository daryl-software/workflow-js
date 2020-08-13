"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = require("./ParentType");
class Action extends ParentType_1.ParentType {
    constructor() {
        super(...arguments);
        this.name = 'internalFunction';
        this.function = null;
    }
    getHash() {
        return '';
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        var _a;
        return (_a = this.function) === null || _a === void 0 ? void 0 : _a.getResult(vars, childrenValues);
    }
    createFromParser(parsedData, configLoader) {
        let instance = new Action();
        instance.function = configLoader === null || configLoader === void 0 ? void 0 : configLoader.getActionProviderConfig().getClass(parsedData.name);
        return instance;
    }
    isValid(vars, childrenValues) {
        if (this.function === null) {
            return false;
        }
        return this.function.isValid(vars, childrenValues);
    }
}
exports.Action = Action;
