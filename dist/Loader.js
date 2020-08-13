"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Type_1 = require("./Providers/Type");
const Rule_1 = require("./Elements/Types/ParentTypes/Rule");
const Any_1 = require("./Elements/Types/Condition/Operators/Any");
const All_1 = require("./Elements/Types/Condition/Operators/All");
const Action_1 = require("./Providers/Action");
const Modulo_1 = require("./Elements/Actions/Arithmetics/Modulo");
const Operator_1 = require("./Providers/Operator");
const Operator_2 = require("./Elements/Types/ParentTypes/Operator");
const Equal_1 = require("./Elements/Comparators/Equal");
const Condition_1 = require("./Elements/Types/ParentTypes/Condition");
const Vars_1 = require("./Elements/Types/ScalarTypes/Vars");
const Scalar_1 = require("./Elements/Types/ScalarTypes/Scalar");
const Greater_1 = require("./Elements/Comparators/Greater");
const GreaterOrEqual_1 = require("./Elements/Comparators/GreaterOrEqual");
const Less_1 = require("./Elements/Comparators/Less");
const LessOrEqual_1 = require("./Elements/Comparators/LessOrEqual");
const Not_1 = require("./Elements/Comparators/Not");
class Loader {
    constructor() {
        this.typeProviderConfig = null;
        this.actionProviderConfig = null;
        this.operatorProviderConfig = null;
    }
    getTypeProviderConfig() {
        if (this.typeProviderConfig != null) {
            return this.typeProviderConfig;
        }
        this.typeProviderConfig = new Type_1.Type();
        this.typeProviderConfig.register(new Rule_1.Rule());
        this.typeProviderConfig.register(new Condition_1.Condition());
        this.typeProviderConfig.register(new Operator_2.Operator());
        this.typeProviderConfig.register(new Vars_1.Vars());
        this.typeProviderConfig.register(new Scalar_1.Scalar());
        this.typeProviderConfig.register(new Any_1.Any());
        this.typeProviderConfig.register(new All_1.All());
        return this.typeProviderConfig;
    }
    getOperatorProviderConfig() {
        if (this.operatorProviderConfig != null) {
            return this.operatorProviderConfig;
        }
        this.operatorProviderConfig = new Operator_1.Operator();
        this.operatorProviderConfig.register(new Equal_1.Equal());
        this.operatorProviderConfig.register(new Greater_1.Greater());
        this.operatorProviderConfig.register(new GreaterOrEqual_1.GreaterOrEqual());
        this.operatorProviderConfig.register(new Less_1.Less());
        this.operatorProviderConfig.register(new LessOrEqual_1.LessOrEqual());
        this.operatorProviderConfig.register(new Not_1.Not());
        return this.operatorProviderConfig;
    }
    getActionProviderConfig() {
        if (this.actionProviderConfig != null) {
            return this.actionProviderConfig;
        }
        this.actionProviderConfig = new Action_1.Action();
        this.actionProviderConfig.register(new Modulo_1.Modulo());
        return this.actionProviderConfig;
    }
}
exports.Loader = Loader;
