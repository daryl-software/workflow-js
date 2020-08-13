import * as Crypto from 'crypto';

export abstract class Element {
    constructor() {

    }

    public abstract name: string;

    public toJSON() {
        let jsonData = this.getJSONData();

        // add object hash
        jsonData.hash = this.getHash();
        return jsonData;
    }

    protected hash<T extends Element>(elements: Array<T>): string
    {
        let hashes: Array<string> = new Array<string>();
        for (let element of elements) {
            hashes.push(element.getHash());
        }
        hashes.sort();
        return Crypto.createHash('md5').update(this.constructor.name + '.' + hashes.join('.')).digest('hex');
    }

    public static create<T extends Element>(this: new () => T): T {
        return new this();
    }

    public abstract getHash(): string;

    abstract getJSONData(): { [p: string]: unknown };

    abstract getResult(vars: any, childrenValues: any): unknown;

    public abstract isValid(vars: any, childrenValues: any): boolean;
    // abstract toString(): string;
}
