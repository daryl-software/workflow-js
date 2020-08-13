import {Type} from "./Providers/Type";
import {Rule} from "./Elements/Types/ParentTypes/Rule";
import {Any} from "./Elements/Types/Condition/Operators/Any";
import {All} from "./Elements/Types/Condition/Operators/All";
import {Action} from "./Providers/Action";
import {Modulo} from "./Elements/Actions/Arithmetics/Modulo";
import {Operator} from "./Providers/Operator";
import {Operator as OperatorElement} from "./Elements/Types/ParentTypes/Operator";
import {Equal} from "./Elements/Comparators/Equal";
import {Condition} from "./Elements/Types/ParentTypes/Condition";
import {Vars} from "./Elements/Types/ScalarTypes/Vars";
import {Scalar} from "./Elements/Types/ScalarTypes/Scalar";
import {Greater} from "./Elements/Comparators/Greater";
import {GreaterOrEqual} from "./Elements/Comparators/GreaterOrEqual";
import {Less} from "./Elements/Comparators/Less";
import {LessOrEqual} from "./Elements/Comparators/LessOrEqual";
import {Not} from "./Elements/Comparators/Not";

export class Loader {

    private typeProviderConfig: Type | null = null;
    private actionProviderConfig: Action | null = null;
    private operatorProviderConfig: Operator | null = null;

    public getTypeProviderConfig(): Type {
        if (this.typeProviderConfig != null) {
            return this.typeProviderConfig;
        }

        this.typeProviderConfig = new Type();
        this.typeProviderConfig.register(new Rule());
        this.typeProviderConfig.register(new Condition());
        this.typeProviderConfig.register(new OperatorElement());
        this.typeProviderConfig.register(new Vars());
        this.typeProviderConfig.register(new Scalar());
        this.typeProviderConfig.register(new Any());
        this.typeProviderConfig.register(new All());
        return this.typeProviderConfig;
    }

    public getOperatorProviderConfig() {
        if (this.operatorProviderConfig != null) {
            return this.operatorProviderConfig;
        }

        this.operatorProviderConfig = new Operator();
        this.operatorProviderConfig.register(new Equal());
        this.operatorProviderConfig.register(new Greater());
        this.operatorProviderConfig.register(new GreaterOrEqual());
        this.operatorProviderConfig.register(new Less());
        this.operatorProviderConfig.register(new LessOrEqual());
        this.operatorProviderConfig.register(new Not());
        return this.operatorProviderConfig;
    }

    public getActionProviderConfig() {
        if (this.actionProviderConfig != null) {
            return this.actionProviderConfig;
        }

        this.actionProviderConfig = new Action();
        this.actionProviderConfig.register(new Modulo());
        return this.actionProviderConfig;
    }
}
