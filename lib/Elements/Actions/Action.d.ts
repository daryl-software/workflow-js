import Element from '../Element';
import Type from '../Types/Type';
export default abstract class Action extends Element {
    protected args: Array<Type>;
    addArgs(arg: Type): void;
    getArgs(): Array<Type>;
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
}
