"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = __importDefault(require("./ParentType"));
const Condition_1 = __importDefault(require("./Condition"));
class Rule extends ParentType_1.default {
    constructor() {
        super(...arguments);
        this.name = 'rule';
    }
    getJSONData() {
        return {
            type: this.getName(),
            return: this.return,
            value: this.values
        };
    }
    getResult(vars, childrenValues) {
        for (let childrenValue of childrenValues) {
            if (childrenValue === false) {
                return false;
            }
        }
        return true;
    }
    run(vars) {
        return this.runThroughTree(vars);
    }
    getReturn() {
        return this.return;
    }
    setReturn(returnValue) {
        this.return = returnValue;
    }
    createFromParser(parsedData, configLoader) {
        let instance = new Rule();
        instance.return = parsedData.return;
        return instance;
    }
    toString() {
        return this.values
            .map((value) => {
            return '(' + value + '): ' + this.return;
        })
            .join(Rule.STRING_SEPARATOR);
    }
    attachNewCondition(conditionOperatorType) {
        const condition = Condition_1.default.create(this.getLoader());
        condition.setConditionOperator(conditionOperatorType);
        this.addValue(condition);
        return condition;
    }
    isValid(vars, childrenValues) {
        return this.getValues().length !== 0;
    }
}
exports.default = Rule;
Rule.STRING_SEPARATOR = ', ';
