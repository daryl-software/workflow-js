import Loader from '../Loader';
import { ScalarValue } from '../typing/ScalarValue';
export default abstract class Element {
    constructor();
    protected abstract name: string;
    private loader;
    toJSON(): {
        [p: string]: unknown;
    };
    protected hashValues<T extends Element>(elements: Array<T>, extraType?: string): string;
    protected hashString(string: string): string;
    static create<T extends Element>(this: new () => T, loader: Loader): T;
    getName(): string;
    protected getLoader(): Loader;
    abstract getHash(): string;
    abstract getJSONData(): {
        [p: string]: unknown;
    } | null;
    abstract getResult(vars: Map<string, ScalarValue>, childrenValues: any): unknown;
    abstract isValid(vars: any, childrenValues: any): boolean;
    abstract toString(): string;
}
