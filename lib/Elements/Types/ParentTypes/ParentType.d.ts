import Type from '../Type';
import Loader from '../../../Loader';
import { ScalarValue } from '../../../typing/ScalarValue';
export default abstract class ParentType extends Type {
    protected values: Array<Type>;
    getValues(): Array<Type>;
    addValue(value: Type): any;
    removeValue(index: number): void;
    protected runThroughTree(vars: Map<string, ScalarValue>): unknown;
    getHash(): string;
    abstract createFromParser(parsedData: Object, configLoader: Loader): any;
}
