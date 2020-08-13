import { Element } from '../Element';
import { Type } from '../Types/Type';
export declare abstract class Comparator extends Element {
    protected operands: Array<Type>;
    getHash(): string;
}
