"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = __importDefault(require("./ParentType"));
class Action extends ParentType_1.default {
    constructor() {
        super(...arguments);
        this.name = 'internalFunction';
        this.function = null;
    }
    getJSONData() {
        return {};
    }
    getResult(vars, childrenValues) {
        var _a;
        return (_a = this.function) === null || _a === void 0 ? void 0 : _a.getResult(vars, childrenValues);
    }
    createFromParser(parsedData, loader) {
        let instance = Action.create(loader);
        instance.function = loader.getActionProviderConfig().createInstance(parsedData.name);
        return instance;
    }
    isValid(vars, childrenValues) {
        if (this.function === null) {
            return false;
        }
        return this.function.isValid(vars, childrenValues);
    }
    toString() {
        if (!this.function) {
            return '';
        }
        return '(' + this.function.toString() + ')';
    }
}
exports.default = Action;
