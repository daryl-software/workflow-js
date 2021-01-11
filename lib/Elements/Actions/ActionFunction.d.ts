import Element from '../Element';
import Type from '../Types/Type';
export default abstract class ActionFunction extends Element {
    protected args: Array<Type>;
    addArgs(arg: Type): void;
    getArgs(): Array<Type>;
    removeArgs(index: number): Type[];
    getHash(): string;
    getJSONData(): {
        [p: string]: unknown;
    } | null;
}
