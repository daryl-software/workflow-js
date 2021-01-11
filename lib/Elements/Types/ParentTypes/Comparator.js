"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = __importDefault(require("./ParentType"));
const Action_1 = __importDefault(require("./Action"));
const ScalarTypes_1 = require("../ScalarTypes");
class Comparator extends ParentType_1.default {
    constructor() {
        super(...arguments);
        this.name = 'comparator';
        this.compareOperator = null;
    }
    getHash() {
        var _a, _b;
        if (this.compareOperator) {
            return this.hashValues((_a = this.compareOperator) === null || _a === void 0 ? void 0 : _a.getOperands(), (_b = this.compareOperator) === null || _b === void 0 ? void 0 : _b.getName());
        }
        else {
            return '';
        }
    }
    getJSONData() {
        var _a, _b;
        return {
            type: this.name,
            comparator: (_a = this.compareOperator) === null || _a === void 0 ? void 0 : _a.getName(),
            value: (_b = this.compareOperator) === null || _b === void 0 ? void 0 : _b.getOperands()
        };
    }
    getResult(vars, childrenValues) {
        var _a;
        return (_a = this.compareOperator) === null || _a === void 0 ? void 0 : _a.getResult(vars, childrenValues);
    }
    createFromParser(parsedData, loader) {
        let instance = Comparator.create(loader);
        instance.compareOperator = loader.getComparatorProviderConfig().createInstance(parsedData.comparator);
        return instance;
    }
    isValid(vars, childrenValues) {
        if (this.compareOperator === null) {
            return false;
        }
        return this.compareOperator.isValid(vars, childrenValues);
    }
    addValue(value) {
        if (!this.compareOperator) {
            throw `Can't add operand without any comparator`;
        }
        this.compareOperator.addOperand(value);
        return this;
    }
    removeValue(index) {
        if (!this.compareOperator) {
            throw `Can't remove operand without any comparator`;
        }
        this.compareOperator.removeOperand(index);
    }
    toString() {
        if (!this.compareOperator) {
            return '';
        }
        return this.compareOperator.toString();
    }
    getValues() {
        if (!this.compareOperator) {
            return [];
        }
        return this.compareOperator.getOperands();
    }
    setCompareOperator(compareOperatorType) {
        this.compareOperator = this.getLoader().getComparatorProviderConfig().createInstance(compareOperatorType);
        return this;
    }
    getCompareOperator() {
        return this.compareOperator;
    }
    attachNewAction(actionFunctionType) {
        if (!this.compareOperator) {
            throw 'A compare operator must be set before adding childs';
        }
        const action = Action_1.default.create(this.getLoader());
        action.setActionFunction(actionFunctionType);
        this.compareOperator.addOperand(action);
        return action;
    }
    attachNewScalar(scalarValue) {
        if (!this.compareOperator) {
            throw 'A compare operator must be set before adding childs';
        }
        const scalar = ScalarTypes_1.Scalar.create(this.getLoader());
        scalar.setValue(scalarValue);
        this.compareOperator.addOperand(scalar);
        return scalar;
    }
    attachNewVariable(variableName) {
        if (!this.compareOperator) {
            throw 'A compare operator must be set before adding childs';
        }
        const variable = ScalarTypes_1.Variable.create(this.getLoader());
        variable.setValue(variableName);
        this.compareOperator.addOperand(variable);
        return variable;
    }
}
exports.default = Comparator;
