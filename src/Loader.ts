import {
    All,
    Any,
    Comparator,
    Condition, Divide,
    Equal,
    Greater,
    GreaterOrEqual,
    Less,
    LessOrEqual, Minus, Modulo,
    Not, Plus, Pow,
    Rule, Scalar, Times,
    Variable
} from './Elements';
import {ActionProvider, ComparatorProvider, TypeProvider} from './Providers';

export default class Loader {

    private static typeProviderConfig: TypeProvider | null = null;
    private static actionProviderConfig: ActionProvider | null = null;
    private static comparatorProviderConfig: ComparatorProvider | null = null;

    public getTypeProviderConfig(): TypeProvider {
        if (Loader.typeProviderConfig != null) {
            return Loader.typeProviderConfig;
        }

        Loader.typeProviderConfig = new TypeProvider();
        Loader.typeProviderConfig.register(Rule);
        Loader.typeProviderConfig.register(Condition);
        Loader.typeProviderConfig.register(Comparator);
        Loader.typeProviderConfig.register(Variable);
        Loader.typeProviderConfig.register(Scalar);
        Loader.typeProviderConfig.register(Any);
        Loader.typeProviderConfig.register(All);
        return Loader.typeProviderConfig;
    }

    public getComparatorProviderConfig() {
        if (Loader.comparatorProviderConfig != null) {
            return Loader.comparatorProviderConfig;
        }

        Loader.comparatorProviderConfig = new ComparatorProvider();
        Loader.comparatorProviderConfig.register(Equal);
        Loader.comparatorProviderConfig.register(Greater);
        Loader.comparatorProviderConfig.register(GreaterOrEqual);
        Loader.comparatorProviderConfig.register(Less);
        Loader.comparatorProviderConfig.register(LessOrEqual);
        Loader.comparatorProviderConfig.register(Not);

        return Loader.comparatorProviderConfig;
    }

    public getActionProviderConfig() {
        if (Loader.actionProviderConfig != null) {
            return Loader.actionProviderConfig;
        }

        Loader.actionProviderConfig = new ActionProvider();
        Loader.actionProviderConfig.register(Divide);
        Loader.actionProviderConfig.register(Minus);
        Loader.actionProviderConfig.register(Modulo);
        Loader.actionProviderConfig.register(Plus);
        Loader.actionProviderConfig.register(Pow);
        Loader.actionProviderConfig.register(Times);
        return Loader.actionProviderConfig;
    }

    public getAvailableTypes() {
        return this.getTypeProviderConfig().getRegisteredElement();
    }

    public getAvailableComparators() {
        return this.getComparatorProviderConfig().getRegisteredElement();
    }

    public getAvailableActions() {
        return this.getActionProviderConfig().getRegisteredElement();
    }
}
