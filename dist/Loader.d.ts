import { Type } from "./Providers/Type";
import { Action } from "./Providers/Action";
import { Operator } from "./Providers/Operator";
export declare class Loader {
    private typeProviderConfig;
    private actionProviderConfig;
    private operatorProviderConfig;
    getTypeProviderConfig(): Type;
    getOperatorProviderConfig(): Operator;
    getActionProviderConfig(): Action;
}
