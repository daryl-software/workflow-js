"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParentType_1 = require("./ParentType");
class Rule extends ParentType_1.ParentType {
    constructor() {
        super(...arguments);
        this.name = 'rule';
    }
    getHash() {
        return '';
    }
    getJSONData() {
        return {};
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
    createFromParser(parsedData, configLoader) {
        let instance = new Rule();
        instance.return = parsedData.return;
        return instance;
    }
    isValid(vars, childrenValues) {
        return this.getValues().length !== 0;
    }
}
exports.Rule = Rule;
Rule.STRING_SEPARATOR = ', ';
