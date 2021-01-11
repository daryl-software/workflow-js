"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = __importDefault(require("./ParentType"));
const ScalarTypes_1 = require("../ScalarTypes");
class Action extends ParentType_1.default {
    constructor() {
        super(...arguments);
        this.name = 'action';
        this.actionFunction = null;
    }
    getJSONData() {
        var _a, _b;
        return {
            type: this.name,
            function: (_a = this.actionFunction) === null || _a === void 0 ? void 0 : _a.getName(),
            value: (_b = this.actionFunction) === null || _b === void 0 ? void 0 : _b.getArgs()
        };
    }
    getResult(vars, childrenValues) {
        var _a;
        return (_a = this.actionFunction) === null || _a === void 0 ? void 0 : _a.getResult(vars, childrenValues);
    }
    createFromParser(parsedData, loader) {
        let instance = Action.create(loader);
        instance.actionFunction = loader.getActionProviderConfig().createInstance(parsedData.function);
        return instance;
    }
    isValid(vars, childrenValues) {
        if (this.actionFunction === null) {
            return false;
        }
        return this.actionFunction.isValid(vars, childrenValues);
    }
    toString() {
        if (!this.actionFunction) {
            return '';
        }
        return '(' + this.actionFunction.toString() + ')';
    }
    getValues() {
        var _a;
        return ((_a = this.actionFunction) === null || _a === void 0 ? void 0 : _a.getArgs()) || [];
    }
    setActionFunction(actionFunctionType) {
        this.actionFunction = this.getLoader().getActionProviderConfig().createInstance(actionFunctionType);
        return this;
    }
    getActionFunction() {
        return this.actionFunction;
    }
    attachNewAction(actionFunctionType) {
        if (!this.actionFunction) {
            throw 'A compare operator must be set before adding childs';
        }
        const action = Action.create(this.getLoader());
        action.setActionFunction(actionFunctionType);
        this.actionFunction.addArgs(action);
        return action;
    }
    attachNewScalar(scalarValue) {
        if (!this.actionFunction) {
            throw 'A compare operator must be set before adding childs';
        }
        const scalar = ScalarTypes_1.Scalar.create(this.getLoader());
        scalar.setValue(scalarValue);
        this.actionFunction.addArgs(scalar);
        return scalar;
    }
    attachNewVariable(variableName) {
        if (!this.actionFunction) {
            throw 'A compare operator must be set before adding childs';
        }
        const variable = ScalarTypes_1.Variable.create(this.getLoader());
        variable.setValue(variableName);
        this.actionFunction.addArgs(variable);
        return variable;
    }
    addValue(value) {
        var _a;
        if (!this.actionFunction) {
            throw 'A compare operator must be set before adding childs';
        }
        (_a = this.actionFunction) === null || _a === void 0 ? void 0 : _a.addArgs(value);
        return this;
    }
    removeValue(index) {
        if (!this.actionFunction) {
            throw `Can't remove args without any function`;
        }
        this.actionFunction.removeArgs(index);
    }
}
exports.default = Action;
