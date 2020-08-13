import { Element } from '../Element';
import { Type } from '../Types/Type';
export declare abstract class Operator extends Element {
    protected operands: Array<Type>;
    getHash(): string;
}
