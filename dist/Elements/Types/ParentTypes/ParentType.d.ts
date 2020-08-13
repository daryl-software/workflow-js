import { Type } from '../Type';
import { Loader } from "../../../Loader";
export declare abstract class ParentType extends Type {
    protected values: Array<Type>;
    getValues(): Array<Type>;
    addValue(value: Type): any;
    protected runThroughTree(vars: any): unknown;
    abstract createFromParser(parsedData: Object, configLoader: Loader): any;
}
