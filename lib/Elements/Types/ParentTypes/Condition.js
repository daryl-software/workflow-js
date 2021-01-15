"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = __importDefault(require("./ParentType"));
const Operator_1 = __importDefault(require("../Condition/Operators/Operator"));
const Comparator_1 = __importDefault(require("./Comparator"));
class Condition extends ParentType_1.default {
    constructor() {
        super();
        this.name = 'condition';
        this.conditionOperator = null;
    }
    getJSONData() {
        var _a, _b;
        return {
            type: this.name,
            condition: (_a = this.conditionOperator) === null || _a === void 0 ? void 0 : _a.getName(),
            value: (_b = this.conditionOperator) === null || _b === void 0 ? void 0 : _b.getOperands()
        };
    }
    getResult(vars, childrenValues) {
        var _a;
        return (_a = this.conditionOperator) === null || _a === void 0 ? void 0 : _a.getResult(vars, childrenValues);
    }
    addValue(value) {
        if (!this.conditionOperator) {
            throw `Cannot add value without any condition operator`;
        }
        this.conditionOperator.addOperand(value);
        return this;
    }
    removeValue(index) {
        if (!this.conditionOperator) {
            throw `Cannot remove value without any condition operator`;
        }
        this.conditionOperator.removeOperand(index);
    }
    createFromParser(parsedData, loader) {
        let typeElement = loader.getTypeProviderConfig().createInstance(parsedData.condition);
        if (typeElement instanceof Operator_1.default) {
            let instance = Condition.create(loader);
            instance.conditionOperator = typeElement;
            return instance;
        }
        throw `Given object is not valid`;
    }
    isValid(vars, childrenValues) {
        if (this.conditionOperator === null) {
            return false;
        }
        return this.conditionOperator.isValid(vars, childrenValues);
    }
    toString() {
        if (!this.conditionOperator) {
            return '';
        }
        return this.conditionOperator.toString();
    }
    getValues() {
        if (!this.conditionOperator) {
            return [];
        }
        return this.conditionOperator.getOperands();
    }
    attachNewComparator(comparatorType) {
        if (!this.conditionOperator) {
            throw 'A condition operator must be set before adding childs';
        }
        const comparator = Comparator_1.default.create(this.getLoader());
        comparator.setCompareOperator(comparatorType);
        this.conditionOperator.addOperand(comparator);
        return comparator;
    }
    attachNewCondition(conditionType) {
        if (!this.conditionOperator) {
            throw 'A condition operator must be set before adding childs';
        }
        const condition = Condition.create(this.getLoader());
        condition.setConditionOperator(conditionType);
        this.conditionOperator.addOperand(condition);
        return condition;
    }
    setConditionOperator(conditionOperatorName, emptyValue = false) {
        const conditionOperator = this.getLoader().getTypeProviderConfig().createInstance(conditionOperatorName);
        if (!(conditionOperator instanceof Operator_1.default)) {
            throw `Given name must be an condition operator`;
        }
        if (!emptyValue) {
            const values = this.getValues();
            if (values.length > 0) {
                values.forEach((value) => {
                    conditionOperator.addOperand(value);
                });
            }
        }
        this.conditionOperator = conditionOperator;
        return this;
    }
    getConditionOperator() {
        return this.conditionOperator;
    }
}
exports.default = Condition;
