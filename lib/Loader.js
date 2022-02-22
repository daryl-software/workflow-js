"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Elements_1 = require("./Elements");
const Providers_1 = require("./Providers");
class Loader {
    getTypeProviderConfig() {
        if (Loader.typeProviderConfig != null) {
            return Loader.typeProviderConfig;
        }
        Loader.typeProviderConfig = new Providers_1.TypeProvider();
        Loader.typeProviderConfig.register(Elements_1.Rule);
        Loader.typeProviderConfig.register(Elements_1.Condition);
        Loader.typeProviderConfig.register(Elements_1.Comparator);
        Loader.typeProviderConfig.register(Elements_1.Action);
        Loader.typeProviderConfig.register(Elements_1.Variable);
        Loader.typeProviderConfig.register(Elements_1.Scalar);
        Loader.typeProviderConfig.register(Elements_1.Any);
        Loader.typeProviderConfig.register(Elements_1.All);
        return Loader.typeProviderConfig;
    }
    getComparatorProviderConfig() {
        if (Loader.comparatorProviderConfig != null) {
            return Loader.comparatorProviderConfig;
        }
        Loader.comparatorProviderConfig = new Providers_1.ComparatorProvider();
        Loader.comparatorProviderConfig.register(Elements_1.Equal);
        Loader.comparatorProviderConfig.register(Elements_1.NotEqual);
        Loader.comparatorProviderConfig.register(Elements_1.Greater);
        Loader.comparatorProviderConfig.register(Elements_1.GreaterOrEqual);
        Loader.comparatorProviderConfig.register(Elements_1.Less);
        Loader.comparatorProviderConfig.register(Elements_1.LessOrEqual);
        Loader.comparatorProviderConfig.register(Elements_1.Not);
        Loader.comparatorProviderConfig.register(Elements_1.In);
        Loader.comparatorProviderConfig.register(Elements_1.NotIn);
        return Loader.comparatorProviderConfig;
    }
    getActionProviderConfig() {
        if (Loader.actionProviderConfig != null) {
            return Loader.actionProviderConfig;
        }
        Loader.actionProviderConfig = new Providers_1.ActionProvider();
        Loader.actionProviderConfig.register(Elements_1.Divide);
        Loader.actionProviderConfig.register(Elements_1.Minus);
        Loader.actionProviderConfig.register(Elements_1.Modulo);
        Loader.actionProviderConfig.register(Elements_1.Plus);
        Loader.actionProviderConfig.register(Elements_1.Pow);
        Loader.actionProviderConfig.register(Elements_1.Times);
        return Loader.actionProviderConfig;
    }
    getAvailableTypes() {
        return this.getTypeProviderConfig().getRegisteredElement();
    }
    getAvailableConditionOperator() {
        return this.getTypeProviderConfig().getRegisteredElement().filter((type) => {
            return !['rule', 'condition', 'comparator', 'action', 'variable', 'scalar'].includes(type);
        });
    }
    getAvailableComparators() {
        return this.getComparatorProviderConfig().getRegisteredElement();
    }
    getAvailableActions() {
        return this.getActionProviderConfig().getRegisteredElement();
    }
}
exports.default = Loader;
Loader.typeProviderConfig = null;
Loader.actionProviderConfig = null;
Loader.comparatorProviderConfig = null;
