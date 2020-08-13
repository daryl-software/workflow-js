import { Element } from '../Element';
import { Type } from '../Types/Type';
export declare abstract class InternalFunction extends Element {
    protected args: Array<Type>;
    addArgs(arg: Type): void;
    getArgs(): Array<Type>;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    };
}
