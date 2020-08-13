export declare abstract class Element {
    constructor();
    abstract name: string;
    toJSON(): {
        [p: string]: unknown;
    };
    protected hash<T extends Element>(elements: Array<T>): string;
    static create<T extends Element>(this: new () => T): T;
    abstract getHash(): string;
    abstract getJSONData(): {
        [p: string]: unknown;
    };
    abstract getResult(vars: any, childrenValues: any): unknown;
    abstract isValid(vars: any, childrenValues: any): boolean;
}
